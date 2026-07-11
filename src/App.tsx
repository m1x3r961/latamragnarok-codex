import { useState, useEffect } from 'react';
import { Search, Sparkles, BookOpen, Calculator, Globe, Shield, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { supabase } from './supabaseClient';
import { GoogleGenerativeAI } from '@google/generative-ai';

// Initialize Gemini
const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY || '');

// Translations Dictionary
const translations = {
  es: {
    title: "Códice LatamRagnarok",
    subtitle: "Crafteo con IA",
    recipes: "Recetas",
    calculator: "Calculadora",
    askAi: "Consultar IA",
    searchPlaceholder: "Buscar recetas...",
    loading: "Cargando recetas...",
    noRecipes: "No se encontraron recetas.",
    dynamicTitle: "Modo Dinámico Activo",
    dynamicDesc1: "¡Los datos ahora se cargan desde tu base de datos en Supabase!",
    dynamicDesc2: "Siguiente paso: Conectar una API de IA al botón de 'Consultar IA'.",
    language: "EN", // Text on the button to switch TO English
    professions: {
      '1': 'Herboristería y Alquimia',
      '2': 'Sastrería y Cuero',
      '3': 'Minería y Metalurgia',
      '5': 'Herrería de Armaduras',
      '6': 'Forja de Armas',
      'default': 'Básico'
    }
  },
  en: {
    title: "LatamRagnarok Codex",
    subtitle: "AI Powered Crafting",
    recipes: "Recipes",
    calculator: "Calculator",
    askAi: "Ask AI",
    searchPlaceholder: "Search recipes...",
    loading: "Loading recipes...",
    noRecipes: "No recipes found.",
    dynamicTitle: "Dynamic Mode Active",
    dynamicDesc1: "Data is now fetched from your Supabase database!",
    dynamicDesc2: "Next step: Connect an AI API to the 'Ask AI' feature.",
    language: "ES", // Text on the button to switch TO Spanish
    professions: {
      '1': 'Herbalism & Alchemy',
      '2': 'Tailoring & Leather',
      '3': 'Mining & Metallurgy',
      '5': 'Armoursmithing',
      '6': 'Weapon Forging',
      'default': 'Basic'
    }
  }
};

function App() {
  const [activeTab, setActiveTab] = useState('codex');
  const [search, setSearch] = useState('');
  const [recipes, setRecipes] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [lang, setLang] = useState<'es' | 'en'>('es');
  const [aiPanelOpen, setAiPanelOpen] = useState(false);
  const [aiMessages, setAiMessages] = useState([{ role: 'model', text: '¡Hola! Soy la IA de LatamRagnarok. Puedo ayudarte con dudas sobre crafteo o guiarte en el juego. ¿Qué necesitas?' }]);
  const [aiInput, setAiInput] = useState('');
  const [isAiLoading, setIsAiLoading] = useState(false);

  const t = translations[lang];

  const handleAskAI = async () => {
    if (!aiInput.trim()) return;
    
    const userMessage = aiInput;
    setAiInput('');
    setAiMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsAiLoading(true);

    try {
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
      
      // Basic context for the AI
      const systemPrompt = "Eres el Asistente Experto de 'LatamRagnarok', un gremio del juego Gloria Victis. Responde de forma amigable, directa y muy conocedora sobre crafteo de Gloria Victis. El usuario pregunta: " + userMessage;
      
      const result = await model.generateContent(systemPrompt);
      const response = await result.response;
      const text = response.text();
      
      setAiMessages(prev => [...prev, { role: 'model', text: text }]);
    } catch (error: any) {
      console.error(error);
      setAiMessages(prev => [...prev, { role: 'model', text: 'Ups, hubo un error de conexión con la IA. Asegúrate de que tu API Key sea correcta (debe empezar por AIzaSy...). Detalle: ' + error.message }]);
    }
    
    setIsAiLoading(false);
  };

  const toggleLanguage = () => {
    setLang(lang === 'es' ? 'en' : 'es');
  };

  useEffect(() => {
    const fetchRecipes = async () => {
      setLoading(true);
      const { data, error } = await supabase.from('recipes').select('*').limit(50);
      if (error) console.error(error);
      if (data) setRecipes(data);
      setLoading(false);
    };
    fetchRecipes();
  }, []);

  const filteredRecipes = recipes.filter(r => 
    r.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="app-container" style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      {/* Header */}
      <header className="glass" style={{ padding: '15px 30px', display: 'flex', alignItems: 'center', gap: '20px', zIndex: 10, borderBottom: '2px solid var(--accent)' }}>
        
        {/* Guild Shield Image */}
        <div style={{ position: 'relative', width: '50px', height: '50px', flexShrink: 0 }}>
          {/* Replace this with your actual shield image if you have it in the public folder */}
          <img 
            src="/shield.png" 
            alt="LatamRagnarok Shield" 
            style={{ width: '100%', height: '100%', objectFit: 'contain', filter: 'drop-shadow(0 0 8px rgba(220,38,38,0.6))' }}
            onError={(e) => { 
              // Fallback icon if image is missing
              (e.target as HTMLImageElement).style.display = 'none';
              e.currentTarget.parentElement!.innerHTML = '<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;color:var(--accent);"><svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinelinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></div>';
            }}
          />
        </div>

        <div>
          <h1 style={{ margin: 0, color: 'var(--text-main)', fontSize: '24px', letterSpacing: '1px', textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>
            {t.title}
          </h1>
          <span style={{ fontSize: '12px', color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 'bold' }}>
            {t.subtitle}
          </span>
        </div>
        
        <div style={{ flex: 1, display: 'flex', gap: '10px', marginLeft: '40px' }}>
          <button 
            className={activeTab === 'codex' ? 'primary' : ''} 
            onClick={() => setActiveTab('codex')}
            style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
          >
            <BookOpen size={16} /> {t.recipes}
          </button>
          <button 
            className={activeTab === 'calc' ? 'primary' : ''} 
            onClick={() => setActiveTab('calc')}
            style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
          >
            <Calculator size={16} /> {t.calculator}
          </button>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          {/* Language Switcher */}
          <button 
            onClick={toggleLanguage} 
            style={{ display: 'flex', alignItems: 'center', gap: '6px', background: 'transparent', border: '1px solid var(--border)' }}
            title="Switch Language"
          >
            <Globe size={16} /> {t.language}
          </button>

          <button 
            className={`primary ${aiPanelOpen ? 'ai-button-active' : ''}`} 
            style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
            onClick={() => setAiPanelOpen(!aiPanelOpen)}
          >
            <Sparkles size={16} /> {t.askAi}
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main style={{ flex: 1, display: 'flex', overflow: 'hidden' }}>
        
        {/* Sidebar */}
        <aside style={{ width: '400px', borderRight: '1px solid var(--border)', display: 'flex', flexDirection: 'column', background: 'var(--bg-panel)' }}>
          <div style={{ padding: '20px', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
            <div style={{ position: 'relative' }}>
              <Search size={18} style={{ position: 'absolute', left: '12px', top: '12px', color: 'var(--text-muted)' }} />
              <input 
                type="text" 
                placeholder={t.searchPlaceholder} 
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={{ width: '100%', paddingLeft: '40px' }}
              />
            </div>
          </div>
          
          <div style={{ flex: 1, overflowY: 'auto', padding: '20px' }}>
            {loading ? (
              <div style={{ textAlign: 'center', color: 'var(--text-muted)' }}>{t.loading}</div>
            ) : (
              <AnimatePresence>
                {filteredRecipes.map((r, i) => (
                  <motion.div 
                    key={r.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: (i % 15) * 0.03 }}
                    className="glass-card" 
                    style={{ marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '15px', cursor: 'pointer', padding: '12px' }}
                  >
                    <div style={{ width: '44px', height: '44px', borderRadius: '8px', background: 'rgba(0,0,0,0.4)', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: 'var(--accent)' }}>
                      ⚒️
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontWeight: 600, color: 'var(--text-main)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{r.name}</div>
                      <div style={{ fontSize: '12px', color: 'var(--secondary)' }}>
                        {(t.professions as any)[r.profession] || t.professions.default} • Lv{r.min_level}-{r.max_level}
                      </div>
                    </div>
                    <button style={{ padding: '6px', borderRadius: '50%', background: 'transparent', color: 'var(--text-muted)', border: 'none' }} onClick={(e) => { e.stopPropagation(); }}>+</button>
                  </motion.div>
                ))}
                {filteredRecipes.length === 0 && !loading && (
                   <div style={{ textAlign: 'center', color: 'var(--text-muted)' }}>{t.noRecipes}</div>
                )}
              </AnimatePresence>
            )}
          </div>
        </aside>

        {/* Content Area */}
        <section style={{ flex: 1, padding: '40px', overflowY: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
           {/* Background watermark */}
           <Shield size={400} style={{ position: 'absolute', opacity: 0.02, color: 'var(--accent)', zIndex: 0 }} />
           
           <div style={{ textAlign: 'center', color: 'var(--text-muted)', zIndex: 1 }}>
              <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Sparkles size={64} style={{ margin: '0 auto 20px', opacity: 0.8, color: 'var(--accent)', filter: 'drop-shadow(0 0 10px rgba(220,38,38,0.5))' }} />
                <h2 style={{ color: 'var(--text-main)', fontSize: '32px', marginBottom: '10px' }}>{t.dynamicTitle}</h2>
                <p style={{ fontSize: '18px' }}>{t.dynamicDesc1}</p>
                <p style={{ color: 'var(--secondary)' }}>{t.dynamicDesc2}</p>
              </motion.div>
           </div>
        </section>

        {/* AI Slide-out Panel */}
        <AnimatePresence>
          {aiPanelOpen && (
            <motion.div 
              initial={{ x: '100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '100%', opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="glass"
              style={{
                width: '400px',
                borderLeft: '1px solid var(--accent)',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: '-8px 0 32px rgba(0,0,0,0.5)'
              }}
            >
              <div style={{ padding: '20px', borderBottom: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h3 style={{ margin: 0, color: 'var(--accent)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Sparkles size={20} /> Asistente IA
                </h3>
                <button onClick={() => setAiPanelOpen(false)} style={{ background: 'transparent', border: 'none', padding: '4px' }}>
                  ✕
                </button>
              </div>
              <div style={{ flex: 1, padding: '20px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '15px' }}>
                {aiMessages.map((msg, idx) => (
                  <div key={idx} style={{ 
                    alignSelf: msg.role === 'user' ? 'flex-end' : 'flex-start',
                    background: msg.role === 'user' ? 'var(--primary)' : 'rgba(220, 38, 38, 0.1)', 
                    border: '1px solid var(--border)', 
                    padding: '12px 16px', 
                    borderRadius: '8px', 
                    color: 'var(--text-main)',
                    maxWidth: '85%',
                    lineHeight: '1.4',
                    fontSize: '14px'
                  }}>
                    {msg.text}
                  </div>
                ))}
                {isAiLoading && (
                  <div style={{ alignSelf: 'flex-start', color: 'var(--accent)', fontSize: '14px' }}>
                    Pensando...
                  </div>
                )}
              </div>
              <div style={{ padding: '20px', borderTop: '1px solid var(--border)', display: 'flex', gap: '10px' }}>
                <input 
                  type="text" 
                  placeholder="Escribe tu consulta aquí..." 
                  style={{ flex: 1 }} 
                  value={aiInput}
                  onChange={(e) => setAiInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleAskAI()}
                />
                <button 
                  className="primary" 
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 15px' }}
                  onClick={handleAskAI}
                  disabled={isAiLoading || !aiInput.trim()}
                >
                  <Send size={18} />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </main>
    </div>
  );
}

export default App;
