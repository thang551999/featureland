import { Image } from 'antd';

export type PlotProps = {
  imageSrc: string;
  id: string;
  totalNfts: number;
  availableNfts: number;
};

export default function Plot({
  imageSrc,
  id,
  totalNfts,
  availableNfts,
}: PlotProps) {
  return (
    <div className="plot-list-item">
      <Image className="plot-image" src={imageSrc} alt="plot" preview={false} />
      <div className="plot-id">#{id}</div>
      <div className="plot-quantity">
        Total plots: <strong>{availableNfts}</strong>/{totalNfts}
      </div>
    </div>
  );
}
