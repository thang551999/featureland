import ScrollWhenClick from '@/components/ScrollWhenClick';
import Area from './Area';

export default function DiscoverAreas() {
  const listOfAreas = [
    { name: 'mimosa', image: '/images/mimosa.png', link: '' },
    { name: 'pollux', image: '/images/pollux.png', link: '' },
    { name: 'spica', image: '/images/spica.png', link: '' },
    { name: 'hardar', image: '/images/hardar.png', link: '' },
    { name: 'vega', image: '/images/vega.png', link: '' },
  ];

  return (
    <div className="discover-areas">
      <h2 className="center-flex-item">Discover our areas</h2>
      <div className="areas">
        <ScrollWhenClick>
          {listOfAreas.map((areas, index: number) => (
            <Area key={areas.name} index={index + 1} {...areas} />
          ))}
        </ScrollWhenClick>
      </div>
    </div>
  );
}