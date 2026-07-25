import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const RightMenu: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        position: 'fixed',
        top: 0,
        right: 0,
        height: '100vh',
        width: '80px',
        zIndex: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div 
        className="glass-panel"
        style={{
          height: '60vh',
          width: '250px',
          position: 'absolute',
          right: isHovered ? '20px' : '-230px',
          opacity: isHovered ? 1 : 0,
          transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
          borderRadius: '20px',
          padding: '2rem 1.5rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem',
          boxShadow: '-10px 0 30px rgba(0,0,0,0.5)',
        }}
      >
        <div style={{ color: 'var(--gold)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '2px', borderBottom: '1px solid rgba(201,168,76,0.3)', paddingBottom: '10px' }}>
          Menu Rapide
        </div>
        
        <nav style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1rem' }}>
          <Link to="/audio" style={{ color: 'var(--cream)', textDecoration: 'none', fontSize: '1.1rem', transition: 'color 0.2s' }} onMouseOver={e => e.currentTarget.style.color = 'var(--gold)'} onMouseOut={e => e.currentTarget.style.color = 'var(--cream)'}>Médiathèque</Link>
          <Link to="/khelcom" style={{ color: 'var(--cream)', textDecoration: 'none', fontSize: '1.1rem', transition: 'color 0.2s' }} onMouseOver={e => e.currentTarget.style.color = 'var(--gold)'} onMouseOut={e => e.currentTarget.style.color = 'var(--cream)'}>Khelcom</Link>
          <Link to="/contact" style={{ color: 'var(--cream)', textDecoration: 'none', fontSize: '1.1rem', transition: 'color 0.2s' }} onMouseOver={e => e.currentTarget.style.color = 'var(--gold)'} onMouseOut={e => e.currentTarget.style.color = 'var(--cream)'}>Nous Contacter</Link>
        </nav>
      </div>

      {/* Trigger area hint */}
      {!isHovered && (
        <div style={{
          position: 'absolute',
          right: '10px',
          width: '4px',
          height: '60px',
          backgroundColor: 'var(--gold)',
          borderRadius: '4px',
          opacity: 0.5,
          boxShadow: '0 0 10px var(--gold)',
          transition: 'opacity 0.3s'
        }} />
      )}
    </div>
  );
};

export default RightMenu;
