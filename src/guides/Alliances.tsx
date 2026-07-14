import React from 'react';
import { ArrowLeft, Handshake, Map, Clock, Crown, Users } from 'lucide-react';

interface Props {
  onBack: () => void;
  lang: 'es' | 'en';
}

export const Alliances: React.FC<Props> = ({ onBack, lang }) => {
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
        <div style={{ height: '250px', backgroundImage: 'url(/guides/alliances.png)', backgroundColor: '#111827', backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative' }}>
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, var(--bg-main) 0%, rgba(0,0,0,0.4) 100%)' }}></div>
          <h1 style={{ position: 'absolute', bottom: '20px', left: '30px', fontSize: '42px', color: 'white', textShadow: '0 2px 10px rgba(0,0,0,0.8)', margin: 0, display: 'flex', alignItems: 'center', gap: '15px' }}>
            <Handshake size={40} color="var(--accent)" /> {lang === 'es' ? 'Guía de Alianzas' : 'Alliances Guide'}
          </h1>
        </div>

        <div style={{ padding: '40px' }}>
          <p style={{ fontSize: '18px', color: 'var(--text-main)', lineHeight: '1.6', marginBottom: '30px', textAlign: 'center', maxWidth: '800px', margin: '0 auto 40px auto' }}>
            {lang === 'es' 
              ? 'Las alianzas permiten a grupos de hasta 3 gremios unirse bajo un mismo estandarte para compartir recursos, defensas y estrategias.'
              : 'Alliances can include up to 3 guilds. Entering an alliance opens up new strategic possibilities and shared resources.'}
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
            {/* Comunicación y Creación */}
            <div style={{ background: 'rgba(255,255,255,0.02)', padding: '25px', borderRadius: '8px', border: '1px solid var(--border)', display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--accent)' }}>
                <Users size={24} />
                <h3 style={{ margin: 0 }}>{lang === 'es' ? 'Creación y Comunicación' : 'Creation & Chat'}</h3>
              </div>
              <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '14px', lineHeight: '1.6' }}>
                {lang === 'es' ? 'Presiona [G] y haz clic en la pestaña "Alliances" para iniciar una alianza o ver su información.' : 'Press [G] and click the Alliances tab to start an alliance or view its info.'}
                <br /><br />
                {lang === 'es' ? 'Se desbloquea el canal de chat especial de alianza escribiendo /a en el chat.' : 'Entering an alliance opens up the /a alliance chat channel.'}
              </p>
            </div>

            {/* Permisos y Liderazgo */}
            <div style={{ background: 'rgba(255,255,255,0.02)', padding: '25px', borderRadius: '8px', border: '1px solid var(--border)', display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--accent)' }}>
                <Crown size={24} />
                <h3 style={{ margin: 0 }}>{lang === 'es' ? 'Liderazgo y Permisos' : 'Leadership & Permissions'}</h3>
              </div>
              <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '14px', lineHeight: '1.6' }}>
                {lang === 'es' 
                  ? 'El líder del gremio creador es el líder de la alianza. Puede invitar/expulsar gremios o pasar el liderazgo.' 
                  : 'The guild leader of the creator guild leads the alliance. Can invite/remove guilds and transfer leadership.'}
                <br /><br />
                {lang === 'es' 
                  ? 'Se abren opciones para permisos especiales de puertas y mecanismos defensivos en provincias del gremio.' 
                  : 'Options for special door and defensive mechanism permissions open up at guild provinces.'}
              </p>
            </div>

            {/* Fast Travel */}
            <div style={{ background: 'rgba(255,255,255,0.02)', padding: '25px', borderRadius: '8px', border: '1px solid var(--border)', display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--accent)' }}>
                <Map size={24} />
                <h3 style={{ margin: 0 }}>{lang === 'es' ? 'Viaje Rápido (Fast Travel)' : 'Fast Travel'}</h3>
              </div>
              <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '14px', lineHeight: '1.6' }}>
                {lang === 'es' 
                  ? 'Abre el mapa [M] y haz clic en la bandera de una provincia aliada para viajar rápido hacia ella (si está conectada a la capital).' 
                  : 'Open the map [M] and click on the flag of an allied province to fast travel to it (must be linked to capital).'}
              </p>
            </div>

            {/* Penalizaciones */}
            <div style={{ background: 'rgba(239, 68, 68, 0.05)', padding: '25px', borderRadius: '8px', border: '1px solid #ef4444', display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#ef4444' }}>
                <Clock size={24} />
                <h3 style={{ margin: 0, color: '#ef4444' }}>{lang === 'es' ? 'Cooldown de Alianza' : 'Alliance Cooldown'}</h3>
              </div>
              <p style={{ margin: 0, color: 'var(--text-main)', fontSize: '14px', lineHeight: '1.6' }}>
                {lang === 'es' 
                  ? 'Añadir o expulsar a un gremio de la alianza activará automáticamente un Cooldown (Tiempo de Espera) de 48 horas.' 
                  : 'Adding or removing guilds triggers a 48 hour cooldown.'}
                <br /><br />
                {lang === 'es' 
                  ? 'Durante este tiempo, NADIE podrá hacer Viaje Rápido a los castillos poseídos por la alianza.' 
                  : 'During this time, fast traveling to alliance owned guild castles is disabled.'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
