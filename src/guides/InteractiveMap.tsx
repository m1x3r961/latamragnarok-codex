import React from 'react';
import { MapContainer, ImageOverlay, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { ArrowLeft } from 'lucide-react';

interface Props {
  onBack: () => void;
  lang: 'es' | 'en';
}

const minCol = 0;
const maxCol = 20;
const minRow = 0;
const maxRow = 17;
const tileSize = 256;

const MapTiles = () => {
  const map = useMap();
  
  React.useEffect(() => {
    // Set map bounds to contain the whole image
    const southWest = L.latLng(-(maxRow + 1) * tileSize, 0);
    const northEast = L.latLng(0, (maxCol + 1) * tileSize);
    const bounds = L.latLngBounds(southWest, northEast);
    
    map.setMaxBounds(bounds.pad(0.1)); // Add a bit of padding so we can see edges clearly
    map.fitBounds(bounds);
  }, [map]);

  const tiles = [];
  for (let y = minRow; y <= maxRow; y++) {
    for (let x = minCol; x <= maxCol; x++) {
      // The Atlas uses inverted Y for URLs: top row (our y=0) is y=17 in URL
      const url = `https://gloriavictisatlas.com/tiles/x${x}y${maxRow - y}_Main.webp`;
      
      const south = -(y + 1) * tileSize;
      const north = -y * tileSize;
      const west = x * tileSize;
      const east = (x + 1) * tileSize;
      const bounds = [[south, west], [north, east]] as L.LatLngBoundsExpression;
      
      tiles.push(
        <ImageOverlay key={`${x}-${y}`} url={url} bounds={bounds} />
      );
    }
  }

  return <>{tiles}</>;
};

export const InteractiveMap: React.FC<Props> = ({ onBack, lang }) => {
  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }}>
      <div style={{ flex: 1, background: '#0a0a0a', position: 'relative', overflow: 'hidden' }}>
        <MapContainer 
          crs={L.CRS.Simple}
          minZoom={-3}
          maxZoom={1}
          zoom={-1}
          center={[-((maxRow + 1) * tileSize) / 2, ((maxCol + 1) * tileSize) / 2]}
          style={{ width: '100%', height: '100%', outline: 'none' }}
          attributionControl={false}
          zoomControl={true}
        >
          <MapTiles />
        </MapContainer>
        
        {/* Overlaying a custom back button so it floats over the map */}
        <div style={{ position: 'absolute', top: '20px', left: '20px', zIndex: 1000 }}>
          <button 
            onClick={onBack}
            style={{ 
              display: 'inline-flex', alignItems: 'center', gap: '8px', 
              background: 'var(--bg-card)', border: '1px solid var(--border)', 
              color: 'var(--text-main)', cursor: 'pointer', fontSize: '16px', fontWeight: 'bold',
              padding: '10px 20px', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.5)'
            }}
          >
            <ArrowLeft size={20} color="var(--accent)" />
            {lang === 'es' ? 'Volver' : 'Back'}
          </button>
        </div>
      </div>
    </div>
  );
};
