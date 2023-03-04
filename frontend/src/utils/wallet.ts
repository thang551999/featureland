import {
  APP_NETWORKS_SUPPORT,
  SupportedChainId,
  SUPPORTED_CHAIN_IDS,
} from '@/constants/connectors';

declare let window: any;

export const setupNetwork = async (chainId: SupportedChainId) => {
  const provider = window.ethereum;
  if (provider) {
    try {
      const networkInfo = APP_NETWORKS_SUPPORT[chainId];
      if (networkInfo) {
        try {
          await provider.request({
            method: 'wallet_switchEthereumChain',
            params: [{ chainId: networkInfo.details?.chainId }],
          });
        } catch (error: any) {
          //Reject metamask
          if (error.code === 4001) {
            return;
          }

          // This error code indicates that the chain has not been added to MetaMask.
          if (error.code === 4902) {
            try {
              await provider.request({
                method: 'wallet_addEthereumChain',
                params: [
                  {
                    ...(networkInfo.details || {}),
                  },
                ],
              });
            } catch (addError) {
              console.log(addError);
              return false;
            }
          } else {
            return false;
          }
        }
      } else return false;
    } catch (e) {
      return false;
    }
  } else {
    return false;
  }
};

export const isSupportChainId = (chainId?: number) => {
  if (chainId && SUPPORTED_CHAIN_IDS.includes(chainId)) {
    return true;
  }
  return false;
};
