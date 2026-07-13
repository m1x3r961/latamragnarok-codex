import React from 'react';
import { ArrowLeft, Swords, Shield, AlertTriangle, Users, Target, Zap } from 'lucide-react';

interface Props {
  onBack: () => void;
  lang: 'es' | 'en';
}

export const Combat: React.FC<Props> = ({ onBack, lang }) => {
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
        <div style={{ height: '250px', backgroundImage: 'url(/guides/combat.png)', backgroundSize: 'cover', backgroundPosition: 'center 20%', position: 'relative' }}>
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, var(--bg-main) 0%, rgba(0,0,0,0.4) 100%)' }}></div>
          <h1 style={{ position: 'absolute', bottom: '20px', left: '30px', fontSize: '42px', color: 'white', textShadow: '0 2px 10px rgba(0,0,0,0.8)', margin: 0, display: 'flex', alignItems: 'center', gap: '15px' }}>
            <Swords size={40} color="var(--accent)" /> {lang === 'es' ? 'Combate Cuerpo a Cuerpo' : 'Melee Combat'}
          </h1>
        </div>

        <div style={{ padding: '40px' }}>
          <p style={{ fontSize: '18px', color: 'var(--text-main)', lineHeight: '1.6', marginBottom: '40px' }}>
            {lang === 'es' 
              ? 'El combate en Gloria Victis se basa en la habilidad del jugador (non-target), utilizando ataques direccionales y bloqueos. Esta guía explica los principios básicos del combate cuerpo a cuerpo y la interfaz.'
              : 'Melee combat in Gloria Victis is skill based, non-target combat with directional attacks and blocks. This page explains the basic principles of melee combat.'}
          </p>

          {/* Modo de Combate */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '30px', marginBottom: '40px' }}>
            <div style={{ flex: '1 1 400px' }}>
              <h2 style={{ color: 'var(--accent)', borderBottom: '1px solid var(--border)', paddingBottom: '10px', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Target size={24} /> {lang === 'es' ? 'Modo de Combate' : 'Combat Mode'}
              </h2>
              <ul style={{ color: 'var(--text-muted)', paddingLeft: '20px', lineHeight: '1.6' }}>
                <li>{lang === 'es' ? 'Entras en combate al atacar, bloquear o recibir daño.' : 'Being in combat mode includes swinging your weapon, attacking, taking damage, and blocking.'}</li>
                <li>{lang === 'es' ? 'No puedes correr (sprintar) mientras estás en este modo.' : 'You cannot sprint in combat mode.'}</li>
                <li>{lang === 'es' ? 'La vida y estamina se regeneran más lento (o no se regeneran si atacas/bloqueas activamente).' : 'Health and stamina regenerate slower in combat mode (or none at all if active).'}</li>
                <li>{lang === 'es' ? 'Toma 3 segundos salir del combate (o 2s con la habilidad Survival Instinct).' : 'It takes 3 seconds to leave combat mode (2s with Survival Instinct ability).'}</li>
              </ul>
            </div>
            <div style={{ flex: '0 1 350px', background: 'rgba(0,0,0,0.3)', borderRadius: '8px', padding: '15px', border: '1px solid var(--border)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <img src="/combat/combatmode.png" alt="Combat Mode" style={{ width: '100%', borderRadius: '4px', border: '1px solid var(--accent)' }} onError={(e) => e.currentTarget.style.display='none'} />
              <p style={{ textAlign: 'center', color: 'var(--secondary)', fontSize: '12px', marginTop: '10px' }}>
                {lang === 'es' ? 'Indicador de modo combate cruzado en rojo.' : 'Red crossed indicator for combat mode.'}
              </p>
            </div>
          </div>

          {/* Indicadores de Ataque */}
          <h2 style={{ color: 'var(--accent)', borderBottom: '1px solid var(--border)', paddingBottom: '10px', marginBottom: '20px' }}>
            {lang === 'es' ? 'Fuerza de Ataque' : 'Attack Strength'}
          </h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '20px', lineHeight: '1.6' }}>
            {lang === 'es' 
              ? 'Mantén pulsado el botón de ataque para ver cómo se llena el indicador. Un ataque más fuerte hace más daño, pero un ataque rápido puede ser útil. Si el ataque llega al máximo, se mantendrá ahí un momento antes de volver a bajar (pasarse de tiempo da como resultado un ataque débil).'
              : 'Hold down the attack button to see the indicator fill up. A stronger attack deals more damage. If held too long, it will revert to a weak attack.'}
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginBottom: '40px' }}>
            <div style={{ background: 'var(--bg-hover)', borderRadius: '8px', padding: '15px', border: '1px solid var(--border)', textAlign: 'center' }}>
              <img src="/combat/weaking.png" style={{ height: '60px', margin: '0 auto 15px' }} onError={(e) => e.currentTarget.style.display='none'} />
              <h3 style={{ color: '#9ca3af', marginBottom: '10px' }}>{lang === 'es' ? 'Ataque Débil (Blanco)' : 'Weak Attack (White)'}</h3>
              <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
                {lang === 'es' ? 'Ocurre por falta de estamina, por soltar el click rápido o por sostener el ataque demasiado tiempo. Si el enemigo lo bloquea, serás penalizado (stagger).' : 'Happens when out of stamina, quick clicking, or holding too long. If blocked, you will be staggered.'}
              </p>
            </div>
            <div style={{ background: 'var(--bg-hover)', borderRadius: '8px', padding: '15px', border: '1px solid var(--border)', textAlign: 'center' }}>
              <img src="/combat/mediumattack.png" style={{ height: '60px', margin: '0 auto 15px' }} onError={(e) => e.currentTarget.style.display='none'} />
              <h3 style={{ color: '#10b981', marginBottom: '10px' }}>{lang === 'es' ? 'Ataque Medio (Verde)' : 'Medium Attack (Green)'}</h3>
              <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
                {lang === 'es' ? 'Ataque estándar. Hace daño normal y no tiene penalización de bloqueo.' : 'Standard attack. Normal damage, no block penalty.'}
              </p>
            </div>
            <div style={{ background: 'var(--bg-hover)', borderRadius: '8px', padding: '15px', border: '1px solid var(--border)', textAlign: 'center' }}>
              <img src="/combat/fullattack.png" style={{ height: '60px', margin: '0 auto 15px' }} onError={(e) => e.currentTarget.style.display='none'} />
              <h3 style={{ color: '#fbbf24', marginBottom: '10px' }}>{lang === 'es' ? 'Ataque Fuerte (Dorado)' : 'Strong Attack (Gold)'}</h3>
              <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
                {lang === 'es' ? 'Hace el mayor daño e interrumpirá los ataques del enemigo.' : 'Deals max damage and will interrupt an enemy\'s attack.'}
              </p>
            </div>
          </div>

          {/* Bloqueo y Perfect Blocks */}
          <div style={{ display: 'flex', gap: '30px', flexWrap: 'wrap', marginBottom: '40px', background: 'rgba(255,255,255,0.02)', padding: '25px', borderRadius: '8px', border: '1px solid var(--border)' }}>
            <div style={{ flex: '1 1 400px' }}>
              <h2 style={{ color: 'var(--accent)', marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Shield size={24} /> {lang === 'es' ? 'Bloqueos e Indicadores' : 'Blocks and Indicators'}
              </h2>
              <p style={{ color: 'var(--text-muted)', marginBottom: '15px', lineHeight: '1.6' }}>
                {lang === 'es' ? 'El indicador de bloqueo te muestra de dónde viene el ataque. En rojo significa que no lo estás bloqueando correctamente. En verde brillante significa que sí lo vas a bloquear.' : 'The block indicator tells the direction of incoming attacks. Red means unblocked, green means correctly blocked.'}
              </p>
              <h3 style={{ color: 'var(--text-main)', marginTop: '20px', marginBottom: '10px' }}>{lang === 'es' ? 'Perfect Blocks (Bloqueo Perfecto)' : 'Perfect Blocks'}</h3>
              <p style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>
                {lang === 'es' ? 'Un bloqueo perfecto ocurre si levantas el bloqueo justo antes del impacto (dentro de los últimos 300ms). Esto gasta mucha menos "Resistencia de Bloqueo" de tu arma o escudo en comparación a ser una tortuga (mantener el bloqueo presionado).' : 'A perfect block happens when blocking within 300ms of the strike. This saves massive amounts of Shield/Weapon Block Resistance.'}
              </p>
            </div>
            <div style={{ flex: '0 1 300px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <img src="/combat/centerblock.png" alt="Green Block" style={{ width: '100%', borderRadius: '4px', border: '1px solid #10b981' }} onError={(e) => e.currentTarget.style.display='none'} />
              <img src="/combat/Redblock.png" alt="Red Block" style={{ width: '100%', borderRadius: '4px', border: '1px solid #ef4444' }} onError={(e) => e.currentTarget.style.display='none'} />
            </div>
          </div>

          {/* Movimientos Especiales y Feints */}
          <h2 style={{ color: 'var(--accent)', borderBottom: '1px solid var(--border)', paddingBottom: '10px', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Zap size={24} /> {lang === 'es' ? 'Movimientos Especiales y Feints' : 'Special Moves & Feints'}
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '40px' }}>
            <div style={{ padding: '15px', background: 'rgba(255,255,255,0.02)', borderRadius: '8px' }}>
              <h4 style={{ color: 'var(--text-main)', marginBottom: '5px' }}>{lang === 'es' ? 'Chamber (Parry)' : 'Chamber (Parry)'}</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '14px', lineHeight: '1.5' }}>
                {lang === 'es' ? 'Para hacer un Chamber, inicia el mismo ataque direccional que tu enemigo justo antes de que él impacte. Esto cancela su ataque y te deja asestar el tuyo, sin consumir resistencia de bloqueo.' : 'Start an identical directional attack right before the enemy hits you. This cancels their attack and lets yours hit without draining block resistance.'}
              </p>
            </div>
            <div style={{ padding: '15px', background: 'rgba(255,255,255,0.02)', borderRadius: '8px' }}>
              <h4 style={{ color: 'var(--text-main)', marginBottom: '5px' }}>{lang === 'es' ? 'Kick (Patada) y Shield Bash' : 'Kick & Shield Bash'}</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '14px', lineHeight: '1.5' }}>
                {lang === 'es' ? 'Usa la patada (Q) para aturdir a un enemigo que se la pasa bloqueando. El Shield Bash hace lo mismo pero con un escudo.' : 'Use kick (Q) to stun a blocking enemy. Shield Bash does the same but requires a shield and ability.'}
              </p>
            </div>
            <div style={{ padding: '15px', background: 'rgba(255,255,255,0.02)', borderRadius: '8px' }}>
              <h4 style={{ color: 'var(--text-main)', marginBottom: '5px' }}>{lang === 'es' ? 'Feinting (Amagues)' : 'Feinting'}</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '14px', lineHeight: '1.5' }}>
                {lang === 'es' ? 'Inicia un ataque y cancélalo rápidamente (con click derecho o botón de cancelar). Gasta 5 estamina y confunde al enemigo para que bloquee en falso.' : 'Queue an attack and cancel it. Costs 5 stamina and tricks the enemy into blocking.'}
              </p>
            </div>
            <div style={{ padding: '15px', background: 'rgba(255,255,255,0.02)', borderRadius: '8px' }}>
              <h4 style={{ color: 'var(--text-main)', marginBottom: '5px' }}>{lang === 'es' ? 'Stun vs Stagger' : 'Stun vs Stagger'}</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '14px', lineHeight: '1.5' }}>
                {lang === 'es' ? 'Un Stun (Aturdimiento) te inmoviliza por completo. Un Stagger te deja moverte pero no atacar/bloquear. La habilidad "Unstoppable" cambia los stuns por staggers.' : 'Stun immobilizes you completely. Stagger lets you move but not attack/block.'}
              </p>
            </div>
          </div>

          {/* Daño Aliado */}
          <div style={{ background: 'rgba(220, 38, 38, 0.05)', border: '1px solid var(--accent)', borderRadius: '8px', padding: '25px', display: 'flex', gap: '30px', alignItems: 'center', marginBottom: '40px', flexWrap: 'wrap' }}>
            <div style={{ flex: '1 1 300px' }}>
              <h2 style={{ color: 'var(--accent)', marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <AlertTriangle size={24} /> {lang === 'es' ? 'Ally Damage Debuff (Penalización Aliada)' : 'Ally Damage Debuff'}
              </h2>
              <p style={{ color: 'var(--text-muted)', lineHeight: '1.6', marginBottom: '10px' }}>
                {lang === 'es' ? '¡NO ATAQUES A TRAVÉS DE TUS ALIADOS! Si tu arma atraviesa la zona de un aliado antes de golpear al enemigo:' : 'DO NOT SWING THROUGH ALLIES! If you hit an ally before an enemy:'}
              </p>
              <ul style={{ color: 'var(--text-muted)', paddingLeft: '20px', lineHeight: '1.6' }}>
                <li>{lang === 'es' ? 'Armas de 1 mano: El daño del golpe se reduce un 70%.' : '1H Weapons: Damage is reduced by 70%.'}</li>
                <li>{lang === 'es' ? 'Armas de 2 manos: Consume un "Cleave", golpeando un enemigo menos en ese swing.' : '2H Weapons: Consumes a cleave stack, hitting one less enemy.'}</li>
              </ul>
              <p style={{ color: 'var(--text-main)', fontWeight: 'bold', marginTop: '10px' }}>
                {lang === 'es' ? 'Mantén tu distancia de tus aliados para dar golpes limpios.' : 'Keep your distance from allies for clean max damage hits.'}
              </p>
            </div>
            <div style={{ flex: '0 1 300px' }}>
              <img src="/combat/allydamage.png" alt="Ally Damage" style={{ width: '100%', borderRadius: '4px', border: '1px solid var(--accent)' }} onError={(e) => e.currentTarget.style.display='none'} />
            </div>
          </div>

          {/* Consejos Combate Masivo */}
          <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '8px', padding: '30px' }}>
            <h2 style={{ color: 'var(--accent)', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Users size={24} /> {lang === 'es' ? 'Consejos de Combate Masivo para el Gremio' : 'Mass Combat Tips for the Guild'}
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
              <ul style={{ color: 'var(--text-muted)', paddingLeft: '20px', lineHeight: '1.6', margin: 0, display: 'flex', flexDirection: 'column', gap: '15px' }}>
                <li><strong>{lang === 'es' ? 'Defender es más fácil:' : 'Defending is easier:'}</strong> {lang === 'es' ? 'Puedes ganar con menos gente usando guardias, balistas, aceite y cuellos de botella.' : 'You can win with fewer people using guards, chokepoints and oil.'}</li>
                <li><strong>{lang === 'es' ? '¡Presiona la W!:' : 'Hold W for the win:'}</strong> {lang === 'es' ? 'Una fuerza implacable que avanza rompe la moral enemiga. Si están retrocediendo, estás ganando.' : 'A relentless force breaks morale. If they backpedal, you win.'}</li>
                <li><strong>{lang === 'es' ? 'No persigas Escuderos:' : 'Don\'t chase shieldmen:'}</strong> {lang === 'es' ? 'Solo te harán perder el tiempo separándote de tu grupo.' : 'They will draw you off and waste your time.'}</li>
                <li><strong>{lang === 'es' ? 'Mantente Agrupado:' : 'Stay Grouped:'}</strong> {lang === 'es' ? 'No vayas goteando uno a uno a la pelea. Mantente con tu equipo. Mira el mapa.' : 'Don\'t trickle in. Stay with your party. Look at your map.'}</li>
                <li><strong>{lang === 'es' ? 'Usa el Entorno:' : 'Use terrain:'}</strong> {lang === 'es' ? 'Crea embudos (chokepoints) y aprovecha las zonas altas.' : 'Create chokepoints and use the high ground.'}</li>
              </ul>
              <ul style={{ color: 'var(--text-muted)', paddingLeft: '20px', lineHeight: '1.6', margin: 0, display: 'flex', flexDirection: 'column', gap: '15px' }}>
                <li><strong>{lang === 'es' ? 'Lleva Logística:' : 'Prepare Logistics:'}</strong> {lang === 'es' ? 'Trae tiendas de campaña (respawns), vendas y comida a cada pelea. ¡Compártelos!' : 'Bring tents, bandages, and barricades. Share with allies.'}</li>
                <li><strong>{lang === 'es' ? 'Conoce tu Rol:' : 'Know your role:'}</strong> {lang === 'es' ? 'Si eres médico, mantente vivo. Si eres tanque, haz espacio. Haz lo tuyo.' : 'If you\'re a medic, stay alive. If you\'re a tank, make space.'}</li>
                <li><strong>{lang === 'es' ? 'Gestiona tu Estamina:' : 'Manage Stamina:'}</strong> {lang === 'es' ? 'Morir por falta de estamina es común. Está bien alejarse un momento para curarse y regenerar.' : 'Running out of stamina gets you killed. Fall back to heal.'}</li>
                <li><strong>{lang === 'es' ? 'Cambia de Objetivo:' : 'Change Targets:'}</strong> {lang === 'es' ? 'Esto no es una película 1v1. Es una pelea campal. Pega a muchos y no dejes que te hagan "focus".' : 'This isn\'t a 1v1 movie. Brawl, hit everyone, don\'t get focused.'}</li>
                <li><strong>{lang === 'es' ? 'Cuidado con las trampas:' : 'Know Bait:'}</strong> {lang === 'es' ? 'Los enemigos intentarán aislarte. No piques.' : 'Enemies will try to lure you out. Don\'t take the bait.'}</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
