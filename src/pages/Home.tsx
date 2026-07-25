import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const cards = [
  { path: '/mouridisme', label: 'Mouridisme', desc: 'Serigne Touba, Khalifs, Khassaïdes', color: 'var(--sky)' },
  { path: '/thiant',     label: 'Thiant',     desc: 'La voie, la médiathèque, le podcast', color: 'var(--beige)' },
  { path: '/evenements', label: 'Événements', desc: 'Magal, Gamou, 17 Avril, Porokhane', color: 'var(--sky-pale)' },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};
const item = {
  hidden: { opacity: 0, y: 40 },
  show:   { opacity: 1, y: 0, transition: { type: 'spring' as const, stiffness: 220, damping: 22 } },
};

const Home: React.FC = () => (
  <div style={{ padding: '3rem 5%', maxWidth: '1100px', margin: '0 auto' }}>

    {/* Intro */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      style={{ marginBottom: '3.5rem' }}
    >
      <h2 className="serif" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--white)', marginBottom: '1rem' }}>
        Bienvenue sur ce site
      </h2>
      <p style={{ fontSize: '1.15rem', lineHeight: '1.9', color: 'rgba(245,236,215,0.85)', maxWidth: '680px' }}>
        Ce site est dédié à la vie, l'œuvre et l'héritage de{' '}
        <strong style={{ color: 'var(--sky)' }}>Cheikh Serigne Béthio Thioune</strong>.
        Découvrez son parcours exceptionnel, son engagement pour le Mouridisme et la voie sacrée du Thiant.
      </p>
    </motion.div>

    {/* Cards liquid morphism */}
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}
    >
      {cards.map(c => (
        <motion.div key={c.path} variants={item}>
          <Link to={c.path} style={{ textDecoration: 'none', display: 'block' }}>
            <motion.div
              whileHover={{ y: -8, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              style={{
                padding: '2rem',
                borderRadius: '20px',
                background: 'rgba(255,255,255,0.06)',
                backdropFilter: 'blur(40px) saturate(200%)',
                WebkitBackdropFilter: 'blur(40px) saturate(200%)',
                border: `1px solid rgba(255,255,255,0.15)`,
                boxShadow: `0 4px 24px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.15)`,
                cursor: 'pointer',
              }}
            >
              <div style={{ width: '40px', height: '3px', borderRadius: '2px', background: c.color, marginBottom: '1.2rem' }} />
              <h3 className="serif" style={{ color: c.color, fontSize: '1.8rem', marginBottom: '0.6rem' }}>
                {c.label}
              </h3>
              <p style={{ color: 'rgba(245,236,215,0.70)', lineHeight: '1.6', fontSize: '0.95rem' }}>
                {c.desc}
              </p>
              <div style={{ marginTop: '1.2rem', fontSize: '0.82rem', color: c.color, opacity: 0.7, letterSpacing: '1px' }}>
                DÉCOUVRIR →
              </div>
            </motion.div>
          </Link>
        </motion.div>
      ))}
    </motion.div>

    {/* Quote liquid */}
    <motion.div
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.5, duration: 0.8 }}
      style={{
        padding: '2.5rem',
        borderRadius: '24px',
        background: 'rgba(135,206,235,0.07)',
        backdropFilter: 'blur(40px) saturate(180%)',
        WebkitBackdropFilter: 'blur(40px) saturate(180%)',
        border: '1px solid rgba(135,206,235,0.20)',
        boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.15)',
        marginBottom: '6rem',
      }}
    >
      <p style={{ fontFamily: 'Amiri, serif', fontSize: '1.6rem', color: 'var(--beige)', lineHeight: '1.7', fontStyle: 'italic' }}>
        « Na nga xam tay ne, yoon wii di yoonou Murit, ku la si ëpp daraja amatu ci »
      </p>
      <p style={{ marginTop: '1rem', fontSize: '0.9rem', color: 'rgba(212,238,255,0.6)' }}>
        Serigne Saliou Mbacké à Cheikh Serigne Béthio — 3 Novembre 2003
      </p>
    </motion.div>

  </div>
);

export default Home;
