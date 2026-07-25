import React, { useState, useEffect } from 'react';

const IMAGES = [
  '/assets/photos/5782838079114036158.jpg',
  '/assets/photos/5818992460976736025.jpg',
  '/assets/photos/5821307448349278518.jpg',
  '/assets/photos/5843864303055258324.jpg'
];

const ArchHeader: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Changement d'image toutes les 20 secondes
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % IMAGES.length);
    }, 20000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '60vh', // Prend 60% de l'écran initialement
      overflow: 'hidden',
      zIndex: 1,
    }}>
      {/* Container de l'arche avec masque */}
      <div style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        clipPath: 'polygon(0 0, 100% 0, 100% 75%, 50% 100%, 0 75%)', // Simple arch approximation, on pourra raffiner avec SVG
        backgroundColor: '#000'
      }}>
        {IMAGES.map((img, index) => (
          <div
            key={index}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundImage: `url('${img}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              opacity: index === currentIndex ? 1 : 0,
              transition: 'opacity 3s ease-in-out', // Fondu très doux
            }}
          />
        ))}
        
        {/* Overlay pour accessibilité texte AAA (assombrit l'image) */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(to bottom, rgba(13,33,23,0.3) 0%, rgba(13,33,23,0.8) 100%)',
          zIndex: 2
        }} />

        {/* Titre du Header */}
        <div style={{
          position: 'absolute',
          top: '40%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 3,
          textAlign: 'center',
          width: '100%'
        }}>
          <h1 style={{
            color: 'var(--gold)',
            fontSize: '3.5rem',
            textShadow: '0 4px 12px rgba(0,0,0,0.5)',
            margin: 0
          }}>
            Cheikh Serigne Béthio
          </h1>
          <p style={{
            color: 'var(--cream)',
            fontSize: '1.2rem',
            letterSpacing: '2px',
            textTransform: 'uppercase',
            marginTop: '10px'
          }}>
            La Voie de la Grâce
          </p>
        </div>
      </div>
      
      {/* Décoration dorée bordure de l'arche */}
      <svg 
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 4 }}
        preserveAspectRatio="none"
        viewBox="0 0 100 100"
      >
        <path 
          d="M 0 0 L 100 0 L 100 75 Q 50 100 0 75 Z" 
          fill="none" 
          stroke="var(--gold)" 
          strokeWidth="0.5"
          strokeDasharray="2 1"
        />
      </svg>
    </div>
  );
};

export default ArchHeader;
