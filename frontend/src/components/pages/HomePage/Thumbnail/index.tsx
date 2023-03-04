import AppConnectWalletButton from '@/components/AppConnectWalletButton';
import { useWeb3React } from '@web3-react/core';
import { Col, Image, Row } from 'antd';

export default function HomePageThumbnail() {
  const { active } = useWeb3React();
  return (
    <div className="homepage">
      <div className="homepage__thumbnail">
        <Image
          rootClassName="thumbnail-image"
          className=""
          src="/images/thumbnail.png"
          alt="thumbnail"
          preview={false}
        />
        <Row>
          <Col className="thumbnail-content" span={12}>
            <h1>Make your own land for the metaverse</h1>
            <h4>
              At lacus vitae nulla sagittis scelerisque nisl. Pellentesque duis
              cursus vestibulum, facilisi ac, sed faucibus.
            </h4>
            <Row>
              {!active && (
                <Col>
                  <AppConnectWalletButton />
                </Col>
              )}
              <Col>Try it now</Col>
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  );
}
