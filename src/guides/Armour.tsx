import React from 'react';
import { ArrowLeft, Shield, Layers, Activity, Zap, TrendingUp, Crosshair } from 'lucide-react';

interface Props {
  onBack: () => void;
  lang: 'es' | 'en';
}

export const Armour: React.FC<Props> = ({ onBack, lang }) => {
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
        <div style={{ height: '250px', backgroundImage: 'url(/guides/armour.png)', backgroundSize: 'cover', backgroundPosition: 'center 30%', position: 'relative' }}>
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, var(--bg-main) 0%, rgba(0,0,0,0.4) 100%)' }}></div>
          <h1 style={{ position: 'absolute', bottom: '20px', left: '30px', fontSize: '42px', color: 'white', textShadow: '0 2px 10px rgba(0,0,0,0.8)', margin: 0, display: 'flex', alignItems: 'center', gap: '15px' }}>
            <Shield size={40} color="var(--accent)" /> {lang === 'es' ? 'Guía de Armaduras' : 'Armour Guide'}
          </h1>
        </div>

        <div style={{ padding: '40px' }}>
          {/* Overview */}
          <div style={{ marginBottom: '40px' }}>
            <p style={{ fontSize: '18px', color: 'var(--text-main)', lineHeight: '1.6', marginBottom: '20px' }}>
              {lang === 'es' 
                ? 'La función principal de la armadura es reducir el daño recibido. Todos los personajes pueden equipar cualquier armadura, pudiendo llevar hasta 6 piezas y un escudo.'
                : 'Armour’s primary function is to reduce damage taken. All armours can be equipped by all characters. Players can equip 6 pieces of armour and a shield.'}
            </p>
            <ul style={{ color: 'var(--text-muted)', paddingLeft: '20px', lineHeight: '1.6' }}>
              <li><strong>{lang === 'es' ? 'Bono de Set:' : 'Set Bonus:'}</strong> {lang === 'es' ? 'Equipar 4 piezas del mismo tipo de armadura (Ligera, Media o Pesada) otorga un 10% extra de reducción de daño en todos los valores. ¡No hay bonos adicionales por llevar 5 o 6!' : 'Wear 4 pieces of one type for a Set Bonus which automatically increases all damage reduction by 10%.'}</li>
              <li><strong>{lang === 'es' ? 'Consumo de Estamina:' : 'Stamina Drain:'}</strong> {lang === 'es' ? 'Cada pieza tiene un multiplicador de drenaje. Las armaduras pesadas drenan mucha más estamina que las ligeras al hacer sprints, patadas o atacar.' : 'Each piece has a Stamina Drain Multiplier. Heavy armour drains the most stamina.'}</li>
              <li><strong>{lang === 'es' ? 'Multiplicador de Daño:' : 'Damage Multiplier:'}</strong> {lang === 'es' ? 'La armadura afecta negativamente tu capacidad de hacer daño. La armadura ligera te permite hacer el máximo daño posible, mientras que la pesada reduce tu daño considerablemente.' : 'Armour negatively affects your ability to do damage. Heavy armour lowers your damage, light armour maximizes it.'}</li>
            </ul>
          </div>

          {/* Tipos de Armadura */}
          <h2 style={{ color: 'var(--accent)', borderBottom: '1px solid var(--border)', paddingBottom: '10px', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Layers size={24} /> {lang === 'es' ? 'Los 3 Tipos de Armadura' : 'The 3 Armour Types'}
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', marginBottom: '50px' }}>
            {/* Light Armour */}
            <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid var(--border)', borderRadius: '8px', padding: '20px' }}>
              <h3 style={{ color: '#10b981', marginBottom: '15px' }}>{lang === 'es' ? 'Armadura Ligera' : 'Light Armour'}</h3>
              <ul style={{ color: 'var(--text-muted)', paddingLeft: '20px', lineHeight: '1.5', fontSize: '14px' }}>
                <li>{lang === 'es' ? 'Menor drenaje de estamina y mayor multiplicador de daño.' : 'Lowest stamina drain and high damage multiplier.'}</li>
                <li>{lang === 'es' ? 'Ofrece la menor cantidad de protección.' : 'Offers the least amount of protection overall.'}</li>
                <li><strong style={{color: '#ef4444'}}>{lang === 'es' ? 'Débil contra: Daño Cortante (Slashing)' : 'Weak against: Slashing damage'}</strong></li>
              </ul>
              <p style={{ marginTop: '15px', fontSize: '13px', color: 'var(--secondary)' }}>
                <em>{lang === 'es' ? 'Favorita de: Arqueros, exploradores y escaramuzadores.' : 'Favorite of: Archers, scouts, cavalry, and skirmishers.'}</em>
              </p>
            </div>

            {/* Medium Armour */}
            <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid var(--border)', borderRadius: '8px', padding: '20px' }}>
              <h3 style={{ color: '#fbbf24', marginBottom: '15px' }}>{lang === 'es' ? 'Armadura Media' : 'Medium Armour'}</h3>
              <ul style={{ color: 'var(--text-muted)', paddingLeft: '20px', lineHeight: '1.5', fontSize: '14px' }}>
                <li>{lang === 'es' ? 'Drenaje de estamina moderado y multiplicador de daño moderado.' : 'Moderate stamina drain and damage multiplier.'}</li>
                <li>{lang === 'es' ? 'Ofrece protección bastante buena y equilibrada.' : 'Offers fairly good overall protection.'}</li>
                <li><strong style={{color: '#ef4444'}}>{lang === 'es' ? 'Débil contra: Daño Perforante (Piercing)' : 'Weak against: Piercing damage'}</strong></li>
              </ul>
              <p style={{ marginTop: '15px', fontSize: '13px', color: 'var(--secondary)' }}>
                <em>{lang === 'es' ? 'Favorita de: Duelistas y espadachines (equilibrio ataque/defensa).' : 'Favorite of: Duelists, bruisers, swordsmen.'}</em>
              </p>
            </div>

            {/* Heavy Armour */}
            <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid var(--border)', borderRadius: '8px', padding: '20px' }}>
              <h3 style={{ color: '#ef4444', marginBottom: '15px' }}>{lang === 'es' ? 'Armadura Pesada' : 'Heavy Armour'}</h3>
              <ul style={{ color: 'var(--text-muted)', paddingLeft: '20px', lineHeight: '1.5', fontSize: '14px' }}>
                <li>{lang === 'es' ? 'Drenaje de estamina altísimo y multiplicador de daño muy bajo.' : 'Very high stamina drain and very low damage multiplier.'}</li>
                <li>{lang === 'es' ? 'Ofrece la mejor protección del juego.' : 'Offers very good overall protection.'}</li>
                <li><strong style={{color: '#ef4444'}}>{lang === 'es' ? 'Débil contra: Daño Contundente (Bludgeoning)' : 'Weak against: Bludgeoning damage'}</strong></li>
              </ul>
              <p style={{ marginTop: '15px', fontSize: '13px', color: 'var(--secondary)' }}>
                <em>{lang === 'es' ? 'Favorita de: Tanques (Escuderos), infantería pesada y médicos.' : 'Favorite of: Shieldmen, heavy infantry, heavy cavalry, medics.'}</em>
              </p>
            </div>
          </div>

          {/* Escudos */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px', marginBottom: '50px' }}>
            <div style={{ flex: '1 1 500px' }}>
              <h2 style={{ color: 'var(--accent)', borderBottom: '1px solid var(--border)', paddingBottom: '10px', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Shield size={24} /> {lang === 'es' ? 'Mecánicas de Escudos' : 'Shield Mechanics'}
              </h2>
              <p style={{ color: 'var(--text-muted)', lineHeight: '1.6', marginBottom: '15px' }}>
                {lang === 'es' 
                  ? 'Los escudos bloquean ataques cuerpo a cuerpo y a distancia en un gran radio frontal. No usan bloqueo direccional. Llevar un escudo en la espalda bloquea flechas, pero no golpes melee.'
                  : 'Shields block melee and ranged attacks. They do not use directional blocking. A shield worn on the back will block arrows, but not melee hits.'}
              </p>
              <div style={{ background: 'rgba(220, 38, 38, 0.05)', border: '1px solid var(--accent)', padding: '15px', borderRadius: '8px', marginBottom: '20px' }}>
                <h4 style={{ color: 'var(--text-main)', margin: '0 0 10px 0' }}>{lang === 'es' ? 'Penalización de Daño' : 'Damage Penalty'}</h4>
                <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '14px' }}>
                  {lang === 'es' ? 'Usar un escudo afecta negativamente tu daño de ataque:' : 'Shields negatively affect damage output:'} <br/>
                  • <strong>{lang === 'es' ? 'Escudos Pesados:' : 'Heavy Shields:'}</strong> -10% {lang === 'es' ? 'de daño.' : 'damage.'} <br/>
                  • <strong>{lang === 'es' ? 'Escudos Ligeros:' : 'Light Shields:'}</strong> -2% {lang === 'es' ? 'de daño.' : 'damage.'} <br/>
                  <em>{lang === 'es' ? '¡Desequípalo si necesitas maximizar tu daño rápidamente!' : 'Unequip it entirely for a quick damage boost!'}</em>
                </p>
              </div>

              <h4 style={{ color: 'var(--text-main)', marginBottom: '10px' }}>{lang === 'es' ? 'Shield Resistance (Resistencia de Escudo)' : 'Shield Resistance'}</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '14px', lineHeight: '1.5' }}>
                {lang === 'es' ? 'Mide cuánto daño puede absorber tu brazo y el escudo antes de cansarse. Si llega a 0, el escudo se astillará y bloquearás automáticamente con tu arma.' : 'Measure of how much damage the shield and arm can take. When depleted, you will begin using your weapon to block.'}
                <br/><br/>
                {lang === 'es' ? 'La resistencia se regenera con el tiempo. Necesitas un mínimo de 100 para poder levantar el escudo. Además, la durabilidad del escudo está ligada a su resistencia máxima (escudos rotos = poca resistencia).' : 'A minimum of 100 shield resistance is required to hold up a block. Durability is tied to resistance max.'}
              </p>
            </div>
            <div style={{ flex: '0 1 400px', display: 'flex', flexDirection: 'column', gap: '20px', justifyContent: 'center' }}>
              <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', padding: '10px', borderRadius: '8px' }}>
                <img src="/armour/shieldresist.png" alt="Shield Resistance" style={{ width: '100%', borderRadius: '4px' }} onError={(e) => e.currentTarget.style.display='none'} />
                <p style={{ textAlign: 'center', color: 'var(--secondary)', fontSize: '12px', marginTop: '10px', marginBottom: 0 }}>
                  {lang === 'es' ? 'Indicador de Resistencia de Escudo (Shield Resistance)' : 'Shield Resistance Indicator'}
                </p>
              </div>
            </div>
          </div>

          {/* Desbloqueo de Armaduras */}
          <h2 style={{ color: 'var(--accent)', borderBottom: '1px solid var(--border)', paddingBottom: '10px', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <TrendingUp size={24} /> {lang === 'es' ? 'Desarrollo del Personaje (Armours)' : 'Character Development (Armours)'}
          </h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px', alignItems: 'flex-start' }}>
            <div style={{ flex: '0 1 450px' }}>
              <img src="/armour/armourstats.png" alt="Armour Tree" style={{ width: '100%', borderRadius: '8px', border: '1px solid var(--border)' }} onError={(e) => e.currentTarget.style.display='none'} />
            </div>
            <div style={{ flex: '1 1 400px' }}>
              <p style={{ color: 'var(--text-muted)', lineHeight: '1.6', marginBottom: '20px' }}>
                {lang === 'es' 
                  ? 'Para desbloquear el uso de armaduras de mayor nivel, debes subir tu árbol de desarrollo (tecla [\' ]). No es necesario maximizar todo de forma horizontal para poder progresar verticalmente.'
                  : 'To unlock higher tiers of armour, you must progress the Character Development tree. You don\'t need full horizontal progression to make vertical progression.'}
              </p>
              <ul style={{ color: 'var(--text-muted)', paddingLeft: '20px', lineHeight: '1.6' }}>
                <li><strong>{lang === 'es' ? 'Para subir a Tier 2:' : 'Advance to Tier 2:'}</strong> {lang === 'es' ? 'Equipa cualquier armadura Tier 1.' : 'Wear any tier 1 armour.'}</li>
                <li><strong>{lang === 'es' ? 'Para subir a Tier 3:' : 'Advance to Tier 3:'}</strong> {lang === 'es' ? 'Equipa cualquier armadura Tier 2.' : 'Wear any tier 2 armour.'}</li>
                <li><strong>{lang === 'es' ? 'Para subir a Tier 4:' : 'Advance to Tier 4:'}</strong> {lang === 'es' ? 'Equipa armadura Tier 3 y pelea contra enemigos Nivel 20+.' : 'Wear tier 3 against level 20+ enemies.'}</li>
                <li><strong>{lang === 'es' ? 'Para subir a Tier 5:' : 'Advance to Tier 5:'}</strong> {lang === 'es' ? 'Equipa armadura Tier 4 y pelea contra enemigos Nivel 35+.' : 'Wear tier 4 against level 35+ enemies.'}</li>
              </ul>
              
              <div style={{ background: 'var(--bg-hover)', border: '1px solid var(--border)', padding: '15px', borderRadius: '8px', marginTop: '20px' }}>
                <h4 style={{ color: 'var(--accent)', margin: '0 0 10px 0', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Activity size={18} /> {lang === 'es' ? 'Beneficios de Maestría (Tier 5)' : 'Benefits of Mastery'}
                </h4>
                <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '14px', lineHeight: '1.5' }}>
                  {lang === 'es' ? 'En el Tier 5 cada pieza se debe masterizar por separado (Casco, Pecho, Piernas...). Cada nodo de maestría otorga:' : 'Tier 5 pieces are mastered independently. Each node grants:'} <br/>
                  <br/>
                  • +2% {lang === 'es' ? 'de reducción de daño.' : 'Damage reduction.'} <br/>
                  • -10% {lang === 'es' ? 'de pérdida de durabilidad en la armadura o escudo.' : 'Armour/Shield durability loss.'} <br/>
                  • +3% {lang === 'es' ? 'de resistencia en escudos.' : 'Shield resistance.'}
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
