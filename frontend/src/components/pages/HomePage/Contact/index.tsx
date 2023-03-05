import { Button, Col, Form, Input, Row } from 'antd';

export default function ContactUs() {
  return (
    <Row className="contact-us" justify="center">
      <Col span={12} className="contact-col">
        <div className="contact-title">Contact Us</div>
        <div className="contact-info">
          At lacus vitae nulla sagittis scelerisque nisl. Pellentesque duis
          cursus vestibulum, facilisi ac, sed faucibus.
        </div>
      </Col>
      <Col span={12} className="contact-col">
        <Form
          className="contact-form"
          autoComplete="off"
          name="basic"
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}
          validateTrigger="onSubmit"
        >
          <Form.Item
            label="Your name *"
            name="username"
            rules={[{ required: true, message: ' Please input your name!' }]}
          >
            <Input placeholder="Your name here" />
          </Form.Item>
          <Form.Item
            label="Your Email *"
            name="email"
            rules={[
              { required: true, message: 'Please input your email!' },
              { type: 'email', message: `It doesn't seem to be a valid email` },
            ]}
          >
            <Input placeholder="example@email.com" />
          </Form.Item>
          <Form.Item label="Send us a message" name="message">
            <Input.TextArea
              size="middle"
              rows={4}
              placeholder="Thank you for your message"
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Send
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
}
