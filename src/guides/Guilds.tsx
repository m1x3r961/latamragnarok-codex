import React from 'react';
import { ArrowLeft, Shield, Users, Award, TrendingUp, PiggyBank, Flag, Key, Handshake } from 'lucide-react';

interface Props {
  onBack: () => void;
  lang: 'es' | 'en';
}

export const Guilds: React.FC<Props> = ({ onBack, lang }) => {
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
        <div style={{ height: '250px', backgroundImage: 'url(/guides/guilds.png)', backgroundColor: '#1a1a1a', backgroundSize: 'cover', backgroundPosition: 'center 30%', position: 'relative' }}>
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, var(--bg-main) 0%, rgba(0,0,0,0.4) 100%)' }}></div>
          <h1 style={{ position: 'absolute', bottom: '20px', left: '30px', fontSize: '42px', color: 'white', textShadow: '0 2px 10px rgba(0,0,0,0.8)', margin: 0, display: 'flex', alignItems: 'center', gap: '15px' }}>
            <Shield size={40} color="var(--accent)" /> {lang === 'es' ? 'Guía de Gremios (Guilds)' : 'Guilds Guide'}
          </h1>
        </div>

        <div style={{ padding: '40px' }}>
          {/* Overview */}
          <div style={{ marginBottom: '40px' }}>
            <p style={{ fontSize: '18px', color: 'var(--text-main)', lineHeight: '1.6', marginBottom: '20px' }}>
              {lang === 'es' 
                ? 'Los gremios son grupos de jugadores con una causa común que juntan recursos para lograr grandes metas. Se identifican en el campo de batalla por su heráldica única (escudo).'
                : 'Guilds are groups of players with a common cause that pool resources together to achieve goals. Members are identified by their unique heraldry.'}
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', background: 'rgba(255,255,255,0.02)', padding: '20px', borderRadius: '8px', border: '1px solid var(--border)' }}>
              <div>
                <h4 style={{ color: 'var(--accent)', margin: '0 0 10px 0' }}>{lang === 'es' ? 'Fundar un Gremio' : 'Form a Guild'}</h4>
                <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '14px', lineHeight: '1.5' }}>
                  {lang === 'es' ? 'Presiona [G] y escribe un nombre apropiado.' : 'Press [G] and type in a lore appropriate name.'}
                </p>
              </div>
              <div>
                <h4 style={{ color: 'var(--accent)', margin: '0 0 10px 0' }}>{lang === 'es' ? 'Unirse a un Gremio' : 'Join a Guild'}</h4>
                <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '14px', lineHeight: '1.5' }}>
                  {lang === 'es' ? 'Visita el Tablón de Reclutamiento (Recruitment Board) en la capital o acepta invitaciones de otros.' : 'Visit the Guild Recruitment Board in the capital city or accept an invite.'}
                </p>
              </div>
              <div>
                <h4 style={{ color: 'var(--accent)', margin: '0 0 10px 0' }}>{lang === 'es' ? 'Salir de un Gremio' : 'Leave a Guild'}</h4>
                <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '14px', lineHeight: '1.5' }}>
                  {lang === 'es' ? 'Presiona [G], ve a "Members" y haz clic en la puerta roja abajo a la izquierda.' : 'Press [G], select Members, click the red door icon.'}
                </p>
              </div>
            </div>
          </div>

          {/* Ranks */}
          <h2 style={{ color: 'var(--accent)', borderBottom: '1px solid var(--border)', paddingBottom: '10px', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Users size={24} /> {lang === 'es' ? 'Rangos y Permisos' : 'Ranks & Permissions'}
          </h2>
          <div style={{ marginBottom: '40px' }}>
            <p style={{ color: 'var(--text-muted)', fontSize: '14px', lineHeight: '1.6', marginBottom: '20px' }}>
              {lang === 'es' ? 'Cada rango tiene permisos fijos. No se pueden personalizar.' : 'Each rank has its own permissions. They are not customizable.'}
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
              <div style={{ background: 'var(--bg-hover)', padding: '15px', borderRadius: '8px' }}>
                <h4 style={{ color: 'var(--text-main)', margin: '0 0 5px 0' }}>{lang === 'es' ? 'Recluta (Recruit)' : 'Recruit'}</h4>
                <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '13px' }}>{lang === 'es' ? 'Sin permisos.' : 'No permissions.'}</p>
              </div>
              <div style={{ background: 'var(--bg-hover)', padding: '15px', borderRadius: '8px' }}>
                <h4 style={{ color: 'var(--text-main)', margin: '0 0 5px 0' }}>{lang === 'es' ? 'Miembro (Member)' : 'Member'}</h4>
                <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '13px' }}>{lang === 'es' ? 'Abre puertas de almacén en provincias del gremio.' : 'Open Storehouse doors at guild provinces.'}</p>
              </div>
              <div style={{ background: 'var(--bg-hover)', padding: '15px', borderRadius: '8px' }}>
                <h4 style={{ color: 'var(--text-main)', margin: '0 0 5px 0' }}>{lang === 'es' ? 'Veterano (Veteran)' : 'Veteran'}</h4>
                <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '13px' }}>{lang === 'es' ? 'Igual que Miembro. Si el gremio es Nivel 80+, puede abrir puertas traseras de castillos de la nación (Volkvar, etc).' : 'Member perks + Can open doors at Nation locations if guild is lvl 80+.'}</p>
              </div>
              <div style={{ background: 'var(--bg-hover)', padding: '15px', borderRadius: '8px' }}>
                <h4 style={{ color: '#60a5fa', margin: '0 0 5px 0' }}>{lang === 'es' ? 'Oficial (Officer)' : 'Officer'}</h4>
                <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '13px' }}>{lang === 'es' ? 'Invita/expulsa/asciende miembros. Coloca tokens de reclamo en provincias.' : 'Promote/invite/kick members. Place tokens on provinces.'}</p>
              </div>
              <div style={{ background: 'var(--bg-hover)', padding: '15px', borderRadius: '8px' }}>
                <h4 style={{ color: '#fbbf24', margin: '0 0 5px 0' }}>{lang === 'es' ? 'Vice Líder' : 'Vice Leader'}</h4>
                <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '13px' }}>{lang === 'es' ? 'Retira dinero del banco. Usa Freebuilding. Edita permisos de provincia y mensaje del gremio.' : 'Withdraw money, access Freebuilding, edit guild info and permissions.'}</p>
              </div>
              <div style={{ background: 'var(--bg-hover)', padding: '15px', borderRadius: '8px', border: '1px solid var(--accent)' }}>
                <h4 style={{ color: 'var(--accent)', margin: '0 0 5px 0' }}>Líder</h4>
                <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '13px' }}>{lang === 'es' ? 'Todos los permisos anteriores + Edición de la Heráldica (Escudo).' : 'All of the above + Edit guild heraldry.'}</p>
              </div>
            </div>
          </div>

          {/* Sistema de Puntos y Nivel */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '30px', marginBottom: '50px' }}>
            <div style={{ flex: '1 1 450px' }}>
              <h2 style={{ color: 'var(--accent)', borderBottom: '1px solid var(--border)', paddingBottom: '10px', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <TrendingUp size={24} /> {lang === 'es' ? 'Nivel y Puntos de Gremio' : 'Guild Level & Points'}
              </h2>
              <ul style={{ color: 'var(--text-muted)', fontSize: '14px', paddingLeft: '20px', lineHeight: '1.6' }}>
                <li><strong>{lang === 'es' ? 'Nivel Máximo (100):' : 'Max Level (100):'}</strong> {lang === 'es' ? 'El nivel determina la capacidad de miembros, defensas de murallas y puntos económicos para la provincia.' : 'Level determines member capacity and defense structures/wall strength.'}</li>
                <li><strong>{lang === 'es' ? 'Nation Points (Puntos de Nación):' : 'Nation Points:'}</strong> {lang === 'es' ? 'Los ganas participando en kills PvP. Debes donarlos al gremio en el Comandante o Guardián (Castle Keeper) para convertirlos en Guild Points.' : 'Earned via PvP kills. Must be donated at a Castle Keeper to become Guild Points.'}</li>
                <li><strong>{lang === 'es' ? '¡Si te sales, los pierdes!:' : 'Leaving penalty:'}</strong> {lang === 'es' ? 'Si abandonas el gremio, pierdes todos los puntos acumulados que no hayas donado, pero el gremio no pierde lo que ya donaste.' : 'Leaving costs you your banked guild points. The guild keeps what you already donated.'}</li>
              </ul>
            </div>
            
            <div style={{ flex: '0 1 350px' }}>
              <div style={{ background: 'rgba(255,255,255,0.02)', padding: '20px', borderRadius: '8px', border: '1px solid var(--border)', marginBottom: '20px' }}>
                <h3 style={{ color: 'var(--text-main)', marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Award size={18} /> Ranking
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '13px', lineHeight: '1.6' }}>
                  {lang === 'es' 
                    ? 'Los gremios compiten en la tabla (F2). El Top 1 recibe un ícono de Oro, el Top 2 de Plata, Top 3 de Bronce, y del 4 al 10 un ícono Verde durante la siguiente temporada.'
                    : 'Press F2 to see Rankings. Top 1 gets Gold icon, Top 2 Silver, Top 3 Bronze, Top 4-10 Green.'}
                </p>
              </div>

              <div style={{ background: 'rgba(255,255,255,0.02)', padding: '20px', borderRadius: '8px', border: '1px solid var(--border)' }}>
                <h3 style={{ color: 'var(--text-main)', marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <PiggyBank size={18} /> Treasury & Tech
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '13px', lineHeight: '1.6' }}>
                  {lang === 'es' 
                    ? 'Todos pueden donar al banco, pero solo Líder/Vice pueden retirar. Este oro sirve para investigar Tecnología de Gremio.'
                    : 'All can deposit, only Leaders can withdraw. Used to research Guild Technology.'}
                </p>
              </div>
            </div>
          </div>

          {/* Alianzas y Cambio de Nación */}
          <h2 style={{ color: 'var(--accent)', borderBottom: '1px solid var(--border)', paddingBottom: '10px', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Handshake size={24} /> {lang === 'es' ? 'Alianzas y Traslados' : 'Alliances & Transfers'}
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
            
            {/* Alianzas */}
            <div style={{ background: 'rgba(255,255,255,0.02)', padding: '20px', borderRadius: '8px', border: '1px solid var(--border)' }}>
              <h3 style={{ color: 'var(--text-main)', marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Flag size={18} /> {lang === 'es' ? 'Alianzas (Hasta 3 Gremios)' : 'Alliances (Up to 3 Guilds)'}
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '13px', lineHeight: '1.6', margin: 0 }}>
                {lang === 'es' 
                  ? 'Desbloquea el chat de alianza (/a). Los aliados pueden hacer "Fast Travel" a tu provincia si está conectada a la capital. El líder puede dar permisos para que los aliados usen puertas y balistas.'
                  : 'Unlocks /a chat. Allies can fast travel to your province. Leader can grant door/ballista permissions.'}
              </p>
            </div>

            {/* Puertas de Nación */}
            <div style={{ background: 'rgba(255,255,255,0.02)', padding: '20px', borderRadius: '8px', border: '1px solid var(--border)' }}>
              <h3 style={{ color: 'var(--text-main)', marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Key size={18} /> {lang === 'es' ? 'Permisos de Puertas' : 'Door Permissions'}
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '13px', lineHeight: '1.6', margin: 0 }}>
                {lang === 'es' 
                  ? 'Si el gremio es nivel 50+, los Veteranos+ pueden operar las puertas TRASERAS en asedios (Ej. la puerta de atrás del Keep). Los que no tengan rango tendrán que teletransportarse a través de ellas.'
                  : 'Guilds level 50+ can operate back doors of nation gatehouses during sieges. Others teleport through.'}
              </p>
            </div>

            {/* Cambiar de nacion */}
            <div style={{ background: 'rgba(220, 38, 38, 0.05)', padding: '20px', borderRadius: '8px', border: '1px solid #ef4444' }}>
              <h3 style={{ color: '#ef4444', marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Shield size={18} /> {lang === 'es' ? 'Cambio de Nación en Gremio' : 'Changing Nations As Guild'}
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '13px', lineHeight: '1.6', margin: 0 }}>
                {lang === 'es' 
                  ? 'Solo permitido hacia una nación "Underdog" (desventaja a largo plazo). Es un proceso tedioso: cada cuenta debe mandar un correo al soporte oficial confirmando la transferencia. Los castillos de gremio NO se transfieren.'
                  : 'Only to Underdog nations. Every member must email support to confirm. Guild Castles are NOT transferred and turn grey.'}
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
