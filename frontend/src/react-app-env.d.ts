import { EtherscanProvider } from '@ethersproject/providers';

declare global {
  interface Window {
    ethereum?: EtherscanProvider;
  }
}
