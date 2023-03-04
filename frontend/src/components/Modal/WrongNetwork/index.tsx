import { Modal } from 'antd';
import { useEffect } from 'react';
import Image from 'next/image';
import { useAppSelector } from '@/hooks/useStore';
import selectorConnection from '@/redux/connection/selector';
import { setupNetwork } from '@/utils/wallet';

const ModalWrongNetwork = () => {
  const { isWrongNetwork } = useAppSelector(selectorConnection.getConnection);

  useEffect(() => {
    if (isWrongNetwork) {
      const switchNetwork = async () => {
        try {
          await setupNetwork(Number(process.env.NEXT_PUBLIC_CHAIN_ID));
        } catch (error: any) {}
      };
      switchNetwork();
    }
  }, [isWrongNetwork]);

  return (
    <Modal
      open={isWrongNetwork}
      maskClosable={false}
      closable={false}
      footer={null}
      className="modal-connect-wallet"
    >
      <div className="wrong-network-notice center-flex-item">
        <Image src="/images/wrong_network.png" alt="" width={90} height={90} />
        <h1>Wrong network</h1>
        <div className="wrong-network-notice__des">
          Please change network on Metamask to Binance Smart Chain- Mainnet to
          continue.
        </div>
      </div>
    </Modal>
  );
};

export default ModalWrongNetwork;
