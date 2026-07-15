import React, { useState, useMemo } from 'react';
import { MapContainer, ImageOverlay, useMap, ZoomControl, Marker, Popup, Tooltip } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { ArrowLeft, Filter, X, ChevronRight, ChevronDown } from 'lucide-react';
import mapData from '../data/mapData.json';

// Fix leafet default icon path issues
import iconRetinaUrl from 'leaflet/dist/images/marker-icon-2x.png';
import iconUrl from 'leaflet/dist/images/marker-icon.png';
import shadowUrl from 'leaflet/dist/images/marker-shadow.png';

L.Icon.Default.mergeOptions({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
});

interface Props {
  onBack: () => void;
  lang: 'es' | 'en';
}

const minCol = 0;
const maxCol = 20;
const minRow = 0;
const maxRow = 17;
const tileSize = 512;

const MapTiles = () => {
  const map = useMap();
  
  React.useEffect(() => {
    const southWest = L.latLng(-(maxRow + 1) * tileSize, 0);
    const northEast = L.latLng(0, (maxCol + 1) * tileSize);
    const bounds = L.latLngBounds(southWest, northEast);
    
    map.setMaxBounds(bounds.pad(0.1));
    map.fitBounds(bounds);
  }, [map]);

  const tiles = [];
  for (let y = minRow; y <= maxRow; y++) {
    for (let x = minCol; x <= maxCol; x++) {
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

const createCustomIcon = (color: string, iconStr: string) => {
  const isPhosphor = iconStr?.startsWith('ph:');
  const isUrl = iconStr?.startsWith('/');
  
  let innerHtml = '';
  if (isUrl) {
    const imgUrl = iconStr.startsWith('/assets') ? `https://gloriavictisatlas.com${iconStr}` : `https://gloriavictisatlas.com/assets${iconStr}`;
    innerHtml = `<img src="${imgUrl}" style="width:16px;height:16px;object-fit:contain;" />`;
  } else if (isPhosphor) {
    // We don't have phosphor icons imported, we just use a default dot for now
    innerHtml = `<div style="width:10px;height:10px;background:white;border-radius:50%;margin:auto;margin-top:10px;"></div>`;
  } else {
    innerHtml = `<div style="width:10px;height:10px;background:white;border-radius:50%;margin:auto;margin-top:10px;"></div>`;
  }

  return L.divIcon({
    className: 'custom-leaflet-icon',
    html: `<div style="background:${color || '#888'};width:30px;height:30px;border-radius:50%;border:2px solid white;display:flex;align-items:center;justify-content:center;box-shadow:0 2px 5px rgba(0,0,0,0.5);">
      ${innerHtml}
    </div>`,
    iconSize: [30, 30],
    iconAnchor: [15, 30],
    popupAnchor: [0, -30],
  });
};

export const InteractiveMap: React.FC<Props> = ({ onBack, lang }) => {
  const [showFilters, setShowFilters] = useState(false);
  const [activeTypes, setActiveTypes] = useState<Set<number>>(new Set());
  const [expandedCats, setExpandedCats] = useState<Set<number>>(new Set());

  const toggleType = (id: number) => {
    const next = new Set(activeTypes);
    if (next.has(id)) next.delete(id);
    else next.add(id);
    setActiveTypes(next);
  };

  const toggleCategory = (typeIds: number[]) => {
    const next = new Set(activeTypes);
    const allActive = typeIds.every(id => next.has(id));
    if (allActive) {
      typeIds.forEach(id => next.delete(id));
    } else {
      typeIds.forEach(id => next.add(id));
    }
    setActiveTypes(next);
  };

  const toggleExpand = (id: number) => {
    const next = new Set(expandedCats);
    if (next.has(id)) next.delete(id);
    else next.add(id);
    setExpandedCats(next);
  };

  const visibleMarkers = useMemo(() => {
    return mapData.markers.filter(m => m.type_id != null && activeTypes.has(m.type_id as number));
  }, [activeTypes]);

  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }}>
      <div style={{ flex: 1, background: '#0a0a0a', position: 'relative', overflow: 'hidden' }}>
        
        <MapContainer 
          crs={L.CRS.Simple}
          minZoom={-3}
          maxZoom={1}
          zoom={-2}
          center={[-((maxRow + 1) * tileSize) / 2, ((maxCol + 1) * tileSize) / 2]}
          style={{ width: '100%', height: '100%', outline: 'none' }}
          attributionControl={false}
          zoomControl={false}
        >
          <ZoomControl position="topright" />
          <MapTiles />
          
          {visibleMarkers.map(m => {
            const t = (mapData.markerTypes as any)[String(m.type_id)];
            if (!t) return null;
            return (
              <Marker 
                key={m.id} 
                position={[m.lat, m.lng]} 
                icon={createCustomIcon(t.color, t.icon)}
              >
                <Popup>
                  <strong style={{ color: 'var(--accent)' }}>{m.title || t.name}</strong>
                  {m.description && (
                    <div style={{ marginTop: '8px', color: '#ccc', fontSize: '12px', whiteSpace: 'pre-wrap' }}>
                      {m.description}
                    </div>
                  )}
                  <div style={{ marginTop: '4px', color: '#888', fontSize: '11px' }}>
                    [{t.name}]
                  </div>
                </Popup>
                <Tooltip direction="top" offset={[0, -20]} opacity={1}>
                  {m.title || t.name}
                </Tooltip>
              </Marker>
            );
          })}
        </MapContainer>
        
        {/* Floating Header Actions */}
        <div style={{ position: 'absolute', top: '20px', left: '20px', zIndex: 1000, display: 'flex', gap: '10px' }}>
          <button 
            onClick={onBack}
            style={{ 
              display: 'inline-flex', alignItems: 'center', gap: '8px', 
              background: 'rgba(20,20,20,0.85)', backdropFilter: 'blur(10px)', border: '1px solid var(--border)', 
              color: 'var(--text-main)', cursor: 'pointer', fontSize: '16px', fontWeight: 'bold',
              padding: '10px 20px', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.5)',
              transition: 'all 0.2s'
            }}
          >
            <ArrowLeft size={20} color="var(--accent)" />
            {lang === 'es' ? 'Volver' : 'Back'}
          </button>

          <button 
            onClick={() => setShowFilters(true)}
            style={{ 
              display: 'inline-flex', alignItems: 'center', gap: '8px', 
              background: 'rgba(20,20,20,0.85)', backdropFilter: 'blur(10px)', border: '1px solid var(--border)', 
              color: 'var(--text-main)', cursor: 'pointer', fontSize: '16px', fontWeight: 'bold',
              padding: '10px 20px', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.5)',
              transition: 'all 0.2s'
            }}
          >
            <Filter size={20} color="var(--accent)" />
            {lang === 'es' ? 'Filtros' : 'Filters'}
          </button>
        </div>

        {/* Filter Sidebar */}
        <div 
          style={{
            position: 'absolute', top: 0, left: 0, bottom: 0, width: '320px',
            background: 'rgba(15,15,15,0.95)', backdropFilter: 'blur(12px)',
            borderRight: '1px solid var(--border)', zIndex: 1001,
            transform: showFilters ? 'translateX(0)' : 'translateX(-100%)',
            transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            display: 'flex', flexDirection: 'column', boxShadow: '5px 0 20px rgba(0,0,0,0.5)'
          }}
        >
          <div style={{ padding: '20px', borderBottom: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h3 style={{ margin: 0, color: 'var(--accent)', fontSize: '18px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Filter size={20} /> {lang === 'es' ? 'Filtros' : 'Filters'}
            </h3>
            <button onClick={() => setShowFilters(false)} style={{ background: 'none', border: 'none', color: '#888', cursor: 'pointer' }}>
              <X size={24} />
            </button>
          </div>
          <div style={{ padding: '15px', display: 'flex', gap: '10px', borderBottom: '1px solid var(--border)' }}>
            <button 
              onClick={() => setActiveTypes(new Set(Object.keys(mapData.markerTypes).map(Number)))}
              style={{ flex: 1, padding: '8px', background: 'var(--accent)', color: 'black', border: 'none', borderRadius: '4px', fontWeight: 'bold', cursor: 'pointer' }}
            >
              {lang === 'es' ? 'Todos' : 'All'}
            </button>
            <button 
              onClick={() => setActiveTypes(new Set())}
              style={{ flex: 1, padding: '8px', background: '#333', color: 'white', border: 'none', borderRadius: '4px', fontWeight: 'bold', cursor: 'pointer' }}
            >
              {lang === 'es' ? 'Ninguno' : 'None'}
            </button>
          </div>
          <div style={{ flex: 1, overflowY: 'auto', padding: '15px' }}>
            {mapData.categories.map(cat => {
              const allTypes: number[] = [
                ...cat.types.map(t => t.id),
                ...cat.subcategories.flatMap(sub => sub.types.map(t => t.id))
              ];
              const isExpanded = expandedCats.has(cat.id);
              const allActive = allTypes.every(id => activeTypes.has(id));
              const someActive = allTypes.some(id => activeTypes.has(id));
              
              return (
                <div key={cat.id} style={{ marginBottom: '12px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', padding: '6px 0' }}>
                    <div onClick={() => toggleExpand(cat.id)} style={{ display: 'flex', alignItems: 'center', flex: 1, gap: '6px' }}>
                      {isExpanded ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                      <span style={{ fontWeight: 'bold', color: 'var(--text-main)' }}>{cat.name}</span>
                    </div>
                    <input 
                      type="checkbox" 
                      checked={allActive}
                      ref={input => { if (input) input.indeterminate = someActive && !allActive; }}
                      onChange={() => toggleCategory(allTypes)}
                      style={{ cursor: 'pointer', width: '16px', height: '16px', accentColor: 'var(--accent)' }}
                    />
                  </div>
                  
                  {isExpanded && (
                    <div style={{ paddingLeft: '24px', display: 'flex', flexDirection: 'column', gap: '6px', marginTop: '6px' }}>
                      {cat.types.map(t => (
                        <label key={t.id} style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}>
                          <input 
                            type="checkbox" 
                            checked={activeTypes.has(t.id)} 
                            onChange={() => toggleType(t.id)}
                            style={{ accentColor: 'var(--accent)' }}
                          />
                          <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: t.color }}></div>
                          <span style={{ fontSize: '14px', color: '#ccc' }}>{t.name}</span>
                        </label>
                      ))}
                      
                      {cat.subcategories.map(sub => {
                        const subTypeIds = sub.types.map(t => t.id);
                        const subExpanded = expandedCats.has(sub.id + 1000);
                        const subAllActive = subTypeIds.every(id => activeTypes.has(id));
                        const subSomeActive = subTypeIds.some(id => activeTypes.has(id));
                        return (
                          <div key={sub.id} style={{ marginTop: '4px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', cursor: 'pointer', padding: '4px 0' }}>
                              <div onClick={() => toggleExpand(sub.id + 1000)} style={{ display: 'flex', alignItems: 'center', flex: 1, gap: '6px' }}>
                                {subExpanded ? <ChevronDown size={14} color="#888" /> : <ChevronRight size={14} color="#888" />}
                                <span style={{ color: '#aaa', fontSize: '14px' }}>{sub.name}</span>
                              </div>
                              <input 
                                type="checkbox" 
                                checked={subAllActive}
                                ref={input => { if (input) input.indeterminate = subSomeActive && !subAllActive; }}
                                onChange={() => toggleCategory(subTypeIds)}
                                style={{ accentColor: 'var(--accent)' }}
                              />
                            </div>
                            
                            {subExpanded && (
                              <div style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '6px', marginTop: '6px' }}>
                                {sub.types.map(t => (
                                  <label key={t.id} style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}>
                                    <input 
                                      type="checkbox" 
                                      checked={activeTypes.has(t.id)} 
                                      onChange={() => toggleType(t.id)}
                                      style={{ accentColor: 'var(--accent)' }}
                                    />
                                    <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: t.color }}></div>
                                    <span style={{ fontSize: '13px', color: '#999' }}>{t.name}</span>
                                  </label>
                                ))}
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
};
