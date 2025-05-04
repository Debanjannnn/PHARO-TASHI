// SPDX-License-Identifier: MIT
pragma solidity ^0.8.29;

import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

/**
 * @title CoroTashi
 * @dev A staking contract that allows users to stake tokens and earn rewards
 * with configurable APY and lock periods.
 */
contract PharoTashi is Ownable, ReentrancyGuard {
    using SafeERC20 for IERC20;

    // Constants
    uint256 public constant DECIMALS = 1e18;
    uint256 public constant EMERGENCY_PENALTY = 10; // 10% penalty for emergency withdrawals
    uint256 public constant FEE_PERCENT = 5; // 5% fee on rewards and withdrawals
    uint256 public constant MAX_MULTIPLIER = 200; // Maximum multiplier for rewards
    uint256 public constant TEST_DAY = 86400; // Seconds in a day

    // Structs
    struct PoolInfo {
        IERC20 stakedToken;      // Token being staked
        IERC20 rewardToken;      // Token given as reward
        uint256 totalStaked;     // Total amount of tokens staked in this pool
        uint256 totalRewards;    // Total rewards available in this pool
        uint256 APY;             // Annual Percentage Yield (scaled by DECIMALS)
        uint256 lockDays;        // Number of days tokens are locked
    }

    struct UserInfo {
        uint256 amount;          // Amount of tokens staked
        uint256 lastRewardAt;    // Timestamp of last reward calculation
        uint256 lockUntil;       // Timestamp until which tokens are locked
        uint256 rewardDebt;      // Reward debt
    }

    struct Notification {
        uint256 poolId;          // Pool ID related to notification
        uint256 amount;          // Amount related to notification
        address sender;          // Sender of notification
        string message;          // Notification message
        uint256 timestamp;       // Timestamp when notification was created
    }

    // State variables
    uint256 public poolCount;
    mapping(uint256 => PoolInfo) public poolInfo;
    mapping(uint256 => mapping(address => UserInfo)) public userInfo;
    Notification[] public notifications;

    // Events
    event PoolAdded(address indexed stakedToken, address indexed rewardToken, uint256 APY, uint256 lockDays);
    event Deposited(address indexed user, uint256 indexed pid, uint256 amount);
    event Withdrawn(address indexed user, uint256 indexed pid, uint256 amount, uint256 fee);
    event EmergencyWithdrawn(address indexed user, uint256 indexed pid, uint256 amount, uint256 penalty);
    event Claimed(address indexed user, uint256 indexed pid, uint256 reward, uint256 fee);
    event RewardDeposited(uint256 indexed pid, uint256 amount, address depositor);
    event NotificationCreated(address indexed sender, string message);

    /**
     * @dev Constructor initializes the contract with the deployer as the owner
     */
    constructor() Ownable(msg.sender) {
        // Initialization if needed
    }

    /**
     * @dev Add a new staking pool
     * @param _stakedToken Address of the token to be staked
     * @param _rewardToken Address of the token to be given as reward
     * @param _APY Annual Percentage Yield for the pool
     * @param _lockDays Number of days tokens are locked
     */
    function addPool(
        IERC20 _stakedToken,
        IERC20 _rewardToken,
        uint256 _APY,
        uint256 _lockDays
    ) external onlyOwner {
        poolInfo[poolCount] = PoolInfo({
            stakedToken: _stakedToken,
            rewardToken: _rewardToken,
            totalStaked: 0,
            totalRewards: 0,
            APY: _APY,
            lockDays: _lockDays
        });

        emit PoolAdded(address(_stakedToken), address(_rewardToken), _APY, _lockDays);
        poolCount++;
    }

    /**
     * @dev Deposit tokens to stake in a pool
     * @param _pid Pool ID
     * @param _amount Amount of tokens to stake
     */
    function deposit(uint256 _pid, uint256 _amount) external nonReentrant {
        require(_pid < poolCount, "Invalid pool ID");
        require(_amount > 0, "Amount must be greater than 0");

        PoolInfo storage pool = poolInfo[_pid];
        UserInfo storage user = userInfo[_pid][msg.sender];

        // Update user's pending rewards before modifying stake
        if (user.amount > 0) {
            uint256 pending = pendingReward(_pid, msg.sender);
            if (pending > 0) {
                _safeRewardTransfer(pool.rewardToken, msg.sender, pending);
            }
        }

        // Transfer tokens from user to contract
        pool.stakedToken.safeTransferFrom(msg.sender, address(this), _amount);
        
        // Update user info
        user.amount += _amount;
        user.lastRewardAt = block.timestamp;
        user.lockUntil = block.timestamp + (pool.lockDays * TEST_DAY);
        
        // Update pool info
        pool.totalStaked += _amount;
        
        emit Deposited(msg.sender, _pid, _amount);
    }

    /**
     * @dev Withdraw staked tokens from a pool
     * @param _pid Pool ID
     * @param _amount Amount of tokens to withdraw
     */
    function withdraw(uint256 _pid, uint256 _amount) external nonReentrant {
        require(_pid < poolCount, "Invalid pool ID");
        
        PoolInfo storage pool = poolInfo[_pid];
        UserInfo storage user = userInfo[_pid][msg.sender];
        
        require(user.amount >= _amount, "Insufficient staked amount");
        require(block.timestamp >= user.lockUntil, "Tokens are still locked");

        // Calculate pending rewards
        uint256 pending = pendingReward(_pid, msg.sender);
        
        // Update user info
        user.amount -= _amount;
        user.lastRewardAt = block.timestamp;
        
        // Update pool info
        pool.totalStaked -= _amount;
        
        // Calculate withdrawal fee
        uint256 fee = (_amount * FEE_PERCENT) / 100;
        uint256 amountAfterFee = _amount - fee;
        
        // Transfer tokens to user
        pool.stakedToken.safeTransfer(msg.sender, amountAfterFee);
        
        // Transfer fee to owner
        if (fee > 0) {
            pool.stakedToken.safeTransfer(owner(), fee);
        }
        
        // Transfer pending rewards
        if (pending > 0) {
            _safeRewardTransfer(pool.rewardToken, msg.sender, pending);
        }
        
        emit Withdrawn(msg.sender, _pid, _amount, fee);
    }

    /**
     * @dev Emergency withdraw staked tokens with penalty
     * @param _pid Pool ID
     */
    function emergencyWithdraw(uint256 _pid) external nonReentrant {
        require(_pid < poolCount, "Invalid pool ID");
        
        PoolInfo storage pool = poolInfo[_pid];
        UserInfo storage user = userInfo[_pid][msg.sender];
        
        require(user.amount > 0, "No staked tokens");
        
        uint256 amount = user.amount;
        uint256 penalty = (amount * EMERGENCY_PENALTY) / 100;
        uint256 amountAfterPenalty = amount - penalty;
        
        // Update user info
        user.amount = 0;
        user.lastRewardAt = block.timestamp;
        user.rewardDebt = 0;
        
        // Update pool info
        pool.totalStaked -= amount;
        
        // Transfer tokens to user
        pool.stakedToken.safeTransfer(msg.sender, amountAfterPenalty);
        
        // Transfer penalty to owner
        if (penalty > 0) {
            pool.stakedToken.safeTransfer(owner(), penalty);
        }
        
        emit EmergencyWithdrawn(msg.sender, _pid, amount, penalty);
    }

    /**
     * @dev Claim pending rewards from a pool
     * @param _pid Pool ID
     */
    function claimReward(uint256 _pid) external nonReentrant {
        require(_pid < poolCount, "Invalid pool ID");
        
        PoolInfo storage pool = poolInfo[_pid];
        UserInfo storage user = userInfo[_pid][msg.sender];
        
        require(user.amount > 0, "No staked tokens");
        
        uint256 pending = pendingReward(_pid, msg.sender);
        require(pending > 0, "No pending rewards");
        
        // Update user info
        user.lastRewardAt = block.timestamp;
        
        // Calculate fee
        uint256 fee = (pending * FEE_PERCENT) / 100;
        uint256 rewardAfterFee = pending - fee;
        
        // Transfer rewards to user
        _safeRewardTransfer(pool.rewardToken, msg.sender, rewardAfterFee);
        
        // Transfer fee to owner
        if (fee > 0) {
            _safeRewardTransfer(pool.rewardToken, owner(), fee);
        }
        
        emit Claimed(msg.sender, _pid, pending, fee);
    }

    /**
     * @dev Deposit rewards to a pool
     * @param _pid Pool ID
     * @param _amount Amount of reward tokens to deposit
     */
    function depositRewards(uint256 _pid, uint256 _amount) external nonReentrant {
        require(_pid < poolCount, "Invalid pool ID");
        require(_amount > 0, "Amount must be greater than 0");
        
        PoolInfo storage pool = poolInfo[_pid];
        
        // Transfer reward tokens from caller to contract
        pool.rewardToken.safeTransferFrom(msg.sender, address(this), _amount);
        
        // Update pool info
        pool.totalRewards += _amount;
        
        // Create notification
        _createNotification(_pid, _amount, msg.sender, "Rewards deposited");
        
        emit RewardDeposited(_pid, _amount, msg.sender);
    }

    /**
     * @dev Calculate pending reward for a user in a pool
     * @param _pid Pool ID
     * @param _user User address
     * @return Pending reward amount
     */
    function pendingReward(uint256 _pid, address _user) public view returns (uint256) {
        require(_pid < poolCount, "Invalid pool ID");
        
        PoolInfo storage pool = poolInfo[_pid];
        UserInfo storage user = userInfo[_pid][_user];
        
        if (user.amount == 0) {
            return 0;
        }
        
        uint256 timeElapsed = block.timestamp - user.lastRewardAt;
        
        // Calculate daily reward rate based on APY
        uint256 dailyRate = (pool.APY * DECIMALS) / (365 * 100);
        
        // Calculate reward based on staked amount, time elapsed, and daily rate
        uint256 reward = (user.amount * dailyRate * timeElapsed) / (TEST_DAY * DECIMALS);
        
        return reward;
    }

    /**
     * @dev Create a notification
     * @param _pid Pool ID
     * @param _amount Amount related to notification
     * @param _sender Sender address
     * @param _message Notification message
     */
    function _createNotification(
        uint256 _pid,
        uint256 _amount,
        address _sender,
        string memory _message
    ) internal {
        notifications.push(
            Notification({
                poolId: _pid,
                amount: _amount,
                sender: _sender,
                message: _message,
                timestamp: block.timestamp
            })
        );
        
        emit NotificationCreated(_sender, _message);
    }

    /**
     * @dev Get all notifications
     * @return Array of all notifications
     */
    function getNotifications() external view returns (Notification[] memory) {
        return notifications;
    }

    /**
     * @dev Safe transfer of reward tokens
     * @param _token Token to transfer
     * @param _to Recipient address
     * @param _amount Amount to transfer
     */
    function _safeRewardTransfer(
        IERC20 _token,
        address _to,
        uint256 _amount
    ) internal {
        uint256 tokenBal = _token.balanceOf(address(this));
        if (_amount > tokenBal) {
            _token.safeTransfer(_to, tokenBal);
        } else {
            _token.safeTransfer(_to, _amount);
        }
    }
}