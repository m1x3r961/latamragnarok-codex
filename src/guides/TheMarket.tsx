import React from 'react';
import { ArrowLeft, Store, Coins, ShoppingCart, Tag, TrendingUp, AlertCircle, PackageCheck, ArchiveRestore } from 'lucide-react';

interface Props {
  onBack: () => void;
  lang: 'es' | 'en';
}

export const TheMarket: React.FC<Props> = ({ onBack, lang }) => {
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
        <div style={{ height: '250px', background: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%)', position: 'relative', display: 'flex', alignItems: 'center', paddingLeft: '40px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px', zIndex: 1 }}>
            <div style={{ background: 'rgba(234, 179, 8, 0.1)', padding: '20px', borderRadius: '16px', border: '1px solid rgba(234, 179, 8, 0.3)' }}>
              <Coins size={60} color="#eab308" />
            </div>
            <div>
              <h1 style={{ fontSize: '42px', color: 'white', textShadow: '0 2px 10px rgba(0,0,0,0.5)', margin: 0 }}>
                {lang === 'es' ? 'El Mercado (The Market)' : 'The Market Guide'}
              </h1>
              <p style={{ color: 'var(--text-muted)', fontSize: '18px', marginTop: '10px' }}>
                {lang === 'es' ? 'Comercio global, directo y sin subastas.' : 'Global, direct commerce with no auctions.'}
              </p>
            </div>
          </div>
          {/* Decorative background elements */}
          <Store size={300} color="rgba(255,255,255,0.02)" style={{ position: 'absolute', right: '-50px', top: '-50px' }} />
        </div>

        <div style={{ padding: '40px' }}>
          {/* Overview */}
          <div style={{ marginBottom: '40px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
            <div style={{ background: 'rgba(255,255,255,0.02)', padding: '20px', borderRadius: '8px', border: '1px solid var(--border)' }}>
              <h3 style={{ color: 'var(--text-main)', margin: '0 0 10px 0', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <GlobeIcon /> {lang === 'es' ? 'Economía Global' : 'Global Economy'}
              </h3>
              <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '14px', lineHeight: '1.6' }}>
                {lang === 'es' 
                  ? 'El mercado es global; incluye todas las naciones y servidores. Puedes acceder a él en las capitales (cerca de la zona de respawn) y en las provincias de gremio.'
                  : 'Global market across all nations and servers. Found in capitals and guild provinces.'}
              </p>
            </div>

            <div style={{ background: 'rgba(255,255,255,0.02)', padding: '20px', borderRadius: '8px', border: '1px solid var(--border)' }}>
              <h3 style={{ color: 'var(--text-main)', margin: '0 0 10px 0', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Tag size={18} /> {lang === 'es' ? 'Sistema de Venta Directa' : 'Direct Sale System'}
              </h3>
              <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '14px', lineHeight: '1.6' }}>
                {lang === 'es' 
                  ? 'NO es una casa de subastas. Los jugadores no pujan; el vendedor fija el precio exacto y el comprador lo paga. Los objetos duran 30 días listados.'
                  : 'NOT an auction house. No bidding; seller sets fixed price. Listings last 30 days.'}
              </p>
            </div>

            <div style={{ background: 'rgba(239, 68, 68, 0.05)', padding: '20px', borderRadius: '8px', border: '1px solid #ef4444' }}>
              <h3 style={{ color: '#ef4444', margin: '0 0 10px 0', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <AlertCircle size={18} /> {lang === 'es' ? 'Tarifas e Ítems Dañados' : 'Fees & Damaged Items'}
              </h3>
              <p style={{ margin: 0, color: 'var(--text-main)', fontSize: '14px', lineHeight: '1.6' }}>
                {lang === 'es' 
                  ? 'Hay una tarifa por vender basada en el precio y el tiempo. CUIDADO: Los ítems con durabilidad dañada cobran el DOBLE de tarifa de venta.'
                  : 'Listing fee based on price/time. CAUTION: Damaged items cost DOUBLE the fee to list.'}
              </p>
            </div>
          </div>

          <h2 style={{ color: 'var(--accent)', borderBottom: '1px solid var(--border)', paddingBottom: '10px', marginBottom: '30px', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Store size={24} /> {lang === 'es' ? 'La Ventana del Mercado (The Market Window)' : 'The Market Window'}
          </h2>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px', marginBottom: '50px' }}>
            <div style={{ flex: '1 1 400px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
              
              <div style={{ background: 'var(--bg-hover)', padding: '20px', borderRadius: '8px', border: '1px solid var(--border)', display: 'flex', gap: '15px' }}>
                <ShoppingCart size={24} color="#3b82f6" style={{ flexShrink: 0 }} />
                <div>
                  <h4 style={{ color: '#3b82f6', margin: '0 0 5px 0', fontSize: '16px' }}>{lang === 'es' ? '1. Buy (Comprar)' : '1. Buy'}</h4>
                  <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '13px', lineHeight: '1.5' }}>
                    {lang === 'es' ? 'Usa los filtros superiores y la caja de búsqueda para encontrar ítems.' : 'Search for items using filters.'}
                  </p>
                </div>
              </div>

              <div style={{ background: 'var(--bg-hover)', padding: '20px', borderRadius: '8px', border: '1px solid var(--border)', display: 'flex', gap: '15px' }}>
                <Coins size={24} color="#eab308" style={{ flexShrink: 0 }} />
                <div>
                  <h4 style={{ color: '#eab308', margin: '0 0 5px 0', fontSize: '16px' }}>{lang === 'es' ? '2. Sell (Vender)' : '2. Sell'}</h4>
                  <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '13px', lineHeight: '1.5' }}>
                    {lang === 'es' ? 'Pon a la venta tus objetos. Revisa los precios de otros y el Average Sale Price antes de fijar tu precio.' : 'Place items for sale. Check Average Sale Price first.'}
                  </p>
                </div>
              </div>

              <div style={{ background: 'var(--bg-hover)', padding: '20px', borderRadius: '8px', border: '1px solid var(--border)', display: 'flex', gap: '15px' }}>
                <ArchiveRestore size={24} color="#a855f7" style={{ flexShrink: 0 }} />
                <div>
                  <h4 style={{ color: '#a855f7', margin: '0 0 5px 0', fontSize: '16px' }}>{lang === 'es' ? '3. My Offers (Mis Ofertas)' : '3. My Offers'}</h4>
                  <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '13px', lineHeight: '1.5' }}>
                    {lang === 'es' ? 'Muestra ventas activas y expiradas (canceladas). Tienes un límite inicial de 20 slots de mercado (ampliable a 50 por 2 Oro/slot o con tarjetas de Glory).' : 'Active/expired offers. Starting limit 20, max 50.'}
                  </p>
                </div>
              </div>

              <div style={{ background: 'var(--bg-hover)', padding: '20px', borderRadius: '8px', border: '1px solid var(--border)', display: 'flex', gap: '15px' }}>
                <PackageCheck size={24} color="#10b981" style={{ flexShrink: 0 }} />
                <div>
                  <h4 style={{ color: '#10b981', margin: '0 0 5px 0', fontSize: '16px' }}>{lang === 'es' ? '4. Finished Offers (Ofertas Terminadas)' : '4. Finished Offers'}</h4>
                  <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '13px', lineHeight: '1.5' }}>
                    {lang === 'es' ? '¡Reclama aquí tus ítems comprados! También es el lugar donde llegan los materiales de talleres/construcciones expiradas (ej. Furnaces rotos).' : 'Collect purchased items and materials from expired constructions.'}
                  </p>
                </div>
              </div>

            </div>

            <div style={{ flex: '0 1 300px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <img src="/markets/300px-MarketWindow.jpg" alt="Market Window" style={{ width: '100%', borderRadius: '8px', border: '1px solid var(--border)' }} onError={(e) => e.currentTarget.style.display='none'} />
            </div>
          </div>

          <div style={{ background: 'rgba(167, 139, 250, 0.05)', padding: '30px', borderRadius: '12px', border: '1px solid #a855f7' }}>
            <h2 style={{ color: '#a855f7', margin: '0 0 15px 0', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <TrendingUp size={24} /> {lang === 'es' ? 'Precio Promedio de Mercado (Average Sale Price)' : 'Average Market Price'}
            </h2>
            <p style={{ color: 'var(--text-main)', fontSize: '15px', lineHeight: '1.6', margin: '0 0 15px 0' }}>
              {lang === 'es' 
                ? 'Puedes ver esta información pasando el ratón sobre cualquier ítem (en inventario, banco, tiendas NPC o mercado). Muestra el promedio móvil de los últimos 30 días.'
                : 'Hover over any item. Shows rolling average price from the last 30 days.'}
            </p>
            <div style={{ background: 'rgba(0,0,0,0.3)', padding: '15px', borderRadius: '8px', borderLeft: '4px solid #a855f7' }}>
              <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '14px', lineHeight: '1.5' }}>
                <strong style={{ color: 'var(--text-main)' }}>{lang === 'es' ? '¿Por qué a veces es tan distinto del precio actual?' : 'Why is it different from current prices?'}</strong><br/>
                {lang === 'es' 
                  ? 'El Average Price calcula únicamente lo que la gente REALMENTE HA COMPRADO, no los precios a los que está publicado ahora mismo. Si alguien publica una espada en 1,000 Oro pero nadie la compra, ese valor irreal no afectará el promedio. Usa esta métrica para saber qué valor real tiene tu objeto en el mercado.'
                  : 'Average Price only calculates items ACTUALLY SOLD, not current listings. It reflects real market value.'}
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

// Helper Icon since Globe is used but wasn't imported initially if we used Globe directly
const GlobeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="2" y1="12" x2="22" y2="12"></line>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
  </svg>
);
