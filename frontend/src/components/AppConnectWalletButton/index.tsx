import useConnectWallet from '@/hooks/useConnectWallet';
import { useAppDispatch } from '@/hooks/useStore';
import {
  setConnectingMetamask,
  setShowInstallMetamask,
} from '@/redux/connection/slice';
import { sleep } from '@/utils/helper';
import AppButton from '../AppButton';
import { useEffect, useState } from 'react';

export default function AppConnectWalletButton() {
  const connectInjected = useConnectWallet();
  const [installedMetamask, setInstalledMetamask] = useState(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (typeof (window as any).ethereum !== 'undefined') {
      setInstalledMetamask(true);
    }
  }, []);

  const connectWallet = async () => {
    const callback = () => {
      dispatch(setConnectingMetamask(false));
    };
    if (installedMetamask) {
      dispatch(setConnectingMetamask(true));
      await sleep(400);
      connectInjected(callback);
    } else {
      dispatch(setShowInstallMetamask(true));
    }
  };

  return (
    <AppButton
      onClick={connectWallet}
      text="Connect Wallet"
      variant="primary"
      className="app-header__button-container__button"
    />
  );
}
