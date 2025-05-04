

declare global {
    interface Window {
        ethereum: any;
    }
}

// PST: 0xa7AD1C1eE9b701591B68701ad5893941F156053d
// TSI : 0x4f9fE99d666381a045b9F3690104a61cdC5c1bbe
export const CONTRACT_ADDRESS: string = "0x3aFC898c5052DaEE15c7c4Fe0361761A11ff8d4E";


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
  chainName: 'Pharos Devnet',
  nativeCurrency: {
    name: 'Pharos',
    symbol: 'DPLS',
    decimals: 18
  },
  rpcUrls: ['https://devnet.dplabs-internal.com/'],
  blockExplorerUrls: ['https://docs.pharosnetwork.xyz/']
};


