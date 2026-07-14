import React from 'react';
import { ArrowLeft, Navigation, MapPin, Tent, Home, Map, Zap, AlertCircle } from 'lucide-react';

interface Props {
  onBack: () => void;
  lang: 'es' | 'en';
}

export const FastTravel: React.FC<Props> = ({ onBack, lang }) => {
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
        <div style={{ height: '250px', backgroundImage: 'url(/guides/fasttravel.png)', backgroundColor: '#042f2e', backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative' }}>
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, var(--bg-main) 0%, rgba(0,0,0,0.4) 100%)' }}></div>
          <h1 style={{ position: 'absolute', bottom: '20px', left: '30px', fontSize: '42px', color: 'white', textShadow: '0 2px 10px rgba(0,0,0,0.8)', margin: 0, display: 'flex', alignItems: 'center', gap: '15px' }}>
            <Zap size={40} color="#14b8a6" /> {lang === 'es' ? 'Viaje Rápido (Fast Travel)' : 'Fast Travel Guide'}
          </h1>
        </div>

        <div style={{ padding: '40px' }}>
          <p style={{ fontSize: '18px', color: 'var(--text-main)', lineHeight: '1.6', marginBottom: '40px', textAlign: 'center', maxWidth: '800px', margin: '0 auto 40px auto' }}>
            {lang === 'es' 
              ? 'En un mundo basado en el control territorial masivo, moverse rápidamente es vital. Existen múltiples formas de teletransportarse.'
              : 'In a game based on territory control, getting around the map quickly is vital. Fast travel is also known as teleporting.'}
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '30px', marginBottom: '40px' }}>
            
            {/* The Logistician */}
            <div style={{ flex: '1 1 450px', background: 'var(--bg-hover)', padding: '25px', borderRadius: '8px', border: '1px solid var(--border)' }}>
              <h2 style={{ color: '#14b8a6', borderBottom: '1px solid var(--border)', paddingBottom: '10px', margin: '0 0 20px 0', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Map size={24} /> {lang === 'es' ? 'El NPC Logístico (Logistician)' : 'The Logistician NPC'}
              </h2>
              <ul style={{ color: 'var(--text-muted)', fontSize: '14px', paddingLeft: '20px', lineHeight: '1.6', margin: 0 }}>
                <li>{lang === 'es' ? 'Te permite viajar a través del territorio por una pequeña cuota de dinero.' : 'Sends players to various locations for a small fee.'}</li>
                <li>{lang === 'es' ? 'Ubicación: Siempre está cerca de una puerta dentro de las murallas principales de capitales, castillos y fuertes.' : 'Always located near a gate inside main walls of locations.'}</li>
                <li>{lang === 'es' ? 'Icono en el mapa: Un carruaje o carreta cubierta de color blanco.' : 'Identified on minimap by the covered white wagon icon.'}</li>
                <li>{lang === 'es' ? 'Límites: Solo puede teletransportarte hasta 2 "links" (conexiones) desde la capital, que es el límite de tu territorio nativo.' : 'Teleports players max 2 links from the capital (native territory edge).'}</li>
              </ul>
              
              <div style={{ marginTop: '20px', background: 'rgba(239, 68, 68, 0.05)', padding: '15px', borderRadius: '8px', borderLeft: '4px solid #ef4444' }}>
                <p style={{ margin: 0, color: 'var(--text-main)', fontSize: '13px', lineHeight: '1.5', display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                  <AlertCircle size={16} color="#ef4444" style={{ flexShrink: 0, marginTop: '2px' }} />
                  {lang === 'es' 
                    ? 'Bloqueos: Las localizaciones en primera línea (Front Line) NO permiten Fast Travel si su bandera está en llamas (bajo asedio). Tendrás que viajar a un punto cercano y cabalgar.' 
                    : 'Locations on the front line cannot be fast traveled to if they are under siege (flag on fire). You must ride or walk there.'}
                </p>
              </div>
            </div>

            {/* Comandos y Métodos */}
            <div style={{ flex: '1 1 450px' }}>
              <h2 style={{ color: 'var(--accent)', borderBottom: '1px solid var(--border)', paddingBottom: '10px', margin: '0 0 20px 0', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Navigation size={24} /> {lang === 'es' ? 'Otros Métodos de Viaje' : 'Other Methods & Commands'}
              </h2>
              <div style={{ display: 'grid', gap: '15px' }}>
                
                <div style={{ background: 'rgba(255,255,255,0.02)', padding: '15px', borderRadius: '8px', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', gap: '15px' }}>
                  <Tent size={20} color="#a855f7" />
                  <div>
                    <h4 style={{ margin: '0 0 5px 0', color: 'var(--text-main)' }}>{lang === 'es' ? 'Tiendas (Tents)' : 'Tents'}</h4>
                    <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '13px' }}>{lang === 'es' ? 'Puedes aparecer en ellas al morir o hacerles clic en el mapa para teletransportarte.' : 'Respawn there when you die, or click on the map to teleport.'}</p>
                  </div>
                </div>

                <div style={{ background: 'rgba(255,255,255,0.02)', padding: '15px', borderRadius: '8px', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', gap: '15px' }}>
                  <Home size={20} color="#3b82f6" />
                  <div>
                    <h4 style={{ margin: '0 0 5px 0', color: 'var(--text-main)' }}>{lang === 'es' ? 'Castillo de Gremio' : 'Guild Castle'}</h4>
                    <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '13px' }}>{lang === 'es' ? 'Escribe el comando /home en el chat para viajar a tu provincia (Cooldown activo si hay cambios de alianza).' : 'Type /home to go to your guild castle.'}</p>
                  </div>
                </div>

                <div style={{ background: 'rgba(255,255,255,0.02)', padding: '15px', borderRadius: '8px', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', gap: '15px' }}>
                  <MapPin size={20} color="#10b981" />
                  <div>
                    <h4 style={{ margin: '0 0 5px 0', color: 'var(--text-main)' }}>{lang === 'es' ? 'Comandos Unstuck' : 'Unstuck Commands'}</h4>
                    <ul style={{ margin: 0, color: 'var(--text-muted)', fontSize: '13px', paddingLeft: '15px' }}>
                      <li><strong>/capital:</strong> {lang === 'es' ? 'Para volver a la capital de tu nación.' : 'Unstuck to capital.'}</li>
                      <li><strong>/unstuck</strong> o <strong>/u:</strong> {lang === 'es' ? 'Te lleva a la ubicación aliada más cercana.' : 'Unstuck to closest friendly location.'}</li>
                      <li>{lang === 'es' ? 'O usa el menú presionando Escape (ESC).' : 'Or press ESC to access the unstuck menu.'}</li>
                    </ul>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
