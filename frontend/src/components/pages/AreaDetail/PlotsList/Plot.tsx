import { WEB_URL } from '@/constants';
import { Image } from 'antd';
import Link from 'next/link';

export type PlotProps = {
  imageSrc: string;
  id: string;
  totalNfts: number;
  availableNfts: number;
  version: number;
};

export default function Plot({
  imageSrc,
  id,
  totalNfts = 0,
  version = 0,
  availableNfts = 0,
}: PlotProps) {
  return (
    <Link href={WEB_URL.PLOT_DETAIL + id}>
      <div className="plot-list-item">
        <Image
          wrapperClassName="plot-image"
          src={imageSrc}
          alt="plot"
          preview={false}
        />
        <div className="plot-id">#{version}</div>
        <div className="plot-quantity">
          Total plots: <strong>{availableNfts}</strong>/{totalNfts}
        </div>
      </div>
    </Link>
  );
}
