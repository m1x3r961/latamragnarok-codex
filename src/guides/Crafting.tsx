import React from 'react';
import { ArrowLeft, Hammer, Scissors, Pickaxe, Flame, ScrollText, Percent, Info, MapPin } from 'lucide-react';

interface Props {
  onBack: () => void;
  lang: 'es' | 'en';
}

export const Crafting: React.FC<Props> = ({ onBack, lang }) => {
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
        <div style={{ height: '250px', backgroundImage: 'url(/map/crafting.png)', backgroundColor: '#78350f', backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative' }}>
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, var(--bg-main) 0%, rgba(0,0,0,0.5) 100%)' }}></div>
          <h1 style={{ position: 'absolute', bottom: '20px', left: '30px', fontSize: '42px', color: 'white', textShadow: '0 2px 10px rgba(0,0,0,0.8)', margin: 0, display: 'flex', alignItems: 'center', gap: '15px' }}>
            <Hammer size={40} color="#f59e0b" /> {lang === 'es' ? 'Crafteo (Crafting)' : 'Crafting Guide'}
          </h1>
        </div>

        <div style={{ padding: '40px' }}>
          {/* Overview */}
          <div style={{ marginBottom: '40px' }}>
            <p style={{ fontSize: '18px', color: 'var(--text-main)', lineHeight: '1.6', marginBottom: '20px' }}>
              {lang === 'es' 
                ? 'El crafteo es el corazón de la economía. Las armaduras y armas pierden durabilidad, y la comida decae, así que los artesanos siempre tienen demanda. Puedes subir tantas profesiones como quieras y tus Atributos (Fuerza, Destreza, etc.) NO afectan al crafteo.'
                : 'Crafting is the heart of the player-run economy. You can level up as many professions as you wish. Attribute points do not affect crafting results.'}
            </p>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px', marginBottom: '40px' }}>
            {/* Profesiones */}
            <div style={{ flex: '1 1 300px', background: 'var(--bg-hover)', padding: '20px', borderRadius: '8px', border: '1px solid var(--border)' }}>
              <h3 style={{ color: 'var(--accent)', margin: '0 0 15px 0', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Scissors size={20} /> {lang === 'es' ? 'Ramas de Crafteo' : 'Crafting Branches'}
              </h3>
              <ul style={{ color: 'var(--text-muted)', fontSize: '14px', paddingLeft: '20px', margin: 0, lineHeight: '1.7' }}>
                <li><strong>Cooking & Herbalism:</strong> {lang === 'es' ? 'Comida, pociones y cerveza.' : 'Meals, potions, beer.'}</li>
                <li><strong>Engineering:</strong> {lang === 'es' ? 'Herramientas y materiales de construcción.' : 'Tools and building materials.'}</li>
                <li><strong>Armoursmithing:</strong> {lang === 'es' ? 'Armaduras medias/pesadas y escudos.' : 'Medium/heavy armor and shields.'}</li>
                <li><strong>Weapon Forging:</strong> {lang === 'es' ? 'Armas cuerpo a cuerpo y a distancia.' : 'Melee and ranged weapons.'}</li>
                <li><strong>Tailoring & Leatherworking:</strong> {lang === 'es' ? 'Armadura ligera y media.' : 'Light and medium armor.'}</li>
              </ul>
            </div>

            <div style={{ flex: '1 1 300px', background: 'var(--bg-hover)', padding: '20px', borderRadius: '8px', border: '1px solid var(--border)' }}>
              <h3 style={{ color: '#10b981', margin: '0 0 15px 0', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Pickaxe size={20} /> {lang === 'es' ? 'Recolección (Gathering)' : 'Resource Gathering'}
              </h3>
              <ul style={{ color: 'var(--text-muted)', fontSize: '14px', paddingLeft: '20px', margin: 0, lineHeight: '1.7' }}>
                <li><strong>Forestry & Farming:</strong> {lang === 'es' ? 'Cultivos, pesca y tala de madera.' : 'Crops, fish, and wood.'}</li>
                <li><strong>Mining & Metallurgy:</strong> {lang === 'es' ? 'Extraer y refinar minerales.' : 'Mine and refine ores/minerals.'}</li>
              </ul>
              <div style={{ marginTop: '20px', background: 'rgba(245, 158, 11, 0.05)', padding: '10px', borderRadius: '5px', borderLeft: '3px solid #f59e0b' }}>
                <p style={{ margin: 0, color: 'var(--text-main)', fontSize: '13px' }}>
                  <strong style={{ color: '#f59e0b' }}>{lang === 'es' ? 'Recetas (Recipes)' : 'Recipes'}</strong><br/>
                  {lang === 'es' ? 'Puedes aprender recetas en cualquier momento, incluso si no tienes el nivel para hacerlas aún.' : 'Learn any recipe anytime, even if below level.'}
                </p>
              </div>
            </div>
          </div>

          <h2 style={{ color: 'var(--accent)', borderBottom: '1px solid var(--border)', paddingBottom: '10px', marginBottom: '30px', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Hammer size={24} /> {lang === 'es' ? 'Talleres vs Estaciones (Workshops vs Workstations)' : 'Workshops vs Workstations'}
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '30px', marginBottom: '40px' }}>
            
            <div>
              <div style={{ background: 'var(--bg-hover)', padding: '20px', borderRadius: '8px', border: '1px solid var(--border)' }}>
                <h3 style={{ color: '#3b82f6', margin: '0 0 15px 0', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <MapPin size={20} /> {lang === 'es' ? 'Workshops (Talleres de Ciudad)' : 'Workshops'}
                </h3>
                <p style={{ margin: '0 0 15px 0', color: 'var(--text-muted)', fontSize: '14px', lineHeight: '1.6' }}>
                  {lang === 'es' ? 'Talleres estáticos ubicados en ciudades y fuertes. Usar el taller correcto SIEMPRE dará mejores resultados y XP. Los de gremios (Guild Castles) pueden llegar hasta +4 de calidad.' : 'Static workshops in cities/forts. Using the right one yields vastly better results/XP. Guild provinces can build +4 quality workshops.'}
                </p>
                <img src="/crafting/craftingwindows.png" alt="Crafting Window" style={{ width: '100%', borderRadius: '8px', border: '1px solid var(--border)' }} onError={(e) => e.currentTarget.style.display='none'} />
              </div>
            </div>

            <div>
              <div style={{ background: 'var(--bg-hover)', padding: '20px', borderRadius: '8px', border: '1px solid var(--border)' }}>
                <h3 style={{ color: '#ef4444', margin: '0 0 15px 0', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Flame size={20} /> {lang === 'es' ? 'Workstations (Construcciones)' : 'Workstations'}
                </h3>
                <p style={{ margin: '0 0 15px 0', color: 'var(--text-muted)', fontSize: '14px', lineHeight: '1.6' }}>
                  {lang === 'es' ? 'Objetos crafteables que puedes colocar en el mundo. Arrastras los materiales, les pones combustible, y te vas mientras procesan solas con el tiempo (ej. Hornos para acero).' : 'Placeable objects. Drag materials in, add fuel, and leave them to process over time (e.g. Furnaces for steel).'}
                </p>
                <img src="/crafting/workstation.png" alt="Workstation" style={{ width: '100%', borderRadius: '8px', border: '1px solid var(--border)' }} onError={(e) => e.currentTarget.style.display='none'} />
              </div>
            </div>

          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '30px' }}>
            <div style={{ background: 'rgba(245, 158, 11, 0.05)', padding: '30px', borderRadius: '12px', border: '1px solid #f59e0b' }}>
              <h2 style={{ color: '#f59e0b', margin: '0 0 15px 0', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <ScrollText size={24} /> {lang === 'es' ? 'Recetas de Producción en Masa' : 'Mass Production Recipes'}
              </h2>
              <p style={{ color: 'var(--text-main)', fontSize: '15px', lineHeight: '1.6', margin: '0 0 15px 0' }}>
                {lang === 'es' 
                  ? 'Crean 10x la cantidad de materiales en el mismo tiempo que toma hacer 1. Son increíblemente útiles y se compran en el Glory Quartermaster.'
                  : 'Creates 10x the amount of materials in the same time. Bought from Glory Quartermaster.'}
              </p>
              <ul style={{ color: 'var(--text-muted)', fontSize: '14px', paddingLeft: '20px', margin: 0, lineHeight: '1.6' }}>
                <li>Billets (Madera procesada)</li>
                <li>Charcoal (Carbón)</li>
                <li>Thin Tanned Leather (Cuero fino)</li>
                <li>Flour (Harina)</li>
                <li>Flax Threads & Canvas (Hilos y Telas de lino)</li>
              </ul>
            </div>

            <div style={{ background: 'rgba(168, 85, 247, 0.05)', padding: '30px', borderRadius: '12px', border: '1px solid #a855f7' }}>
              <h2 style={{ color: '#a855f7', margin: '0 0 15px 0', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Percent size={24} /> {lang === 'es' ? 'Probabilidad (Crafting Chance)' : 'Crafting Chance'}
              </h2>
              <p style={{ color: 'var(--text-main)', fontSize: '15px', lineHeight: '1.6', margin: '0 0 15px 0' }}>
                {lang === 'es' 
                  ? 'Determina la calidad del ítem (+0 a +6). Maximizas tus probabilidades al tener alto tu nivel de crafteo, usar el Taller de más alto nivel (en Castillos de Gremio) y usar buffs de Nación/Mentor.'
                  : 'Determines quality range (+0 to +6). Maximize variables like workshop level and buffs.'}
              </p>
              <div style={{ background: 'rgba(0,0,0,0.3)', padding: '15px', borderRadius: '8px', display: 'flex', gap: '15px', alignItems: 'flex-start' }}>
                <Info size={24} color="#a855f7" style={{ flexShrink: 0 }} />
                <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '13px', lineHeight: '1.5' }}>
                  {lang === 'es' 
                    ? 'Si el chance al 100% llega hasta el +3, tu resultado mínimo garantizado es superior a eso (tu peor ítem saldrá mejor que eso). El chance disminuye conforme sube la calidad.'
                    : 'Crafting chance at 100% indicates you have surpassed that quality and base result will be above that.'}
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
