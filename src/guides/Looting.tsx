import React from 'react';
import { ArrowLeft, Box, Skull, Hand, Timer, AlertTriangle, ShieldCheck, Coins, Database } from 'lucide-react';

interface Props {
  onBack: () => void;
  lang: 'es' | 'en';
}

export const Looting: React.FC<Props> = ({ onBack, lang }) => {
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
        <div style={{ height: '250px', backgroundImage: 'url(/guides/looting.png)', backgroundColor: '#4c1d95', backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative' }}>
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, var(--bg-main) 0%, rgba(0,0,0,0.4) 100%)' }}></div>
          <h1 style={{ position: 'absolute', bottom: '20px', left: '30px', fontSize: '42px', color: 'white', textShadow: '0 2px 10px rgba(0,0,0,0.8)', margin: 0, display: 'flex', alignItems: 'center', gap: '15px' }}>
            <Hand size={40} color="#a855f7" /> {lang === 'es' ? 'Guía de Saqueo (Looting)' : 'Looting Guide'}
          </h1>
        </div>

        <div style={{ padding: '40px' }}>
          {/* Overview */}
          <div style={{ marginBottom: '40px' }}>
            <p style={{ fontSize: '18px', color: 'var(--text-main)', lineHeight: '1.6', marginBottom: '20px' }}>
              {lang === 'es' 
                ? 'Gloria Victis tiene un sistema de "loot parcial". Esto significa que cuando mueres, no pierdes todo, hay límites estrictos sobre cuánto te pueden saquear (máximo 10 puntos de loot).'
                : 'Gloria Victis has a partial loot system, meaning players can only be looted for a maximum of 10 points worth of gear per death.'}
            </p>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px', marginBottom: '40px' }}>
            <div style={{ flex: '1 1 500px' }}>
              <h2 style={{ color: 'var(--accent)', borderBottom: '1px solid var(--border)', paddingBottom: '10px', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Skull size={24} /> {lang === 'es' ? 'Reglas del Saqueo' : 'The Looting System'}
              </h2>
              
              <div style={{ background: 'rgba(255,255,255,0.02)', padding: '20px', borderRadius: '8px', border: '1px solid var(--border)', marginBottom: '20px' }}>
                <h3 style={{ color: '#a855f7', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Timer size={18} /> {lang === 'es' ? 'El Jugador Caído (Víctima)' : 'The Downed Player'}
                </h3>
                <ul style={{ color: 'var(--text-muted)', fontSize: '14px', paddingLeft: '20px', lineHeight: '1.6', margin: 0 }}>
                  <li>{lang === 'es' ? 'Máximo 10 puntos de loot en total por muerte.' : 'Lootable for a total of 10 points worth of gear/materials.'}</li>
                  <li>{lang === 'es' ? 'Se puede saquear durante 30 segundos desde su muerte.' : 'Lootable for 30 seconds from death.'}</li>
                  <li>
                    {lang === 'es' ? 'Puedes reducir ese tiempo en -5 segundos cada uno (hasta 15s máximo) con los buffs:' : 'Reduce loot timer by -5s each (max 15s total) with buffs:'}
                    <ul style={{ marginTop: '5px' }}>
                      <li><strong>Fighter Buff:</strong> 1,000 Nation Points.</li>
                      <li><strong>Lord Rank:</strong> 10,000 reputación.</li>
                      <li><strong>Medical Assist:</strong> Nación Underdog en su territorio base.</li>
                    </ul>
                  </li>
                </ul>
              </div>

              <div style={{ background: 'rgba(255,255,255,0.02)', padding: '20px', borderRadius: '8px', border: '1px solid var(--border)' }}>
                <h3 style={{ color: '#ef4444', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Hand size={18} /> {lang === 'es' ? 'El Saqueador (Looter)' : 'The Looting Player'}
                </h3>
                <ul style={{ color: 'var(--text-muted)', fontSize: '14px', paddingLeft: '20px', lineHeight: '1.6', margin: 0 }}>
                  <li>{lang === 'es' ? 'Debe estar muy cerca y mirar directamente a la mancha de sangre del cuerpo.' : 'Must be very close and look at the blood stain.'}</li>
                  <li>{lang === 'es' ? 'No debe recibir daño (melee o flecha) o la barra de loot se cancelará y deberá empezar de nuevo.' : 'Cannot take damage (melee or ranged) or the loot bar resets.'}</li>
                  <li>{lang === 'es' ? 'Prioridad de Loot: Quien hace el 70% o más del daño tiene 3 segundos de prioridad exclusiva para lootear.' : 'Loot Priority: 70%+ damager gets 3 seconds exclusive priority.'}</li>
                </ul>
              </div>
            </div>

            <div style={{ flex: '0 1 400px' }}>
              <div style={{ background: 'var(--bg-hover)', padding: '20px', borderRadius: '8px', border: '1px solid var(--border)', height: '100%' }}>
                <h3 style={{ color: 'var(--text-main)', marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Box size={20} /> {lang === 'es' ? '¿Qué SÍ y NO se puede lootear?' : 'What can be looted?'}
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                  <div>
                    <h4 style={{ color: '#10b981', margin: '0 0 5px 0' }}>✅ {lang === 'es' ? 'Se puede' : 'Lootable'}</h4>
                    <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '13px', lineHeight: '1.5' }}>
                      {lang === 'es' ? 'Armas, armaduras (equipadas o no), materiales (en stacks de máx 100), recetas, consumibles (comida/pociones) y mochilas vacías.' : 'Weapons, armor, materials (max stacks of 100), recipes, consumables, empty bags.'}
                    </p>
                  </div>
                  <div>
                    <h4 style={{ color: '#ef4444', margin: '0 0 5px 0' }}>❌ {lang === 'es' ? 'NO se puede' : 'NOT Lootable'}</h4>
                    <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '13px', lineHeight: '1.5' }}>
                      {lang === 'es' ? 'Monturas, dinero (oro/plata), Glory Points, Contribution Points y Skins (te llevas el ítem base, no la skin).' : 'Mounts, Money, Glory/Contribution Points, Skins.'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Costos de Loot */}
          <h2 style={{ color: 'var(--accent)', borderBottom: '1px solid var(--border)', paddingBottom: '10px', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Coins size={24} /> {lang === 'es' ? 'Costos de Loot (Puntos y Segundos)' : 'Loot Costs & Time'}
          </h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px', marginBottom: '50px' }}>
            <div style={{ flex: '1 1 300px' }}>
              <p style={{ color: 'var(--text-main)', fontSize: '14px', lineHeight: '1.6', marginBottom: '20px' }}>
                {lang === 'es' 
                  ? 'Cada pieza cuesta puntos de loot, y 1 punto = 1 segundo de casteo (ej. un arma cuesta 8 pts, toma 8 segundos robarla). La peor espada y la mejor espada cuestan lo mismo.'
                  : '1 loot point = 1 second of cast time. Regardless of tier, a weapon costs 8 points (8 seconds).'}
              </p>
              <table style={{ width: '100%', borderCollapse: 'collapse', color: 'var(--text-main)', fontSize: '14px' }}>
                <thead>
                  <tr style={{ background: 'rgba(255,255,255,0.05)' }}>
                    <th style={{ padding: '10px', textAlign: 'left', borderBottom: '1px solid var(--border)' }}>{lang === 'es' ? 'Ítem' : 'Item'}</th>
                    <th style={{ padding: '10px', textAlign: 'center', borderBottom: '1px solid var(--border)' }}>{lang === 'es' ? 'Puntos / Segundos' : 'Points / Seconds'}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td style={{ padding: '10px', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>Chest (Pechera), Pants (Pantalones), Weapon, Shield</td><td style={{ padding: '10px', textAlign: 'center', color: '#ef4444', fontWeight: 'bold', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>8</td></tr>
                  <tr><td style={{ padding: '10px', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>Helm, Shoulders, Gloves, Boots</td><td style={{ padding: '10px', textAlign: 'center', color: '#facc15', fontWeight: 'bold', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>6</td></tr>
                  <tr><td style={{ padding: '10px' }}>100 Materials (Materiales)</td><td style={{ padding: '10px', textAlign: 'center', color: '#10b981', fontWeight: 'bold' }}>2</td></tr>
                </tbody>
              </table>
            </div>

            <div style={{ flex: '1 1 300px' }}>
              <img src="/looting/lootingnew.png" alt="Loot Screen" style={{ width: '100%', borderRadius: '8px', border: '1px solid var(--border)' }} onError={(e) => e.currentTarget.style.display='none'} />
            </div>
          </div>

          {/* Caps de recursos y Tips */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '30px' }}>
            
            <div style={{ background: 'rgba(255,255,255,0.02)', padding: '25px', borderRadius: '8px', border: '1px solid var(--border)' }}>
              <h3 style={{ color: 'var(--text-main)', margin: '0 0 15px 0', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Database size={20} /> {lang === 'es' ? 'Límites en Materiales (Caps)' : 'Resource Loot Caps'}
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '13px', lineHeight: '1.6', margin: 0 }}>
                {lang === 'es' ? 'Los materiales tienen dos límites:' : 'Materials are capped by two rules:'}
                <br /><br />
                <strong>1. {lang === 'es' ? 'Por Tier:' : 'By Tier:'}</strong> {lang === 'es' ? 'Por 10 puntos (max) puedes lootear: 500 (Tier 1), 400 (T2), 300 (T3), 200 (T4) o 100 (T5).' : 'For 10 points you can loot: 500 (T1), 400 (T2), 300 (T3), 200 (T4) or 100 (T5).'}
                <br /><br />
                <strong>2. {lang === 'es' ? 'Por Valor Financiero:' : 'Financial Cap:'}</strong> {lang === 'es' ? 'No puedes lootear más de 1 Oro de valor (precio del mercado) por cada 2 puntos de loot.' : 'Cannot exceed 1 gold market value per 2 loot points.'}
              </p>
            </div>

            <div style={{ background: 'rgba(16, 185, 129, 0.05)', padding: '25px', borderRadius: '8px', border: '1px solid #10b981' }}>
              <h3 style={{ color: '#10b981', margin: '0 0 15px 0', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <ShieldCheck size={20} /> {lang === 'es' ? 'Tips de Supervivencia' : 'Survival Tips'}
              </h3>
              <ul style={{ color: 'var(--text-main)', fontSize: '13px', paddingLeft: '20px', lineHeight: '1.6', margin: 0 }}>
                <li>{lang === 'es' ? 'Usa el Depot para guardar tus valores. Solo pierdes 1 pieza de equipo por muerte, ¡así que usa buen gear!' : 'Use the Depot. You only lose 1 piece of gear per death, so use good gear!'}</li>
                <li>{lang === 'es' ? 'Divide tus materiales en *stacks* pequeños para que no te roben 100 de golpe.' : 'Split material stacks so they don\'t loot 100 at once.'}</li>
                <li>{lang === 'es' ? 'Lleva ítems "Bait" (Cebo): Ej. un arma Naranja rota (+6). El enemigo perderá tiempo viéndola.' : 'Carry bait gear (e.g. broken +6 weapon) to waste the looter\'s time.'}</li>
                <li>{lang === 'es' ? '¡Interrumpe a los enemigos que lootean a tus aliados! (Golpéalos o dispárales).' : 'Interrupt enemies looting your allies!'}</li>
              </ul>
            </div>

          </div>

          <div style={{ marginTop: '30px', background: 'rgba(59, 130, 246, 0.05)', padding: '20px', borderRadius: '8px', border: '1px solid #3b82f6', display: 'flex', gap: '15px', alignItems: 'center' }}>
            <AlertTriangle size={24} color="#3b82f6" />
            <p style={{ margin: 0, color: 'var(--text-main)', fontSize: '14px', lineHeight: '1.6' }}>
              <strong>{lang === 'es' ? 'Non-Loot Zones (Eventos Seguros):' : 'Non-Loot Zones:'}</strong> {lang === 'es' ? 'Eventos como Valley of Death (VoD), Sea Wraiths, La Arena y TODO el anillo exterior del mapa son zonas donde NO hay loot al morir.' : 'Valley of Death, Sea Wraiths, The Arena, and the entire outer map ring are non-loot areas.'}
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};
