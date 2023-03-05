import Image from 'next/image';
import Link from 'next/link';

type AreasProps = {
  index: number;
  name: string;
  image: string;
  link: string;
};

export default function Area({ index, name, image, link }: AreasProps) {
  return (
    <Link href={link}>
      <div className="area">
        <Image src={image} alt={name} height={279} width={279} />
        <div className="area__name">
          <div className="round-border">{index}</div>
          <div className="name">{name}</div>
        </div>
      </div>
    </Link>
  );
}
