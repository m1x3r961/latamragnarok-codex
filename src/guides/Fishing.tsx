import React from 'react';
import { ArrowLeft, Fish } from 'lucide-react';

interface Props {
  onBack: () => void;
  lang: 'es' | 'en';
}

export const Fishing: React.FC<Props> = ({ onBack, lang }) => {
  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', paddingBottom: '40px', width: '100%', textAlign: 'center', paddingTop: '100px' }}>
      <button 
        onClick={onBack}
        style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'transparent', border: 'none', color: 'var(--accent)', cursor: 'pointer', marginBottom: '40px', fontSize: '16px', fontWeight: 'bold' }}
      >
        <ArrowLeft size={20} />
        {lang === 'es' ? 'Volver' : 'Back'}
      </button>

      <div>
        <Fish size={100} color="#3b82f6" style={{ margin: '0 auto', opacity: 0.5 }} />
        <h1 style={{ color: 'white', fontSize: '48px', margin: '20px 0 10px 0' }}>
          {lang === 'es' ? 'Guía de Pesca' : 'Fishing Guide'}
        </h1>
        <h2 style={{ color: 'var(--accent)', fontSize: '32px', margin: 0 }}>
          {lang === 'es' ? '¡Muy pronto!' : 'Coming soon!'}
        </h2>
        <p style={{ color: 'var(--text-muted)', marginTop: '20px', fontSize: '18px' }}>
          {lang === 'es' 
            ? 'Nuestros mejores pescadores están redactando este pergamino...'
            : 'Our best fishermen are writing this scroll...'}
        </p>
      </div>
    </div>
  );
};
