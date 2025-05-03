

declare global {
    interface Window {
        ethereum: any;
    }
}

// 0x53c66a0BBF32D8f1b1C40682cba8e25bE548E0da
export const CONTRACT_ADDRESS: string = "0xc31Ded3A6230872892F415AE0f0b8EB3f23eCaC5";


export enum TabType {
  POOLS = "pools",
  DEPOSIT = "deposit",
  WITHDRAW = "withdraw",
  NOTIFICATIONS = "notifications"
}

export const REFRESH_INTERVAL = 30000;

export const CORE_TESTNET_CHAIN_ID = "0xc352";
export const CORE_TESTNET_PARAMS = {
  chainId: CORE_TESTNET_CHAIN_ID,
  chainName: 'Core Testnet',
  nativeCurrency: {
    name: 'Pharos',
    symbol: 'DPLS',
    decimals: 18
  },
  rpcUrls: ['https://devnet.dplabs-internal.com/'],
  blockExplorerUrls: ['https://docs.pharosnetwork.xyz/']
};


