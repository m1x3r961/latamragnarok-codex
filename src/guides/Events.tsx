import React, { useState } from 'react';
import { ArrowLeft, Calendar, Search, Target, Gift } from 'lucide-react';

interface Props {
  onBack: () => void;
  lang: 'es' | 'en';
}

export const Events: React.FC<Props> = ({ onBack, lang }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const eventTypes = [
    { icon: 'SoloEvent1.png', name: lang === 'es' ? 'Eventos Solitarios' : 'Solo Events', desc: lang === 'es' ? '¡Puedes hacerlo tú solo! Encadena varios seguidos para más recompensas.' : 'You can handle it! Chain them for more rewards.' },
    { icon: 'GroupEvent2.png', name: lang === 'es' ? 'Eventos de Grupo' : 'Group Events', desc: lang === 'es' ? 'Trae algunos amigos contigo.' : 'Bring some people with you.' },
    { icon: 'RaidEvent3.png', name: lang === 'es' ? 'Eventos de Raid' : 'Raid Events', desc: lang === 'es' ? 'Ej. Brandon, Ragi, Sirius. Trae a MUCHA gente contigo.' : 'e.g. Brandon, Ragi. Bring lots of people.' },
    { icon: 'Cave4.png', name: lang === 'es' ? 'Eventos Subterráneos' : 'Underground Events', desc: lang === 'es' ? 'Incluye Catacumbas y secretos cerca de capitales.' : 'Includes Catacombs and Secrets.' },
    { icon: 'AttackObjective5.png', name: lang === 'es' ? 'Eventos de Asedio Especiales' : 'Special Objectives', desc: lang === 'es' ? 'Incluye Rite y asedios non-loot.' : 'Includes Rite and non-loot Sieges.' },
    { icon: 'Noloot6.png', name: lang === 'es' ? 'Zona Segura (Non-loot)' : 'Non-loot', desc: lang === 'es' ? 'No puedes perder tu equipo al morir aquí.' : 'You cannot lose gear upon death here.' },
    { icon: 'Looticon7.png', name: lang === 'es' ? 'Zona de Saqueo (Loot enabled)' : 'Loot enabled', desc: lang === 'es' ? 'Puedes ser saqueado al morir. ¡Cuidado!' : 'You can be looted upon death. Beware!' },
  ];

  const eventsList = [
    {
      name: 'Catacombs',
      typeIcon: 'Cavecatacumbs.png',
      lootIcon: 'Looticoncatacumbd.png',
      req: 'Level 30',
      start: lang === 'es' ? 'Busca 3 iconos de cueva en el centro del mapa. Inicia automáticamente.' : 'Look for 3 cave icons in center map. Auto starts.',
      desc: lang === 'es' ? 'Evento de 3 facciones en el centro del mapa. Resuelve puzzles, mata jefes y enemigos. Sin Fast Travel.' : '3 way event in center map. Solve puzzles, fight bosses. No fast travel.',
      rewards: '650 Contribution, Elite quilted canvas, Aqua regia/magnetite/siderite, Recipes.'
    },
    {
      name: 'Deadly Harvest',
      typeIcon: 'deadlu.png',
      lootIcon: 'Looticon7.png',
      req: 'None',
      start: lang === 'es' ? 'Automático 2 veces al día.' : 'Auto starts twice a day.',
      desc: lang === 'es' ? 'Captura ubicaciones enemigas y defiende las tuyas por 2 horas para ganar puntos. Buff masivo de crafteo para los ganadores.' : 'Capture enemy flags and defend yours for 2 hours to earn points. Massive craft buff.',
      rewards: '1st: 300 CP + 40% crafting bonus. 2nd: 200 CP + 20% crafting bonus.'
    },
    {
      name: 'Valley of Death Tournament (VoD)',
      typeIcon: 'valley.png',
      lootIcon: 'Noloot6.png',
      req: 'Level 15',
      start: lang === 'es' ? '5 veces al día. Regístrate en la pestaña de eventos cuando aparezca.' : '5x a day. Register in events tab.',
      desc: lang === 'es' ? 'Torneo PvP de 3 facciones sin loot. 12 tipos de objetivos/reglas posibles. Tiene Fast Travel.' : '3 way PvP non-loot tournament. 12 potential rulesets. Has Fast Travel.',
      rewards: '300 Contribution Points + Titles.'
    },
    {
      name: 'Brandon',
      typeIcon: 'brandon.png',
      lootIcon: 'Nolootbrandon.png',
      req: 'Level 60 (Party of 10-25)',
      start: lang === 'es' ? 'Entrega 30 Key Fragments al Key Maker.' : 'Give 30 Key Fragments to Key Maker.',
      desc: lang === 'es' ? 'Asedia el castillo del Raubritter Brandon. Evento PvE masivo (sin pérdida de loot) que atrae mucho PvP.' : 'Siege Brandon\'s castle. Massive PvE event (non-loot) that attracts PvP.',
      rewards: '200 CP, High level recipes/gear, Silver, Raubritter Loot boxes.'
    },
    {
      name: 'Ragi',
      typeIcon: 'ragi.png',
      lootIcon: 'Nolootragi.png',
      req: 'Level 60 (Party of 10-25)',
      start: lang === 'es' ? 'Entrega 30 Key Fragments al Key Maker cerca de Ragi The Renegade.' : 'Give 30 Key Fragments to Key Maker near Ragi.',
      desc: lang === 'es' ? 'Asedia el campamento de Ragi. Evento similar a Brandon.' : 'Siege Ragi\'s encampment. Similar to Brandon.',
      rewards: '200 CP, Ragi Loot boxes, Recipes, Silver.'
    },
    {
      name: 'Sirius',
      typeIcon: 'sirius.png',
      lootIcon: 'Nolootsirius.png',
      req: 'Level 60 (Party of 10-25)',
      start: lang === 'es' ? 'Entrega 30 Key Fragments al Key Maker en Fall of the Exile.' : 'Give 30 Key Fragments to Key Maker near Sirius.',
      desc: lang === 'es' ? 'Asedia el campamento de Sirius the Exile. Mismos mecanismos que Brandon y Ragi.' : 'Siege Sirius\'s encampment. Same mechanics as Brandon/Ragi.',
      rewards: '200 CP, Exile Loot boxes, Recipes, Silver.'
    },
    {
      name: 'The Temple of Doom',
      typeIcon: 'temple.png',
      lootIcon: 'looticontemple.png',
      req: 'Level 60 (Party 10+)',
      start: lang === 'es' ? 'Inicia automáticamente.' : 'Starts automatically.',
      desc: lang === 'es' ? 'Vence a las doncellas de fuego y esquiva trampas. ZONA DE LOOT. Sin teleport.' : 'Defeat fiery maidens, watch for traps. LOOT ENABLED. No teleport.',
      rewards: 'Varies'
    },
    {
      name: 'Pride Long Forgotten',
      typeIcon: 'pride.png',
      lootIcon: 'Looticonpride.png',
      req: 'Level 80+ (Party 10+)',
      start: lang === 'es' ? 'Abre la puerta con la palanca y corre adentro rápido.' : 'Open gate using lever outside and run inside fast.',
      desc: lang === 'es' ? 'Ruinas en el centro del mapa llenas de criaturas. ZONA DE LOOT. Atraerá PvP.' : 'Ruins in center map. LOOT ENABLED. Attracts PvP.',
      rewards: 'Aqua regia/magnetite, Spider\'s Venom, Unnran\'s Venom.'
    },
    {
      name: 'Rite (Ritos)',
      typeIcon: 'rite.png',
      lootIcon: 'Looticonrite.png',
      req: 'Level 40',
      start: lang === 'es' ? 'Entrega 50 Spider Venom al druida en la capital. Invita a todo el servidor.' : 'Give 50 Spider Venom to capital druid. Invites whole server.',
      desc: lang === 'es' ? 'Atacantes vs Defensores. Defensores deben proteger a las sacerdotisas. Atacantes matarlas. Se hace en el centro del mapa y TIENE TELEPORT SEGURO al iniciar (Naciones lo usan para viajar rápido).' : 'Attackers vs Defenders. Defend priestesses or kill them. Gives safe teleport when joined!',
      rewards: 'Blessing of the Old ones (-75% hunger, +30% XP), 80 CP, Codfish fillet.'
    },
    {
      name: 'Sorcerer\'s Tower / Wealthy Tower',
      typeIcon: 'sercerers.png',
      lootIcon: 'Looticonsorceres.png',
      req: 'Level 30 (Party of 3-5)',
      start: lang === 'es' ? 'Automático varias veces al día.' : 'Auto starts many times a day.',
      desc: lang === 'es' ? 'Vence a Reapers, toma cofres. Puedes matar a Erendi the Sorcerer y su araña Koenraad. Zonas mixtas (Loot y Non-loot).' : 'Defeat Reapers, loot chests. Kill Erendi. Mixed loot zones.',
      rewards: 'Monastic Mead/Wine, Alchemy case, Erendi\'s Elixir recipe.'
    },
    {
      name: 'Kill/Defend the Spy',
      typeIcon: 'spy.png',
      lootIcon: 'Looticonspy.png',
      req: 'Party of 3+',
      start: lang === 'es' ? 'Automático.' : 'Auto starts.',
      desc: lang === 'es' ? 'O defiendes al espía de oleadas enemigas o rusheas el campamento para matarlo. ZONA DE LOOT.' : 'Defend spy from waves or rush to kill him. LOOT ENABLED.',
      rewards: 'Monastic Mead or Wine'
    },
    {
      name: 'Volcano',
      typeIcon: 'volcano.png',
      lootIcon: 'Looticonvolcano.png',
      req: 'Level 100',
      start: lang === 'es' ? 'Entrega 100 Mushrooms a Peyton, dale a Join para teletransportarte.' : 'Give 100 Mushrooms to Peyton, click Join.',
      desc: lang === 'es' ? 'Lucha de 3 facciones en una caldera de volcán extinto (7 personas por nación). SI MUERES, QUEDAS FUERA. Zona de Loot.' : '3 way fight (7 ppl per nation). If you die, you are out. LOOT ENABLED.',
      rewards: '100 CP, Armor/Weapon loot boxes, Aqua regia, Spider Venom.'
    },
    {
      name: 'Sea Wraiths',
      typeIcon: 'seawraith.png',
      lootIcon: 'Nolootseawraith.png',
      req: 'Level 60',
      start: lang === 'es' ? 'Entrega 20 Map Fragments en la capital o únete cuando salte la alerta.' : 'Give 20 Map Fragments in capital.',
      desc: lang === 'es' ? 'Lucha de 2 facciones en una isla tropical (5 vs 5). Zona Segura (Non-loot). Tienes Teleport.' : '2 way fight on tropical island (5v5). Non-loot zone. Has Teleport.',
      rewards: '390 CP, Sulfur, calcite, recipes, Blood of the Beast.'
    },
  ];

  const filteredEvents = eventsList.filter(e => e.name.toLowerCase().includes(searchTerm.toLowerCase()));

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
        <div style={{ height: '300px', backgroundImage: 'url(/guides/events.png)', backgroundColor: '#7e22ce', backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative' }}>
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, var(--bg-main) 0%, rgba(0,0,0,0.5) 100%)' }}></div>
          <h1 style={{ position: 'absolute', bottom: '20px', left: '30px', fontSize: '42px', color: 'white', textShadow: '0 2px 10px rgba(0,0,0,0.8)', margin: 0, display: 'flex', alignItems: 'center', gap: '15px' }}>
            <Calendar size={40} color="#c084fc" /> {lang === 'es' ? 'Guía de Eventos' : 'Events Guide'}
          </h1>
        </div>

        <div style={{ padding: '40px' }}>
          {/* Overview */}
          <div style={{ marginBottom: '40px' }}>
            <p style={{ fontSize: '18px', color: 'var(--text-main)', lineHeight: '1.6', marginBottom: '20px' }}>
              {lang === 'es' 
                ? 'Los eventos son contenido repetible de mundo abierto. El PvP es la parte central de casi todos ellos. Todos dan una enorme cantidad de experiencia y recompensas valiosas. Presiona [U] en el juego para ver los horarios.'
                : 'Events are repeatable open world content. PvP is a core part of most events. Press [U] in game to see timers.'}
            </p>
            <div style={{ background: 'rgba(239, 68, 68, 0.05)', padding: '15px', borderRadius: '8px', borderLeft: '4px solid #ef4444' }}>
              <p style={{ margin: 0, color: 'var(--text-main)', fontSize: '14px', lineHeight: '1.5' }}>
                {lang === 'es' 
                  ? 'Recuerda: Los eventos se muestran en vivo en el mapa. Si estás haciendo uno, ¡el enemigo puede saber que estás ahí y emboscarte! Es una gran forma de buscar peleas PvP.' 
                  : 'Remember: Events are shown live on the map. Enemies can see if someone is there. It\'s a good way to get PvP!'}
              </p>
            </div>
          </div>

          {/* Types of Events */}
          <h2 style={{ color: 'var(--accent)', borderBottom: '1px solid var(--border)', paddingBottom: '10px', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Search size={24} /> {lang === 'es' ? 'Tipos de Eventos en el Mapa' : 'Event Map Icons'}
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '15px', marginBottom: '50px' }}>
            {eventTypes.map((type, i) => (
              <div key={i} style={{ background: 'var(--bg-hover)', padding: '15px', borderRadius: '8px', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', gap: '15px' }}>
                <img src={`/events/${type.icon}`} alt={type.name} style={{ width: '40px' }} onError={(e) => e.currentTarget.style.display='none'} />
                <div>
                  <h4 style={{ margin: '0 0 5px 0', color: 'var(--text-main)' }}>{type.name}</h4>
                  <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '12px', lineHeight: '1.4' }}>{type.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Event List */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', borderBottom: '1px solid var(--border)', paddingBottom: '10px', marginBottom: '30px' }}>
            <h2 style={{ color: 'var(--accent)', margin: 0, display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Target size={24} /> {lang === 'es' ? 'Directorio de Eventos' : 'Event Directory'}
            </h2>
            <div style={{ position: 'relative' }}>
              <Search size={18} color="var(--text-muted)" style={{ position: 'absolute', left: '10px', top: '10px' }} />
              <input 
                type="text" 
                placeholder={lang === 'es' ? 'Buscar evento...' : 'Search event...'}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{ background: 'rgba(0,0,0,0.3)', border: '1px solid var(--border)', padding: '8px 15px 8px 35px', borderRadius: '20px', color: 'white', outline: 'none' }}
              />
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))', gap: '20px' }}>
            {filteredEvents.map((ev, i) => (
              <div key={i} style={{ background: 'var(--bg-hover)', padding: '20px', borderRadius: '10px', border: '1px solid var(--border)', display: 'flex', flexDirection: 'column', gap: '15px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                    <div style={{ background: 'rgba(255,255,255,0.05)', padding: '10px', borderRadius: '8px' }}>
                      <img src={`/events/${ev.typeIcon}`} alt="type" style={{ width: '40px' }} onError={(e) => e.currentTarget.style.display='none'} />
                    </div>
                    <h3 style={{ margin: 0, color: 'var(--text-main)', fontSize: '22px' }}>{ev.name}</h3>
                  </div>
                  <img src={`/events/${ev.lootIcon}`} alt="loot type" style={{ width: '35px', opacity: 0.9 }} onError={(e) => e.currentTarget.style.display='none'} />
                </div>

                <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '14px', lineHeight: '1.6' }}>{ev.desc}</p>
                
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginTop: '10px' }}>
                  <div style={{ background: 'rgba(0,0,0,0.2)', padding: '10px', borderRadius: '5px' }}>
                    <strong style={{ color: '#a78bfa', fontSize: '12px', display: 'block', marginBottom: '3px' }}>{lang === 'es' ? 'Requisitos' : 'Requirements'}</strong>
                    <span style={{ color: 'var(--text-main)', fontSize: '13px' }}>{ev.req}</span>
                  </div>
                  <div style={{ background: 'rgba(0,0,0,0.2)', padding: '10px', borderRadius: '5px' }}>
                    <strong style={{ color: '#3b82f6', fontSize: '12px', display: 'block', marginBottom: '3px' }}>{lang === 'es' ? 'Cómo iniciar' : 'How to start'}</strong>
                    <span style={{ color: 'var(--text-main)', fontSize: '13px' }}>{ev.start}</span>
                  </div>
                </div>

                <div style={{ background: 'rgba(245, 158, 11, 0.05)', padding: '12px', borderRadius: '5px', border: '1px solid rgba(245, 158, 11, 0.2)', display: 'flex', gap: '10px', alignItems: 'center', marginTop: '5px' }}>
                  <Gift size={20} color="#f59e0b" style={{ flexShrink: 0 }} />
                  <div>
                    <strong style={{ color: '#f59e0b', fontSize: '12px', display: 'block' }}>{lang === 'es' ? 'Recompensas' : 'Rewards'}</strong>
                    <span style={{ color: 'var(--text-main)', fontSize: '13px' }}>{ev.rewards}</span>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};
