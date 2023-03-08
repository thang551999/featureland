import Image from 'next/image';
import { ReactNode, useEffect } from 'react';
import { useWeb3React } from '@web3-react/core';
import { logout } from '@/redux/authentication/slice';
import ModalWrongNetwork from '@/components/Modal/WrongNetwork';
import ModalInstallMetamask from '@/components/Modal/InstallMetamask';
import { setWrongNetwork } from '@/redux/connection/slice';
import selectorConnection from '@/redux/connection/selector';
import selectorApplication from '@/redux/application/selector';
import selectorAuthentication from '@/redux/authentication/selector';
import api from '@/services/api.service';
import { useAuthenticate } from '@/hooks/home';
import { injected } from '@/constants/connectors';
import { isSupportChainId } from '@/utils/wallet';
import { getAuthority } from '@/services/wallet.service';
import LocalStorageService from '@/services/localStorage.service';
import { useAppDispatch, useAppSelector } from '@/hooks/useStore';

const AppConnectWalletWrapper = ({ children }: { children: ReactNode }) => {
  const dispatch = useAppDispatch();
  const { library, chainId, account, active, deactivate, activate } =
    useWeb3React();
  const { isLoading } = useAppSelector(selectorApplication.getApplication);
  const { isConnectingMetamask } = useAppSelector(
    selectorConnection.getConnection
  );
  const { address, token } = useAppSelector(
    selectorAuthentication.getAuthentication
  );
  const { mutate: auth } = useAuthenticate(dispatch);

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
      auth({ walletAddress: account, signature: signerVerify });
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
      dispatch(setWrongNetwork(!isSupportChainId(chainId)));
    }
  }, [chainId, active]);

  // relogin when refresh and log out when log account
  useEffect(() => {
    if (token) {
      setTimeout(() => {
        try {
          activate(injected);
          api.addToken(token);
        } catch (e) {
          handleLogout();
        }
      }, 500);
    } else {
      handleLogout();
    }

    window &&
      window?.ethereum?.on('accountsChanged', (accounts: string[]) => {
        if (!accounts || accounts.length === 0) {
          handleLogout();
        }
      });
  }, []);

  return (
    <>
      {(isLoading || isConnectingMetamask) && (
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
      <ModalInstallMetamask />
      <ModalWrongNetwork />
    </>
  );
};

export default AppConnectWalletWrapper;
