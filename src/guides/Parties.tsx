import React from 'react';
import { ArrowLeft, Users, Search, Settings, MapPin, Activity, Crown, Award, Terminal, Backpack } from 'lucide-react';

interface Props {
  onBack: () => void;
  lang: 'es' | 'en';
}

export const Parties: React.FC<Props> = ({ onBack, lang }) => {
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
        <div style={{ height: '250px', backgroundImage: 'url(/guides/parties.png)', backgroundSize: 'cover', backgroundPosition: 'center 30%', position: 'relative' }}>
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, var(--bg-main) 0%, rgba(0,0,0,0.4) 100%)' }}></div>
          <h1 style={{ position: 'absolute', bottom: '20px', left: '30px', fontSize: '42px', color: 'white', textShadow: '0 2px 10px rgba(0,0,0,0.8)', margin: 0, display: 'flex', alignItems: 'center', gap: '15px' }}>
            <Users size={40} color="var(--accent)" /> {lang === 'es' ? 'Guía de Grupos (Parties)' : 'Parties Guide'}
          </h1>
        </div>

        <div style={{ padding: '40px' }}>
          {/* Overview */}
          <div style={{ marginBottom: '40px' }}>
            <p style={{ fontSize: '18px', color: 'var(--text-main)', lineHeight: '1.6', marginBottom: '20px' }}>
              {lang === 'es' 
                ? 'Los grupos (parties o warbands) son vitales. Jugadores de cualquier nivel pueden unirse. ¡No se necesita una composición estricta de tanques o healers como en otros juegos!'
                : 'Parties are groups of 2 or more players. Players of all levels may join. It is not necessary to have a strict composition of tanks and healers.'}
            </p>
            <div style={{ background: 'rgba(255,255,255,0.02)', padding: '15px', borderRadius: '8px', borderLeft: '4px solid var(--accent)' }}>
              <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '15px', lineHeight: '1.6' }}>
                <strong>{lang === 'es' ? 'Party Finder (P):' : 'Party Finder (P):'}</strong> {lang === 'es' 
                  ? 'Puedes unirte remotamente presionando la tecla [P] para abrir el Buscador de Grupos, o acercándote a un jugador, manteniendo [E] y pidiendo unirte.' 
                  : 'Press [P] to open Party Finder to join remotely, or hold [E] while looking at a nearby player to invite/request to join.'}
              </p>
            </div>
          </div>

          {/* Party Finder & Lobby */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '30px', marginBottom: '50px' }}>
            <div style={{ flex: '1 1 500px' }}>
              <h2 style={{ color: 'var(--accent)', borderBottom: '1px solid var(--border)', paddingBottom: '10px', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Search size={24} /> {lang === 'es' ? 'Buscador y Lobby' : 'Party Finder & Lobby'}
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '14px', lineHeight: '1.6' }}>
                {lang === 'es' 
                  ? 'El Lobby muestra todas las parties públicas activas. Para crear la tuya propia, abre el menú [P] y haz clic en el ícono de la bandera en la parte inferior central.' 
                  : 'The lobby shows all active public parties. To create your own, press [P] and click the flag icon in the bottom center.'}
              </p>
              
              <h3 style={{ color: 'var(--text-main)', marginTop: '20px', marginBottom: '10px' }}>{lang === 'es' ? 'Tipos de Party' : 'Party Types'}</h3>
              <ul style={{ color: 'var(--text-muted)', fontSize: '14px', paddingLeft: '20px', lineHeight: '1.6' }}>
                <li><strong>{lang === 'es' ? 'Standard (Estándar):' : 'Standard:'}</strong> {lang === 'es' ? 'Solo el líder puede invitar/aceptar miembros.' : 'Only the leader can invite/accept members.'}</li>
                <li><strong>{lang === 'es' ? 'Hidden (Oculta):' : 'Hidden:'}</strong> {lang === 'es' ? 'Invisible en el buscador y en el mapa para los de afuera.' : 'Invisible on Party Finder and map.'}</li>
                <li><strong>{lang === 'es' ? 'Open (Abierta):' : 'Open:'}</strong> {lang === 'es' ? 'Cualquiera puede unirse e invitar. Ideal para juego casual.' : 'Anyone can join/invite. Good for casual play.'}</li>
                <li><strong>{lang === 'es' ? 'No Leader (Sin Líder):' : 'No Leader:'}</strong> {lang === 'es' ? 'Cualquier miembro puede reclamar el liderazgo en cualquier momento.' : 'Anyone can appoint themselves leader.'}</li>
              </ul>
            </div>
            
            <div style={{ flex: '0 1 350px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <img src="/parties/lobby.png" alt="Party Lobby" style={{ width: '100%', borderRadius: '8px', border: '1px solid var(--border)' }} onError={(e) => e.currentTarget.style.display='none'} />
              <img src="/parties/createparty.png" alt="Create Party" style={{ width: '100%', borderRadius: '8px', border: '1px solid var(--border)' }} onError={(e) => e.currentTarget.style.display='none'} />
            </div>
          </div>

          {/* Sistema de Loot */}
          <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid var(--border)', borderRadius: '8px', padding: '30px', marginBottom: '50px' }}>
            <h2 style={{ color: 'var(--accent)', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Backpack size={24} /> {lang === 'es' ? 'Sistemas de Botín (PvE Loot)' : 'Loot Types (PvE)'}
            </h2>
            <p style={{ color: '#ef4444', fontWeight: 'bold', fontSize: '14px', marginBottom: '20px' }}>
              {lang === 'es' ? '¡OJO! Las bolsas de loot solo duran 30 segundos en el suelo.' : 'WARNING! Loot bags are only visible for 30 seconds on the ground.'}
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}>
              <div style={{ background: 'var(--bg-hover)', padding: '15px', borderRadius: '8px' }}>
                <h4 style={{ color: 'var(--text-main)', margin: '0 0 5px 0' }}>{lang === 'es' ? 'Assist (Asistencia)' : 'Assist'}</h4>
                <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '13px', lineHeight: '1.5' }}>
                  {lang === 'es' ? 'Quien hizo más daño tiene prioridad unos segundos antes de ser libre.' : 'Highest participant gets priority for a few seconds.'}
                </p>
              </div>
              <div style={{ background: 'var(--bg-hover)', padding: '15px', borderRadius: '8px' }}>
                <h4 style={{ color: 'var(--text-main)', margin: '0 0 5px 0' }}>Party Free</h4>
                <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '13px', lineHeight: '1.5' }}>
                  {lang === 'es' ? 'Cualquiera dentro de la party puede agarrarlo libremente.' : 'Anyone IN the party can loot freely.'}
                </p>
              </div>
              <div style={{ background: 'var(--bg-hover)', padding: '15px', borderRadius: '8px' }}>
                <h4 style={{ color: 'var(--text-main)', margin: '0 0 5px 0' }}>{lang === 'es' ? 'Free (Libre)' : 'Free'}</h4>
                <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '13px', lineHeight: '1.5' }}>
                  {lang === 'es' ? 'Cualquier jugador, esté o no en la party, puede agarrarlo.' : 'Anyone in the world can loot it at any time.'}
                </p>
              </div>
              <div style={{ background: 'rgba(59, 130, 246, 0.1)', border: '1px solid #3b82f6', padding: '15px', borderRadius: '8px' }}>
                <h4 style={{ color: '#60a5fa', margin: '0 0 5px 0' }}>{lang === 'es' ? 'Party (Recomendado)' : 'Party (Default)'}</h4>
                <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '13px', lineHeight: '1.5' }}>
                  {lang === 'es' ? 'El oro se reparte. Para los items, todos deben tocar la bolsa y elegir Need (Necesito) o Greed (Codicia) y se sortea (0-100).' : 'Coins shared. Players touch bag, choose Need/Greed, and roll 0-100.'}
                </p>
              </div>
            </div>
          </div>

          {/* Personalización, Símbolos y Map Markers */}
          <h2 style={{ color: 'var(--accent)', borderBottom: '1px solid var(--border)', paddingBottom: '10px', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Settings size={24} /> {lang === 'es' ? 'Personalización e Íconos' : 'Customization & Icons'}
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', marginBottom: '50px' }}>
            
            <div>
              <h3 style={{ color: 'var(--text-main)', marginBottom: '15px' }}>{lang === 'es' ? 'Símbolos de Jugador' : 'Player Symbols'}</h3>
              <div style={{ display: 'flex', gap: '15px', alignItems: 'flex-start' }}>
                <img src="/parties/partysimbols.png" alt="Symbols" style={{ width: '120px', borderRadius: '4px', border: '1px solid var(--border)' }} onError={(e) => e.currentTarget.style.display='none'} />
                <p style={{ color: 'var(--text-muted)', fontSize: '14px', lineHeight: '1.6', margin: 0 }}>
                  {lang === 'es' 
                    ? 'El líder puede asignar (o dejarte elegir) íconos y colores para identificar roles: escuderos, arqueros, médicos. ¡Un ejército organizado gana!' 
                    : 'Leader can assign icons to identify tanks, medics, archers. An organized army is a winning army.'}
                  <br/><br/>
                  {lang === 'es' ? 'También se puede ocultar jugadores en el mapa (útil para enviar scouts sin que el resto del grupo los siga por error).' : 'Players can be hidden on the map (useful for scouts).'}
                </p>
              </div>
            </div>

            <div>
              <h3 style={{ color: 'var(--text-main)', marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <MapPin size={20} /> {lang === 'es' ? 'Map Markers (Puntos en el Mapa)' : 'Map Markers'}
              </h3>
              <div style={{ display: 'flex', gap: '15px', alignItems: 'center', background: 'var(--bg-hover)', padding: '15px', borderRadius: '8px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <img src="/parties/mapmarker.png" alt="Marker" style={{ width: '30px' }} onError={(e) => e.currentTarget.style.display='none'} />
                  <img src="/parties/mapmarker2.png" alt="Leader Marker" style={{ width: '30px' }} onError={(e) => e.currentTarget.style.display='none'} />
                </div>
                <p style={{ color: 'var(--text-muted)', fontSize: '14px', lineHeight: '1.6', margin: 0 }}>
                  {lang === 'es' ? 'Cualquiera puede hacer clic derecho en el mapa para poner una X aleatoria. La X del Líder (abajo) es visualmente distinta y prioritaria. El líder puede borrar todas las marcas.' : 'Right click map to place an X. Leader X is distinct. Leader can clear all marks.'}
                </p>
              </div>
            </div>

            <div>
              <h3 style={{ color: 'var(--text-main)', marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Activity size={20} /> {lang === 'es' ? 'Medic Mode (Modo Médico)' : 'Medic Mode'}
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <img src="/parties/medicmode.png" alt="Medic Mode" style={{ width: '100%', borderRadius: '4px', border: '1px solid var(--border)' }} onError={(e) => e.currentTarget.style.display='none'} />
                <p style={{ color: 'var(--text-muted)', fontSize: '14px', lineHeight: '1.6', margin: 0 }}>
                  {lang === 'es' ? 'Se activa en [Esc > Gameplay]. Pone a los jugadores caídos al tope de la lista para revivirlos rápido. Altamente recomendado para líderes y médicos.' : 'Toggle in Settings. Moves downed players to top of party list. Highly recommended.'}
                </p>
              </div>
            </div>

          </div>

          {/* Event Parties & Mentor Points */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px', marginBottom: '50px' }}>
            <div style={{ flex: '1 1 400px' }}>
              <h2 style={{ color: 'var(--accent)', borderBottom: '1px solid var(--border)', paddingBottom: '10px', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Award size={24} /> {lang === 'es' ? 'Grupos de Eventos (Event Parties)' : 'Event Parties'}
              </h2>
              <img src="/parties/eventparties.png" alt="Event Party" style={{ width: '100%', maxWidth: '300px', borderRadius: '8px', border: '1px solid var(--border)', marginBottom: '15px' }} onError={(e) => e.currentTarget.style.display='none'} />
              <p style={{ color: 'var(--text-muted)', fontSize: '14px', lineHeight: '1.6' }}>
                {lang === 'es' 
                  ? 'Aparecen automáticamente en pantalla (ej. Torneos o Asedios). Al unirte te dan teletransporte. No necesitas estar en la party al final para recibir recompensas, solo debes permanecer en la zona.'
                  : 'Pop up automatically. Joining gives teleport. You don\'t need to stay in the party for rewards, just stay in the area.'}
              </p>
            </div>

            <div style={{ flex: '1 1 400px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ background: 'rgba(16, 185, 129, 0.05)', padding: '20px', borderRadius: '8px', border: '1px solid #10b981' }}>
                <h3 style={{ color: '#10b981', margin: '0 0 10px 0' }}>{lang === 'es' ? 'Mentor Points (Hojas Verdes)' : 'Mentor Points (Greenleaf)'}</h3>
                <p style={{ color: 'var(--text-main)', fontSize: '14px', lineHeight: '1.6', margin: 0 }}>
                  {lang === 'es' 
                    ? 'Jugadores con Hoja Verde/Dorada (Greenleaf) no tienen un pj nivel 100 en la cuenta. ¡Por cada nivel que suban mientras estén en tu party, todos los cercanos ganan Mentor Points (Mejora la suerte del Loot)!'
                    : 'Players with Green/Gold leaf don\'t have a lvl 100 character. If they level up near you in a party, you get a mentor point (luck bonus).'}
                </p>
              </div>

              <div style={{ background: 'var(--bg-hover)', padding: '20px', borderRadius: '8px', border: '1px solid var(--border)' }}>
                <h3 style={{ color: 'var(--text-main)', margin: '0 0 10px 0', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Terminal size={18} /> {lang === 'es' ? 'Comandos de Chat' : 'Chat Commands'}
                </h3>
                <ul style={{ color: 'var(--text-muted)', fontSize: '14px', paddingLeft: '20px', lineHeight: '1.6', margin: 0 }}>
                  <li><strong>/request [Nombre]</strong>: {lang === 'es' ? 'Pide unirte (a cualquiera del grupo).' : 'Request to join party.'}</li>
                  <li><strong>/invite [Nombre]</strong>: {lang === 'es' ? 'Invita a alguien.' : 'Invite a player.'}</li>
                  <li><strong>/p</strong>: {lang === 'es' ? 'Habla por el chat de grupo.' : 'Enter party chat.'}</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Liderazgo */}
          <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid var(--border)', borderRadius: '8px', padding: '30px' }}>
            <h2 style={{ color: 'var(--accent)', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Crown size={24} /> {lang === 'es' ? 'Poderes del Líder' : 'Leadership Powers'}
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '15px' }}>
              <ul style={{ color: 'var(--text-muted)', fontSize: '14px', paddingLeft: '20px', lineHeight: '1.6', margin: 0 }}>
                <li>{lang === 'es' ? 'Cambiar el tipo de Loot y tipo de Party.' : 'Change loot and party types.'}</li>
                <li>{lang === 'es' ? 'Ocultar jugadores de la interfaz.' : 'Hide individual players from the UI.'}</li>
                <li>{lang === 'es' ? 'Aceptar, rechazar o kickear jugadores.' : 'Accept/reject/kick players.'}</li>
                <li>{lang === 'es' ? 'Limpiar TODAS las marcas (X) del mapa.' : 'Clear all map markings.'}</li>
              </ul>
              <ul style={{ color: 'var(--text-muted)', fontSize: '14px', paddingLeft: '20px', lineHeight: '1.6', margin: 0 }}>
                <li>{lang === 'es' ? 'Inscribir a todo el grupo a Sea Wraiths o Volcano.' : 'Enroll the entire party in events.'}</li>
                <li>{lang === 'es' ? 'Asignar íconos a miembros.' : 'Give icons to players.'}</li>
                <li>{lang === 'es' ? 'Pasar el liderazgo (Corona).' : 'Give leadership to someone else.'}</li>
                <li>{lang === 'es' ? 'Poner la X del líder (Prioritaria).' : 'Place a special distinct map X.'}</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
