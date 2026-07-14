import React from 'react';
import { ArrowLeft, Search, Activity, Star, Swords, Dices, Store } from 'lucide-react';

interface Props {
  onBack: () => void;
  lang: 'es' | 'en';
}

export const Mounts: React.FC<Props> = ({ onBack, lang }) => {
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
        <div style={{ height: '300px', backgroundImage: 'url(/mounts/mountriding.png)', backgroundColor: '#3f2c22', backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative' }}>
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, var(--bg-main) 0%, rgba(0,0,0,0.5) 100%)' }}></div>
          <h1 style={{ position: 'absolute', bottom: '20px', left: '30px', fontSize: '42px', color: 'white', textShadow: '0 2px 10px rgba(0,0,0,0.8)', margin: 0, display: 'flex', alignItems: 'center', gap: '15px' }}>
            <Star size={40} color="#facc15" /> {lang === 'es' ? 'Guía de Monturas' : 'Mounts Guide'}
          </h1>
        </div>

        <div style={{ padding: '40px' }}>
          {/* Overview */}
          <div style={{ marginBottom: '40px' }}>
            <p style={{ fontSize: '18px', color: 'var(--text-main)', lineHeight: '1.6', marginBottom: '20px' }}>
              {lang === 'es' 
                ? 'Los caballos salvajes pueden ser domesticados y usados como monturas. No solo te ayudarán a viajar rápido (todas las monturas tienen la misma velocidad máxima), sino que también son letales en el combate si inviertes en las habilidades de Caballería.'
                : 'Wild horses may be tamed and ridden. They not only help you travel fast (all mounts have the same top speed) but can also be used effectively in battle.'}
            </p>
            <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
              <div style={{ background: 'rgba(255,255,255,0.05)', padding: '15px', borderRadius: '8px', border: '1px solid var(--border)', flex: '1 1 200px', textAlign: 'center' }}>
                <strong style={{ color: 'var(--accent)', fontSize: '20px' }}>T</strong>
                <p style={{ margin: '5px 0 0 0', color: 'var(--text-muted)' }}>{lang === 'es' ? 'Invocar Montura' : 'Summon Mount'}</p>
              </div>
              <div style={{ background: 'rgba(255,255,255,0.05)', padding: '15px', borderRadius: '8px', border: '1px solid var(--border)', flex: '1 1 200px', textAlign: 'center' }}>
                <strong style={{ color: 'var(--accent)', fontSize: '20px' }}>E</strong>
                <p style={{ margin: '5px 0 0 0', color: 'var(--text-muted)' }}>{lang === 'es' ? 'Montar / Desmontar' : 'Mount / Dismount'}</p>
              </div>
              <div style={{ background: 'rgba(255,255,255,0.05)', padding: '15px', borderRadius: '8px', border: '1px solid var(--border)', flex: '1 1 200px', textAlign: 'center' }}>
                <strong style={{ color: 'var(--accent)', fontSize: '20px' }}>Y</strong>
                <p style={{ margin: '5px 0 0 0', color: 'var(--text-muted)' }}>{lang === 'es' ? 'Panel de Montura' : 'Mount Panel'}</p>
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px', marginBottom: '40px' }}>
            <div style={{ flex: '1 1 500px' }}>
              <h2 style={{ color: 'var(--accent)', borderBottom: '1px solid var(--border)', paddingBottom: '10px', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Search size={24} /> {lang === 'es' ? 'Encontrar y Domesticar (Taming)' : 'Finding & Taming'}
              </h2>
              
              <div style={{ background: 'var(--bg-hover)', padding: '20px', borderRadius: '8px', border: '1px solid var(--border)', marginBottom: '20px' }}>
                <p style={{ color: 'var(--text-muted)', fontSize: '14px', lineHeight: '1.6', margin: '0 0 15px 0' }}>
                  {lang === 'es' 
                    ? 'Los caballos spawnean en grupos de 2 a 3 (normalmente en praderas o playas). Para domesticar uno, acércate y presiona E. Si no te gusta, presiona la X roja.' 
                    : 'Horses spawn in clusters of 2-3 (grasslands/beaches). To tame, walk up and press E. If you do not want it, press the red X.'}
                </p>
                
                <h4 style={{ color: '#10b981', margin: '0 0 10px 0' }}>{lang === 'es' ? '¿Qué hace a un caballo un "Buen Caballo"?' : 'What makes a "good" horse?'}</h4>
                <ul style={{ color: 'var(--text-main)', fontSize: '13px', paddingLeft: '20px', margin: 0, lineHeight: '1.6' }}>
                  <li><strong>{lang === 'es' ? 'Bajo Envejecimiento (Ageing):' : 'Low Ageing:'}</strong> {lang === 'es' ? 'Los caballos envejecen ~0.5% al día. Un caballo joven tiene un porcentaje bajo (ej. 9%). Cuando llegan al 100% pierden durabilidad.' : 'Horses age ~0.5% per day. When they reach 100% ageing, durability drops.'}</li>
                  <li><strong>{lang === 'es' ? 'Alto Nivel Máximo (Max Level):' : 'High Max Level:'}</strong> {lang === 'es' ? 'Tienen un límite de nivel aleatorio del 1 al 100. Entre más alto sea este límite (ej. Lvl 76), más puntos de atributos podrá ganar.' : 'Random max level (1-100). Higher max level = more attribute points to spend.'}</li>
                </ul>
                <div style={{ marginTop: '15px', padding: '10px', background: 'rgba(239,68,68,0.05)', borderLeft: '3px solid #ef4444', fontSize: '12px', color: 'var(--text-muted)' }}>
                  {lang === 'es' ? 'Ejemplo: Un caballo de Edad 35% y Nivel Máx 26 es una pésima montura. Un caballo de Edad 9% y Nivel Máx 76 es excelente.' : 'Example: Age 35% & Max Level 26 = Bad. Age 9% & Max Level 76 = Excellent.'}
                </div>
              </div>

              <h2 style={{ color: 'var(--accent)', borderBottom: '1px solid var(--border)', paddingBottom: '10px', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Activity size={24} /> {lang === 'es' ? 'Atributos de la Montura' : 'Mount Attributes'}
              </h2>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                <div style={{ background: 'rgba(239, 68, 68, 0.05)', padding: '15px', borderRadius: '8px', border: '1px solid #ef4444' }}>
                  <strong style={{ color: '#ef4444', display: 'block', marginBottom: '5px' }}>Vitality (Vitalidad)</strong>
                  <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>{lang === 'es' ? 'Puntos de vida totales y regeneración de HP.' : 'Total health points and HP regen.'}</span>
                </div>
                <div style={{ background: 'rgba(16, 185, 129, 0.05)', padding: '15px', borderRadius: '8px', border: '1px solid #10b981' }}>
                  <strong style={{ color: '#10b981', display: 'block', marginBottom: '5px' }}>Conditioning</strong>
                  <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>{lang === 'es' ? 'Stamina (cuánto tiempo puede esprintar) y regeneración de stamina.' : 'Total stamina and stamina regen.'}</span>
                </div>
                <div style={{ background: 'rgba(59, 130, 246, 0.05)', padding: '15px', borderRadius: '8px', border: '1px solid #3b82f6' }}>
                  <strong style={{ color: '#3b82f6', display: 'block', marginBottom: '5px' }}>Agility (Agilidad)</strong>
                  <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>{lang === 'es' ? 'Qué tan cerrado puede girar y cambiar de dirección.' : 'How tightly the mount can turn/change direction.'}</span>
                </div>
                <div style={{ background: 'rgba(245, 158, 11, 0.05)', padding: '15px', borderRadius: '8px', border: '1px solid #f59e0b' }}>
                  <strong style={{ color: '#f59e0b', display: 'block', marginBottom: '5px' }}>Dynamics (Dinámica)</strong>
                  <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>{lang === 'es' ? 'Aceleración y frenado. (No cambia la velocidad máxima).' : 'Acceleration and stopping speed.'}</span>
                </div>
              </div>

            </div>

            <div style={{ flex: '0 1 400px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ background: 'rgba(255,255,255,0.02)', padding: '20px', borderRadius: '8px', border: '1px solid var(--border)' }}>
                <h3 style={{ color: 'var(--text-main)', margin: '0 0 15px 0', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Store size={20} /> {lang === 'es' ? 'El Stablemaster' : 'Stablemaster & Selling'}
                </h3>
                <ul style={{ color: 'var(--text-muted)', fontSize: '13px', paddingLeft: '20px', margin: 0, lineHeight: '1.6' }}>
                  <li>{lang === 'es' ? 'NPC ubicado cerca de las puertas en ciudades principales.' : 'NPC near gatehouses in major cities.'}</li>
                  <li>{lang === 'es' ? 'Permite cambiar tu montura activa (solo 1 a la vez).' : 'Change active mount (only 1 at a time).'}</li>
                  <li>{lang === 'es' ? 'Puedes entrenar a la montura 1 vez cada 22 horas pasivamente (le da 1 nivel).' : 'Passively train mount once every 22 hours for 1 level.'}</li>
                  <li>{lang === 'es' ? 'Puedes vender tus monturas en los Player Stalls (F3).' : 'Sell mounts at Player Stalls (F3).'}</li>
                </ul>
              </div>

              <div style={{ background: 'rgba(255,255,255,0.02)', padding: '20px', borderRadius: '8px', border: '1px solid var(--border)' }}>
                <h3 style={{ color: 'var(--text-main)', margin: '0 0 15px 0', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Swords size={20} /> {lang === 'es' ? 'Mecánicas de Monta y Combate' : 'Riding Mechanics'}
                </h3>
                <p style={{ margin: '0 0 10px 0', color: 'var(--text-muted)', fontSize: '13px' }}>
                  {lang === 'es' ? 'Las monturas se ralentizan al subir colinas empinadas o chocar.' : 'Mounts are slowed moving up steep inclines or bumping into objects.'}
                </p>
                <div style={{ background: 'rgba(0,0,0,0.2)', padding: '10px', borderRadius: '5px' }}>
                  <strong style={{ color: '#ef4444', fontSize: '13px' }}>{lang === 'es' ? 'Dismount (Tumbar al jinete):' : 'Dismounting Riders:'}</strong>
                  <p style={{ margin: '5px 0 0 0', color: 'var(--text-muted)', fontSize: '12px' }}>
                    {lang === 'es' 
                      ? 'Para tumbar a alguien, debes darle una estocada (stab) de frente. A alguien con armadura pesada (Heavy) tienes que darle directo al centro del pecho. A uno con armadura ligera (Light) puedes darle con un ángulo de hasta 45 grados.' 
                      : 'Stab from the front. Heavy armor requires a direct center hit. Light armor allows up to a 45-degree angle hit.'}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Appearances */}
          <h2 style={{ color: 'var(--accent)', borderBottom: '1px solid var(--border)', paddingBottom: '10px', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Dices size={24} /> {lang === 'es' ? 'Variaciones Visuales (Appearances)' : 'Appearances'}
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '14px', marginBottom: '20px' }}>
            {lang === 'es' ? 'Existen unas 11 combinaciones de cuerpo y 5 de melena (Mane).' : 'There are 11 body and 5 mane color combinations. Here are some of them:'}
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '20px' }}>
            {[
              { src: '300px-BlackHorseGreyMane.png', name: 'Black / Grey Mane' },
              { src: '300px-BrownHorseGraySpotsTanMane.png', name: 'Brown / Tan Mane' },
              { src: '300px-DalmationHorseBlackMane.png', name: 'Dalmation / Black Mane' },
              { src: '300px-GreyHorseGreyMane.png', name: 'Grey / Grey Mane' },
              { src: '300px-LightBrownHorseBlondeMane.png', name: 'Light Brown / Blonde Mane' },
              { src: '300px-SpeckledTanHorseBrownMane.png', name: 'Speckled / Brown Mane' },
              { src: '300px-WhiteHorseBlackLegs.png', name: 'White / Black Legs' },
              { src: '300px-WhiteHorseBlackMane.png', name: 'White / Black Mane' },
            ].map(horse => (
              <div key={horse.name} style={{ background: 'var(--bg-hover)', borderRadius: '8px', border: '1px solid var(--border)', overflow: 'hidden' }}>
                <img src={`/mounts/${horse.src}`} alt={horse.name} style={{ width: '100%', display: 'block', borderBottom: '1px solid var(--border)' }} onError={(e) => e.currentTarget.style.display='none'} />
                <div style={{ padding: '10px', textAlign: 'center', fontSize: '12px', color: 'var(--text-main)' }}>{horse.name}</div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};
