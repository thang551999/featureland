import { Modal } from 'antd';
import { METAMASK_DEEPLINK } from '@/constants/connectors';
import selectorConnection from '@/redux/connection/selector';
import { setShowInstallMetamask } from '@/redux/connection/slice';
import { useAppDispatch, useAppSelector } from '@/hooks/useStore';

export default function ModalInstallMetamask() {
  const dispatch = useAppDispatch();
  const { showInstallMetamask } = useAppSelector(
    selectorConnection.getConnection
  );

  const handleCancel = () => {
    if (showInstallMetamask) {
      dispatch(setShowInstallMetamask(false));
    }
  };

  return (
    <Modal
      open={showInstallMetamask}
      closable={true}
      maskClosable={true}
      onCancel={handleCancel}
      footer={null}
      className="modal-connect-wallet"
    >
      <div className="connectWallet center-flex-item">
        <h1>Install Metamask</h1>
        <div className="connectWallet__des">
          It seems that you have not installed Metamask
        </div>
        <div className="connectWallet__des mb-2">Please install now</div>
        <img src="/svg/metamask.svg" />
        <a
          className="connectWallet-installMetamask"
          href={METAMASK_DEEPLINK}
          target="_blank"
        >
          <img src="/svg/install.svg" />
          <div>Install Metamask</div>
        </a>
      </div>
    </Modal>
  );
}
