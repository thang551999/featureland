import { Image } from 'antd';

type MemberProps = {
  name: string;
  image: string;
  position: string;
};

export default function Member({ name, image, position }: MemberProps) {
  return (
    <div className="member-team">
      <Image
        wrapperClassName="member-image"
        src={image}
        alt={'member-image'}
        height={311}
        width={311}
        preview={false}
      />
      <div className="overlay"></div>
      <div className="member-name">{name}</div>
      <div className="member-position">{position}</div>
    </div>
  );
}
