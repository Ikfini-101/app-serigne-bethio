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

const BottomMenu: React.FC = () => {
  const [visible, setVisible] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const handle = (e: MouseEvent) => setVisible(e.clientY > window.innerHeight * 0.68);
    window.addEventListener('mousemove', handle);
    return () => window.removeEventListener('mousemove', handle);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="bottom-menu"
          initial={{ y: 15, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 15, opacity: 0 }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
          style={{
            position: 'fixed',
            bottom: '28px',
            left: 0,
            right: 0,
            margin: '0 auto',
            width: '90%',
            maxWidth: '680px',
            zIndex: 100,
          }}
        >
          {/* Glow halo */}
          <div style={{
            position: 'absolute', inset: '-10px',
            borderRadius: '60px',
            background: 'radial-gradient(ellipse, rgba(135,206,235,0.4) 0%, transparent 70%)',
            filter: 'blur(14px)',
            pointerEvents: 'none',
          }} />

          <nav style={{
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            padding: '14px 24px',
            borderRadius: '50px',
            background: 'rgba(255,255,255,0.85)',
            backdropFilter: 'blur(40px) saturate(200%)',
            WebkitBackdropFilter: 'blur(40px) saturate(200%)',
            border: '1px solid rgba(255,255,255,1)',
            boxShadow: '0 8px 32px rgba(135,206,235,0.3), inset 0 1px 0 rgba(255,255,255,0.8)',
            position: 'relative',
            width: '100%',
          }}>
            {NAV.map(({ path, label, icon: Icon }) => {
              const active = location.pathname === path;
              return (
                <Link key={path} to={path} style={{ textDecoration: 'none', flex: 1 }}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    whileTap={{ scale: 0.92 }}
                    style={{
                      display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px',
                      padding: '6px 0', borderRadius: '16px',
                      cursor: 'pointer', position: 'relative',
                    }}
                  >
                    {active && (
                      <motion.div
                        layoutId="active-pill"
                        style={{
                          position: 'absolute', inset: 0,
                          borderRadius: '16px',
                          background: 'rgba(135,206,235,0.25)',
                          border: '1px solid rgba(135,206,235,0.5)',
                        }}
                        transition={{ type: 'spring' as const, stiffness: 350, damping: 30 }}
                      />
                    )}
                    <Icon
                      size={20}
                      color={active ? 'var(--sky-deep)' : 'var(--charcoal)'}
                      style={{ position: 'relative', zIndex: 1, opacity: active ? 1 : 0.5 }}
                    />
                    <span style={{
                      fontSize: '0.70rem', fontWeight: active ? 700 : 500,
                      color: active ? 'var(--sky-deep)' : 'var(--charcoal)',
                      opacity: active ? 1 : 0.5,
                      letterSpacing: '0.5px', position: 'relative', zIndex: 1,
                      whiteSpace: 'nowrap',
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
  );
};

export default BottomMenu;
