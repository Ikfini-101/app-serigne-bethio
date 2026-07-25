import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, Book, Heart, Calendar, Globe } from 'lucide-react';

const NAV = [
  { path: '/',            label: 'Accueil',     icon: Home },
  { path: '/mouridisme',  label: 'Mouridisme',  icon: Book },
  { path: '/thiant',      label: 'Thiant',      icon: Heart },
  { path: '/evenements',  label: 'Événements',  icon: Calendar },
  { path: '/actualites',  label: 'Actualités',  icon: Globe },
];

// Instanciation de composants Framer Motion pour les balises SVG de filtre
const MotionColorMatrix = (motion as any).create ? (motion as any).create('feColorMatrix') : (motion as any)('feColorMatrix');
const MotionDisplacementMap = (motion as any).create ? (motion as any).create('feDisplacementMap') : (motion as any)('feDisplacementMap');

const BottomMenu: React.FC = () => {
  const [visible, setVisible] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const handle = (e: MouseEvent) => setVisible(e.clientY > window.innerHeight * 0.68);
    window.addEventListener('mousemove', handle);
    return () => window.removeEventListener('mousemove', handle);
  }, []);

  return (
    <>
      {/* Définition du filtre de désintégration (Nano miettes) */}
      <svg style={{ position: 'absolute', width: 0, height: 0, pointerEvents: 'none' }}>
        <defs>
          <filter id="disintegrate-filter" x="-20%" y="-50%" width="140%" height="200%">
            {/* Génère un bruit fractal fin pour faire l'effet miettes */}
            <feTurbulence type="fractalNoise" baseFrequency="0.08" numOctaves="1" result="noise" />
            
            <AnimatePresence>
              {visible && (
                <>
                  <MotionColorMatrix
                    key="colorMatrix"
                    initial={{ values: "1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -20" }}
                    animate={{ values: "1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 0" }}
                    exit={{ values: "1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -20" }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    type="matrix"
                    in="noise"
                    result="threshold"
                  />
                  <feComposite key="composite" operator="in" in="SourceGraphic" in2="threshold" result="masked" />
                  <MotionDisplacementMap
                    key="displacement"
                    initial={{ scale: 50 }}
                    animate={{ scale: 0 }}
                    exit={{ scale: 50 }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    in="masked"
                    in2="noise"
                    xChannelSelector="R"
                    yChannelSelector="G"
                  />
                </>
              )}
            </AnimatePresence>
          </filter>
        </defs>
      </svg>

      <AnimatePresence>
        {visible && (
          <motion.div
            key="bottom-menu"
            initial={{ opacity: 0.99, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0.99, y: 10 }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
            style={{
              position: 'fixed',
              bottom: '24px',
              left: 0,
              right: 0,
              margin: '0 auto',
              width: '95%',
              maxWidth: '860px',
              zIndex: 100,
              filter: 'url(#disintegrate-filter)'
            }}
          >
            {/* Glow halo */}
            <div style={{
              position: 'absolute', inset: '-10px',
              borderRadius: '100px',
              background: 'radial-gradient(ellipse, rgba(135,206,235,0.4) 0%, transparent 70%)',
              filter: 'blur(16px)',
              pointerEvents: 'none',
            }} />

            <nav style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '8px 12px',
              borderRadius: '100px',
              background: 'rgba(255,255,255,0.12)',
              backdropFilter: 'blur(60px) saturate(220%) brightness(1.05)',
              WebkitBackdropFilter: 'blur(60px) saturate(220%) brightness(1.05)',
              border: '1px solid rgba(255,255,255,0.55)',
              boxShadow: '0 4px 6px rgba(0,0,0,0.04), 0 16px 48px rgba(135,206,235,0.22), inset 0 1.5px 0 rgba(255,255,255,0.85), inset 0 -1px 0 rgba(135,206,235,0.15)',
              position: 'relative',
              width: '100%',
            }}>
              {/* Logo circulaire à gauche */}
              <Link to="/" style={{ textDecoration: 'none', flexShrink: 0, paddingLeft: '4px', paddingRight: '8px' }}>
                <div style={{
                  width: '34px',
                  height: '34px',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  border: '2px solid rgba(135,206,235,0.7)',
                  boxShadow: '0 0 10px rgba(135,206,235,0.4)',
                  flexShrink: 0,
                }}>
                  <img
                    src="/assets/favicon-serigne-cheikh-bethio.png"
                    alt="Cheikh Bethio"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'center 15%',
                      display: 'block',
                    }}
                  />
                </div>
              </Link>

              {/* Séparateur */}
              <div style={{ width: '1px', height: '24px', background: 'rgba(135,206,235,0.4)', flexShrink: 0 }} />

              {NAV.map(({ path, label, icon: Icon }) => {
                const active = location.pathname === path;
                return (
                  <Link key={path} to={path} style={{ textDecoration: 'none', flex: 1, display: 'flex', justifyContent: 'center' }}>
                    <motion.div
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      style={{
                        display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '8px',
                        padding: '10px 18px', borderRadius: '100px',
                        cursor: 'pointer', position: 'relative',
                      }}
                    >
                      {active && (
                        <motion.div
                          layoutId="active-pill"
                          style={{
                            position: 'absolute', inset: 0,
                            borderRadius: '100px',
                            background: 'rgba(135,206,235,0.25)',
                            border: '1px solid rgba(135,206,235,0.6)',
                            boxShadow: '0 4px 12px rgba(135,206,235,0.2)',
                          }}
                          transition={{ type: 'spring' as const, stiffness: 400, damping: 32 }}
                        />
                      )}
                      <Icon
                        size={18}
                        color={active ? 'var(--sky-deep)' : 'var(--charcoal)'}
                        style={{ position: 'relative', zIndex: 1, opacity: active ? 1 : 0.6 }}
                      />
                      <span style={{
                        fontSize: '0.75rem', fontWeight: active ? 700 : 500,
                        color: active ? 'var(--sky-deep)' : 'var(--charcoal)',
                        opacity: active ? 1 : 0.6,
                        letterSpacing: '0.8px', position: 'relative', zIndex: 1,
                        whiteSpace: 'nowrap', textTransform: 'uppercase',
                      }}>
                        {label}
                      </span>
                    </motion.div>
                  </Link>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default BottomMenu;
