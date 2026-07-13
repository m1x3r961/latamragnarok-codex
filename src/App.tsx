import { useState, useEffect } from 'react';
import { BookOpen, Calculator, Globe, Send, Sparkles, Shield, Map } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { supabase } from './supabaseClient';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { CharacterStatistics } from './guides/CharacterStatistics';
import { Combat } from './guides/Combat';

// Initialize Gemini
const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY || '');

// Translations Dictionary
const translations = {
  es: {
    title: "Códice LatamRagnarok",
    subtitle: "Crafteo con IA",
    recipes: "Recetas",
    calculator: "Calculadora",
    guides: "Guías",
    askAi: "Consultar IA",
    searchPlaceholder: "Buscar recetas...",
    loading: "Cargando recetas...",
    noRecipes: "No se encontraron recetas.",
    dynamicTitle: "Modo Dinámico Activo",
    dynamicDesc1: "¡Los datos ahora se cargan desde tu base de datos en Supabase!",
    dynamicDesc2: "Siguiente paso: Conectar una API de IA al botón de 'Consultar IA'.",
    language: "EN", // Text on the button to switch TO English
    guideCategories: [
      { 
        title: "Empezando", 
        items: [
          { id: 'character_statistics', name: 'Estadísticas del Personaje' },
          { id: 'combat', name: 'Combate' },
          { id: 'armour', name: 'Armaduras' },
          { id: 'weapons', name: 'Armas' }
        ]
      },
      { 
        title: "Comunidad y Cooperación", 
        items: [
          { id: 'nations', name: 'Naciones' },
          { id: 'parties', name: 'Grupos (Parties)' },
          { id: 'guilds', name: 'Gremios (Guilds)' },
          { id: 'alliances', name: 'Alianzas' }
        ]
      },
      { 
        title: "Compitiendo en PvP", 
        items: [
          { id: 'glory', name: 'Gloria' },
          { id: 'sieges', name: 'Asedios' },
          { id: 'state_of_war', name: 'Estado de Guerra' },
          { id: 'looting', name: 'Saqueo' }
        ]
      },
      { 
        title: "Recorriendo el Mundo", 
        items: [
          { id: 'the_map', name: 'El Mapa' },
          { id: 'fast_travel', name: 'Viaje Rápido' },
          { id: 'mounts', name: 'Monturas' },
          { id: 'events', name: 'Eventos' }
        ]
      },
      { 
        title: "Economía de los Jugadores", 
        items: [
          { id: 'the_market', name: 'El Mercado' },
          { id: 'player_stalls', name: 'Puestos de Jugadores' },
          { id: 'crafting', name: 'Crafteo' },
          { id: 'gathering_resources', name: 'Recolección de Recursos' }
        ]
      }
    ],
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
    guides: "Guides",
    askAi: "Ask AI",
    searchPlaceholder: "Search recipes...",
    loading: "Loading recipes...",
    noRecipes: "No recipes found.",
    dynamicTitle: "Dynamic Mode Active",
    dynamicDesc1: "Data is now fetched from your Supabase database!",
    dynamicDesc2: "Next step: Connect an AI API to the 'Ask AI' feature.",
    language: "ES", // Text on the button to switch TO Spanish
    guideCategories: [
      { 
        title: "Getting Started", 
        items: [
          { id: 'character_statistics', name: 'Character Statistics' },
          { id: 'combat', name: 'Combat' },
          { id: 'armour', name: 'Armour' },
          { id: 'weapons', name: 'Weapons' }
        ]
      },
      { 
        title: "Community and Cooperation", 
        items: [
          { id: 'nations', name: 'Nations' },
          { id: 'parties', name: 'Parties' },
          { id: 'guilds', name: 'Guilds' },
          { id: 'alliances', name: 'Alliances' }
        ]
      },
      { 
        title: "Competing in PvP", 
        items: [
          { id: 'glory', name: 'Glory' },
          { id: 'sieges', name: 'Sieges' },
          { id: 'state_of_war', name: 'State of War' },
          { id: 'looting', name: 'Looting' }
        ]
      },
      { 
        title: "Traversing The World", 
        items: [
          { id: 'the_map', name: 'The Map' },
          { id: 'fast_travel', name: 'Fast Travel' },
          { id: 'mounts', name: 'Mounts' },
          { id: 'events', name: 'Events' }
        ]
      },
      { 
        title: "Player Driven Economy", 
        items: [
          { id: 'the_market', name: 'The Market' },
          { id: 'player_stalls', name: 'Player Stalls' },
          { id: 'crafting', name: 'Crafting' },
          { id: 'gathering_resources', name: 'Gathering Resources' }
        ]
      }
    ],
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
  const [selectedGuide, setSelectedGuide] = useState<string | null>(null);
  const [recipeItems, setRecipeItems] = useState<Record<number, any>>({});
  const [activeTab, setActiveTab] = useState<'recipes' | 'calculator' | 'guides'>('recipes');
  
  type CartItem = {
    recipe: any;
    quantity: number;
    choices: Record<number, number>;
  };
  const [cart, setCart] = useState<CartItem[]>([]);
  const [calcSearch, setCalcSearch] = useState('');
  
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
    const fetchAll = async (table: string) => {
      let allData: any[] = [];
      let page = 0;
      while (true) {
        const { data, error } = await supabase.from(table).select('*').range(page * 1000, (page + 1) * 1000 - 1);
        if (error) {
          console.error(`Error fetching ${table}:`, error);
          break;
        }
        if (data) {
          allData = [...allData, ...data];
          if (data.length < 1000) break;
          page++;
        } else {
          break;
        }
      }
      return allData;
    };

    const fetchData = async () => {
      const [allRecipes, allItems] = await Promise.all([
        fetchAll('recipes'),
        fetchAll('items')
      ]);
      
      setRecipes(allRecipes);
      
      const itemsMap: Record<number, any> = {};
      allItems.forEach(item => itemsMap[item.id] = item);
      setRecipeItems(itemsMap);
    };
    
    fetchData();
  }, []);

  const toggleLanguage = () => {
    setLang(lang === 'es' ? 'en' : 'es');
  };

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

  const addToCart = (e: React.MouseEvent, recipe: any) => {
    e.stopPropagation();
    setCart(prev => {
      const existing = prev.find(item => item.recipe.id === recipe.id);
      if (existing) {
        return prev.map(item => item.recipe.id === recipe.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      const defaultChoices: Record<number, number> = {};
      const materials = typeof recipe.materials === 'string' ? JSON.parse(recipe.materials || '[]') : (recipe.materials || []);
      materials.forEach((mGroup: any, gIdx: number) => {
        if (mGroup.g === 1) defaultChoices[gIdx] = 0;
      });
      return [...prev, { recipe, quantity: 1, choices: defaultChoices }];
    });
  };

  const updateCartQty = (recipeId: number, delta: number) => {
    setCart(prev => prev.map(item => {
      if (item.recipe.id === recipeId) {
        const newQty = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    }));
  };

  const removeFromCart = (recipeId: number) => {
    setCart(prev => prev.filter(item => item.recipe.id !== recipeId));
  };

  const setChoice = (recipeId: number, gIdx: number, mIdx: number) => {
    setCart(prev => prev.map(item => {
      if (item.recipe.id === recipeId) {
        return { ...item, choices: { ...item.choices, [gIdx]: mIdx } };
      }
      return item;
    }));
  };

  const calcFilteredRecipes = recipes.filter(r => {
    if (!calcSearch) return false;
    const rName = lang === 'es' && r.name_es ? r.name_es : r.name;
    return rName.toLowerCase().includes(calcSearch.toLowerCase());
  }).slice(0, 10);

  const getMaterialSummary = () => {
    const summary: Record<number, number> = {};
    let totalCrafts = 0;
    cart.forEach(item => {
      totalCrafts += item.quantity;
      const materials = typeof item.recipe.materials === 'string' ? JSON.parse(item.recipe.materials || '[]') : (item.recipe.materials || []);
      materials.forEach((mGroup: any, gIdx: number) => {
        if (mGroup.g === 1) {
          const selected = mGroup.t[item.choices[gIdx] || 0];
          if (selected) {
            summary[selected[0]] = (summary[selected[0]] || 0) + (selected[2] * item.quantity);
          }
        } else {
          mGroup.t?.forEach((mat: any) => {
            summary[mat[0]] = (summary[mat[0]] || 0) + (mat[2] * item.quantity);
          });
        }
      });
    });
    return { summary, totalCrafts };
  };

  const { summary: materialSummary, totalCrafts } = getMaterialSummary();

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
          <button className={activeTab === 'guides' ? 'primary' : ''} onClick={() => { setActiveTab('guides'); setSelectedGuide(null); }} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Map size={16} /> {t.guides}
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
                      <button onClick={(e) => addToCart(e, r)} style={{ background: 'var(--bg-hover)', border: '1px solid var(--border)', color: 'var(--accent)', fontSize: '18px', width: '30px', height: '30px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>+</button>
                    </motion.div>
                  );
                })}
              </div>
            </aside>

            <section className="content-area glass" style={{ flex: 1, overflowY: 'auto', padding: '40px', position: 'relative' }}>
              {!selectedRecipe ? (
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', minHeight: '60vh', position: 'relative' }}>
                  <img src="/shield.png" alt="Shield Background" style={{ position: 'absolute', width: '500px', height: '500px', opacity: 0.15, filter: 'blur(6px)', zIndex: 0, pointerEvents: 'none' }} onError={(e) => { e.currentTarget.style.display = 'none'; }} />
                  <h2 style={{ position: 'relative', zIndex: 1, fontSize: '42px', color: 'var(--text-main)', textShadow: '0 4px 12px rgba(0,0,0,0.8)', letterSpacing: '3px', fontWeight: 'bold' }}>
                    Códice de LatamRagnarok
                  </h2>
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

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(130px, 1fr))', gap: '10px', marginBottom: '30px' }}>
                    <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '8px', padding: '10px' }}>
                      <div style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--secondary)', marginBottom: '4px' }}>{lang === 'es' ? 'TIEMPO' : 'CRAFT TIME'}</div>
                      <div style={{ fontSize: '16px', fontWeight: 'bold', color: 'var(--text-main)' }}>{selectedRecipe.craft_time ? selectedRecipe.craft_time / 1000 + 's' : '0s'}</div>
                    </div>
                    <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '8px', padding: '10px' }}>
                      <div style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--secondary)', marginBottom: '4px' }}>{lang === 'es' ? 'NIVEL' : 'LEVEL'}</div>
                      <div style={{ fontSize: '16px', fontWeight: 'bold', color: 'var(--text-main)' }}>{selectedRecipe.min_level} - {selectedRecipe.max_level}</div>
                    </div>
                    <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '8px', padding: '10px' }}>
                      <div style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--secondary)', marginBottom: '4px' }}>{lang === 'es' ? 'EXP CRAFTEO' : 'CRAFT XP'}</div>
                      <div style={{ fontSize: '16px', fontWeight: 'bold', color: 'var(--text-main)' }}>{selectedRecipe.craft_xp || 0}</div>
                    </div>
                    <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '8px', padding: '10px' }}>
                      <div style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--secondary)', marginBottom: '4px' }}>{lang === 'es' ? 'EXP PJE' : 'CHAR XP'}</div>
                      <div style={{ fontSize: '16px', fontWeight: 'bold', color: 'var(--text-main)' }}>{selectedRecipe.char_xp || 0}</div>
                    </div>
                    <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '8px', padding: '10px' }}>
                      <div style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--secondary)', marginBottom: '4px' }}>{lang === 'es' ? 'A MANO' : 'HAND CRAFT'}</div>
                      <div style={{ fontSize: '16px', fontWeight: 'bold', color: 'var(--text-main)' }}>{selectedRecipe.handcraft ? (lang === 'es' ? 'Sí' : 'Yes') : 'No'}</div>
                    </div>
                    <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '8px', padding: '10px' }}>
                      <div style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--secondary)', marginBottom: '4px' }}>{lang === 'es' ? 'FUEGO MIN' : 'MIN HEAT'}</div>
                      <div style={{ fontSize: '16px', fontWeight: 'bold', color: 'var(--text-main)' }}>{selectedRecipe.min_heat || (lang === 'es' ? 'Ninguno' : 'None')}</div>
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
                    <div>
                      <h3 style={{ borderBottom: '1px solid var(--border)', paddingBottom: '10px', marginBottom: '15px' }}>{lang === 'es' ? 'Productos' : 'Products'}</h3>
                      {(typeof selectedRecipe.products === 'string' ? JSON.parse(selectedRecipe.products || '[]') : (selectedRecipe.products || [])).map((p: any, idx: number) => (
                        <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '15px', background: 'var(--bg-card)', padding: '15px', borderRadius: '8px', border: '1px solid var(--border)', marginBottom: '10px' }}>
                          <img src={`/icons/icon_${p[0]}.png`} style={{ width: '32px', height: '32px' }} onError={(e) => e.currentTarget.style.display='none'} />
                          <div style={{ flex: 1 }}>{recipeItems[p[0]] ? getItemName(recipeItems[p[0]]) : `Item #${p[0]}`}</div>
                          {p[4] && <div style={{ fontSize: '14px', color: 'var(--secondary)' }}>{(p[4] / 10000).toFixed(p[4] % 10000 === 0 ? 0 : 1)}%</div>}
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
          <>
            <aside className="sidebar glass" style={{ width: '400px', borderRight: '1px solid var(--border)', overflowY: 'auto', display: 'flex', flexDirection: 'column' }}>
              <div className="search-box" style={{ padding: '20px', borderBottom: '1px solid var(--border)', position: 'relative' }}>
                <input 
                  type="text" 
                  placeholder={lang === 'es' ? "Buscar receta para añadir..." : "Search recipe to add..."}
                  value={calcSearch} 
                  onChange={(e) => setCalcSearch(e.target.value)} 
                  style={{ width: '100%', padding: '12px 15px', borderRadius: '8px', background: 'rgba(0,0,0,0.5)', border: '1px solid var(--border)', color: 'white' }} 
                />
                {calcSearch && (
                  <div style={{ position: 'absolute', top: '100%', left: '20px', right: '20px', background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '8px', zIndex: 10, maxHeight: '200px', overflowY: 'auto', marginTop: '5px' }}>
                    {calcFilteredRecipes.map(r => (
                      <div key={r.id} onClick={(e) => { addToCart(e, r); setCalcSearch(''); }} style={{ padding: '10px', borderBottom: '1px solid var(--border)', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <img src={`/icons/icon_${getRecipeIconId(r.products)}.png`} style={{ width: '24px', height: '24px' }} onError={(e) => e.currentTarget.style.display='none'} />
                        <span style={{ fontSize: '14px', color: 'var(--text-main)' }}>{getRecipeName(r)}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <div style={{ flex: 1, padding: '15px', overflowY: 'auto' }}>
                {cart.length === 0 ? (
                  <div style={{ textAlign: 'center', color: 'var(--text-muted)', marginTop: '40px' }}>
                    <Calculator size={40} style={{ opacity: 0.2, marginBottom: '10px' }} />
                    <p>{lang === 'es' ? 'Tu calculadora está vacía.' : 'Your calculator is empty.'}</p>
                  </div>
                ) : (
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
                    <span style={{ fontSize: '12px', color: 'var(--secondary)' }}>{lang === 'es' ? 'RECETAS EN CALCULADORA' : 'RECIPES IN CALCULATOR'}</span>
                    <button onClick={() => setCart([])} style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', fontSize: '12px' }}>
                      {lang === 'es' ? 'Limpiar Todo' : 'Clear All'}
                    </button>
                  </div>
                )}
                
                {cart.map(item => {
                  const iconId = getRecipeIconId(item.recipe.products);
                  const materials = typeof item.recipe.materials === 'string' ? JSON.parse(item.recipe.materials || '[]') : (item.recipe.materials || []);
                  
                  return (
                    <div key={item.recipe.id} style={{ background: 'rgba(0,0,0,0.4)', border: '1px solid var(--border)', borderRadius: '8px', marginBottom: '15px', overflow: 'hidden' }}>
                      <div style={{ display: 'flex', alignItems: 'center', padding: '12px', gap: '10px' }}>
                        <div style={{ width: '32px', height: '32px', background: 'var(--bg-card)', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          {iconId ? <img src={`/icons/icon_${iconId}.png`} style={{ width: '24px', height: '24px' }} onError={(e) => e.currentTarget.style.display='none'} /> : '⚒️'}
                        </div>
                        <div style={{ flex: 1, fontWeight: 600, fontSize: '14px', color: 'var(--text-main)' }}>{getRecipeName(item.recipe)}</div>
                        
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'var(--bg-card)', padding: '4px', borderRadius: '4px', border: '1px solid var(--border)' }}>
                          <button onClick={() => updateCartQty(item.recipe.id, -1)} style={{ background: 'none', border: 'none', color: 'var(--text-main)', cursor: 'pointer', width: '20px' }}>-</button>
                          <span style={{ fontSize: '14px', minWidth: '20px', textAlign: 'center', color: 'var(--accent)' }}>{item.quantity}</span>
                          <button onClick={() => updateCartQty(item.recipe.id, 1)} style={{ background: 'none', border: 'none', color: 'var(--text-main)', cursor: 'pointer', width: '20px' }}>+</button>
                        </div>
                        <button onClick={() => removeFromCart(item.recipe.id)} style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', marginLeft: '5px' }}>×</button>
                      </div>
                      
                      {materials.some((m: any) => m.g === 1) && (
                        <div style={{ borderTop: '1px solid var(--border)', padding: '10px 12px', background: 'rgba(255,255,255,0.02)' }}>
                          {materials.map((mGroup: any, gIdx: number) => {
                            if (mGroup.g !== 1) return null;
                            return (
                              <div key={gIdx} style={{ marginBottom: '10px', borderBottom: '1px solid var(--border)', paddingBottom: '10px' }}>
                                <div style={{ fontSize: '10px', color: 'var(--accent)', textTransform: 'uppercase', marginBottom: '8px', letterSpacing: '1px' }}>
                                  SLOT {gIdx + 1} — {lang === 'es' ? 'ELIGE UNO' : 'CHOOSE ONE'}
                                </div>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                                  {mGroup.t.map((mat: any, mIdx: number) => {
                                    const isActive = item.choices[gIdx] === mIdx;
                                    return (
                                      <button 
                                        key={mIdx}
                                        onClick={() => setChoice(item.recipe.id, gIdx, mIdx)}
                                        style={{ 
                                          display: 'flex', alignItems: 'center', gap: '5px', padding: '4px 8px', borderRadius: '4px', cursor: 'pointer',
                                          background: isActive ? 'var(--bg-card)' : 'transparent',
                                          border: isActive ? '1px solid var(--accent)' : '1px solid var(--border)',
                                          color: isActive ? 'var(--text-main)' : 'var(--text-muted)'
                                        }}
                                      >
                                        <img src={`/icons/icon_${mat[0]}.png`} style={{ width: '16px', height: '16px', opacity: isActive ? 1 : 0.5 }} onError={(e) => e.currentTarget.style.display='none'} />
                                        <span style={{ fontSize: '11px' }}>{recipeItems[mat[0]] ? getItemName(recipeItems[mat[0]]) : mat[0]}</span>
                                      </button>
                                    );
                                  })}
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </aside>

            <section className="content-area glass" style={{ flex: 1, overflowY: 'auto', padding: '40px', position: 'relative' }}>
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                <h2 style={{ fontSize: '28px', color: 'var(--text-main)', marginBottom: '5px' }}>{lang === 'es' ? 'Resumen de Materiales' : 'Material Summary'}</h2>
                <div style={{ color: 'var(--secondary)', fontSize: '14px', marginBottom: '30px', paddingBottom: '20px', borderBottom: '1px solid var(--border)' }}>
                  {totalCrafts} {lang === 'es' ? 'crafteos' : 'crafts'} • {Object.keys(materialSummary).length} {lang === 'es' ? 'tipos de material' : 'material types'}
                </div>
                
                {Object.keys(materialSummary).length === 0 ? (
                  <div style={{ textAlign: 'center', opacity: 0.3, marginTop: '10vh' }}>
                    <Calculator size={100} style={{ marginBottom: '20px' }} />
                    <p style={{ fontSize: '18px' }}>{lang === 'es' ? 'Añade recetas para ver los materiales necesarios.' : 'Add recipes to see required materials.'}</p>
                  </div>
                ) : (
                  <div>
                    <div style={{ fontSize: '12px', color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '15px' }}>
                      {lang === 'es' ? 'MATERIALES REQUERIDOS' : 'REQUIRED MATERIALS'}
                    </div>
                    
                    {Object.entries(materialSummary).sort(([,a], [,b]) => (b as number) - (a as number)).map(([itemId, qty]) => (
                      <div key={itemId} style={{ display: 'flex', alignItems: 'center', padding: '15px 0', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                        <div style={{ width: '40px', height: '40px', background: 'var(--bg-hover)', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '20px' }}>
                          <img src={`/icons/icon_${itemId}.png`} style={{ width: '28px', height: '28px' }} onError={(e) => e.currentTarget.style.display='none'} />
                        </div>
                        <div style={{ fontSize: '20px', fontWeight: 'bold', color: 'var(--text-main)', minWidth: '60px' }}>{String(qty)}</div>
                        <div style={{ color: 'var(--secondary)', fontSize: '14px', marginRight: '15px' }}>×</div>
                        <div style={{ flex: 1, fontSize: '16px', color: 'var(--text-main)' }}>
                          {recipeItems[Number(itemId)] ? getItemName(recipeItems[Number(itemId)]) : `Item #${itemId}`}
                        </div>
                        <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Material</div>
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>
            </section>
          </>
        )}

        {activeTab === 'guides' && (
          <section className="content-area glass" style={{ flex: 1, overflowY: 'auto', padding: '40px' }}>
            {selectedGuide === 'character_statistics' ? (
              <CharacterStatistics onBack={() => setSelectedGuide(null)} lang={lang} />
            ) : selectedGuide === 'combat' ? (
              <Combat onBack={() => setSelectedGuide(null)} lang={lang} />
            ) : (
              <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <h2 style={{ fontSize: '32px', color: 'var(--text-main)', marginBottom: '30px', borderBottom: '2px solid var(--accent)', paddingBottom: '10px' }}>
                  {t.guides}
                </h2>

                {t.guideCategories.map((category: any) => (
                  <div key={category.title} style={{ marginBottom: '40px' }}>
                    <h3 style={{ fontSize: '22px', color: 'var(--accent)', marginBottom: '20px', textTransform: 'uppercase', letterSpacing: '1px' }}>{category.title}</h3>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '20px' }}>
                      {category.items.map((guide: any) => (
                        <div key={guide.id} onClick={() => setSelectedGuide(guide.id)} className="glass-card" style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '8px', overflow: 'hidden', cursor: 'pointer' }}>
                          <div style={{ height: '140px', background: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <img src={`/guides/${guide.id}.png`} alt={guide.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.parentElement!.innerHTML = `<span style="color:var(--secondary);font-size:12px;padding:10px;text-align:center">/guides/${guide.id}.png</span>`; }} />
                          </div>
                          <div style={{ padding: '15px', textAlign: 'center', fontWeight: 'bold', color: 'var(--text-main)' }}>
                            {guide.name}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
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
