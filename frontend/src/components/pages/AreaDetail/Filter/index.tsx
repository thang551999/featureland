import { Collapse, Form, Input } from 'antd';

export default function AreaFilter() {
  return (
    <div>
      <Form name="basic">
        <Collapse>
          <Form.Item name="keyword">
            <Input placeholder="Search by areas"></Input>
          </Form.Item>
        </Collapse>
      </Form>
    </div>
  );
}
