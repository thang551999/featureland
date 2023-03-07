import { Col, Image, Row, Tabs } from 'antd';

type AreaInfo = {
  srcImage: string;
  plotsAvailable: number;
  totalPlots: number;
  totalNfts: number;
  description?: string;
  name: string;
};

export default function AreaGeneralInfo({
  srcImage,
  plotsAvailable,
  totalPlots,
  totalNfts,
  description,
  name,
}: AreaInfo) {
  const tabItems = [
    {
      label: <b>Top plots</b>,
      key: '1',
      children: <div>sdasd</div>,
    },
    {
      label: <b>Top owners</b>,
      key: '2',
      children: <div>sdasd</div>,
    },
  ];

  return (
    <Row gutter={80} justify="space-around">
      <Col span={12} className="area-thumbnail">
        <Image
          wrapperClassName="area-thumbnail-img"
          src={srcImage}
          alt="thumbnail"
          preview={false}
        />
      </Col>
      <Col span={12} className="area-info">
        <div className="area-name">{name}</div>
        <Row gutter={40}>
          <Col>
            <b>Plots available</b>
            <div className="area-stat">
              {plotsAvailable}/{totalPlots}
            </div>
          </Col>
          <Col>
            <b>Total NFTs</b>
            <div className="area-stat">{totalNfts}</div>
          </Col>
        </Row>
        <hr className="hr"></hr>
        <div className="area-description">Description</div>
        <div className="area-description-content">{description}</div>
        <Tabs defaultActiveKey="1" items={tabItems}></Tabs>
      </Col>
    </Row>
  );
}
