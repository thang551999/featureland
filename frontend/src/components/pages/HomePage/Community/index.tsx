import { Col, Image, Row } from 'antd';

export default function Community() {
  const listUsers = [
    '/images/user1.png',
    '/images/user2.png',
    '/images/user3.png',
    '/images/user4.png',
    '/images/user5.png',
    '/images/user6.png',
  ];

  return (
    <div className="community">
      <Row className="community-title">
        <Col lg={18} sm={16}>
          <h2>
            <p>Our communities</p>
            <p>are smoother than reality!</p>
          </h2>
        </Col>
      </Row>
      <Image
        wrapperClassName="community-background"
        src="/images/community-background.png"
        preview={false}
      />
      <Image
        wrapperClassName="community-extra-image"
        src="/images/community-extra.png"
        preview={false}
        width={320}
        height={380}
      />
      <div className="users">
        {listUsers.map((userImage, index: number) => (
          <Image
            src={userImage}
            preview={false}
            wrapperClassName={`community-users user-${index}`}
            key={userImage}
          />
        ))}
      </div>
    </div>
  );
}
