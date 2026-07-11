import { useState, useEffect } from 'react';
import { BookOpen, Calculator, Globe, Send, Sparkles } from 'lucide-react';
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

const getProfessionName = (profId: number, lang: 'es' | 'en') => {
  const profs = translations[lang].professions as Record<string, string>;
  return profs[profId.toString()] || profs['default'];
};

function App() {
  const [search, setSearch] = useState('');
  const [recipes, setRecipes] = useState<any[]>([]);
  const [lang, setLang] = useState<'es' | 'en'>('es');
  const [aiPanelOpen, setAiPanelOpen] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState<any>(null);
  const [recipeItems, setRecipeItems] = useState<Record<number, any>>({});
  const [activeTab, setActiveTab] = useState<'recipes' | 'calculator'>('recipes');
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
      const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
      
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

  useEffect(() => {
    if (selectedRecipe) {
      // Helper to parse if string
      const parseJSON = (data: any) => {
        if (typeof data === 'string') {
          try { return JSON.parse(data); } catch { return []; }
        }
        return data || [];
      };

      const products = parseJSON(selectedRecipe.products);
      const materials = parseJSON(selectedRecipe.materials);

      const itemIds = new Set<number>();
      
      // Products: p is array of [itemId, type, qty, ... ]
      if (products) {
        products.forEach((p: any) => itemIds.add(p[0]));
      }
      
      // Materials: m is array of {g: group, t: array of [itemId, type, qty, ... ]}
      if (materials) {
        materials.forEach((mGroup: any) => {
          if (mGroup.t) {
            mGroup.t.forEach((t: any) => itemIds.add(t[0]));
          }
        });
      }

      const fetchItems = async () => {
        const { data, error } = await supabase
          .from('items')
          .select('*')
          .in('id', Array.from(itemIds));
          
        if (data && !error) {
          const itemsMap: Record<number, any> = {};
          data.forEach(item => itemsMap[item.id] = item);
          setRecipeItems(itemsMap);
        }
      };

      fetchItems();
    }
  }, [selectedRecipe]);

  const toggleLanguage = () => {
    setLang(lang === 'es' ? 'en' : 'es');
  };

  useEffect(() => {
    const fetchRecipes = async () => {
      const { data, error } = await supabase.from('recipes').select('*').limit(50);
      if (error) console.error(error);
      if (data) setRecipes(data);
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
          <button className={activeTab === 'recipes' ? 'primary' : ''} onClick={() => setActiveTab('recipes')} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <BookOpen size={16} /> {t.recipes}
          </button>
          <button className={activeTab === 'calculator' ? 'primary' : ''} onClick={() => setActiveTab('calculator')} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Calculator size={16} /> {t.calculator}
          </button>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <button onClick={toggleLanguage} style={{ background: 'transparent', border: '1px solid var(--border)' }}>
            <Globe size={16} /> {t.language}
          </button>
          <button className={`primary ${aiPanelOpen ? 'ai-button-active' : ''}`} onClick={() => setAiPanelOpen(!aiPanelOpen)}>
            <Sparkles size={16} /> {t.askAi}
          </button>
        </div>
      </header>

      <main style={{ flex: 1, display: 'flex', overflow: 'hidden' }}>
        {activeTab === 'recipes' && (
          <>
            <aside style={{ width: '400px', borderRight: '1px solid var(--border)', overflowY: 'auto' }}>
              <div style={{ padding: '20px' }}>
                <input type="text" placeholder={t.searchPlaceholder} value={search} onChange={(e) => setSearch(e.target.value)} style={{ width: '100%' }} />
              </div>
              {filteredRecipes.map(r => (
                <div key={r.id} onClick={() => setSelectedRecipe(r)} style={{ padding: '15px', cursor: 'pointer', borderBottom: '1px solid var(--border)' }}>
                  <div style={{ fontWeight: 600 }}>{r.name}</div>
                  <div style={{ fontSize: '12px', color: 'var(--secondary)' }}>{getProfessionName(r.profession, lang)}</div>
                </div>
              ))}
            </aside>

            <section style={{ flex: 1, overflowY: 'auto', padding: '40px', position: 'relative' }}>
              {!selectedRecipe ? (
                <div style={{ textAlign: 'center', opacity: 0.5 }}>
                  <Sparkles size={64} />
                  <h2>{t.dynamicTitle}</h2>
                </div>
              ) : (
                <div>
                  <h2>{selectedRecipe.name}</h2>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
                    <div>
                      <h3>{lang === 'es' ? 'Productos' : 'Products'}</h3>
                      {(typeof selectedRecipe.products === 'string' ? JSON.parse(selectedRecipe.products || '[]') : (selectedRecipe.products || [])).map((p: any, idx: number) => (
                        <div key={idx}>{recipeItems[p[0]]?.name || `Item #${p[0]}`} (x{p[2]})</div>
                      ))}
                    </div>
                    <div>
                      <h3>{lang === 'es' ? 'Materiales' : 'Materials'}</h3>
                      {(typeof selectedRecipe.materials === 'string' ? JSON.parse(selectedRecipe.materials || '[]') : (selectedRecipe.materials || [])).map((mGroup: any, gIdx: number) => (
                        <div key={gIdx} style={{ marginBottom: '10px' }}>
                          {mGroup.t && mGroup.t.map((mat: any, mIdx: number) => (
                            <div key={mIdx}>{recipeItems[mat[0]]?.name || `Item #${mat[0]}`} (x{mat[2]})</div>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </section>
          </>
        )}

        {activeTab === 'calculator' && (
          <section style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
             <h2>{lang === 'es' ? 'Calculadora en Desarrollo' : 'Calculator in Development'}</h2>
          </section>
        )}

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
