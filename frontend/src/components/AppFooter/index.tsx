import { Row, Col, Image } from "antd"
import Link from "next/link"
import { useRouter } from 'next/router';
import classNames from 'classnames';

export default function AppFooter() {
  const router = useRouter();

  const pages = [
    {"href": "./", "path": "/", "text": "Home"},
    {"href": "https://dribbble.com/", "path": "/about", "text": "About Us"},
    {"href": "https://dribbble.com/", "path": "/pricing", "text": "Pricing"},
    {"href": "https://dribbble.com/", "path": "/features", "text": "Features"},
    {"href": "https://dribbble.com/", "path": "/Contact", "text": "Contact"},
  ]

  const socialApps = [
    {"icon": "/svg/icon_dribbble.svg", "href": "https://dribbble.com/", "alt": "icon"},
    {"icon": "/svg/icon_instagram.svg", "href": "https://instagram.com/", "alt": "icon"},
    {"icon": "/svg/icon_linkedin.svg", "href": "https://www.linkedin.com", "alt": "icon"},
  ]

  return (
    <div className="footer">
      <div className="footer__content">
        <Row className="footer__content__links" justify="space-around">
          <Col md={2} lg={3} className="footer__content__links__logo">
            <Image height={15} width={55} alt="logo" src="/svg/LOGO.svg" />
          </Col>
          <Col md={24} lg={17} xl={13}className="footer__content__links__pages">
            {pages.map((item, index) => <Link
                key={index}
                href={item.href}
                className={classNames("footer__content__links__pages__text", { active_page: router.asPath === item.path})}>
                {item.text}
              </Link>
            )}
          </Col>
          <Col sm={24} md={3} lg={3} xl={3} className="footer__content__links__social-apps" >
            {socialApps.map((item, index) => <Link
              key={index}
              href={item.href}>
                <Image wrapperClassName="footer__content__links__social-apps__app" src={item.icon} width={20} height={20} alt={item.alt} />
            </Link>
            )}

          </Col>
        </Row>
        <Row className="footer__content__license" align="middle">© 2023 DREAM LAND. All Rights Reserved.</Row>

      </div>
    </div >
  )
}