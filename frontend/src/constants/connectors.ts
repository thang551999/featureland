import { InjectedConnector } from '@web3-react/injected-connector';

export enum SupportedChainId {
  BSC_TESTNET = 97,
  BSC_MAINNET = 56,
}

export const SUPPORTED_CHAIN_IDS: SupportedChainId[] = [
  Number(process.env.NEXT_PUBLIC_CHAIN_ID),
];

export const injected = new InjectedConnector({});

export const APP_NETWORKS_SUPPORT = {
  [SupportedChainId.BSC_MAINNET]: {
    details: {
      chainId: '0x38',
      chainName: 'Binance Smart Chain',
      nativeCurrency: {
        name: 'BNB',
        symbol: 'BNB',
        decimals: 18,
      },
      rpcUrls: ['https://bsc-dataseed.binance.org/'],
      blockExplorerUrls: ['https://bscscan.com'],
    },
  },
  [SupportedChainId.BSC_TESTNET]: {
    details: {
      chainId: '0x61',
      chainName: 'Binance Smart Chain Testnet',
      nativeCurrency: {
        name: 'BNB',
        symbol: 'BNB',
        decimals: 18,
      },
      rpcUrls: ['https://data-seed-prebsc-1-s1.binance.org:8545/'],
      blockExplorerUrls: ['https://testnet.bscscan.com'],
    },
  },
};

export const METAMASK_DEEPLINK = 'https://metamask.io/download';
