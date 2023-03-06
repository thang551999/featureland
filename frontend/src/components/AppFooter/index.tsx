import { Row, Col } from "antd"
import Link from "next/link"

export default function AppFooter() {
  return (
    <div className="footer">
      <div className="footer__content">
        <Row className="footer__content__links">
          <Col span={4} className="footer__content__links__logo"><img src="/svg/LOGO.svg"></img></Col>
          <Col></Col>
          <Col span={12} className="footer__content__links__pages">
            <Link href="https://dribbble.com/"><span>Home</span></Link>
            <Link href="https://instagram.com/"><span>About Us</span></Link>
            <Link href="https://www.linkedin.com"><span>Pricing</span></Link>
            <Link href="https://www.linkedin.com"><span>Features</span></Link>
            <Link href="https://www.linkedin.com"><span>Contact</span></Link>
          </Col>
          <Col span={2}></Col>
          <Col span={4} className="footer__content__links__social-apps">
            <Link href="https://dribbble.com/"><img src="/svg/icon_dribbble.svg"></img></Link>
            <Link href="https://instagram.com/"><img src="/svg/icon_instagram.svg"></img></Link>
            <Link href="https://www.linkedin.com"><img src="/svg/icon_linkedin.svg"></img></Link>
          </Col>
        </Row>
        <Row className="footer__content__license" align="middle">© 2023 DREAM LAND. All Rights Reserved.</Row>

      </div>
    </div>
  )
}