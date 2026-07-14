import React from 'react';
import { ArrowLeft, Pickaxe, Wheat, Trees, Beef, Fish, Info, ExternalLink } from 'lucide-react';

interface Props {
  onBack: () => void;
  lang: 'es' | 'en';
  onNavigate?: (page: string) => void;
}

export const Gathering: React.FC<Props> = ({ onBack, lang, onNavigate }) => {
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
        <div style={{ height: '250px', background: 'linear-gradient(135deg, #14532d 0%, #064e3b 100%)', position: 'relative', display: 'flex', alignItems: 'center', paddingLeft: '40px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px', zIndex: 1 }}>
            <div style={{ background: 'rgba(16, 185, 129, 0.1)', padding: '20px', borderRadius: '16px', border: '1px solid rgba(16, 185, 129, 0.3)' }}>
              <Pickaxe size={60} color="#10b981" />
            </div>
            <div>
              <h1 style={{ fontSize: '42px', color: 'white', textShadow: '0 2px 10px rgba(0,0,0,0.5)', margin: 0 }}>
                {lang === 'es' ? 'Recolección de Recursos' : 'Gathering Resources'}
              </h1>
              <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '18px', marginTop: '10px' }}>
                {lang === 'es' ? 'El mundo es tuyo para extraerlo.' : 'The world is yours to mine.'}
              </p>
            </div>
          </div>
          <Trees size={300} color="rgba(255,255,255,0.03)" style={{ position: 'absolute', right: '-50px', top: '-50px' }} />
        </div>

        <div style={{ padding: '40px' }}>
          
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px', marginBottom: '40px' }}>
            <div style={{ flex: '1 1 500px' }}>
              <h2 style={{ color: 'var(--accent)', borderBottom: '1px solid var(--border)', paddingBottom: '10px', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Info size={24} /> {lang === 'es' ? 'Introducción Básica' : 'Overview'}
              </h2>
              <p style={{ color: 'var(--text-main)', fontSize: '15px', lineHeight: '1.6', margin: '0 0 20px 0' }}>
                {lang === 'es' 
                  ? 'Los recursos son los materiales crudos (raw) para el crafteo y mejoras. Aparecen con un temporizador semi-aleatorio (ej. un nodo de mina tarda de 25-45 mins en reaparecer).'
                  : 'Resources are raw materials. All naturally occurring resources have a semi-randomized respawn timer (e.g. 25-45 mins).'}
              </p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                <div style={{ background: 'var(--bg-hover)', padding: '15px', borderRadius: '8px', border: '1px solid var(--border)', display: 'flex', gap: '15px', alignItems: 'center' }}>
                  <img src="/gathering/FarmIcon.png" alt="Farm" style={{ width: '40px' }} onError={(e) => e.currentTarget.style.display='none'} />
                  <div>
                    <h4 style={{ margin: '0 0 5px 0', color: '#10b981' }}>{lang === 'es' ? 'Granjas (Farms)' : 'Farms'}</h4>
                    <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>{lang === 'es' ? 'Planta semillas, recolecta miel y huevos.' : 'Plant crops, gather honey and eggs.'}</span>
                  </div>
                </div>
                <div style={{ background: 'var(--bg-hover)', padding: '15px', borderRadius: '8px', border: '1px solid var(--border)', display: 'flex', gap: '15px', alignItems: 'center' }}>
                  <img src="/gathering/MineIcon.png" alt="Mine" style={{ width: '40px' }} onError={(e) => e.currentTarget.style.display='none'} />
                  <div>
                    <h4 style={{ margin: '0 0 5px 0', color: '#3b82f6' }}>{lang === 'es' ? 'Minas (Mines)' : 'Mines'}</h4>
                    <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>{lang === 'es' ? 'Piedra para construir, metales y minerales.' : 'Gather stones, ores, and minerals.'}</span>
                  </div>
                </div>
                <div style={{ background: 'var(--bg-hover)', padding: '15px', borderRadius: '8px', border: '1px solid var(--border)', display: 'flex', gap: '15px', alignItems: 'center' }}>
                  <img src="/gathering/LumbermillIcon.png" alt="Lumbermill" style={{ width: '40px' }} onError={(e) => e.currentTarget.style.display='none'} />
                  <div>
                    <h4 style={{ margin: '0 0 5px 0', color: '#a855f7' }}>{lang === 'es' ? 'Aserraderos (Lumbermills)' : 'Lumbermills'}</h4>
                    <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>{lang === 'es' ? 'Recolecta madera. Tiene los talleres de Ingeniería.' : 'Gather wood. Uses Engineering workshops.'}</span>
                  </div>
                </div>
              </div>
            </div>

            <div style={{ flex: '1 1 300px' }}>
              <h3 style={{ color: 'var(--text-main)', margin: '0 0 15px 0' }}>{lang === 'es' ? 'Tarjeta de Recursos (Resource Card)' : 'Resource Card'}</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '14px', lineHeight: '1.6', margin: '0 0 15px 0' }}>
                {lang === 'es' 
                  ? 'Haz clic en una bandera en el Mapa para ver su Tarjeta de Recurso. Muestra los minerales "Especialidad" que habrá allí cuando el lugar esté mejorado al máximo nivel.'
                  : 'Click a flag on The Map to see its Resource Card. Shows what will be there if fully upgraded.'}
              </p>
              <img src="/gathering/LocationCardNewUI.png" alt="Resource Card" style={{ width: '100%', borderRadius: '8px', border: '1px solid var(--border)' }} onError={(e) => e.currentTarget.style.display='none'} />
            </div>
          </div>

          <hr style={{ border: 'none', borderTop: '1px solid var(--border)', margin: '40px 0' }} />

          {/* Secciones Específicas */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
            
            {/* Granjas */}
            <div style={{ background: 'var(--bg-hover)', padding: '20px', borderRadius: '10px', border: '1px solid var(--border)' }}>
              <h3 style={{ color: '#10b981', margin: '0 0 15px 0', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Wheat size={24} /> {lang === 'es' ? 'Granjas y Cultivos' : 'Farms and Crops'}
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '13px', lineHeight: '1.6' }}>
                {lang === 'es' ? 'Existen calidades de suelo (50%, 80%, 100%). La mejor tierra está en las zonas PvP más peligrosas.' : 'Soil quality (50%, 80%, 100%). Top quality is in dangerous zones.'}
              </p>
              <div style={{ display: 'flex', gap: '15px', marginTop: '15px' }}>
                <img src="/gathering/plantingcrop.png" alt="Rain" style={{ width: '40px', height: '40px', objectFit: 'contain' }} onError={(e) => e.currentTarget.style.display='none'} />
                <span style={{ fontSize: '13px', color: 'var(--text-main)' }}>{lang === 'es' ? 'Si plantas mientras llueve, ¡no necesitas regar!' : 'Planting in the rain means no watering needed!'}</span>
              </div>
              <div style={{ display: 'flex', gap: '15px', marginTop: '15px' }}>
                <img src="/gathering/farmsareshare.png" alt="Shared" style={{ width: '40px', height: '40px', objectFit: 'contain' }} onError={(e) => e.currentTarget.style.display='none'} />
                <span style={{ fontSize: '13px', color: 'var(--text-main)' }}>{lang === 'es' ? 'Las granjas son públicas. Planta ordenadamente para que los demás puedan.' : 'Farms are shared spaces. Plant orderly!'}</span>
              </div>
            </div>

            {/* Minas */}
            <div style={{ background: 'var(--bg-hover)', padding: '20px', borderRadius: '10px', border: '1px solid var(--border)' }}>
              <h3 style={{ color: '#3b82f6', margin: '0 0 15px 0', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Pickaxe size={24} /> {lang === 'es' ? 'Minas y Vetas (Veins)' : 'Mines and Ores'}
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '13px', lineHeight: '1.6', marginBottom: '10px' }}>
                {lang === 'es' ? 'A más nivel de mina, más nodos. Además de los nodos normales, existen:' : 'Upgrading increases nodes. Besides normal nodes:'}
              </p>
              <ul style={{ color: 'var(--text-main)', fontSize: '13px', paddingLeft: '15px', margin: 0, lineHeight: '1.6' }}>
                <li><strong>{lang === 'es' ? 'Vetas (Veins):' : 'Veins:'}</strong> {lang === 'es' ? 'Depósitos gigantescos ideales para ser minados en grupo (da bonos si son 5+ personas).' : 'Huge deposits best mined in groups of 5+.'}</li>
                <li><strong>{lang === 'es' ? 'Picos Dorados:' : 'Gold Pickaxes:'}</strong> {lang === 'es' ? 'Eventos que aparecen en el mapa. Tienen recursos raros garantizados, ¡prepárate para el PvP!' : 'Map events with rare resources. Get ready for PvP!'}</li>
              </ul>
              <div style={{ display: 'flex', gap: '10px', marginTop: '15px' }}>
                <img src="/gathering/groupmining.png" alt="Vein" style={{ width: '48%', borderRadius: '5px' }} onError={(e) => e.currentTarget.style.display='none'} />
                <img src="/gathering/Goldpickaxe.png" alt="Gold Pickaxe" style={{ width: '48%', borderRadius: '5px' }} onError={(e) => e.currentTarget.style.display='none'} />
              </div>
            </div>

            {/* Madera y Animales */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ background: 'var(--bg-hover)', padding: '20px', borderRadius: '10px', border: '1px solid var(--border)' }}>
                <h3 style={{ color: '#a855f7', margin: '0 0 15px 0', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Trees size={24} /> {lang === 'es' ? 'Aserraderos (Wood)' : 'Lumbermills'}
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '13px', lineHeight: '1.6', margin: 0 }}>
                  {lang === 'es' ? 'El tipo de madera (Pine, Yew, Oak, etc.) no cambia stats en armaduras, pero SÍ importa para mejorar edificios y estructuras. (Ej: Pine para Billets, Yew para Arcos).' : 'Wood type (Pine, Yew, etc.) matters for upgrading structures. Pine for billets, Yew for bows.'}
                </p>
              </div>

              <div style={{ background: 'rgba(239, 68, 68, 0.05)', padding: '20px', borderRadius: '10px', border: '1px solid rgba(239, 68, 68, 0.2)' }}>
                <h3 style={{ color: '#ef4444', margin: '0 0 15px 0', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Beef size={24} /> {lang === 'es' ? 'Carnicería (Butchering)' : 'Butchering'}
                </h3>
                <p style={{ color: 'var(--text-main)', fontSize: '13px', lineHeight: '1.6', margin: 0 }}>
                  {lang === 'es' ? 'Los cadáveres de animales se pudren en 7 días. Para procesarlos necesitas el libro "Expanded Animals Butchering" (Vendedor en capital por 10 silver) o el libro "Beast Butchering" (Glory Quartermaster).' : 'Carcasses decay in 7 days. You need Expanded Animals Butchering book (10s in capital) or Beast Butchering from Glory vendor.'}
                </p>
              </div>
            </div>
          </div>

          <div style={{ marginTop: '40px', display: 'flex', justifyContent: 'center' }}>
            <button 
              onClick={() => onNavigate && onNavigate('fishing')}
              style={{ background: 'rgba(59, 130, 246, 0.1)', border: '1px solid #3b82f6', padding: '15px 30px', borderRadius: '30px', color: 'white', display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer', fontSize: '16px', fontWeight: 'bold' }}>
              <Fish size={24} color="#3b82f6" />
              {lang === 'es' ? 'Ver la guía completa de Pesca' : 'View the complete Fishing guide'}
              <ExternalLink size={18} color="#3b82f6" style={{ marginLeft: '5px' }} />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
