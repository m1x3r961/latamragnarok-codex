import { useState, useEffect } from 'react';
import { BookOpen, Calculator, Globe, Send, Sparkles, Shield } from 'lucide-react';
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
  
  const getRecipeIconId = (products: any) => {
    try {
      const p = typeof products === 'string' ? JSON.parse(products) : products;
      if (p && p.length > 0) return p[0][0];
    } catch {}
    return null;
  };
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

  const filteredRecipes = recipes.filter(r => {
    const rName = lang === 'es' && r.name_es ? r.name_es : r.name;
    return rName.toLowerCase().includes(search.toLowerCase());
  });

  // Helper to get translated name
  const getItemName = (item: any) => {
    if (!item) return 'Unknown Item';
    if (lang === 'es' && item.name_es) return item.name_es;
    return item.name;
  };

  const getRecipeName = (recipe: any) => {
    if (!recipe) return '';
    if (lang === 'es' && recipe.name_es) return recipe.name_es;
    return recipe.name;
  };

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
            <aside className="sidebar glass" style={{ width: '400px', borderRight: '1px solid var(--border)', overflowY: 'auto', display: 'flex', flexDirection: 'column' }}>
              <div className="search-box" style={{ padding: '20px', borderBottom: '1px solid var(--border)', position: 'relative' }}>
                <input 
                  type="text" 
                  placeholder={t.searchPlaceholder} 
                  value={search} 
                  onChange={(e) => setSearch(e.target.value)} 
                  style={{ width: '100%', padding: '12px 15px', borderRadius: '8px', background: 'rgba(0,0,0,0.5)', border: '1px solid var(--border)', color: 'white' }} 
                />
              </div>
              <div className="recipe-list" style={{ flex: 1, padding: '15px', overflowY: 'auto' }}>
                {filteredRecipes.map(r => {
                  const iconId = getRecipeIconId(r.products);
                  return (
                    <motion.div 
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      key={r.id} 
                      onClick={() => setSelectedRecipe(r)} 
                      className={`glass-card ${selectedRecipe?.id === r.id ? 'active' : ''}`}
                      style={{ 
                        padding: '12px', 
                        marginBottom: '10px', 
                        cursor: 'pointer', 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: '15px',
                        background: selectedRecipe?.id === r.id ? 'rgba(220, 38, 38, 0.15)' : 'rgba(0,0,0,0.4)',
                        border: selectedRecipe?.id === r.id ? '1px solid var(--accent)' : '1px solid var(--border)',
                        borderRadius: '8px'
                      }}
                    >
                      <div style={{ width: '44px', height: '44px', borderRadius: '8px', background: 'rgba(0,0,0,0.6)', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        {iconId ? (
                          <img src={`/icons/icon_${iconId}.png`} alt="icon" style={{ width: '32px', height: '32px' }} onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.parentElement!.innerHTML = '<span style="color:var(--accent)">⚒️</span>'; }} />
                        ) : (
                          <span style={{ color: 'var(--accent)' }}>⚒️</span>
                        )}
                      </div>
                      <div style={{ flex: 1 }}>
                        <div style={{ fontWeight: 600, color: 'var(--text-main)', fontSize: '15px' }}>{getRecipeName(r)}</div>
                        <div style={{ fontSize: '12px', color: 'var(--secondary)' }}>{getProfessionName(r.profession, lang)} • Lv{r.min_level}-{r.max_level}</div>
                      </div>
                      <button style={{ background: 'transparent', border: 'none', color: 'var(--text-muted)', fontSize: '18px' }}>+</button>
                    </motion.div>
                  );
                })}
              </div>
            </aside>

            <section className="content-area glass" style={{ flex: 1, overflowY: 'auto', padding: '40px', position: 'relative' }}>
              {!selectedRecipe ? (
                <div style={{ textAlign: 'center', opacity: 0.5, marginTop: '10vh' }}>
                  <Shield size={400} style={{ position: 'absolute', opacity: 0.03, color: 'var(--accent)', zIndex: 0, left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }} />
                  <Sparkles size={64} style={{ color: 'var(--accent)', marginBottom: '20px' }} />
                  <h2>{t.dynamicTitle}</h2>
                  <p>{t.dynamicDesc1}</p>
                </div>
              ) : (
                <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} style={{ position: 'relative', zIndex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '30px', borderBottom: '1px solid var(--border)', paddingBottom: '20px' }}>
                    <div style={{ width: '80px', height: '80px', background: 'var(--bg-card)', borderRadius: '12px', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      {getRecipeIconId(selectedRecipe.products) ? (
                        <img src={`/icons/icon_${getRecipeIconId(selectedRecipe.products)}.png`} style={{ width: '56px', height: '56px' }} onError={(e) => { e.currentTarget.style.display = 'none'; }} />
                      ) : (
                         <Shield size={40} color="var(--accent)" opacity={0.5} />
                      )}
                    </div>
                    <div>
                      <h2 style={{ fontSize: '28px', color: 'var(--text-main)', margin: '0 0 5px 0' }}>{getRecipeName(selectedRecipe)}</h2>
                      <div style={{ color: 'var(--accent)', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                        {getProfessionName(selectedRecipe.profession, lang)} • Lv {selectedRecipe.min_level} - {selectedRecipe.max_level}
                      </div>
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
                    <div>
                      <h3 style={{ borderBottom: '1px solid var(--border)', paddingBottom: '10px', marginBottom: '15px' }}>{lang === 'es' ? 'Productos' : 'Products'}</h3>
                      {(typeof selectedRecipe.products === 'string' ? JSON.parse(selectedRecipe.products || '[]') : (selectedRecipe.products || [])).map((p: any, idx: number) => (
                        <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '15px', background: 'var(--bg-card)', padding: '15px', borderRadius: '8px', border: '1px solid var(--border)', marginBottom: '10px' }}>
                          <img src={`/icons/icon_${p[0]}.png`} style={{ width: '32px', height: '32px' }} onError={(e) => e.currentTarget.style.display='none'} />
                          <div style={{ flex: 1 }}>{recipeItems[p[0]] ? getItemName(recipeItems[p[0]]) : `Item #${p[0]}`}</div>
                          <div style={{ fontSize: '18px', fontWeight: 'bold', color: '#10b981' }}>x{p[2]}</div>
                        </div>
                      ))}
                    </div>
                    <div>
                      <h3 style={{ borderBottom: '1px solid var(--border)', paddingBottom: '10px', marginBottom: '15px' }}>{lang === 'es' ? 'Materiales' : 'Materials'}</h3>
                      {(typeof selectedRecipe.materials === 'string' ? JSON.parse(selectedRecipe.materials || '[]') : (selectedRecipe.materials || [])).map((mGroup: any, gIdx: number) => (
                        <div key={gIdx} style={{ marginBottom: '15px', background: 'var(--bg-card)', borderRadius: '8px', border: '1px solid var(--border)', overflow: 'hidden' }}>
                          {mGroup.g === 1 && (
                            <div style={{ background: 'var(--bg-hover)', padding: '6px 15px', fontSize: '12px', color: 'var(--secondary)', textTransform: 'uppercase', borderBottom: '1px solid var(--border)' }}>
                              {lang === 'es' ? 'Elige Uno' : 'Choose One'}
                            </div>
                          )}
                          <div style={{ padding: '10px' }}>
                            {mGroup.t && mGroup.t.map((mat: any, mIdx: number) => (
                              <div key={mIdx} style={{ display: 'flex', alignItems: 'center', gap: '15px', padding: '8px 5px' }}>
                                <img src={`/icons/icon_${mat[0]}.png`} style={{ width: '28px', height: '28px' }} onError={(e) => e.currentTarget.style.display='none'} />
                                <div style={{ flex: 1, color: 'var(--text-muted)' }}>{recipeItems[mat[0]] ? getItemName(recipeItems[mat[0]]) : `Item #${mat[0]}`}</div>
                                <div style={{ fontSize: '16px', fontWeight: 'bold', color: 'var(--text-main)' }}>x{mat[2]}</div>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
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
