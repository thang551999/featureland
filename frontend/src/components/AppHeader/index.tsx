import { Col, Dropdown, Image, MenuProps, Popover, Row } from 'antd';
import { useWeb3React } from '@web3-react/core';
import AppConnectWalletButton from '@/components/AppConnectWalletButton';
import { logout } from '@/redux/authentication/slice';
import { useAppDispatch } from '@/hooks/useStore';
import { shortenString } from '@/utils/helper';
import Link from 'next/link';

export default function AppHeader() {
  const { active, account, deactivate } = useWeb3React();
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    deactivate();
    dispatch(logout());
  };

  const items: MenuProps['items'] = [
    {
      key: 'logout',
      label: <div onClick={handleLogout}>Logout</div>,
    },
  ];

  return (
    <Row className="app-header">
      <Col span={5} className="app-header__logo">
        <Image src="/svg/LOGO.svg" alt="logo" preview={false} />
      </Col>
      <Col span={14} className="app-header__pages">
        <Link href="https://dribbble.com/">
          <span>Home</span>
        </Link>
        <Link href="https://instagram.com/">
          <span>Community</span>
        </Link>
        <Link href="https://www.linkedin.com">
          <span>Our Teams</span>
        </Link>
        <Link href="https://www.linkedin.com">
          <span>Features</span>
        </Link>
        <Link href="https://www.linkedin.com">
          <span>Contact Us</span>
        </Link>
      </Col>
      <Col span={4} offset={1} className="app-header__button">
        {active && account ? (
          <Dropdown trigger={['click']} menu={{ items }}>
            <div className="app-header-dropdown">
              <Image
                wrapperClassName="app-header-avatar"
                src="/svg/user-avatar.svg"
                alt="user"
                width={35}
                height={36}
                preview={false}
              />
              <div>{shortenString(account)}</div>
              <Image
                wrapperClassName="app-header-more"
                src="/svg/arrow-right.svg"
                alt="more"
                preview={false}
              />
            </div>
          </Dropdown>
        ) : (
          <AppConnectWalletButton />
        )}
      </Col>
    </Row>
  );
}
