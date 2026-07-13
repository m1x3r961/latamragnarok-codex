import React from 'react';
import { ArrowLeft, Shield, Sword, Heart, Zap } from 'lucide-react';

interface Props {
  onBack: () => void;
  lang: 'es' | 'en';
}

export const CharacterStatistics: React.FC<Props> = ({ onBack, lang }) => {
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
        <div style={{ height: '200px', backgroundImage: 'url(/guides/character_statistics.png)', backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative' }}>
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, var(--bg-main) 0%, transparent 100%)' }}></div>
          <h1 style={{ position: 'absolute', bottom: '20px', left: '30px', fontSize: '42px', color: 'white', textShadow: '0 2px 10px rgba(0,0,0,0.8)', margin: 0 }}>
            {lang === 'es' ? 'Estadísticas del Personaje' : 'Character Statistics'}
          </h1>
        </div>

        <div style={{ padding: '40px' }}>
          <p style={{ fontSize: '18px', color: 'var(--text-main)', lineHeight: '1.6', marginBottom: '30px' }}>
            {lang === 'es' 
              ? 'Esta guía resume las estadísticas de tu personaje y cómo afectan tu desempeño en el campo de batalla. Al subir de nivel, recibirás 5 puntos de atributo para distribuir. ¡Elige sabiamente!'
              : 'This guide summarizes character statistics and how they affect your performance on the battlefield. You receive 5 attribute points to distribute each time you level up. Choose wisely!'}
          </p>

          <h2 style={{ color: 'var(--accent)', borderBottom: '1px solid var(--border)', paddingBottom: '10px', marginBottom: '20px' }}>
            {lang === 'es' ? 'Los 3 Atributos Principales' : 'The 3 Main Attributes'}
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', marginBottom: '40px' }}>
            {/* Strength */}
            <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid var(--border)', borderRadius: '8px', padding: '20px' }}>
              <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#ef4444', marginBottom: '15px', fontSize: '20px' }}>
                <Sword size={24} /> {lang === 'es' ? 'Fuerza (Strength)' : 'Strength'}
              </h3>
              <ul style={{ color: 'var(--text-muted)', paddingLeft: '20px', lineHeight: '1.5' }}>
                <li style={{ marginBottom: '8px' }}>{lang === 'es' ? 'Aumenta el daño de las armas que escalan con fuerza (lanzas, mazas, hachas, martillos).' : 'Increases overall damage output of all weapons.'}</li>
                <li style={{ marginBottom: '8px' }}>{lang === 'es' ? 'Reduce el daño cortante (slashing) recibido.' : 'Reduces incoming slashing damage.'}</li>
                <li style={{ marginBottom: '8px' }}>{lang === 'es' ? 'Aumenta tu estamina máxima y su regeneración levemente.' : 'Provides a good increase to stamina and minor regen.'}</li>
              </ul>
              <p style={{ marginTop: '15px', fontSize: '14px', color: 'var(--secondary)' }}>
                <em>{lang === 'es' ? 'Ideal para: Luchadores cuerpo a cuerpo de alto daño, escuderos y médicos.' : 'Important for high damage melee fighters, shieldmen, and medics.'}</em>
              </p>
            </div>

            {/* Constitution */}
            <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid var(--border)', borderRadius: '8px', padding: '20px' }}>
              <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#3b82f6', marginBottom: '15px', fontSize: '20px' }}>
                <Heart size={24} /> {lang === 'es' ? 'Constitución (Constitution)' : 'Constitution'}
              </h3>
              <ul style={{ color: 'var(--text-muted)', paddingLeft: '20px', lineHeight: '1.5' }}>
                <li style={{ marginBottom: '8px' }}>{lang === 'es' ? 'Reduce el daño contundente (bludgeoning) recibido.' : 'Reduces incoming bludgeoning damage.'}</li>
                <li style={{ marginBottom: '8px' }}>{lang === 'es' ? 'Aumento masivo a la vida máxima (Health) y regeneración de vida.' : 'Superior increases to health and health regeneration.'}</li>
                <li style={{ marginBottom: '8px' }}>{lang === 'es' ? 'Buen aumento a la estamina y su regeneración.' : 'Provides a good bonus to stamina regen and stamina pool.'}</li>
              </ul>
              <p style={{ marginTop: '15px', fontSize: '14px', color: 'var(--secondary)' }}>
                <em>{lang === 'es' ? 'Ideal para: Tanques (escuderos), médicos y jugadores que quieren sobrevivir mucho tiempo.' : 'Favorite for shieldmen, medics and survivalists.'}</em>
              </p>
            </div>

            {/* Dexterity */}
            <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid var(--border)', borderRadius: '8px', padding: '20px' }}>
              <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#10b981', marginBottom: '15px', fontSize: '20px' }}>
                <Zap size={24} /> {lang === 'es' ? 'Destreza (Dexterity)' : 'Dexterity'}
              </h3>
              <ul style={{ color: 'var(--text-muted)', paddingLeft: '20px', lineHeight: '1.5' }}>
                <li style={{ marginBottom: '8px' }}>{lang === 'es' ? 'Reduce el daño perforante (piercing) recibido.' : 'Reduces incoming piercing damage.'}</li>
                <li style={{ marginBottom: '8px' }}>{lang === 'es' ? 'Gran aumento en la regeneración de estamina.' : 'Superior increase to stamina regeneration.'}</li>
                <li style={{ marginBottom: '8px' }}>{lang === 'es' ? 'Aumenta significativamente el daño de arcos, dagas, y espadas.' : 'Increases damage of bows, daggers, and swords.'}</li>
              </ul>
              <p style={{ marginTop: '15px', fontSize: '14px', color: 'var(--secondary)' }}>
                <em>{lang === 'es' ? 'Ideal para: Arqueros, espadachines ágiles y repartidores de daño rápido.' : 'Favorite for archers, swordsmen, and fast damage dealers.'}</em>
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '30px', flexWrap: 'wrap', marginBottom: '40px' }}>
            <div style={{ flex: '1 1 300px' }}>
              <h3 style={{ color: 'var(--text-main)', marginBottom: '15px' }}>
                {lang === 'es' ? 'Costo de Puntos por Atributo (Rendimientos Decrecientes)' : 'Attribute Point Cost (Diminishing Returns)'}
              </h3>
              <p style={{ color: 'var(--text-muted)', marginBottom: '15px', fontSize: '14px' }}>
                {lang === 'es' 
                  ? 'Cuantos más puntos pones en un mismo atributo, más caro será seguir aumentándolo. Mantener un balance suele ser clave.'
                  : 'The more points you put into a single attribute, the more it costs.'}
              </p>
              <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid var(--border)', borderRadius: '8px', overflow: 'hidden' }}>
                <thead>
                  <tr style={{ background: 'rgba(255,255,255,0.05)', color: 'var(--accent)' }}>
                    <th style={{ padding: '10px', textAlign: 'left', borderBottom: '1px solid var(--border)' }}>{lang === 'es' ? 'Rango del Atributo' : 'Attribute Range'}</th>
                    <th style={{ padding: '10px', textAlign: 'left', borderBottom: '1px solid var(--border)' }}>{lang === 'es' ? 'Costo por Punto' : 'Cost per Point'}</th>
                  </tr>
                </thead>
                <tbody style={{ color: 'var(--text-main)' }}>
                  <tr>
                    <td style={{ padding: '10px', borderBottom: '1px solid var(--border)' }}>80 - 150</td>
                    <td style={{ padding: '10px', borderBottom: '1px solid var(--border)' }}>1</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '10px', borderBottom: '1px solid var(--border)' }}>151 - 200</td>
                    <td style={{ padding: '10px', borderBottom: '1px solid var(--border)' }}>2</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '10px' }}>201+</td>
                    <td style={{ padding: '10px' }}>3</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div style={{ flex: '1 1 300px', background: 'rgba(220, 38, 38, 0.05)', border: '1px solid var(--accent)', borderRadius: '8px', padding: '20px' }}>
              <h3 style={{ color: 'var(--accent)', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Shield size={20} /> {lang === 'es' ? 'Información Adicional' : 'Additional Info'}
              </h3>
              <ul style={{ color: 'var(--text-muted)', paddingLeft: '20px', lineHeight: '1.6', fontSize: '14px' }}>
                <li style={{ marginBottom: '8px' }}><strong>{lang === 'es' ? 'Reseteo de Atributos:' : 'Stat Resets:'}</strong> {lang === 'es' ? 'Tienes reseteos infinitos hasta llegar a nivel 90. Después, si lo superas con cualquier personaje, requieren comprar un reset en el Mercado o Tienda.' : 'Infinite and free until level 90. After that, you must buy a reset.'}</li>
                <li style={{ marginBottom: '8px' }}><strong>{lang === 'es' ? 'Cartas de Atributo:' : 'Attribute Cards:'}</strong> {lang === 'es' ? 'Puedes conseguir hasta 20 puntos de atributo extra permanentes usando cartas que se farmean matando Jefes (Kargald Champion) o comprándolas en el mercado.' : 'You can permanently apply up to 20 extra points using cards.'}</li>
                <li><strong>{lang === 'es' ? 'Mentor Points:' : 'Mentor Points:'}</strong> {lang === 'es' ? 'Modifica tu "Suerte (RNG)" al abrir cofres. Se ganan únicamente ayudando a jugadores novatos (mentoring).' : 'Modifies luck for loot. Earned by helping new players!'}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
