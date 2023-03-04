import { ReactNode, useEffect } from 'react';
import { InjectedConnector } from '@web3-react/injected-connector';
import { useAppDispatch, useAppSelector } from '@/hooks/useStore';
import ModalWrongNetwork from '@/components/Modal/WrongNetwork';
import { isSupportChainId } from '@/utils/wallet';
import { useWeb3React } from '@web3-react/core';
import { setWrongNetwork } from '@/redux/connection/slice';
import selectorAuthentication from '@/redux/authentication/selector';
import { logout, setToken } from '@/redux/authentication/slice';
import { getAuthority } from '@/services/wallet.service';
import LocalStorageService from '@/services/localStorage.service';
import Image from 'next/image';
import selectorApplication from '@/redux/application/selector';

const AppConnectWalletWrapper = ({ children }: { children: ReactNode }) => {
  const dispatch = useAppDispatch();
  const injected = new InjectedConnector({});
  const { library, chainId, account, active, deactivate, activate } =
    useWeb3React();
  const { isLoading } = useAppSelector(selectorApplication.getApplication);
  const { address, token } = useAppSelector(
    selectorAuthentication.getAuthentication
  );

  const handleLogout = () => {
    deactivate();
    dispatch(logout());
  };
  const handleChangeAccount = async (account: string) => {
    const { deniedSignature, signerVerify } = await getAuthority(
      library,
      account,
      dispatch,
      true
    );
    if (deniedSignature) {
      handleLogout();
    } else if (signerVerify) {
      LocalStorageService.addSigner(account, signerVerify);
    }
  };

  // check change account
  useEffect(() => {
    if (account && address !== account && active) {
      handleChangeAccount(account);
    }
  }, [active, account]);

  // check network
  useEffect(() => {
    if (active) {
      dispatch(setWrongNetwork(isSupportChainId(chainId)));
    }
  }, [chainId, active]);

  // relogin when refresh and log out when log account
  useEffect(() => {
    if (token) {
      try {
        activate(injected);
      } catch (e) {
        handleLogout();
      }
    } else {
      handleLogout();
    }

    window &&
      (window as any)?.ethereum?.on('accountsChanged', (accounts: string[]) => {
        if (!accounts || accounts.length === 0) {
          handleLogout();
        }
      });
  }, []);

  return (
    <>
      {isLoading && (
        <div className="loading-wrapper">
          <Image
            className={'loading-icon'}
            src="/svg/loading.svg"
            height={100}
            width={100}
            alt=""
          />
        </div>
      )}
      {children}
      <ModalWrongNetwork />
    </>
  );
};

export default AppConnectWalletWrapper;
