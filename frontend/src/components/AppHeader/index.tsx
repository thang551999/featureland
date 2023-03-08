import { Col, Dropdown, Image, MenuProps, Row } from 'antd';
import { useWeb3React } from '@web3-react/core';
import AppConnectWalletButton from '@/components/AppConnectWalletButton';
import { logout } from '@/redux/authentication/slice';
import { useAppDispatch } from '@/hooks/useStore';
import { shortenString } from '@/utils/helper';
import Link from 'next/link';
import { useRouter } from 'next/router';
import classNames from 'classnames';

export default function AppHeader() {
  const { active, account, deactivate } = useWeb3React();
  const dispatch = useAppDispatch();
  const router = useRouter();

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

  const pages = [
    { href: '/', path: '/', text: 'Home' },
    { href: 'https://dribbble.com/', path: '/comunity', text: 'Comunity' },
    { href: 'https://dribbble.com/', path: '/our-teams', text: 'Our Teams' },
    { href: 'https://dribbble.com/', path: '/features', text: 'Features' },
    { href: 'https://dribbble.com/', path: '/contact', text: 'Contact Us' },
  ];

  return (
    <Row className="app-header">
      <Col span={5} className="app-header__logo">
        <Image
          width={55}
          height={15}
          alt="logo"
          src="/svg/LOGO.svg"
          preview={false}
        />
      </Col>
      <Col span={10} className="app-header__pages" offset={1}>
        {pages.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className={classNames('app-header__pages__text', {
              active_page: router.asPath === item.path,
            })}
          >
            {item.text}
          </Link>
        ))}
      </Col>
      <Col span={5} className="app-header__button" offset={3}>
        {active && account ? (
          <Dropdown
            trigger={['click']}
            menu={{ items }}
            rootClassName="app-header-dropdown-open"
          >
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
