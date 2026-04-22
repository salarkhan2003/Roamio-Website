import { MapContainer, TileLayer, Marker, Polyline } from 'react-leaflet';
import L from 'leaflet';
import { useEffect, useState } from 'react';

// Fix for default marker icons in Leaflet
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41]
});

// Remove global mutation: L.Marker.prototype.options.icon = DefaultIcon;

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
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return <div className={className} />;

  return (
    <MapContainer 
      center={center} 
      zoom={zoom} 
      scrollWheelZoom={interactive}
      zoomControl={interactive}
      dragging={interactive}
      doubleClickZoom={interactive}
      className={className}
    >
      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
      />
      {route.length > 0 && (
         <>
            <Polyline positions={route} color="#A8E6CF" weight={4} opacity={0.8} />
            <Marker position={route[0]} icon={DefaultIcon} />
            <Marker position={route[route.length - 1]} icon={DefaultIcon} />
         </>
      )}
    </MapContainer>
  );
}
