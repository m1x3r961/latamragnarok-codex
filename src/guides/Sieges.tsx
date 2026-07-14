import React from 'react';
import { ArrowLeft, Swords, Map, Tent, Crosshair, AlertTriangle, ShieldAlert } from 'lucide-react';

interface Props {
  onBack: () => void;
  lang: 'es' | 'en';
}

export const Sieges: React.FC<Props> = ({ onBack, lang }) => {
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
        <div style={{ height: '250px', backgroundImage: 'url(/guides/siege.png)', backgroundColor: '#3f1818', backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative' }}>
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, var(--bg-main) 0%, rgba(0,0,0,0.4) 100%)' }}></div>
          <h1 style={{ position: 'absolute', bottom: '20px', left: '30px', fontSize: '42px', color: 'white', textShadow: '0 2px 10px rgba(0,0,0,0.8)', margin: 0, display: 'flex', alignItems: 'center', gap: '15px' }}>
            <Swords size={40} color="var(--accent)" /> {lang === 'es' ? 'Guía de Asedios (Sieges)' : 'Sieges Guide'}
          </h1>
        </div>

        <div style={{ padding: '40px' }}>
          {/* Overview */}
          <div style={{ marginBottom: '40px' }}>
            <p style={{ fontSize: '18px', color: 'var(--text-main)', lineHeight: '1.6', marginBottom: '30px' }}>
              {lang === 'es' 
                ? 'Los asedios son guerras a gran escala que ocurren en localizaciones de la nación y provincias de gremio, requiriendo grupos grandes y maquinaria de asedio (Siege Equipment).'
                : 'Sieges are organized warfare at nation and guild locations requiring large parties and siege equipment.'}
            </p>
          </div>

          {/* Indicadores del Mapa */}
          <h2 style={{ color: 'var(--accent)', borderBottom: '1px solid var(--border)', paddingBottom: '10px', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Map size={24} /> {lang === 'es' ? 'Indicadores del Mapa' : 'Map Indicators'}
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', marginBottom: '40px' }}>
            
            <div style={{ background: 'var(--bg-hover)', padding: '20px', borderRadius: '8px', border: '1px solid var(--border)', display: 'flex', gap: '15px', alignItems: 'flex-start' }}>
              <img src="/siege/trheatened.jpg" alt="Threatened" style={{ width: '40px', borderRadius: '4px' }} onError={(e) => e.currentTarget.style.display='none'} />
              <div>
                <h4 style={{ color: '#fbbf24', margin: '0 0 5px 0' }}>{lang === 'es' ? 'Threatened (Amenazado)' : 'Threatened'}</h4>
                <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '13px', lineHeight: '1.5' }}>
                  {lang === 'es' ? 'Varios enemigos cerca SIN maquinaria, o 1 enemigo con maquinaria lejos. ¡Aún puedes teletransportarte para defender!' : 'Enemies nearby without siege. Defenders can still teleport in.'}
                </p>
              </div>
            </div>

            <div style={{ background: 'var(--bg-hover)', padding: '20px', borderRadius: '8px', border: '1px solid var(--border)', display: 'flex', gap: '15px', alignItems: 'flex-start' }}>
              <img src="/siege/underattack.png" alt="Under Attack" style={{ width: '40px', borderRadius: '4px' }} onError={(e) => e.currentTarget.style.display='none'} />
              <div>
                <h4 style={{ color: '#f87171', margin: '0 0 5px 0' }}>{lang === 'es' ? 'Under Attack (Bajo Ataque)' : 'Under Attack'}</h4>
                <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '13px', lineHeight: '1.5' }}>
                  {lang === 'es' ? '1 enemigo muy cerca de los muros. YA NO puedes teletransportarte directamente.' : '1 enemy very close. Defenders cannot teleport in.'}
                </p>
              </div>
            </div>

            <div style={{ background: 'rgba(239, 68, 68, 0.1)', padding: '20px', borderRadius: '8px', border: '1px solid #ef4444', display: 'flex', gap: '15px', alignItems: 'flex-start' }}>
              <img src="/siege/undersiege.png" alt="Under Siege" style={{ width: '40px', borderRadius: '4px' }} onError={(e) => e.currentTarget.style.display='none'} />
              <div>
                <h4 style={{ color: '#ef4444', margin: '0 0 5px 0' }}>{lang === 'es' ? 'Under Siege (Asediado)' : 'Under Siege'}</h4>
                <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '13px', lineHeight: '1.5' }}>
                  {lang === 'es' ? '1 enemigo cerca CON maquinaria, o 3+ enemigos muy cerca. No puedes usar teletransporte.' : 'Enemies with siege or 3+ very close. No teleport allowed.'}
                </p>
              </div>
            </div>

          </div>

          {/* Unstuck, Puntos y Campamentos */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px', marginBottom: '50px' }}>
            <div style={{ flex: '1 1 450px' }}>
              <h2 style={{ color: 'var(--accent)', borderBottom: '1px solid var(--border)', paddingBottom: '10px', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Tent size={24} /> {lang === 'es' ? 'Campamentos y Puntos de Asedio' : 'Siege Camps & Points'}
              </h2>
              <ul style={{ color: 'var(--text-muted)', fontSize: '14px', paddingLeft: '20px', lineHeight: '1.6' }}>
                <li>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '5px' }}>
                    <img src="/siege/Siegecampicon.png" alt="Siege Camp" style={{ width: '20px' }} onError={(e) => e.currentTarget.style.display='none'} />
                    <strong style={{ color: 'var(--text-main)' }}>{lang === 'es' ? 'Siege Camps:' : 'Siege Camps:'}</strong>
                  </div>
                  {lang === 'es' ? 'Hay 2 a las afueras de cada castillo de nación. Aquí los atacantes generan maquinaria (menos el Warwolf). Tienen una defensa de fuego (Emperor\'s Flame).' : '2 outside every nation castle. Attackers spawn equipment here. Has Emperor\'s Flame defense.'}
                </li>
                <li style={{ marginTop: '10px' }}>
                  <strong style={{ color: 'var(--text-main)' }}>{lang === 'es' ? 'Siege Points:' : 'Siege Points:'}</strong> 
                  <br />
                  {lang === 'es' ? 'Se generan al estar en la zona del asedio a razón de 50 por minuto. Cada persona genera sus propios puntos.' : 'Generated by standing in siege area at 50 per minute. Personal to each player.'}
                </li>
                <li style={{ marginTop: '10px' }}>
                  <strong style={{ color: 'var(--text-main)' }}>{lang === 'es' ? 'Reglas de Maquinaria:' : 'Equipment Rules:'}</strong> 
                  <br />
                  {lang === 'es' ? 'Solo puedes sacar 1 máquina a la vez. Si sacas otra, la primera desaparece. Si la abandonan por 5 minutos, despawnea. El enemigo no puede robarla, solo destruirla.' : 'Spawn 1 piece at a time. Despawns if unattended for 5m. Enemies can destroy but not steal.'}
                </li>
              </ul>
            </div>

            <div style={{ flex: '0 1 350px' }}>
              <div style={{ background: 'rgba(255,255,255,0.02)', padding: '20px', borderRadius: '8px', border: '1px solid var(--border)', marginBottom: '20px' }}>
                <h3 style={{ color: 'var(--text-main)', marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <AlertTriangle size={18} /> {lang === 'es' ? 'Unstuck Defensivo' : 'Defensive Unstuck'}
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '13px', lineHeight: '1.6' }}>
                  {lang === 'es' 
                    ? 'Si llegas a caballo y la puerta está bloqueada, puedes usar el comando /unstuck en una zona segura cerca del muro. Tras 30 segundos te teletransportará dentro del castillo (si estás lo bastante cerca).'
                    : 'Use /unstuck command near a besieged castle to teleport inside after 30 seconds.'}
                </p>
              </div>
            </div>
          </div>

          {/* Maquinaria */}
          <h2 style={{ color: 'var(--accent)', borderBottom: '1px solid var(--border)', paddingBottom: '10px', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Crosshair size={24} /> {lang === 'es' ? 'Arsenal de Asedio' : 'Siege Equipment'}
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginBottom: '50px' }}>
            
            <div style={{ background: 'var(--bg-hover)', padding: '15px', borderRadius: '8px' }}>
              <h4 style={{ color: 'var(--text-main)', margin: '0 0 5px 0' }}>Battering Rams (Arietes)</h4>
              <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '13px' }}>
                {lang === 'es' ? 'Grandes (400 pts, mucha vida, no pasan por puertas interiores) y Pequeños (200 pts, pasan por puertas). Rompen puertas, rastrillos (portcullises) y torres.' : 'Large (400 pts, high hp) and Small (200 pts, fits doors). Break gates and towers.'}
              </p>
            </div>
            
            <div style={{ background: 'var(--bg-hover)', padding: '15px', borderRadius: '8px' }}>
              <h4 style={{ color: 'var(--text-main)', margin: '0 0 5px 0' }}>Catapult (Catapulta)</h4>
              <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '13px' }}>
                {lang === 'es' ? '350 pts. Destruye muros y balistas. Dispara piedras o fuego (usa Espacio/Jump para cambiar munición). Precisión media.' : '350 pts. Break walls/ballistas. Press Jump to alternate stone/fire shots.'}
              </p>
            </div>
            
            <div style={{ background: 'var(--bg-hover)', padding: '15px', borderRadius: '8px' }}>
              <h4 style={{ color: 'var(--text-main)', margin: '0 0 5px 0' }}>Mantlet</h4>
              <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '13px' }}>
                {lang === 'es' ? '200 pts. Muros móviles para dar cobertura a la infantería o maquinas importantes.' : '200 pts. Moveable walls for cover.'}
              </p>
            </div>
            
            <div style={{ background: 'var(--bg-hover)', padding: '15px', borderRadius: '8px' }}>
              <h4 style={{ color: 'var(--accent)', margin: '0 0 5px 0' }}>Trebuchet & Warwolf</h4>
              <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '13px' }}>
                {lang === 'es' ? 'Trebuchet (400 pts): Defensivo, se coloca dentro. Warwolf: Super-ofensivo, masivo rango, solo spawnea en Siege Tents.' : 'Trebuchet (400) for defense. Warwolf has massive range, offense only from tents.'}
              </p>
            </div>
            
            <div style={{ background: 'var(--bg-hover)', padding: '15px', borderRadius: '8px', border: '1px solid #10b981' }}>
              <h4 style={{ color: '#10b981', margin: '0 0 5px 0' }}>Ballista</h4>
              <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '13px' }}>
                {lang === 'es' ? 'Defensiva. Aparece en torres lvl 2+. ¡Hace 300 de daño a jugadores! Invulnerable a flechas hasta bajar del 40% de vida. Respawn 8 mins.' : 'Defensive on lvl 2+ towers. Does 300 dmg. Invulnerable to arrows until <40% hp.'}
              </p>
            </div>
          </div>

          {/* Tips Estratégicos */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '30px' }}>
            
            <div style={{ background: 'rgba(239, 68, 68, 0.05)', padding: '25px', borderRadius: '8px', border: '1px solid #ef4444' }}>
              <h3 style={{ color: '#ef4444', margin: '0 0 15px 0', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Swords size={20} /> {lang === 'es' ? 'Tips para Atacantes' : 'Attacking Tips'}
              </h3>
              <ul style={{ color: 'var(--text-main)', fontSize: '13px', paddingLeft: '20px', lineHeight: '1.6', margin: 0 }}>
                <li>{lang === 'es' ? 'Atacar SIEMPRE es más difícil que defender. Ellos tienen guardias, balistas y altura.' : 'Attacking is harder than defending. Defenders have guards, ballistas, elevation.'}</li>
                <li>{lang === 'es' ? 'Los guardias en Castillos cerca de la capital y en los Templos son MUY fuertes. Destruye sus casas (guardhouses) para que dejen de respawnear.' : 'Temple guards are very strong. Destroy guardhouses to stop respawns.'}</li>
                <li>{lang === 'es' ? 'Corta el acceso tomando las "banderas pequeñas" (minas, granjas) alrededor, para que no puedan teletransportarse a ellas.' : 'Capture small flags to prevent enemy teleports.'}</li>
                <li>{lang === 'es' ? 'No descubras tu posición hasta que estén listos. Un buen scout no enciende las banderas al acercarse.' : 'Use stealth. Don\'t light up flags early. Good scouts avoid detection zones.'}</li>
              </ul>
            </div>

            <div style={{ background: 'rgba(16, 185, 129, 0.05)', padding: '25px', borderRadius: '8px', border: '1px solid #10b981' }}>
              <h3 style={{ color: '#10b981', margin: '0 0 15px 0', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <ShieldAlert size={20} /> {lang === 'es' ? 'Tips para Defensores' : 'Defending Tips'}
              </h3>
              <ul style={{ color: 'var(--text-main)', fontSize: '13px', paddingLeft: '20px', lineHeight: '1.6', margin: 0 }}>
                <li>{lang === 'es' ? 'Llega temprano. Si ves granjas encenderse en el mapa, ve al castillo rápido. Si llegas tarde será inútil.' : 'Get there early. Watch small flags lighting up.'}</li>
                <li>{lang === 'es' ? 'Usa tus balistas para destruir la maquinaria enemiga. No dejes que la amontonen.' : 'Use Ballistas to destroy incoming siege equipment.'}</li>
                <li>{lang === 'es' ? 'Destruye sus Tents (tiendas de asedio) y mata a sus médicos (medics) para arruinarles la logística.' : 'Destroy Tents and target medics to ruin their logistics.'}</li>
                <li>{lang === 'es' ? 'No te encierres como tortuga. A veces es mejor salir (rush out) para empujarlos. Así te darán 3 minutos para reparar las murallas (Architect\'s table).' : 'Don\'t turtle. Rushing out pushes them back and gives 3 mins to rebuild walls.'}</li>
              </ul>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};
