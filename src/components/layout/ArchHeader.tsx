import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/* ── Photos du carrousel ── */
const PHOTOS = [
  '/assets/photos/5782838079114036158.jpg',
  '/assets/photos/5818992460976736025.jpg',
  '/assets/photos/5821307448349278518.jpg',
  '/assets/photos/5843864303055258324.jpg',
  '/assets/photos/5915985282220538074.jpg',
  '/assets/photos/5990338231335504700.jpg',
];

/**
 * Chemin de la coupole en coordonnées SVG (viewBox 0 0 1440 520)
 * L'arche plonge depuis les coins (y=340) jusqu'au centre (y=520)
 */
const ARCH_PATH = 'M0,340 C200,340 360,520 720,520 C1080,520 1240,340 1440,340';

/**
 * Même chemin normalisé pour objectBoundingBox (0-1)
 * y=340/520 ≈ 0.654 | x: 200/1440≈0.139, 360/1440=0.25, 720/1440=0.5 …
 */
const CLIP_NORMALIZED =
  'M 0 0 L 1 0 L 1 0.654 C 0.861 0.654 0.75 1 0.5 1 C 0.25 1 0.139 0.654 0 0.654 Z';

const ArchHeader: React.FC = () => {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx(i => (i + 1) % PHOTOS.length), 20000);
    return () => clearInterval(t);
  }, []);

  return (
    <div style={{ position: 'relative', width: '100%', zIndex: 1 }}>

      {/* ── Définition du clip SVG (hors écran) ── */}
      <svg style={{ position: 'absolute', width: 0, height: 0, overflow: 'hidden' }}>
        <defs>
          {/* clipPathUnits="objectBoundingBox" → responsive, zéro poche blanche */}
          <clipPath id="arch-dome-clip" clipPathUnits="objectBoundingBox">
            <path d={CLIP_NORMALIZED} />
          </clipPath>
        </defs>
      </svg>

      {/* ── Container photo + overlay + titre — clippé au dôme ── */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '70vh',
          minHeight: '480px',
          clipPath: 'url(#arch-dome-clip)',
          zIndex: 1,
        }}
      >
        {/* Carrousel photos */}
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

        {/* Overlay dégradé */}
        <div style={{
          position: 'absolute', inset: 0, zIndex: 2,
          background:
            'linear-gradient(to bottom, rgba(253,251,247,0.08) 0%, rgba(253,251,247,0.55) 68%, rgba(253,251,247,0.92) 92%)',
        }} />

        {/* Titre */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1.2 }}
          style={{
            position: 'absolute',
            top: '40%', left: 0, right: 0,
            margin: '0 auto',
            zIndex: 3,
            textAlign: 'center',
            width: '90%',
            maxWidth: '680px',
          }}
        >
          <div style={{ padding: '2rem 1rem' }}>
            <h1
              className="shimmer-text serif"
              style={{
                fontSize: 'clamp(2rem, 5vw, 3.8rem)',
                lineHeight: 1.1,
                marginBottom: '0.8rem',
                textShadow: '0 4px 24px rgba(255,255,255,0.6)',
              }}
            >
              Cheikh Serigne Béthio Thioune
            </h1>
            <p style={{
              color: 'var(--charcoal)',
              fontSize: '1.1rem',
              letterSpacing: '4px',
              textTransform: 'uppercase',
              fontWeight: 600,
              textShadow: '0 2px 12px rgba(255,255,255,0.8)',
            }}>
              La Voie du Thiant
            </p>

            {/* Dots carrousel */}
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
      </div>

      {/* ── Bordure + atome d'hydrogène — superposé sur tout le container ── */}
      <svg
        viewBox="0 0 1440 520"
        preserveAspectRatio="none"
        style={{
          position: 'absolute',
          top: 0, left: 0,
          width: '100%',
          height: '70vh',
          minHeight: '480px',
          pointerEvents: 'none',
          zIndex: 6,
          display: 'block',
          overflow: 'visible',
        }}
      >
        <defs>
          {/* Halo de l'atome */}
          <filter id="atom-glow" x="-200%" y="-200%" width="500%" height="500%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          {/* Halo subtil sur la bordure */}
          <filter id="border-glow">
            <feGaussianBlur in="SourceGraphic" stdDeviation="1.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Lueur douce derrière la bordure */}
        <path
          d={ARCH_PATH}
          fill="none"
          stroke="rgba(74,144,217,0.25)"
          strokeWidth="3"
          filter="url(#border-glow)"
        />

        {/* Bordure bleue ultra-fine — la plus fine possible */}
        <path
          d={ARCH_PATH}
          fill="none"
          stroke="rgba(74,144,217,0.90)"
          strokeWidth="0.6"
        />

        {/* ── Atome d'hydrogène principal ── */}
        <g filter="url(#atom-glow)">
          <circle r="2.8" fill="#87CEEB" fillOpacity="1">
            <animateMotion
              dur="1.5s"
              repeatCount="indefinite"
              path={ARCH_PATH}
            />
          </circle>
        </g>

        {/* ── Noyau — reflet blanc au cœur de l'atome ── */}
        <circle r="1.2" fill="white" fillOpacity="0.95">
          <animateMotion
            dur="1.5s"
            repeatCount="indefinite"
            path={ARCH_PATH}
          />
        </circle>

        {/* ── Second atome — décalé d'une demi-période (effet orbite) ── */}
        <g filter="url(#atom-glow)">
          <circle r="2" fill="#4A90D9" fillOpacity="0.7">
            <animateMotion
              dur="1.5s"
              begin="-0.75s"
              repeatCount="indefinite"
              path={ARCH_PATH}
            />
          </circle>
        </g>
      </svg>
    </div>
  );
};

export default ArchHeader;
