import { useCallback } from 'react';
import { useWeb3React } from '@web3-react/core';
import { injected } from '@/constants/connectors';
import showMessage from '@/services/showMessage.service';

export default function useConnectWallet() {
  const { activate } = useWeb3React();
  const connectInjected = useCallback(
    (callback?: any, callbackSuccess?: any, callbackError?: any) => {
      injected
        .isAuthorized()
        .then(async () => {
          callbackSuccess && callbackSuccess();
          await activate(injected, undefined, true).catch((error) => {
            callbackError && callbackError();
            if (error.code === -32002) {
              return showMessage('error', 'Metamask processing');
            }
            return showMessage('error', 'There are something wrongs');
          });
        })
        .then(() => {
          callback && callback();
        });
    },
    []
  );

  return connectInjected;
}
