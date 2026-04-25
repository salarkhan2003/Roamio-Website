import { MapContainer, TileLayer, Marker, Polyline } from 'react-leaflet';
import L from 'leaflet';
import { useEffect, useState, useRef, useMemo } from 'react';

// Fix for default marker icons in Leaflet
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

const DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41]
});

interface LiveMapProps {
  center?: [number, number];
  zoom?: number;
  interactive?: boolean;
  className?: string;
  route?: [number, number][];
}

export function LiveMap({ 
  center = [18.922, 72.834], // Mumbai Gateway of India as default
  zoom = 13, 
  interactive = false,
  className = "w-full h-full",
  route = []
}: LiveMapProps) {
  const mapIcon = useMemo(() => DefaultIcon, []);
  const [isMounted, setIsMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsMounted(true);
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  if (!isMounted) return <div ref={containerRef} className={className} />;

  return (
    <div ref={containerRef} className={className + " bg-charcoal relative overflow-hidden"}>
      {isVisible ? (
        <MapContainer 
          center={center} 
          zoom={zoom} 
          scrollWheelZoom={interactive}
          zoomControl={interactive}
          dragging={interactive}
          doubleClickZoom={interactive}
          className="w-full h-full"
        >
          <TileLayer
            url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
          />
          {route.length > 0 && (
             <>
                <Polyline positions={route} color="#A8E6CF" weight={4} opacity={0.8} />
                <Marker position={route[0]} icon={mapIcon} />
                <Marker position={route[route.length - 1]} icon={mapIcon} />
             </>
          )}
        </MapContainer>
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-charcoal/50">
          <div className="text-[10px] uppercase tracking-widest text-white/20 font-bold">Map Loading...</div>
        </div>
      )}
    </div>
  );
}
