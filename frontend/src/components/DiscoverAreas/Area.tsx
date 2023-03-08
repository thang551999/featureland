import { WEB_URL } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';

type AreasProps = {
  index: number;
  name: string;
  image: string;
  _id: string;
};

export default function Area({ index, name, image, _id }: AreasProps) {
  return (
    <div className="area">
      <Link href={WEB_URL.AREA_DETAIL + _id}>
        <Image src={image} alt={name} height={279} width={279} />
        <div className="area__name">
          <div className="round-border">{index}</div>
          <div className="name">{name}</div>
        </div>
      </Link>
    </div>
  );
}
