import Link from 'next/link';
import { ReactElement, useState } from 'react';
import { Breadcrumb, Col, Pagination, Row, Select } from 'antd';
import DiscoverAreas from '@/components/DiscoverAreas';
import AreaFilter from '@/components/pages/AreaDetail/Filter';
import AreaGeneralInfo from '@/components/pages/AreaDetail/GeneralInfo';
import PlotsList from '@/components/pages/AreaDetail/PlotsList';
import { PlotProps } from '@/components/pages/AreaDetail/PlotsList/Plot';
import GeneralLayout from '@/layout/General';
import { WEB_URL } from '@/constants';

function AreaDetail() {
  const [page] = useState(1);
  const [pageSize] = useState(16);
  const total = 1000;
  const data: PlotProps[] = [
    {
      availableNfts: 12,
      id: '0001',
      imageSrc: '/images/mimosa.png',
      totalNfts: 400,
    },
    {
      availableNfts: 12,
      id: '0001',
      imageSrc: '/images/mimosa.png',
      totalNfts: 400,
    },
    {
      availableNfts: 12,
      id: '0001',
      imageSrc: '/images/mimosa.png',
      totalNfts: 400,
    },
  ];
  const areaInfo = {
    srcImage: '/images/mimosa.png',
    description: 'asdasd asbdfsg',
    plotsAvailable: 100,
    totalPlots: 1000,
    totalNfts: 120,
    name: 'Mimosa',
  };
  const selectItems = [
    { value: 'createdAt', label: 'Latest Created Date' },
    {
      value: 'mostNumber',
      label: 'Most number of NFTs',
    },
    { value: 'leastNumber', label: 'Least number of NFTs' },
  ];
  return (
    <div className="area-detail">
      <Breadcrumb separator=">">
        <Breadcrumb.Item>
          <Link href={WEB_URL.HOME}>Homepage</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <strong>Areas</strong>
        </Breadcrumb.Item>
      </Breadcrumb>
      <div className="area-title-underline">
        <div className="area-title">Discover our Areas</div>
      </div>
      <div className="area-general-info">
        <AreaGeneralInfo {...areaInfo} />
      </div>
      <Row gutter={24} style={{ marginLeft: 112, marginRight: 112 }}>
        <Col lg={6} md={24}>
          <AreaFilter />
        </Col>
        <Col lg={18} md={24}>
          <Row justify={'space-between'} className="area-plot-listing">
            <Col className="title">Plot&#39;s Listing</Col>
            <Col>
              <Select className="area-select" options={selectItems} />
            </Col>
          </Row>
          <PlotsList data={data} />
          <Pagination
            showSizeChanger
            current={page}
            total={total}
            pageSize={pageSize}
            pageSizeOptions={[16, 32, 48]}
          />
        </Col>
      </Row>
      <DiscoverAreas />
    </div>
  );
}

AreaDetail.getLayout = (page: ReactElement) => {
  return <GeneralLayout>{page}</GeneralLayout>;
};

export default AreaDetail;
