

declare global {
    interface Window {
        ethereum: any;
    }
}

// 0x53c66a0BBF32D8f1b1C40682cba8e25bE548E0da
// TSI : 0x1D218F86DB2a37986Dc797CE749f76c5696a88EC
export const CONTRACT_ADDRESS: string = "0x6a660f331808790553fE83dC242Bc41eC8E73601";


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


