import { Col, Popover, Row } from 'antd';
import { useWeb3React } from '@web3-react/core';
import AppConnectWalletButton from '@/components/AppConnectWalletButton';
import { logout } from '@/redux/authentication/slice';
import { useAppDispatch } from '@/hooks/useStore';
import { shortenString } from '@/utils/helper';

export default function AppHeader() {
  const { active, account, deactivate } = useWeb3React();
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    deactivate();
    dispatch(logout());
  };

  const content = (
    <div>
      <p onClick={handleLogout}>Log out</p>
    </div>
  );

  return (
    <Row className="app-header">
      <Col>
        {active && account ? (
          <Popover trigger="click" content={content}>
            <div className="app-header__account">{shortenString(account)}</div>
          </Popover>
        ) : (
          <AppConnectWalletButton />
        )}
      </Col>
    </Row>
  );
}
