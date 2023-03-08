import Link from 'next/link';
import { ReactElement, useMemo, useState } from 'react';
import { Breadcrumb, Col, Row, Select } from 'antd';
import DiscoverAreas from '@/components/DiscoverAreas';
import AreaFilter from '@/components/pages/AreaDetail/Filter';
import AreaGeneralInfo from '@/components/pages/AreaDetail/GeneralInfo';
import PlotsList from '@/components/pages/AreaDetail/PlotsList';
import GeneralLayout from '@/layout/General';
import { WEB_URL } from '@/constants';
import { useRouter } from 'next/router';
import { useGetArea, useGetPlots } from '@/hooks/area';
import Pagination from '@/components/Pagination';

function AreaDetail() {
  const router = useRouter();
  const { id: areaId } = router.query;
  const { data } = useGetArea(String(areaId));
  const areaInfo = {
    srcImage: data?.image,
    description: data?.description,
    plotsAvailable: data?.plotsAvailable,
    totalPlots: data?.totalPlots,
    totalNfts: data?.numberNfts,
    name: data?.name,
  };
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(12);
  const [sort, setSort] = useState('createdAt.desc');
  const [sortField, sortValue] = useMemo(() => sort.split('.'), [sort]);
  const { data: dataPlots } = useGetPlots(String(areaId), {
    page: page,
    pageSize: pageSize,
    sortType: sortValue,
    sortField: sortField,
  });
  const dataPlotsMemo = useMemo(
    () =>
      dataPlots?.items.map((plot: any) => ({
        id: plot._id,
        version: plot.version,
        imageSrc: plot.image,
        totalNfts: plot.totalNfts,
        availableNfts: plot.numberNfts,
      })),
    [dataPlots]
  );
  const selectItems = [
    {
      value: 'createdAt.desc',
      label: 'Latest Created',
    },
    {
      value: 'numberNft.desc',
      label: 'Most NFTs',
    },
    {
      value: 'numberNft.asc',
      label: 'Least NFTs',
    },
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
        <Col xxl={5} lg={6} md={24}>
          <AreaFilter />
        </Col>
        <Col xxl={19} lg={18} md={24}>
          <Row justify={'space-between'} className="area-plot-listing">
            <Col className="title">Plot&#39;s Listing</Col>
            <Col>
              <Select
                className="area-select"
                value={sort}
                onChange={setSort}
                options={selectItems}
              />
            </Col>
          </Row>
          <PlotsList data={dataPlotsMemo} />
          <Pagination
            style={{ marginTop: 29 }}
            page={page}
            setPage={setPage}
            setPageSize={setPageSize}
            total={dataPlots?.totalDocs || 0}
            pageSize={pageSize}
            pageSizeOptions={[12, 24, 36]}
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
