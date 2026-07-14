import React from 'react';
import { ArrowLeft, Store, Settings, HandCoins, ShoppingBag, Eye, TrendingDown, Scale } from 'lucide-react';

interface Props {
  onBack: () => void;
  lang: 'es' | 'en';
}

export const PlayerStalls: React.FC<Props> = ({ onBack, lang }) => {
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
        {/* Cabecera sin imagen (Fondo degradado) */}
        <div style={{ height: '250px', background: 'linear-gradient(135deg, #052e16 0%, #065f46 100%)', position: 'relative', display: 'flex', alignItems: 'center', paddingLeft: '40px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px', zIndex: 1 }}>
            <div style={{ background: 'rgba(16, 185, 129, 0.1)', padding: '20px', borderRadius: '16px', border: '1px solid rgba(16, 185, 129, 0.3)' }}>
              <Store size={60} color="#10b981" />
            </div>
            <div>
              <h1 style={{ fontSize: '42px', color: 'white', textShadow: '0 2px 10px rgba(0,0,0,0.5)', margin: 0 }}>
                {lang === 'es' ? 'Puestos de Jugadores (Stalls)' : 'Player Stalls'}
              </h1>
              <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '18px', marginTop: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ background: 'rgba(0,0,0,0.3)', padding: '4px 10px', borderRadius: '20px', fontSize: '14px', fontWeight: 'bold', color: 'white' }}>F3</span> 
                {lang === 'es' ? 'Convierte a tu personaje en una tienda AFK.' : 'Turn your character into an AFK storefront.'}
              </p>
            </div>
          </div>
          <ShoppingBag size={300} color="rgba(255,255,255,0.03)" style={{ position: 'absolute', right: '-50px', top: '-50px' }} />
        </div>

        <div style={{ padding: '40px' }}>
          
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px', marginBottom: '40px' }}>
            {/* Overview */}
            <div style={{ flex: '1 1 500px' }}>
              <h2 style={{ color: 'var(--accent)', borderBottom: '1px solid var(--border)', paddingBottom: '10px', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Settings size={24} /> {lang === 'es' ? 'Funcionamiento Básico' : 'Overview'}
              </h2>
              <ul style={{ color: 'var(--text-muted)', fontSize: '14px', paddingLeft: '20px', margin: 0, lineHeight: '1.7' }}>
                <li>{lang === 'es' ? 'Te conviertes visualmente en una mesa con techo. No puedes moverte, pelear ni craftear mientras el stall está activo.' : 'You visually appear as a covered table. You cannot move, fight, or craft.'}</li>
                <li>{lang === 'es' ? 'Se pueden colocar casi en cualquier parte, pero NO en la arena.' : 'Can be set almost anywhere, but NOT in the arena.'}</li>
                <li>{lang === 'es' ? 'Si te golpean, la tienda se cierra automáticamente y puedes ser saqueado.' : 'Taking damage closes the stall, and you can be looted as normal if killed.'}</li>
                <li>{lang === 'es' ? 'Inicias con 4 slots (casillas), ampliables a 12 (cuesta 150 Ambers o 5 de oro por slot extra).' : 'Starts with 4 slots, expandable to 12 slots (150 Ambers or 5 gold per slot).'}</li>
                <li>{lang === 'es' ? 'Pueden almacenar objetos apilables, piezas sueltas ¡y hasta 6 caballos! (la única forma de tradear caballos).' : 'Can hold stacks, single items, and up to 6 horses (the only way to trade mounts).'}</li>
                <li>{lang === 'es' ? 'Puedes limitar la cantidad que cada jugador puede comprar (útil para regalar comida sin que un abusón se lleve todo).' : 'You can limit how many of an item each customer can purchase.'}</li>
                <li>{lang === 'es' ? 'Al cerrar la tienda se borran sus ajustes, tendrás que reconfigurarla la próxima vez.' : 'Closing a stall erases its contents/settings. Must be manually reapplied.'}</li>
              </ul>
            </div>

            {/* Comparison */}
            <div style={{ flex: '1 1 400px' }}>
              <h2 style={{ color: 'var(--accent)', borderBottom: '1px solid var(--border)', paddingBottom: '10px', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Scale size={24} /> {lang === 'es' ? 'Stalls vs Mercado Global' : 'Stalls vs Market'}
              </h2>
              <div style={{ background: 'rgba(16, 185, 129, 0.05)', padding: '20px', borderRadius: '8px', border: '1px solid #10b981' }}>
                <h4 style={{ color: '#10b981', margin: '0 0 10px 0', fontSize: '16px' }}>{lang === 'es' ? 'Ventajas de los Puestos (Stalls)' : 'Advantages of Stalls'}</h4>
                <ul style={{ color: 'var(--text-main)', fontSize: '13px', paddingLeft: '15px', margin: 0, lineHeight: '1.6' }}>
                  <li><strong>{lang === 'es' ? 'Sin Tarifas:' : 'No Fees:'}</strong> {lang === 'es' ? 'No cobran comisiones por venta.' : 'Zero fees for buying/selling.'}</li>
                  <li><strong>{lang === 'es' ? 'Ítems Dañados:' : 'Damaged Items:'}</strong> {lang === 'es' ? 'Permiten vender armas/armaduras con durabilidad perdida.' : 'Can sell items with lost durability.'}</li>
                  <li><strong>{lang === 'es' ? 'Órdenes de Compra:' : 'Buy Orders:'}</strong> {lang === 'es' ? 'Puedes automatizar compras de materiales.' : 'You can place buy orders.'}</li>
                  <li><strong>{lang === 'es' ? 'Caballos:' : 'Horses:'}</strong> {lang === 'es' ? 'El único medio para vender monturas.' : 'The only way to sell horses.'}</li>
                  <li><strong>{lang === 'es' ? 'Logística Gratuita:' : 'Free Giveaways:'}</strong> {lang === 'es' ? 'Puedes poner precio "0" para equipar a tu gremio antes de un asedio.' : 'Prices can be 0 to give away items freely (e.g. before sieges).'}</li>
                </ul>
              </div>
            </div>
          </div>

          <h2 style={{ color: 'var(--accent)', borderBottom: '1px solid var(--border)', paddingBottom: '10px', marginBottom: '30px', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <HandCoins size={24} /> {lang === 'es' ? 'Comprar y Vender' : 'Buying and Selling'}
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '30px' }}>
            
            <div style={{ background: 'var(--bg-hover)', padding: '20px', borderRadius: '10px', border: '1px solid var(--border)' }}>
              <h3 style={{ color: 'var(--text-main)', margin: '0 0 15px 0', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Eye size={20} color="#a855f7" /> {lang === 'es' ? 'Interfaz de Exploración (Browsing)' : 'Browsing Interface'}
              </h3>
              <p style={{ margin: '0 0 15px 0', color: 'var(--text-muted)', fontSize: '14px', lineHeight: '1.5' }}>
                {lang === 'es' ? 'Para interactuar con la tienda de alguien, apúntale, mantén pulsada la E y selecciona "View Stall".' : 'Aim at a player, press E, and select "View Stall".'}
              </p>
              <img src="/stalls/browsing.png" alt="Browsing Interface" style={{ width: '100%', borderRadius: '8px', border: '1px solid var(--border)' }} onError={(e) => e.currentTarget.style.display='none'} />
            </div>

            <div style={{ background: 'var(--bg-hover)', padding: '20px', borderRadius: '10px', border: '1px solid var(--border)' }}>
              <h3 style={{ color: 'var(--text-main)', margin: '0 0 15px 0', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <TrendingDown size={20} color="#eab308" /> {lang === 'es' ? 'Órdenes de Compra y Venta' : 'Buy and Sell Orders'}
              </h3>
              <p style={{ margin: '0 0 15px 0', color: 'var(--text-muted)', fontSize: '14px', lineHeight: '1.5' }}>
                <strong>{lang === 'es' ? 'Buy Orders (Compras):' : 'Buy Orders:'}</strong> {lang === 'es' ? 'Solicita cantidades específicas de un ítem. Necesitas tener al menos 1 unidad de ese ítem en tu inventario para crear la orden, y TODO el dinero por adelantado. Se marcan con una flecha amarilla hacia arriba.' : 'Request specific quantities of items. You need 1 of the item to set it up, and all funds upfront. Marked with yellow up arrow.'}
              </p>
              <p style={{ margin: '0 0 15px 0', color: 'var(--text-muted)', fontSize: '14px', lineHeight: '1.5' }}>
                <strong>{lang === 'es' ? 'Sell Orders (Ventas):' : 'Sell Orders:'}</strong> {lang === 'es' ? 'Vende lo que quieras al precio que quieras, o regálalo.' : 'Sell anything you want at any price, or give it away.'}
              </p>
              <img src="/stalls/buyolders.png" alt="Buy and Sell Orders" style={{ width: '100%', borderRadius: '8px', border: '1px solid var(--border)' }} onError={(e) => e.currentTarget.style.display='none'} />
            </div>

          </div>

          <div style={{ marginTop: '30px', background: 'rgba(255,255,255,0.02)', padding: '20px', borderRadius: '8px', borderLeft: '4px solid var(--accent)' }}>
            <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '13px', lineHeight: '1.5' }}>
              <strong style={{ color: 'var(--text-main)' }}>{lang === 'es' ? 'Nota de Desarrollo:' : 'Development Note:'}</strong> {lang === 'es' ? 'Es posible que en el futuro se añadan skins para las tiendas, emotes para atraer clientes o incluso bazares internacionales.' : 'Future updates may include stall skins, emotes to attract customers, or cross-nation bazaars.'}
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};
