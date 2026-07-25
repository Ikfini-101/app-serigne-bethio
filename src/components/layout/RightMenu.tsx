import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, Book, Heart, Calendar, Globe, ChevronLeft } from 'lucide-react';

const NAV = [
  { path: '/',            label: 'Accueil',     icon: Home },
  { path: '/mouridisme',  label: 'Mouridisme',  icon: Book },
  { path: '/thiant',      label: 'Thiant',      icon: Heart },
  { path: '/evenements',  label: 'Événements',  icon: Calendar },
  { path: '/actualites',  label: 'Actualités',  icon: Globe },
];

const RightMenu: React.FC = () => {
  const [hovered, setHovered] = useState(false);
  const location = useLocation();

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'fixed', top: 0, right: 0, height: '100vh',
        width: '72px', zIndex: 50, display: 'flex',
        alignItems: 'center', justifyContent: 'flex-end',
      }}
    >
      {/* Trigger glow strip */}
      <AnimatePresence>
        {!hovered && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            style={{
              position: 'absolute', right: '12px',
              width: '3px', height: '80px',
              borderRadius: '4px',
              background: 'linear-gradient(to bottom, transparent, var(--sky), transparent)',
              boxShadow: '0 0 12px var(--sky)',
            }}
          />
        )}
      </AnimatePresence>

      {/* Panel */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            key="right-panel"
            initial={{ x: 280, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 280, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 280, damping: 26 }}
            style={{
              position: 'absolute', right: '16px',
              width: '240px',
              background: 'rgba(255,255,255,0.85)',
              backdropFilter: 'blur(40px) saturate(200%)',
              WebkitBackdropFilter: 'blur(40px) saturate(200%)',
              border: '1px solid rgba(255,255,255,1)',
              borderRadius: '20px',
              padding: '1.8rem 1.2rem',
              boxShadow: '-8px 0 40px rgba(135,206,235,0.3), inset 0 1px 0 rgba(255,255,255,0.8)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '1.2rem', opacity: 0.8 }}>
              <ChevronLeft size={14} color="var(--sky-deep)" />
              <span style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--sky-deep)' }}>
                Navigation
              </span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              {NAV.map(({ path, label, icon: Icon }, i) => {
                const active = location.pathname === path;
                return (
                  <motion.div
                    key={path}
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.06, type: 'spring', stiffness: 300, damping: 24 }}
                  >
                    <Link to={path} style={{ textDecoration: 'none' }}>
                      <motion.div
                        whileHover={{ x: -4, backgroundColor: 'rgba(135,206,235,0.15)' }}
                        style={{
                          display: 'flex', alignItems: 'center', gap: '12px',
                          padding: '10px 12px', borderRadius: '12px',
                          background: active ? 'rgba(135,206,235,0.25)' : 'transparent',
                          border: active ? '1px solid rgba(135,206,235,0.4)' : '1px solid transparent',
                          cursor: 'pointer',
                        }}
                      >
                        <Icon size={18} color={active ? 'var(--sky-deep)' : 'var(--charcoal)'} style={{ opacity: active ? 1 : 0.6 }} />
                        <span style={{ color: active ? 'var(--sky-deep)' : 'var(--charcoal)', fontSize: '0.95rem', fontWeight: active ? 600 : 400, opacity: active ? 1 : 0.6 }}>
                          {label}
                        </span>
                      </motion.div>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default RightMenu;
