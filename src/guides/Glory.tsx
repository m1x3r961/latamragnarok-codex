import React from 'react';
import { ArrowLeft, Trophy, Star, Store, Calendar, Medal, MapPin } from 'lucide-react';

interface Props {
  onBack: () => void;
  lang: 'es' | 'en';
}

export const Glory: React.FC<Props> = ({ onBack, lang }) => {
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
        <div style={{ height: '250px', backgroundImage: 'url(/guides/glory.png)', backgroundColor: '#1f2937', backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative' }}>
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, var(--bg-main) 0%, rgba(0,0,0,0.4) 100%)' }}></div>
          <h1 style={{ position: 'absolute', bottom: '20px', left: '30px', fontSize: '42px', color: 'white', textShadow: '0 2px 10px rgba(0,0,0,0.8)', margin: 0, display: 'flex', alignItems: 'center', gap: '15px' }}>
            <Trophy size={40} color="var(--accent)" /> {lang === 'es' ? 'Guía de Gloria (Glory)' : 'Glory Guide'}
          </h1>
        </div>

        <div style={{ padding: '40px' }}>
          {/* Overview */}
          <div style={{ marginBottom: '40px' }}>
            <p style={{ fontSize: '18px', color: 'var(--text-main)', lineHeight: '1.6', marginBottom: '30px' }}>
              {lang === 'es' 
                ? 'El sistema de "Gloria" recompensa la actividad PvP. Ganas puntos de gloria capturando banderas, en asedios y eventos. Los niveles de gloria te permiten comprar ítems y recetas de alta calidad.'
                : 'Glory is a system for rewarding PvP activity. Accumulate glory points to unlock access to high quality items and recipes.'}
            </p>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
              <div style={{ background: 'var(--bg-hover)', padding: '20px', borderRadius: '8px', borderLeft: '4px solid #facc15' }}>
                <h4 style={{ color: '#facc15', margin: '0 0 10px 0', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Star size={18} /> {lang === 'es' ? 'Glory Points' : 'Glory Points'}
                </h4>
                <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '14px', lineHeight: '1.5' }}>
                  {lang === 'es' ? 'Puntos ganados por capturar/defender banderas, y completar eventos o asedios.' : 'Earned by capturing/defending flags and completing events and sieges.'}
                </p>
              </div>
              <div style={{ background: 'var(--bg-hover)', padding: '20px', borderRadius: '8px', borderLeft: '4px solid #60a5fa' }}>
                <h4 style={{ color: '#60a5fa', margin: '0 0 10px 0', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Medal size={18} /> {lang === 'es' ? 'Glory Levels' : 'Glory Levels'}
                </h4>
                <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '14px', lineHeight: '1.5' }}>
                  {lang === 'es' ? 'Niveles ganados al acumular puntos. Sirven como REQUISITO para poder comprarle cosas a los Glory Vendors.' : 'Earned by accumulating glory points. Required to unlock the right to purchase items.'}
                </p>
              </div>
              <div style={{ background: 'var(--bg-hover)', padding: '20px', borderRadius: '8px', borderLeft: '4px solid #a78bfa' }}>
                <h4 style={{ color: '#a78bfa', margin: '0 0 10px 0', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Trophy size={18} /> {lang === 'es' ? 'Glory Ranking (F2)' : 'Glory Ranking (F2)'}
                </h4>
                <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '14px', lineHeight: '1.5' }}>
                  {lang === 'es' ? 'Ranking estacional (Season) de tu nación. El top 3% gana recompensas enormes (títulos, oro).' : 'Seasonal ranking of your nation. Top 3% earn significant rewards (titles and gold).'}
                </p>
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px', marginBottom: '50px' }}>
            {/* Glory Vendors & Quartermasters */}
            <div style={{ flex: '1 1 500px' }}>
              <h2 style={{ color: 'var(--accent)', borderBottom: '1px solid var(--border)', paddingBottom: '10px', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Store size={24} /> {lang === 'es' ? 'Vendedores de Gloria y Quartermasters' : 'Glory Vendors & Quartermaster'}
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{ background: 'rgba(255,255,255,0.02)', padding: '20px', borderRadius: '8px', border: '1px solid var(--border)' }}>
                  <h3 style={{ color: 'var(--text-main)', marginBottom: '10px' }}>{lang === 'es' ? 'Glory Vendor' : 'Glory Vendor'}</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '14px', lineHeight: '1.6', margin: 0 }}>
                    {lang === 'es' 
                      ? 'Venden recetas valiosas usando Contribution Points. Se requiere tener un Glory Level alto para desbloquearlas. ¡Solo aquí se puede conseguir el set de armadura y arma de "Champion" (Campeón)!'
                      : 'Sells valuable recipes for Contribution Points. Requires Glory Level. The only place to get the Champion\'s armor and weapon set.'}
                  </p>
                </div>
                
                <div style={{ background: 'rgba(255,255,255,0.02)', padding: '20px', borderRadius: '8px', border: '1px solid var(--border)' }}>
                  <h3 style={{ color: 'var(--text-main)', marginBottom: '10px' }}>{lang === 'es' ? 'Glory Quartermaster' : 'Glory Quartermaster'}</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '14px', lineHeight: '1.6', margin: 0 }}>
                    {lang === 'es' 
                      ? 'Vende materiales de crafteo, y servicios de cuenta/personaje (como reseteo de stats). También se compran con Contribution Points.'
                      : 'Sells crafting items, character and account services using Contribution Points.'}
                  </p>
                </div>

                <div style={{ background: 'var(--bg-hover)', padding: '20px', borderRadius: '8px' }}>
                  <h4 style={{ color: 'var(--accent)', margin: '0 0 10px 0', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <MapPin size={18} /> {lang === 'es' ? 'Ubicaciones' : 'Locations'}
                  </h4>
                  <ul style={{ color: 'var(--text-main)', fontSize: '14px', paddingLeft: '20px', lineHeight: '1.6', margin: 0 }}>
                    <li><strong>Ismirs:</strong> Fort Mereley</li>
                    <li><strong>Midlanders:</strong> Fort Dunfen</li>
                    <li><strong>Sangmar:</strong> Fort Serai</li>
                    <li style={{ color: 'var(--text-muted)', marginTop: '5px' }}>
                      <em>{lang === 'es' ? 'Los Quartermasters también están en la ciudad capital y en localizaciones mejoradas de la nación.' : 'Quartermasters are also in the capital city and upgraded nation locations.'}</em>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div style={{ flex: '0 1 350px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <img src="/gloria/gloria.png" alt="Glory Interface" style={{ width: '100%', borderRadius: '8px', border: '1px solid var(--border)' }} onError={(e) => e.currentTarget.style.display='none'} />
              
              <div style={{ background: 'rgba(16, 185, 129, 0.05)', padding: '25px', borderRadius: '8px', border: '1px solid #10b981' }}>
                <h3 style={{ color: '#10b981', margin: '0 0 15px 0', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Calendar size={20} /> {lang === 'es' ? 'Pagos Semanales (Viernes)' : 'Weekly Payouts (Friday)'}
                </h3>
                <p style={{ margin: 0, color: 'var(--text-main)', fontSize: '14px', lineHeight: '1.6' }}>
                  {lang === 'es' 
                    ? 'Cada viernes, los jugadores con al menos 5,000 de Gloria (Entry Point) reciben Contribution Points automáticamente.' 
                    : 'Every Friday, players with at least 5,000 Glory receive automatic Contribution Points.'}
                  <br /><br />
                  {lang === 'es' 
                    ? 'La cantidad de puntos depende de tu rango y la actividad de tu servidor (ej. Ser top 100 en EU da más recompensa que top 100 en Asia por tener más población).' 
                    : 'The reward is based on your overall rank and the active population of your server.'}
                </p>
              </div>

              <div style={{ background: 'rgba(255,255,255,0.02)', padding: '25px', borderRadius: '8px', border: '1px solid var(--border)' }}>
                <h3 style={{ color: 'var(--text-main)', margin: '0 0 15px 0' }}>{lang === 'es' ? 'Recompensas de Temporada' : 'Seasonal Rewards'}</h3>
                <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '14px', lineHeight: '1.6' }}>
                  {lang === 'es' 
                    ? 'Cada temporada dura aproximadamente 2 meses. Al final, los jugadores con mayor rango reciben recompensas enormes según sus logros. Los desarrolladores suelen avisar una semana antes.' 
                    : 'A season lasts ~2 months. At the end, highest ranked players are rewarded. Devs usually announce the end a week prior.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
