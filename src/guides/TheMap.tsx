import React from 'react';
import { ArrowLeft, Map, Compass, Globe, Shield, MapPin, Route, Link } from 'lucide-react';

interface Props {
  onBack: () => void;
  lang: 'es' | 'en';
}

export const TheMap: React.FC<Props> = ({ onBack, lang }) => {
  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', paddingBottom: '40px', width: '100%' }}>
      <button 
        onClick={onBack}
        style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'transparent', border: 'none', color: 'var(--accent)', cursor: 'pointer', marginBottom: '20px', fontSize: '16px', fontWeight: 'bold' }}
      >
        <ArrowLeft size={20} />
        {lang === 'es' ? 'Volver a Guías' : 'Back to Guides'}
      </button>

      <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px', overflow: 'hidden' }}>
        {/* Cabecera */}
        <div style={{ height: '250px', backgroundImage: 'url(/map/300px-UpdatedMap.png)', backgroundColor: '#1e3a8a', backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative' }}>
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, var(--bg-main) 0%, rgba(0,0,0,0.7) 100%)' }}></div>
          <h1 style={{ position: 'absolute', bottom: '20px', left: '30px', fontSize: '42px', color: 'white', textShadow: '0 2px 10px rgba(0,0,0,0.8)', margin: 0, display: 'flex', alignItems: 'center', gap: '15px' }}>
            <Map size={40} color="#3b82f6" /> {lang === 'es' ? 'Guía del Mapa del Mundo' : 'The Map Guide'}
          </h1>
        </div>

        <div style={{ padding: '40px' }}>
          {/* Overview */}
          <div style={{ marginBottom: '40px' }}>
            <p style={{ fontSize: '18px', color: 'var(--text-main)', lineHeight: '1.6', marginBottom: '20px' }}>
              {lang === 'es' 
                ? 'El mapa mundial (M) muestra información en tiempo real sobre qué naciones y gremios controlan las provincias. Dado que Gloria Victis se basa en el control territorial, el mapa es tu herramienta más crucial.'
                : 'The world map (M) displays real-time info about territory control. Because Gloria Victis is largely about territory control, the map is a crucial tool.'}
            </p>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px', marginBottom: '50px' }}>
            {/* Zonas de Loot */}
            <div style={{ flex: '1 1 500px' }}>
              <h2 style={{ color: 'var(--accent)', borderBottom: '1px solid var(--border)', paddingBottom: '10px', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Globe size={24} /> {lang === 'es' ? 'Zonas de Saqueo (Loot Zones)' : 'Loot Zones'}
              </h2>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '15px', marginBottom: '20px' }}>
                <div style={{ background: 'rgba(16, 185, 129, 0.05)', padding: '15px', borderRadius: '8px', border: '1px solid #10b981', display: 'flex', gap: '10px', alignItems: 'center' }}>
                  <img src="/map/Safe_zone.png" alt="Safe Zone" style={{ width: '32px' }} onError={(e) => e.currentTarget.style.display='none'} />
                  <div>
                    <h4 style={{ color: '#10b981', margin: '0 0 5px 0' }}>{lang === 'es' ? 'Safe Zone (Zona Segura)' : 'Safe Zone'}</h4>
                    <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '12px' }}>{lang === 'es' ? 'No puedes recibir daño.' : 'Cannot be harmed.'}</p>
                  </div>
                </div>

                <div style={{ background: 'rgba(59, 130, 246, 0.05)', padding: '15px', borderRadius: '8px', border: '1px solid #3b82f6', display: 'flex', gap: '10px', alignItems: 'center' }}>
                  <img src="/map/50px-Non-loot.png" alt="Non Loot Zone" style={{ width: '32px' }} onError={(e) => e.currentTarget.style.display='none'} />
                  <div>
                    <h4 style={{ color: '#3b82f6', margin: '0 0 5px 0' }}>{lang === 'es' ? 'Non-Loot Zone' : 'Non-Loot Zone'}</h4>
                    <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '12px' }}>{lang === 'es' ? 'PvP activo pero sin pérdida de loot.' : 'PvP active, no loot loss.'}</p>
                  </div>
                </div>

                <div style={{ background: 'rgba(239, 68, 68, 0.05)', padding: '15px', borderRadius: '8px', border: '1px solid #ef4444', display: 'flex', gap: '10px', alignItems: 'center' }}>
                  <img src="/map/50px-War_Zone.png" alt="War Zone" style={{ width: '32px' }} onError={(e) => e.currentTarget.style.display='none'} />
                  <div>
                    <h4 style={{ color: '#ef4444', margin: '0 0 5px 0' }}>{lang === 'es' ? 'War / Loot Zone' : 'War / Loot Zone'}</h4>
                    <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '12px' }}>{lang === 'es' ? 'Centro del mapa. PvP y saqueo total.' : 'Center map. PvP and looting active.'}</p>
                  </div>
                </div>
              </div>
              <img src="/map/400px-LootMap.png" alt="Loot Map" style={{ width: '100%', borderRadius: '8px', border: '1px solid var(--border)' }} onError={(e) => e.currentTarget.style.display='none'} />
            </div>

            {/* Minimap & Legend */}
            <div style={{ flex: '0 1 400px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <h2 style={{ color: 'var(--accent)', borderBottom: '1px solid var(--border)', paddingBottom: '10px', margin: 0, display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Compass size={24} /> {lang === 'es' ? 'El Minimapa y Leyenda' : 'Minimap & Legend'}
              </h2>
              <div style={{ background: 'var(--bg-hover)', padding: '15px', borderRadius: '8px', border: '1px solid var(--border)' }}>
                <p style={{ color: 'var(--text-muted)', fontSize: '13px', margin: '0 0 15px 0' }}>
                  {lang === 'es' ? 'El minimapa arriba a la derecha te muestra notificaciones, pings y el indicador de zona actual.' : 'Minimap shows notifications, pings, and current zone indicator.'}
                </p>
                <img src="/map/400px-Minimap.png" alt="Minimap" style={{ width: '100%', borderRadius: '8px', marginBottom: '15px' }} onError={(e) => e.currentTarget.style.display='none'} />
                <img src="/map/maplegend.png" alt="Map Legend" style={{ width: '100%', borderRadius: '8px' }} onError={(e) => e.currentTarget.style.display='none'} />
              </div>
            </div>
          </div>

          {/* Enlaces y Territorio Nativo */}
          <h2 style={{ color: 'var(--accent)', borderBottom: '1px solid var(--border)', paddingBottom: '10px', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Route size={24} /> {lang === 'es' ? 'Territorio Nativo y Logística (Links)' : 'Native Territory & Links'}
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', marginBottom: '40px' }}>
            
            <div style={{ background: 'var(--bg-hover)', padding: '25px', borderRadius: '8px', border: '1px solid var(--border)' }}>
              <h3 style={{ color: 'var(--text-main)', margin: '0 0 15px 0', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Shield size={20} /> {lang === 'es' ? 'Territorio Nativo' : 'Native Territory'}
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '13px', lineHeight: '1.6', margin: 0 }}>
                {lang === 'es' 
                  ? 'Cada nación tiene su bioma (Ismir: Nieve/Noroeste, Sangmar: Arena/Sur, Midland: Pantano/Noreste). Se extiende hasta 2 "links" (líneas) desde la capital.' 
                  : 'Extends 2 links from the capital. Capturing enemy native territory results in weaker guards and restricted fast travel.'}
                <br /><br />
                {lang === 'es' 
                  ? 'Si capturas el territorio nativo de una nación enemiga, los guardias defensores serán débiles y NO podrás usar Fast Travel para ir allí.' 
                  : 'Respawn timers increase when enemies own your native territory.'}
              </p>
            </div>

            <div style={{ background: 'var(--bg-hover)', padding: '25px', borderRadius: '8px', border: '1px solid var(--border)' }}>
              <h3 style={{ color: 'var(--text-main)', margin: '0 0 15px 0', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Link size={20} /> {lang === 'es' ? 'Conexiones (Fast Travel Links)' : 'Fast Travel Links'}
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '13px', lineHeight: '1.6', margin: 0 }}>
                {lang === 'es' 
                  ? 'Las líneas sólidas conectan castillos. MANTENER LA CONEXIÓN con tu capital es vital. Si el enemigo toma un castillo intermedio y "corta el link", las localizaciones aisladas se quedarán sin guardias y no se podrá viajar a ellas ni revivir.' 
                  : 'Solid lines connect locations. If a link to the capital is cut, isolated locations lose guards, fast travel, and respawns.'}
                <br /><br />
                {lang === 'es' 
                  ? 'Solo puedes usar Fast Travel dentro de tu territorio nativo (máx 2 links de la capital).' 
                  : 'Fast travel is only possible within your native territory.'}
              </p>
            </div>

            <div style={{ background: 'rgba(239, 68, 68, 0.05)', padding: '25px', borderRadius: '8px', border: '1px solid #ef4444' }}>
              <h3 style={{ color: '#ef4444', margin: '0 0 15px 0', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <MapPin size={20} /> {lang === 'es' ? 'The Front Line (La Frontera)' : 'The Front Line'}
              </h3>
              <p style={{ color: 'var(--text-main)', fontSize: '13px', lineHeight: '1.6', margin: 0 }}>
                {lang === 'es' 
                  ? 'Es el territorio aliado adyacente a territorio enemigo. Es donde ocurre la mayor parte del PvP.' 
                  : 'Friendly territory adjacent to enemy territory. Highest PvP action area.'}
                <br /><br />
                {lang === 'es' 
                  ? 'Los castillos en la Front Line NO permiten Fast Travel (teletransporte) si están bajo asedio (con la bandera en llamas en el mapa).' 
                  : 'Front line territory cannot be fast traveled to if under siege (burning flag).'}
              </p>
            </div>

          </div>

          <div style={{ display: 'flex', gap: '20px', alignItems: 'center', background: 'rgba(255,255,255,0.02)', padding: '20px', borderRadius: '8px', border: '1px solid var(--border)' }}>
            <img src="/map/Locationicon.png" alt="Unstuck" style={{ width: '32px' }} onError={(e) => e.currentTarget.style.display='none'} />
            <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '14px', lineHeight: '1.6' }}>
              <strong>{lang === 'es' ? 'Comando /unstuck:' : 'Unstuck Command:'}</strong> {lang === 'es' ? 'Pasa el ratón (hover) sobre este icono en tus Buffs (arriba a la izquierda) para saber exactamente a dónde te llevará el comando si decides usarlo para salir de un apuro.' : 'Hover over this icon in your effects tray to see where the /unstuck command will take you.'}
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};
