import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/* Photos du Cheikh Serigne Béthio — carrousel */
const PHOTOS = [
  '/assets/photos/5782838079114036158.jpg',
  '/assets/photos/5818992460976736025.jpg',
  '/assets/photos/5821307448349278518.jpg',
  '/assets/photos/5843864303055258324.jpg',
  '/assets/photos/5915985282220538074.jpg',
  '/assets/photos/5990338231335504700.jpg',
];

/* Forme SVG : coupole mausolée renversée
   Le bas de l'arche forme un arc en ogive islamique inversé
   (les côtés sont hauts, le centre plonge vers le bas comme une coupole retournée) */
const DomeMask: React.FC = () => (
  <svg
    viewBox="0 0 1440 520"
    preserveAspectRatio="none"
    style={{ position: 'absolute', bottom: -1, left: 0, width: '100%', zIndex: 4, display: 'block' }}
  >
    <defs>
      <linearGradient id="domeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%"   stopColor="rgba(255,255,255,0.05)" />
        <stop offset="50%"  stopColor="rgba(135,206,235,0.08)" />
        <stop offset="100%" stopColor="rgba(255,255,255,0.05)" />
      </linearGradient>
    </defs>

    {/* Remplissage de fond page en-dessous de l'arche */}
    <path
      d="M0,340 C200,340 360,520 720,520 C1080,520 1240,340 1440,340 L1440,520 L0,520 Z"
      fill="rgba(253,251,247,1)"
    />

    {/* Bordure lumineuse de la coupole — effet liquid/glow */}
    <path
      d="M0,340 C200,340 360,520 720,520 C1080,520 1240,340 1440,340"
      fill="none"
      stroke="url(#domeGrad)"
      strokeWidth="1.5"
    />

    {/* Reflet intérieur subtil */}
    <path
      d="M60,340 C240,340 390,510 720,510 C1050,510 1200,340 1380,340"
      fill="none"
      stroke="rgba(255,255,255,0.06)"
      strokeWidth="1"
    />
  </svg>
);

const ArchHeader: React.FC = () => {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx(i => (i + 1) % PHOTOS.length), 20000);
    return () => clearInterval(t);
  }, []);

  return (
    <div style={{
      position: 'relative',
      width: '100%',
      height: '70vh',
      minHeight: '480px',
      overflow: 'hidden',
      zIndex: 1,
    }}>

      {/* ── Carrousel photos — AnimatePresence pour crossfade ── */}
      <AnimatePresence mode="sync">
        <motion.div
          key={idx}
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 3, ease: 'easeInOut' }}
          style={{
            position: 'absolute', inset: 0,
            backgroundImage: `url('${PHOTOS[idx]}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center top',
          }}
        />
      </AnimatePresence>

      {/* ── Overlay dégradé ── */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 2,
        background: 'linear-gradient(to bottom, rgba(253,251,247,0.1) 0%, rgba(253,251,247,0.6) 70%, rgba(253,251,247,1) 100%)',
      }} />

      {/* ── Titre — liquid morphism ── */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 1.2 }}
        style={{
          position: 'absolute',
          top: '40%',
          left: 0,
          right: 0,
          margin: '0 auto',
          zIndex: 3,
          textAlign: 'center',
          width: '90%',
          maxWidth: '680px',
        }}
      >
        {/* Conteneur du texte sans fond pour ne pas cacher la photo */}
        <div style={{
          padding: '2rem 1rem',
        }}>
          <h1 className="shimmer-text serif" style={{ fontSize: 'clamp(2rem, 5vw, 3.8rem)', lineHeight: 1.1, marginBottom: '0.8rem', textShadow: '0 4px 24px rgba(255,255,255,0.6)' }}>
            Cheikh Serigne Béthio Thioune
          </h1>
          <p style={{ color: 'var(--charcoal)', fontSize: '1.1rem', letterSpacing: '4px', textTransform: 'uppercase', fontWeight: 600, textShadow: '0 2px 12px rgba(255,255,255,0.8)' }}>
            La Voie du Thiant
          </p>

          {/* Dots indicateurs carrousel */}
          <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', marginTop: '1.2rem' }}>
            {PHOTOS.map((_, i) => (
              <motion.button
                key={i}
                onClick={() => setIdx(i)}
                animate={{ width: i === idx ? 24 : 8, opacity: i === idx ? 1 : 0.4 }}
                transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                style={{
                  height: '8px', borderRadius: '4px',
                  background: i === idx ? 'var(--sky-deep)' : 'rgba(135,206,235,0.3)',
                  border: 'none', cursor: 'pointer', padding: 0,
                }}
              />
            ))}
          </div>
        </div>
      </motion.div>

      {/* ── Coupole mausolée renversée ── */}
      <DomeMask />
    </div>
  );
};

export default ArchHeader;
