import { Col, Popover, Row } from 'antd';
import { useWeb3React } from '@web3-react/core';
import AppConnectWalletButton from '@/components/AppConnectWalletButton';
import { logout } from '@/redux/authentication/slice';
import { useAppDispatch } from '@/hooks/useStore';
import { shortenString } from '@/utils/helper';
import Link from "next/link"

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
      <Col span={5} className="app-header__logo"><img src="/svg/LOGO.svg"></img></Col>
      <Col span={14} className="app-header__pages">
        <Link href="https://dribbble.com/"><span>Home</span></Link>
        <Link href="https://instagram.com/"><span>Community</span></Link>
        <Link href="https://www.linkedin.com"><span>Our Teams</span></Link>
        <Link href="https://www.linkedin.com"><span>Features</span></Link>
        <Link href="https://www.linkedin.com"><span>Contact Us</span></Link>
      </Col>
      <Col span={5} className="app-header__button">
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
