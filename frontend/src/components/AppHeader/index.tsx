import { Col, Row } from 'antd';
import AppConnectWalletButton from '../AppConnectWalletButton';

export default function AppHeader() {
  return (
    <Row>
      <Col></Col>
      <Col></Col>
      <Col>
        <AppConnectWalletButton />
      </Col>
    </Row>
  );
}
