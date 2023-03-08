import { Col, Image, Pagination as PaginationAnt, Row, Select } from 'antd';
import { CSSProperties, ReactNode } from 'react';

type PaginationProps = {
  page: number;
  setPage: (value: number) => void;
  total: number;
  pageSize: number;
  setPageSize: (value: number) => void;
  pageSizeOptions: number[];
  style: CSSProperties;
};

export default function Pagination({
  page,
  total,
  style,
  setPage,
  pageSize,
  setPageSize,
  pageSizeOptions,
}: PaginationProps) {
  const options = pageSizeOptions.map((size) => ({
    value: size,
    label: `${size}/Page`,
  }));

  const handleChangePageSize = (pageSize: number) => {
    setPage(1);
    setPageSize(pageSize);
  };
  const itemRender = (
    _page: number,
    type: 'page' | 'prev' | 'next' | 'jump-prev' | 'jump-next',
    element: ReactNode
  ) => {
    switch (type) {
      case 'prev':
        return (
          <div className="pagination-arrow prev">
            <Image
              wrapperClassName="pagination-arrow"
              src="/svg/arrow-right-1.svg"
              height={8}
              width={10}
              alt="next"
              preview={false}
            />
          </div>
        );
      case 'next':
        return (
          <div className="pagination-arrow next">
            <Image
              wrapperClassName="pagination-arrow"
              src="/svg/arrow-right-1.svg"
              height={8}
              width={10}
              alt="next"
              preview={false}
            />
          </div>
        );
      default:
        return element;
    }
  };

  return (
    <Row className="pagination" justify="space-between" style={style}>
      <Col>
        <Select
          value={pageSize}
          options={options}
          onChange={handleChangePageSize}
          className="pagination-select"
        />
      </Col>
      <Col>
        <PaginationAnt
          className="pagination-page"
          current={page}
          total={total}
          pageSize={pageSize}
          showSizeChanger={false}
          onChange={setPage}
          showLessItems={true}
          itemRender={itemRender}
        />
      </Col>
    </Row>
  );
}
