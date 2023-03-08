import { Col, Row } from 'antd';
import Plot, { PlotProps } from './Plot';

type PlotsListProps = {
  data: PlotProps[];
};

export default function PlotsList({ data }: PlotsListProps) {
  return (
    <Row gutter={[16, 24]}>
      {data?.map((plot) => (
        <Col key={plot.id} lg={6} md={8} sm={12}>
          <Plot key={plot.id} {...plot} />
        </Col>
      ))}
    </Row>
  );
}
