import React from 'react';
import { ArrowLeft, Sword, Crosshair, Activity, TrendingUp, Shield, Navigation, Hand } from 'lucide-react';

interface Props {
  onBack: () => void;
  lang: 'es' | 'en';
}

export const Weapons: React.FC<Props> = ({ onBack, lang }) => {
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
        <div style={{ height: '250px', backgroundImage: 'url(/guides/weapons.png)', backgroundSize: 'cover', backgroundPosition: 'center 30%', position: 'relative' }}>
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, var(--bg-main) 0%, rgba(0,0,0,0.4) 100%)' }}></div>
          <h1 style={{ position: 'absolute', bottom: '20px', left: '30px', fontSize: '42px', color: 'white', textShadow: '0 2px 10px rgba(0,0,0,0.8)', margin: 0, display: 'flex', alignItems: 'center', gap: '15px' }}>
            <Sword size={40} color="var(--accent)" /> {lang === 'es' ? 'Guía de Armas' : 'Weapons Guide'}
          </h1>
        </div>

        <div style={{ padding: '40px' }}>
          {/* Overview */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px', marginBottom: '40px' }}>
            <div style={{ flex: '1 1 400px' }}>
              <p style={{ fontSize: '18px', color: 'var(--text-main)', lineHeight: '1.6', marginBottom: '20px' }}>
                {lang === 'es' 
                  ? 'Existe una gran variedad de armas en Gloria Victis, y elegir la correcta es crucial. Las armas hacen diferentes tipos de daño según la dirección del ataque y vienen en varias longitudes.'
                  : 'A variety of weapons exists in Gloria Victis, and choosing the right one for the situation is important. Weapons each deal specific types of damage when used in different directional attacks.'}
              </p>
              <ul style={{ color: 'var(--text-muted)', paddingLeft: '20px', lineHeight: '1.6', marginBottom: '20px' }}>
                <li><strong>{lang === 'es' ? 'Tipos de Daño:' : 'Damage Types:'}</strong> {lang === 'es' ? 'Perforante (Piercing), Cortante (Slashing), y Contundente (Bludgeoning).' : 'Piercing, Slashing, Bludgeoning.'}</li>
                <li><strong>{lang === 'es' ? 'Tier de Armas:' : 'Weapon Tiers:'}</strong> {lang === 'es' ? 'Un tipo de arma (ej. espadas, hachas) tiene siempre los mismos modificadores. El Tier (nivel) solo afecta al daño base. Un hacha Tier 5 pegará más fuerte que un hacha Tier 4.' : 'A weapon type shares the same directional modifiers regardless of tier. Tier only affects overall damage.'}</li>
              </ul>
            </div>
            <div style={{ flex: '0 1 400px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <img src="/weapons/attributes.png" alt="Stats Chart" style={{ width: '100%', borderRadius: '8px', border: '1px solid var(--border)' }} onError={(e) => e.currentTarget.style.display='none'} />
              <p style={{ textAlign: 'center', color: 'var(--secondary)', fontSize: '12px', margin: 0 }}>
                {lang === 'es' ? 'Cómo afectan tus atributos (stats) al daño.' : 'How your stats affect your damage.'}
              </p>
            </div>
          </div>

          {/* Arcos */}
          <h2 style={{ color: 'var(--accent)', borderBottom: '1px solid var(--border)', paddingBottom: '10px', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Crosshair size={24} /> {lang === 'es' ? 'Arcos (Bows)' : 'Bows'}
          </h2>
          <div style={{ marginBottom: '40px' }}>
            <p style={{ color: 'var(--text-muted)', lineHeight: '1.6', marginBottom: '20px' }}>
              {lang === 'es' ? 'Funcionan mejor con Armadura Ligera y Destreza (Dexterity). Si no tienes habilidades de arquero, tu carcaj (quiver) será muy pequeño. Hay 3 variedades:' : 'Bows work best with light armor and high dexterity. If not specialized, you will have very low ammunition. 3 varieties:'}
            </p>
            <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid var(--border)', borderRadius: '8px', overflow: 'hidden', marginBottom: '20px' }}>
              <thead>
                <tr style={{ background: 'rgba(255,255,255,0.05)', color: 'var(--accent)' }}>
                  <th style={{ padding: '12px', textAlign: 'left', borderBottom: '1px solid var(--border)' }}>{lang === 'es' ? 'Tipo' : 'Type'}</th>
                  <th style={{ padding: '12px', textAlign: 'left', borderBottom: '1px solid var(--border)' }}>{lang === 'es' ? 'Flechas (Min/Max)' : 'Arrows (Min/Max)'}</th>
                  <th style={{ padding: '12px', textAlign: 'left', borderBottom: '1px solid var(--border)' }}>{lang === 'es' ? 'Características' : 'Characteristics'}</th>
                </tr>
              </thead>
              <tbody style={{ color: 'var(--text-main)', fontSize: '14px' }}>
                <tr>
                  <td style={{ padding: '12px', borderBottom: '1px solid var(--border)' }}>{lang === 'es' ? 'Simple (Simple)' : 'Simple'}</td>
                  <td style={{ padding: '12px', borderBottom: '1px solid var(--border)' }}>11 / 45</td>
                  <td style={{ padding: '12px', borderBottom: '1px solid var(--border)' }}>{lang === 'es' ? 'Daño Perforante, 15% Pen. Armadura, Cadencia Moderada.' : 'Piercing Damage, 15% Armor Pen, Moderate fire rate.'}</td>
                </tr>
                <tr>
                  <td style={{ padding: '12px', borderBottom: '1px solid var(--border)' }}>{lang === 'es' ? 'Reflejo (Reflex)' : 'Reflex'}</td>
                  <td style={{ padding: '12px', borderBottom: '1px solid var(--border)' }}>12 / 50</td>
                  <td style={{ padding: '12px', borderBottom: '1px solid var(--border)' }}>{lang === 'es' ? 'Daño Perforante, 10% Pen. Armadura, Cadencia Alta.' : 'Piercing Damage, 10% Armor Pen, High fire rate.'}</td>
                </tr>
                <tr>
                  <td style={{ padding: '12px' }}>{lang === 'es' ? 'Largo (Long)' : 'Long'}</td>
                  <td style={{ padding: '12px' }}>8 / 35</td>
                  <td style={{ padding: '12px' }}>{lang === 'es' ? 'Daño Perforante, 22% Pen. Armadura, Cadencia Baja.' : 'Piercing Damage, 22% Armor Pen, Low fire rate.'}</td>
                </tr>
              </tbody>
            </table>
            <div style={{ background: 'rgba(255,255,255,0.02)', padding: '15px', borderRadius: '8px' }}>
              <h4 style={{ color: 'var(--text-main)', margin: '0 0 10px 0' }}>{lang === 'es' ? 'Regeneración de Flechas' : 'Arrow Regeneration'}</h4>
              <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '14px', lineHeight: '1.5' }}>
                {lang === 'es' ? 'Regeneración pasiva: 10% del máximo por minuto (15% con habilidades). Cambiar de arma no frena esta regeneración.' : 'Passive regeneration is 10% per minute (up to 15% with abilities). Changing weapons does not stop it.'} <br/>
                {lang === 'es' ? 'Regeneración activa: Ganas flechas al herir y matar enemigos.' : 'Active regeneration: Arrows are regenerated upon wounding/killing enemies.'}
              </p>
            </div>
          </div>

          {/* 1 Mano vs 2 Manos */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', marginBottom: '40px' }}>
            {/* 1 Handed */}
            <div style={{ border: '1px solid var(--border)', borderRadius: '8px', padding: '20px' }}>
              <h2 style={{ color: 'var(--accent)', marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Hand size={24} /> {lang === 'es' ? 'Armas de 1 Mano' : '1 Handed Weapons'}
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '14px', lineHeight: '1.5', marginBottom: '15px' }}>
                {lang === 'es' ? 'Ideales para usar con escudo. No se puede usar un arma en cada mano (Dual Wield).' : 'Ideal to use with a shield. Dual wielding is not possible.'}
              </p>
              <ul style={{ color: 'var(--text-main)', fontSize: '14px', paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <li><strong>{lang === 'es' ? 'Hacha (Axe):' : 'Axe:'}</strong> {lang === 'es' ? 'Corta puertas/escudos/ligeros. Overh: 1.2x (Slashing).' : 'Best vs shields/doors/light armor. Overh: 1.2x Slashing.'}</li>
                <li><strong>{lang === 'es' ? 'Daga (Dagger):' : 'Dagger:'}</strong> {lang === 'es' ? 'Muy corto rango. Causa sangrado. Overh/Stab: 1.0x (Piercing).' : 'Very short range. Causes bleed. Overh/Stab: 1.0x Piercing.'}</li>
                <li><strong>{lang === 'es' ? 'Maza (Mace/Pick):' : 'Mace/Pick:'}</strong> {lang === 'es' ? 'Efectivas contra armadura pesada. Overh: 1.1x (Bludgeon).' : 'Best against heavy armor. Overh: 1.1x Bludgeon.'}</li>
                <li><strong>{lang === 'es' ? 'Lanza 1H (Spear):' : 'Spear:'}</strong> {lang === 'es' ? 'La de mayor rango a 1 mano. Stab: 1.0x (Piercing).' : 'Longest 1H. Best against medium armor. Stab: 1.0x Piercing.'}</li>
                <li><strong>{lang === 'es' ? 'Espada (Sword):' : 'Sword:'}</strong> {lang === 'es' ? 'Sangrado en stabs. Izq/Der/Overh: 1.0x (Slashing).' : 'Bleed with stabs. Best against light/medium. Left/Right/Overh: 1.0x Slashing.'}</li>
              </ul>
            </div>

            {/* 2 Handed */}
            <div style={{ border: '1px solid var(--border)', borderRadius: '8px', padding: '20px' }}>
              <h2 style={{ color: 'var(--accent)', marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Sword size={24} /> {lang === 'es' ? 'Armas de 2 Manos' : '2 Handed Weapons'}
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '14px', lineHeight: '1.5', marginBottom: '15px' }}>
                {lang === 'es' ? 'Mayor daño global, pero sin escudo (bloqueo direccional). Habilidad "Reaper" permite "Cleave" (golpear hasta a 3 enemigos de un tajo).' : 'Most overall damage, no shield. Reaper ability allows cleave attacks (hit up to 3 enemies).'}
              </p>
              <ul style={{ color: 'var(--text-main)', fontSize: '14px', paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <li><strong>{lang === 'es' ? 'Hacha 2H / Bardiche / Glaive:' : '2H Axe / Bardiche / Glaive:'}</strong> {lang === 'es' ? 'Daño cortante principal, pueden hacer Cleave.' : 'Mainly slashing damage, capable of cleave attacks.'}</li>
                <li><strong>{lang === 'es' ? 'Guisarme:' : 'Guisarme:'}</strong> {lang === 'es' ? 'Única con daño 100% Perforante en todos sus lados.' : 'Only weapon with all Piercing damage.'}</li>
                <li><strong>{lang === 'es' ? 'Alabarda (Halberd):' : 'Halberd:'}</strong> {lang === 'es' ? 'El arma de cleave con mayor longitud.' : 'Longest cleaving weapon.'}</li>
                <li><strong>{lang === 'es' ? 'Martillo 2H (Hammer):' : 'Hammer:'}</strong> {lang === 'es' ? 'Contundente. Caza-tanques (armadura pesada) y Cleave.' : 'Bludgeoning. Best vs heavy armor. Cleave attacks.'}</li>
                <li><strong>{lang === 'es' ? 'Lanza de Cab. (Lance):' : 'Lance:'}</strong> {lang === 'es' ? 'Se usa montado (Couch). A pie tira un "brace" anti-caballería.' : 'Couch on horse. On foot, brace against cavalry.'}</li>
              </ul>
            </div>
          </div>

          {/* Resistencias de Bloqueo y Longitudes */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px', marginBottom: '50px' }}>
            <div style={{ flex: '1 1 500px' }}>
              <h2 style={{ color: 'var(--accent)', borderBottom: '1px solid var(--border)', paddingBottom: '10px', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Shield size={24} /> {lang === 'es' ? 'Weapon Block Resistance' : 'Weapon Block Resistance'}
              </h2>
              <div style={{ marginBottom: '20px', display: 'flex', justifyContent: 'center' }}>
                <img src="/weapons/centralblock.png" alt="Weapon Resistance" style={{ width: '80%', borderRadius: '8px', border: '1px solid var(--border)' }} onError={(e) => e.currentTarget.style.display='none'} />
              </div>
              <p style={{ color: 'var(--text-muted)', fontSize: '14px', lineHeight: '1.6' }}>
                {lang === 'es' 
                  ? 'Cualquier arma (excepto arcos) puede bloquear. Todas tienen 600 de "Weapon Resistance" (Resistencia del Arma).'
                  : 'Any weapon (except bows) can block. All weapons have 600 Weapon Resistance.'}
              </p>
              <ul style={{ color: 'var(--text-muted)', fontSize: '14px', paddingLeft: '20px', lineHeight: '1.6' }}>
                <li>{lang === 'es' ? 'Regenera 6 por segundo. Si se agota, deberás equipar un escudo.' : 'Regenerates 6 per sec. If 0, equip a shield.'}</li>
                <li>{lang === 'es' ? 'Recuperas 90 de Resistencia al acertar un golpe al enemigo.' : 'Regain 90 Resistance by hitting an enemy.'}</li>
                <li>{lang === 'es' ? 'Bloqueo Perfecto: Usa hasta 50 de Resistencia.' : 'Perfect block: uses up to 50 Resistance.'}</li>
                <li>{lang === 'es' ? 'Bloqueo Imperfecto: Usa hasta 70 de Resistencia.' : 'Imperfect block: uses up to 70 Resistance.'}</li>
                <li>{lang === 'es' ? 'Mantener el bloqueo por >3 segundos cuesta 100.' : 'Holding block for >3s costs 100.'}</li>
                <li>{lang === 'es' ? 'Los Chambers NO consumen Resistencia. ¡Aprovéchalos!' : 'Chambering does not use resistance.'}</li>
                <li>{lang === 'es' ? 'Es Global. Cambiar de arma no resetea la resistencia a 600.' : 'It is global. Swapping weapons does not refresh it.'}</li>
              </ul>
            </div>

            <div style={{ flex: '0 1 350px' }}>
              <h2 style={{ color: 'var(--accent)', borderBottom: '1px solid var(--border)', paddingBottom: '10px', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Navigation size={24} /> {lang === 'es' ? 'Longitud de Armas' : 'Weapon Lengths'}
              </h2>
              <div style={{ background: 'var(--bg-hover)', padding: '20px', borderRadius: '8px', border: '1px solid var(--border)' }}>
                <ul style={{ color: 'var(--text-main)', fontSize: '14px', paddingLeft: '0', listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', margin: 0 }}>
                  <li style={{ display: 'flex', justifyContent: 'space-between' }}><span>Dagger</span> <span style={{ color: 'var(--accent)' }}>2.9</span></li>
                  <li style={{ display: 'flex', justifyContent: 'space-between' }}><span>1H Mace / Axe</span> <span style={{ color: 'var(--accent)' }}>4.2 - 4.6</span></li>
                  <li style={{ display: 'flex', justifyContent: 'space-between' }}><span>1H Sword</span> <span style={{ color: 'var(--accent)' }}>5.3 - 6.4</span></li>
                  <li style={{ display: 'flex', justifyContent: 'space-between' }}><span>2H Sword</span> <span style={{ color: 'var(--accent)' }}>6.0 - 7.6</span></li>
                  <li style={{ display: 'flex', justifyContent: 'space-between' }}><span>2H Hammer</span> <span style={{ color: 'var(--accent)' }}>7.1 - 7.5</span></li>
                  <li style={{ display: 'flex', justifyContent: 'space-between' }}><span>Glaive / 2H Axe</span> <span style={{ color: 'var(--accent)' }}>7.8 - 8.2</span></li>
                  <li style={{ display: 'flex', justifyContent: 'space-between' }}><span>Guisarme / Bardiche</span> <span style={{ color: 'var(--accent)' }}>8.3 - 8.9</span></li>
                  <li style={{ display: 'flex', justifyContent: 'space-between' }}><span>1H Spear</span> <span style={{ color: 'var(--accent)' }}>9.5</span></li>
                  <li style={{ display: 'flex', justifyContent: 'space-between' }}><span>2H Spear / Halberd</span> <span style={{ color: 'var(--accent)' }}>10.3 - 11.0</span></li>
                  <li style={{ display: 'flex', justifyContent: 'space-between' }}><span>2H Lance</span> <span style={{ color: 'var(--accent)' }}>13.0</span></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Desbloqueo de Armas (Árbol) */}
          <h2 style={{ color: 'var(--accent)', borderBottom: '1px solid var(--border)', paddingBottom: '10px', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <TrendingUp size={24} /> {lang === 'es' ? 'Desarrollo del Personaje (Weapons)' : 'Character Development (Weapons)'}
          </h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px', alignItems: 'flex-start' }}>
            <div style={{ flex: '0 1 450px' }}>
              <img src="/weapons/weapons.png" alt="Weapons Tree" style={{ width: '100%', borderRadius: '8px', border: '1px solid var(--border)' }} onError={(e) => e.currentTarget.style.display='none'} />
            </div>
            <div style={{ flex: '1 1 400px' }}>
              <p style={{ color: 'var(--text-muted)', lineHeight: '1.6', marginBottom: '20px' }}>
                {lang === 'es' 
                  ? 'Desbloquear armas de mayor nivel funciona exactamente igual que las armaduras (tecla [\' ]). Al final del Tier 5, deberás masterizar cada arma por separado.'
                  : 'Unlocking weapons works just like armours. At Tier 5, each specific weapon type must be mastered independently.'}
              </p>
              <ul style={{ color: 'var(--text-muted)', paddingLeft: '20px', lineHeight: '1.6' }}>
                <li><strong>{lang === 'es' ? 'Subir a Tier 4/5:' : 'Advance to Tier 4/5:'}</strong> {lang === 'es' ? 'Requiere matar enemigos Nivel 20+ (para T4) o Nivel 35+ (para T5) usando las armas requeridas.' : 'Requires killing level 20+ (T4) or level 35+ (T5) enemies using required weapons.'}</li>
                <li><strong>{lang === 'es' ? 'Ramas Finales:' : 'Final Branches:'}</strong> {lang === 'es' ? 'Se dividen en Una Mano, Dos Manos y A Distancia.' : 'Divided into One-handers, Two-handers, and Ranged.'}</li>
                <li><strong>{lang === 'es' ? 'Throwing (Lanzadizas):' : 'Throwing:'}</strong> {lang === 'es' ? 'Dagas, hachas, lanzas, antorchas y hoces (sickles) pueden ser arrojadas sin requerir habilidades extra.' : 'Daggers, axes, spears, torches, sickles can be thrown natively.'}</li>
              </ul>
              
              <div style={{ background: 'var(--bg-hover)', border: '1px solid var(--border)', padding: '15px', borderRadius: '8px', marginTop: '20px' }}>
                <h4 style={{ color: 'var(--accent)', margin: '0 0 10px 0', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Activity size={18} /> {lang === 'es' ? 'Beneficios de Maestría (Tier 5)' : 'Weapon Mastery'}
                </h4>
                <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '14px', lineHeight: '1.5' }}>
                  {lang === 'es' ? 'Cada nodo de maestría de arma completado te otorga uno de los siguientes beneficios:' : 'Each node grants one of the following:'} <br/>
                  <br/>
                  • {lang === 'es' ? 'Aumento de daño con esa arma.' : 'Increased damage.'} <br/>
                  • {lang === 'es' ? 'Reducción de pérdida de durabilidad.' : 'Reduced durability loss.'} <br/>
                  • {lang === 'es' ? 'Reducción de estamina al usarla/sostenerla.' : 'Reduced stamina usage for holding/using.'}
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
