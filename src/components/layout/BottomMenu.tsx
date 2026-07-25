import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Home, Book, Heart, Calendar, Globe } from 'lucide-react';

const BottomMenu: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Afficher le menu si la souris est dans le tiers inférieur de l'écran
      if (e.clientY > window.innerHeight * 0.7) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    const handleScroll = () => {
      // Logique optionnelle : afficher lors du scroll vers le haut
      if (window.scrollY < lastScrollY) {
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  const navItems = [
    { name: 'Accueil', path: '/', icon: <Home size={20} /> },
    { name: 'Mouridisme', path: '/mouridisme', icon: <Book size={20} /> },
    { name: 'Thiant', path: '/thiant', icon: <Heart size={20} /> },
    { name: 'Événements', path: '/evenements', icon: <Calendar size={20} /> },
    { name: 'Actualités', path: '/actualites', icon: <Globe size={20} /> },
  ];

  return (
    <div style={{
      position: 'fixed',
      bottom: isVisible ? '30px' : '-100px',
      left: '50%',
      transform: 'translateX(-50%)',
      zIndex: 100,
      transition: 'bottom 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
      width: '90%',
      maxWidth: '600px',
    }}>
      <nav 
        className="glass-panel"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '12px 24px',
          borderRadius: '50px',
          boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
        }}
      >
        {navItems.map((item, idx) => (
          <Link 
            key={idx} 
            to={item.path}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '4px',
              color: 'var(--cream)',
              textDecoration: 'none',
              fontSize: '0.75rem',
              transition: 'all 0.2s',
              opacity: 0.8,
            }}
            onMouseOver={e => {
              e.currentTarget.style.color = 'var(--gold)';
              e.currentTarget.style.opacity = '1';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseOut={e => {
              e.currentTarget.style.color = 'var(--cream)';
              e.currentTarget.style.opacity = '0.8';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            {item.icon}
            <span>{item.name}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default BottomMenu;
