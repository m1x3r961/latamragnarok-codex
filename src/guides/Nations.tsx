import React from 'react';
import { ArrowLeft, Globe, Users, Scale, Clock, Server, AlertOctagon, Flag } from 'lucide-react';

interface Props {
  onBack: () => void;
  lang: 'es' | 'en';
}

export const Nations: React.FC<Props> = ({ onBack, lang }) => {
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
        <div style={{ height: '250px', backgroundImage: 'url(/guides/nations.png)', backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative' }}>
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, var(--bg-main) 0%, rgba(0,0,0,0.4) 100%)' }}></div>
          <h1 style={{ position: 'absolute', bottom: '20px', left: '30px', fontSize: '42px', color: 'white', textShadow: '0 2px 10px rgba(0,0,0,0.8)', margin: 0, display: 'flex', alignItems: 'center', gap: '15px' }}>
            <Globe size={40} color="var(--accent)" /> {lang === 'es' ? 'Guía de Naciones' : 'Nations Guide'}
          </h1>
        </div>

        <div style={{ padding: '40px' }}>
          {/* Overview */}
          <div style={{ marginBottom: '40px' }}>
            <p style={{ fontSize: '18px', color: 'var(--text-main)', lineHeight: '1.6', marginBottom: '20px' }}>
              {lang === 'es' 
                ? 'Gloria Victis tiene tres naciones luchando por el control de Stoneholm. Tus compañeros de nación son tus aliados naturales: lucharán, te curarán y morirán a tu lado. ¡Trabajar en equipo es clave!'
                : 'There are three nations fighting for control of Stoneholm. Nation mates are your natural allies who will fight, heal, and die beside you. Teamwork is key!'}
            </p>
            <div style={{ background: 'rgba(255,255,255,0.02)', padding: '15px', borderRadius: '8px', borderLeft: '4px solid var(--accent)' }}>
              <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '15px', lineHeight: '1.6' }}>
                <strong>{lang === 'es' ? 'Bloqueo de Nación:' : 'Nation Lock:'}</strong> {lang === 'es' 
                  ? 'Puedes cambiar libremente de nación hasta alcanzar el nivel 70 con algún personaje. A partir de ahí, TODA TU CUENTA quedará bloqueada en esa nación. Llegar a 70 toma solo unos días, ¡así que tenlo en cuenta!' 
                  : 'You may freely change nations until reaching level 70 on any character. After that, your entire account is locked to that nation.'}
                <br/>
                <strong>{lang === 'es' ? 'Sin Estadísticas Raciales:' : 'No Racial Stats:'}</strong> {lang === 'es' 
                  ? 'No hay ventajas pasivas, efectos ni buffs basados en tu nación o raza. Todos son iguales mecánicamente.' 
                  : 'There are no race or nation based traits, buffs, or effects.'}
              </p>
            </div>
          </div>

          {/* Las 3 Naciones */}
          <h2 style={{ color: 'var(--accent)', borderBottom: '1px solid var(--border)', paddingBottom: '10px', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Flag size={24} /> {lang === 'es' ? 'Las Naciones' : 'The Nations'}
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', marginBottom: '50px' }}>
            <div style={{ background: 'rgba(59, 130, 246, 0.1)', border: '1px solid #3b82f6', borderRadius: '8px', padding: '20px' }}>
              <h3 style={{ color: '#60a5fa', marginBottom: '10px' }}>The Ismirs</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '14px', lineHeight: '1.5' }}>
                {lang === 'es' ? 'Ocupan el Norte y Oeste. Sus colores son azul y blanco, con una serpiente de símbolo. Inspirados en vikingos y daneses.' : 'Occupy the North and West. Blue and white colors, serpent symbol. Based on Danes and Vikings.'}
              </p>
            </div>
            <div style={{ background: 'rgba(16, 185, 129, 0.1)', border: '1px solid #10b981', borderRadius: '8px', padding: '20px' }}>
              <h3 style={{ color: '#34d399', marginBottom: '10px' }}>The Midlanders</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '14px', lineHeight: '1.5' }}>
                {lang === 'es' ? 'Vienen del Norte y Este. Sus colores son rojo y verde, con una torre y espada. Inspirados en la Europa medieval continental.' : 'Hail from the north and east. Red and green colors, tower and sword symbol. Based on medieval continental Europe.'}
              </p>
            </div>
            <div style={{ background: 'rgba(217, 119, 6, 0.1)', border: '1px solid #f59e0b', borderRadius: '8px', padding: '20px' }}>
              <h3 style={{ color: '#fbbf24', marginBottom: '10px' }}>The Sangmar</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '14px', lineHeight: '1.5' }}>
                {lang === 'es' ? 'Ocupan el Sur. Sus colores son negro, dorado y morado, con el sol cenital de símbolo. Inspirados en romanos y bizantinos.' : 'Occupy the southern reaches. Black, gold, and purple colors, zenith sun symbol. Based on Roman and Byzantine empires.'}
              </p>
            </div>
          </div>

          {/* Balance y Underdog */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px', marginBottom: '50px' }}>
            <div style={{ flex: '1 1 500px' }}>
              <h2 style={{ color: 'var(--accent)', borderBottom: '1px solid var(--border)', paddingBottom: '10px', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Scale size={24} /> {lang === 'es' ? 'Balance y Underdog' : 'Balancing Player Population'}
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '14px', lineHeight: '1.6', marginBottom: '15px' }}>
                {lang === 'es' 
                  ? 'Gloria Victis equilibra el mundo abierto mediante el sistema "Underdog" (nación en desventaja). Si una nación tiene mucha desventaja, aparecerá un NPC "Mercenary Recruiter" permitiendo a jugadores de otras naciones cambiarse a la nación Underdog gratis. Estas naciones reciben bonos de oro y exp, además de dar menos Nation Points a los enemigos al morir.'
                  : 'The game uses the Underdog system to balance populations. If a nation is disadvantaged, a Mercenary Recruiter allows players to transfer TO it for free. Underdogs get bonus XP, gold, and give fewer points when killed.'}
              </p>
              <div style={{ background: 'rgba(220, 38, 38, 0.05)', padding: '15px', borderRadius: '8px', border: '1px solid #ef4444' }}>
                <h4 style={{ color: '#ef4444', margin: '0 0 10px 0' }}>{lang === 'es' ? '¡Es una calle de un solo sentido!' : 'It is a one-way street!'}</h4>
                <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '13px', lineHeight: '1.5' }}>
                  {lang === 'es' 
                    ? 'Es fácil transferirse HACIA una nación Underdog, pero es casi imposible SALIR de una (tienes que esperar que otra sea Underdog, o borrar todos tus personajes y reiniciar).'
                    : 'Transferring TO Underdog nations is easy, but transferring FROM them requires waiting for another nation to become Underdog or deleting all characters.'}
                </p>
              </div>
              <h3 style={{ color: 'var(--text-main)', marginTop: '20px', marginBottom: '10px' }}>{lang === 'es' ? 'Límites en Eventos (Valle de la Muerte)' : 'Event Limits'}</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '14px', lineHeight: '1.6' }}>
                {lang === 'es' 
                  ? 'Eventos como el "Valley of Death" se limitan en función de la nación con la segunda mayor cantidad de inscritos. Si Ismir tiene 13, Midlander 25 y Sangmar 9, el torneo capará a 13 por equipo. ¡Midland tendrá 12 personas en cola sin poder entrar!'
                  : 'Events like Valley Of Death cap party sizes based on the nation with the 2nd highest registration, preventing one nation from overrunning the event.'}
              </p>
            </div>
            
            <div style={{ flex: '0 1 350px' }}>
              <h2 style={{ color: 'var(--accent)', borderBottom: '1px solid var(--border)', paddingBottom: '10px', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Users size={24} /> {lang === 'es' ? 'Identificando Aliados' : 'Identifying Friendlies'}
              </h2>
              <div style={{ background: 'rgba(255,255,255,0.05)', padding: '15px', borderRadius: '8px', border: '1px solid var(--border)', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <img src="/nations/indicators.png" alt="Indicators" style={{ width: '100%', borderRadius: '4px', marginBottom: '15px' }} onError={(e) => e.currentTarget.style.display='none'} />
                <p style={{ textAlign: 'center', color: 'var(--text-muted)', fontSize: '13px', margin: 0 }}>
                  {lang === 'es' 
                    ? 'Aunque la armadura sea visualmente diferente por nación, en combates grandes puedes fijarte en los indicadores sobre la cabeza para reconocer aliados.'
                    : 'Look for the indicators over characters heads to quickly identify friendlies in mass combat.'}
                </p>
              </div>
            </div>
          </div>

          {/* Servidores, Cooldowns y Traidores */}
          <h2 style={{ color: 'var(--accent)', borderBottom: '1px solid var(--border)', paddingBottom: '10px', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Server size={24} /> {lang === 'es' ? 'Reglas del Servidor y Criminales' : 'Server Rules & Criminals'}
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
            
            {/* Cross-Server */}
            <div style={{ background: 'rgba(255,255,255,0.02)', padding: '20px', borderRadius: '8px', border: '1px solid var(--border)' }}>
              <h3 style={{ color: 'var(--text-main)', marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Globe size={18} /> {lang === 'es' ? 'Juego Cross-Server' : 'Cross-Server Play'}
              </h3>
              <ul style={{ color: 'var(--text-muted)', fontSize: '13px', paddingLeft: '20px', lineHeight: '1.6' }}>
                <li>{lang === 'es' ? 'Debes elegir un servidor "Principal" (Ej. Aquilla para NA/SA).' : 'You must choose a Main server (e.g. Aquilla).'}</li>
                <li>{lang === 'es' ? 'Si juegas en otro servidor y NO eres Underdog, recibes -50% de Vida/Estamina/Daño.' : 'Playing off-server gives a 50% debuff to HP/Stam/Dmg unless Underdog.'}</li>
                <li>{lang === 'es' ? 'No puedes lotear jugadores (pero a ti sí) ni pescar fuera de tu main server.' : 'Cannot loot players or fish off-server.'}</li>
                <li>{lang === 'es' ? 'El crafteo NO es afectado (buena táctica ir a farmear a otro lado).' : 'Crafting is NOT affected by changing servers.'}</li>
              </ul>
            </div>

            {/* Login Cooldowns */}
            <div style={{ background: 'rgba(255,255,255,0.02)', padding: '20px', borderRadius: '8px', border: '1px solid var(--border)' }}>
              <h3 style={{ color: 'var(--text-main)', marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Clock size={18} /> {lang === 'es' ? 'Login Cooldowns (Anti-Espías)' : 'Login Cooldowns'}
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '13px', lineHeight: '1.6' }}>
                {lang === 'es' 
                  ? 'Si tienes múltiples cuentas de distintas naciones en la misma PC, tendrás tiempos de espera para cambiar entre ellas. Si cometes faltas (abrir puertas al enemigo, abusar del /votespy, ser tóxico), los tiempos aumentan severamente hasta el baneo.'
                  : 'Playing multiple accounts on different nations from the same PC triggers login cooldowns. Trolling/Spying violations increase this to 12h-24h or a permanent ban.'}
              </p>
            </div>

            {/* Friendly Fire & Outlaws */}
            <div style={{ background: 'rgba(220, 38, 38, 0.05)', padding: '20px', borderRadius: '8px', border: '1px solid #ef4444' }}>
              <h3 style={{ color: '#ef4444', marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <AlertOctagon size={18} /> {lang === 'es' ? 'Fuego Amigo y Traidores' : 'Friendly Fire & Outlaws'}
              </h3>
              <p style={{ color: 'var(--text-main)', fontSize: '13px', lineHeight: '1.6', fontWeight: 'bold' }}>
                {lang === 'es' ? 'Jugar como un "Renegado/Outlaw" NO es viable en Gloria Victis. El sistema de traidores es de castigo.' : 'Playing as an outlaw is NOT a viable playstyle. It is a punishment system.'}
              </p>
              <ul style={{ color: 'var(--text-muted)', fontSize: '13px', paddingLeft: '20px', lineHeight: '1.6' }}>
                <li>{lang === 'es' ? 'Matar aliados te da marca de Criminal (Cráneo).' : 'Killing allies marks you as a Criminal (Skull).'}</li>
                <li>{lang === 'es' ? 'Cualquiera puede matarte sin penalidad.' : 'Anyone can kill you without penalty.'}</li>
                <li>{lang === 'es' ? 'Revives en la Isla del Traidor, no puedes usar tiendas ni lotear aliados.' : 'Respawn on Traitor Island, cannot use tents or loot.'}</li>
                <li>{lang === 'es' ? 'Revivir a un criminal, te vuelve criminal.' : 'Reviving a criminal marks you as one.'}</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
