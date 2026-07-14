import React from 'react';
import { ArrowLeft, Swords, Unlock, CircleDollarSign, Skull, Tent, Flag, Shield, RotateCcw } from 'lucide-react';

interface Props {
  onBack: () => void;
  lang: 'es' | 'en';
}

export const StateOfWar: React.FC<Props> = ({ onBack, lang }) => {
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
        <div style={{ height: '250px', backgroundImage: 'url(/guides/stateofwar.png)', backgroundColor: '#450a0a', backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative' }}>
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, var(--bg-main) 0%, rgba(0,0,0,0.4) 100%)' }}></div>
          <h1 style={{ position: 'absolute', bottom: '20px', left: '30px', fontSize: '42px', color: 'white', textShadow: '0 2px 10px rgba(0,0,0,0.8)', margin: 0, display: 'flex', alignItems: 'center', gap: '15px' }}>
            <Swords size={40} color="#ef4444" /> {lang === 'es' ? 'Estado de Guerra (State of War)' : 'State of War Guide'}
          </h1>
        </div>

        <div style={{ padding: '40px' }}>
          {/* Overview */}
          <div style={{ marginBottom: '40px' }}>
            <p style={{ fontSize: '18px', color: 'var(--text-main)', lineHeight: '1.6', marginBottom: '20px' }}>
              {lang === 'es' 
                ? 'Un Estado de Guerra (State of War / SoW) es un asedio a una provincia de gremio donde los jugadores intentan capturar la bandera. Este sistema está diseñado para que no existan los "raideos offline".'
                : 'A State of War is a siege at a guild province. The system is designed so that players cannot "offline raid" a province, giving defenders time to rally.'}
            </p>
            <div style={{ background: 'rgba(239, 68, 68, 0.05)', padding: '15px', borderRadius: '8px', borderLeft: '4px solid #ef4444' }}>
              <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '15px', lineHeight: '1.6' }}>
                {lang === 'es' 
                  ? 'Para desencadenar la guerra, un gremio debe poner un "Token" y completar las "Preparaciones de Asedio". Si lo logran, la guerra real ocurrirá AL DÍA SIGUIENTE.'
                  : 'To trigger a SoW, a guild must token the province and complete siege preparations. The actual war will occur the following day.'}
              </p>
            </div>
          </div>

          <h2 style={{ color: '#ef4444', borderBottom: '1px solid var(--border)', paddingBottom: '10px', marginBottom: '30px', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Swords size={24} /> {lang === 'es' ? 'Los 7 Pasos para Conquistar una Provincia' : '7 Steps to Conquer a Province'}
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            
            {/* Step 1 */}
            <div style={{ background: 'var(--bg-hover)', padding: '20px', borderRadius: '8px', border: '1px solid var(--border)', display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
              <div style={{ background: 'rgba(255,255,255,0.05)', padding: '15px', borderRadius: '50%' }}>
                <Unlock size={24} color="var(--text-main)" />
              </div>
              <div>
                <h3 style={{ color: 'var(--text-main)', margin: '0 0 10px 0' }}>{lang === 'es' ? 'Paso 1: Desbloquear Slot de Provincia' : 'Step 1: Unlock Province Slot'}</h3>
                <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '14px', lineHeight: '1.6' }}>
                  {lang === 'es' 
                    ? 'En la ventana del gremio (G), ve a Provinces y paga 10 de Oro para desbloquear tu primer slot permanentemente (el segundo cuesta 100 de Oro). Cada slot te da derecho a poseer 1 provincia.' 
                    : 'In the guild window, pay 10 gold to permanently unlock a province slot. Gives the right to own 1 province.'}
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div style={{ background: 'var(--bg-hover)', padding: '20px', borderRadius: '8px', border: '1px solid var(--border)', display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
              <div style={{ background: 'rgba(255,255,255,0.05)', padding: '15px', borderRadius: '50%' }}>
                <CircleDollarSign size={24} color="#facc15" />
              </div>
              <div>
                <h3 style={{ color: '#facc15', margin: '0 0 10px 0' }}>{lang === 'es' ? 'Paso 2: Poner el Token (Token the Province)' : 'Step 2: Token the Province'}</h3>
                <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '14px', lineHeight: '1.6' }}>
                  {lang === 'es' 
                    ? 'Un oficial debe abrir el mapa, dar clic derecho en la bandera enemiga y pagar 2 de Oro. Esto solo se puede hacer en la "Ventana de Preparación" (4 horas antes del timer de la provincia).' 
                    : 'An officer must right click the map flag and pay 2 gold within the 4 hour Siege Preparation Window.'}
                  <br /><br />
                  <strong style={{ color: 'var(--text-main)' }}>{lang === 'es' ? 'Importante:' : 'Important:'}</strong> {lang === 'es' ? 'Solo los gremios con un token puesto tienen derecho a capturar la bandera durante la guerra.' : 'Only guilds with a token can capture the flag during the war.'}
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div style={{ background: 'rgba(239, 68, 68, 0.05)', padding: '20px', borderRadius: '8px', border: '1px solid #ef4444', display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
              <div style={{ background: 'rgba(239, 68, 68, 0.1)', padding: '15px', borderRadius: '50%' }}>
                <Skull size={24} color="#ef4444" />
              </div>
              <div>
                <h3 style={{ color: '#ef4444', margin: '0 0 10px 0' }}>{lang === 'es' ? 'Paso 3: Completar las Preparaciones' : 'Step 3: Complete Siege Preparations'}</h3>
                <p style={{ margin: 0, color: 'var(--text-main)', fontSize: '14px', lineHeight: '1.6' }}>
                  {lang === 'es' 
                    ? 'Al poner el token, empieza una barra de progreso que debes llevar al 100% matando guardias y jugadores en las afueras de la provincia.' 
                    : 'A progress bar starts. Kill guards and players outside the province to reach 100%.'}
                </p>
                <ul style={{ color: 'var(--text-muted)', fontSize: '13px', paddingLeft: '20px', marginTop: '10px' }}>
                  <li>{lang === 'es' ? 'Guard Commanders (Comandantes):' : 'Guard Commanders:'} <strong>8%</strong></li>
                  <li>{lang === 'es' ? 'Jugadores Enemigos:' : 'Enemy Players:'} <strong>3%</strong></li>
                  <li>{lang === 'es' ? 'Guardias normales y civiles:' : 'Normal Guards:'} <strong>1%</strong></li>
                </ul>
                <p style={{ margin: '10px 0 0 0', color: 'var(--text-muted)', fontSize: '13px', lineHeight: '1.6' }}>
                  {lang === 'es' ? 'Si los defensores logran echarte y la barra cae a 0%, el asedio fracasa. Si llegas al 100%, la guerra se activa para el DÍA SIGUIENTE. Aquí NO se puede dañar el castillo ni capturar.' : 'If defenders push you out and it hits 0%, it fails. If 100% is reached, the war activates for the NEXT DAY. You cannot damage the castle yet.'}
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div style={{ background: 'var(--bg-hover)', padding: '20px', borderRadius: '8px', border: '1px solid var(--border)', display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
              <div style={{ background: 'rgba(255,255,255,0.05)', padding: '15px', borderRadius: '50%' }}>
                <Tent size={24} color="var(--text-main)" />
              </div>
              <div>
                <h3 style={{ color: 'var(--text-main)', margin: '0 0 10px 0' }}>{lang === 'es' ? 'Paso 4: Asediar (Día de la Guerra)' : 'Step 4: Siege the Province'}</h3>
                <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '14px', lineHeight: '1.6' }}>
                  {lang === 'es' 
                    ? 'Al día siguiente, a la hora del Timer, empieza la guerra (dura hasta 1h 15m). Requiere grandes grupos y maquinaria para romper los muros.' 
                    : 'The next day, the war starts (lasts up to 1hr 15m). Requires large groups and siege equipment to break walls.'}
                </p>
              </div>
            </div>

            {/* Step 5 */}
            <div style={{ background: 'var(--bg-hover)', padding: '20px', borderRadius: '8px', border: '1px solid var(--border)', display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
              <div style={{ background: 'rgba(255,255,255,0.05)', padding: '15px', borderRadius: '50%' }}>
                <Flag size={24} color="#60a5fa" />
              </div>
              <div>
                <h3 style={{ color: '#60a5fa', margin: '0 0 10px 0' }}>{lang === 'es' ? 'Paso 5: Capturar la Bandera' : 'Step 5: Capture the Flag'}</h3>
                <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '14px', lineHeight: '1.6' }}>
                  {lang === 'es' 
                    ? 'Solo los gremios con Token pueden capturar. Toma 1 minuto ininterrumpido y la bandera siempre está en el último piso del edificio principal (Bastion).' 
                    : 'Only tokened guilds can capture. Takes 1 uninterrupted minute. Flag is always on top floor of the Bastion.'}
                </p>
              </div>
            </div>

            {/* Step 6 */}
            <div style={{ background: 'var(--bg-hover)', padding: '20px', borderRadius: '8px', border: '1px solid var(--border)', display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
              <div style={{ background: 'rgba(255,255,255,0.05)', padding: '15px', borderRadius: '50%' }}>
                <Shield size={24} color="#10b981" />
              </div>
              <div>
                <h3 style={{ color: '#10b981', margin: '0 0 10px 0' }}>{lang === 'es' ? 'Paso 6: Defender la Bandera' : 'Step 6: Defend the Flag'}</h3>
                <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '14px', lineHeight: '1.6' }}>
                  {lang === 'es' 
                    ? 'Una vez capturada, la guerra NO TERMINA. Sigue hasta que se acabe el tiempo límite o la actividad enemiga caiga a 0%. No hay límite de cuántas veces puede cambiar de manos la bandera.' 
                    : 'After capturing, the war CONTINUES until time runs out or enemy activity hits 0%. Defend it!'}
                </p>
              </div>
            </div>

            {/* Step 7 */}
            <div style={{ background: 'rgba(167, 139, 250, 0.1)', padding: '20px', borderRadius: '8px', border: '1px solid #a78bfa', display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
              <div style={{ background: 'rgba(167, 139, 250, 0.2)', padding: '15px', borderRadius: '50%' }}>
                <RotateCcw size={24} color="#a78bfa" />
              </div>
              <div>
                <h3 style={{ color: '#a78bfa', margin: '0 0 10px 0' }}>{lang === 'es' ? 'Paso 7: La Batalla Final (Intercambio Aliado)' : 'Step 7: The Final Battle'}</h3>
                <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '14px', lineHeight: '1.6' }}>
                  {lang === 'es' 
                    ? 'Tras acabar el asedio, hay una ventana de 10 minutos. Es un sistema para que los gremios de una misma nación puedan "pasarse" la provincia entre ellos (el gremio amigo debe tener token puesto para poder capturarla).' 
                    : '10 minute period after SoW ends allowing friendly guilds of the same nation to capture the flag to swap ownership.'}
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};
