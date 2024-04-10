import { mapSectionData } from '@/data/map-section';

export interface MapSectionProps {
  embedUrl: string;
}

export function MapSection() {
  const { embedUrl } = mapSectionData;
  return (
    <div className="overflow-hidden">
      <iframe
        className="min-h-[450px] w-full border-none"
        src={embedUrl}
        allowFullScreen
        loading="lazy"
      />
    </div>
  );
}
