import useConnectWallet from '@/hooks/useConnectWallet';
import { useAppDispatch } from '@/hooks/useStore';
import {
  setConnectingMetamask,
  setShowInstallMetamask,
} from '@/redux/connection/slice';
import { Button } from 'antd';
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

  const connectWallet = () => {
    const callback = () => {
      setTimeout(() => {
        dispatch(setConnectingMetamask(false));
      }, 300);
    };
    if (installedMetamask) {
      dispatch(setConnectingMetamask(true));
      connectInjected(callback);
    } else {
      dispatch(setShowInstallMetamask(true));
    }
  };

  return <Button onClick={connectWallet}>Connect Wallet</Button>;
}
