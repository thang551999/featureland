import ScrollWhenClick from '@/components/ScrollWhenClick';
import { useGetAreas } from '@/hooks/home';
import Area from './Area';

export default function DiscoverAreas() {
  const { data: listOfAreas } = useGetAreas();
  return (
    <div className="discover-areas">
      <h2 className="center-flex-item">Discover our areas</h2>
      <div className="areas">
        <ScrollWhenClick>
          {listOfAreas?.map((areas: any, index: number) => (
            <Area key={index} index={index + 1} {...areas} />
          ))}
        </ScrollWhenClick>
      </div>
    </div>
  );
}
