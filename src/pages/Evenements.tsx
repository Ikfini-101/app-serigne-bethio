import React, { useState } from 'react';
import { Calendar, MapPin, ChevronRight } from 'lucide-react';

const events = [
  {
    id: 'magal',
    titre: 'Grand Magal de Touba',
    icon: '🕌',
    periode: '18ème jour du mois de Safar (calendrier hégirien)',
    lieu: 'Touba, Sénégal',
    couleur: '#C9A84C',
    description: `Le Grand Magal de Touba est le plus grand rassemblement religieux du Sénégal et l'un des plus importants d'Afrique. Il commémore le départ en exil au Gabon de Cheikh Ahmadou Bamba (Serigne Touba) le 18 Safar 1313 H (1895). Des millions de pèlerins affluent vers la ville sainte de Touba chaque année pour prier, se souvenir et renouveler leur engagement spirituel. Cheikh Serigne Béthio Thioune menait chaque année ses disciples Thiantacônes à Touba pour ce grand rendez-vous de foi.`,
  },
  {
    id: 'gamou',
    titre: 'Gamou — Mawlid du Prophète ﷺ',
    icon: '🌙',
    periode: '12 Rabi Al-Awwal (calendrier hégirien)',
    lieu: 'Tivaouane & partout dans le monde',
    couleur: '#2D6A4F',
    description: `Le Gamou célèbre la naissance du Prophète Muhammad ﷺ. Dans la tradition mouride et tijaniyya, cette nuit sainte est marquée par la récitation de Khassaïdes, de chants religieux (Zikr) et de prières collectives. Cheikh Serigne Béthio encourageait ses disciples à vivre le Gamou comme un moment de renouveau spirituel profond.`,
  },
  {
    id: 'avril-1987',
    titre: '17 Avril 1987 — Consécration du Cheikh',
    icon: '⭐',
    periode: '17 Avril 1987 — Date historique',
    lieu: 'Dakar, Sénégal',
    couleur: '#E5CD7A',
    description: `Le 17 Avril 1987 est la date la plus sacrée pour les Thiantacônes. Ce jour-là, Serigne Saliou Mbacké, Khalife Général des Mourides, a officiellement conféré à Cheikh Serigne Béthio Thioune le titre suprême de "Cheikh" — un rang spirituel d'une élévation exceptionnelle. Cette date est célébrée chaque année par les Thiantacônes à travers le monde entier comme un anniversaire de grâce et de lumière.`,
  },
  {
    id: 'porokhane',
    titre: 'Pèlerinage de Porokhane',
    icon: '🌿',
    periode: 'Annuel — Mois de Rajab',
    lieu: 'Porokhane, Sénégal',
    couleur: '#2D6A4F',
    description: `Porokhane est le lieu de résidence de Sokhna Mame Diarra Bousso, mère de Serigne Touba, vénérée comme figure de sainteté et d'intercession dans la tradition mouride. Son pèlerinage annuel, le "Gamou de Porokhane", réunit des centaines de milliers de fidèles. Cheikh Serigne Béthio honorait ce pèlerinage et encourageait les Thiantacônes à y participer.`,
  },
  {
    id: 'thiant-samedi',
    titre: 'Thiant Hebdomadaire du Samedi',
    icon: '🔄',
    periode: 'Chaque Samedi — Rendez-vous permanent',
    lieu: 'Partout dans le monde où vivent des Thiantacônes',
    couleur: '#C9A84C',
    description: `Le Thiant du Samedi est la pierre angulaire de la vie spirituelle des Thiantacônes. Chaque semaine, des groupes de disciples se réunissent pour réciter les Khassaïdes, partager les Ndigueuls (recommandations) du Khalif, effectuer des travaux collectifs (Khelcom) et renforcer les liens fraternels. C'est le rythme régulier de la voie, le pouls hebdomadaire de la communauté.`,
  },
];

const Evenements: React.FC = () => {
  const [selected, setSelected] = useState<string | null>(null);
  const event = events.find(e => e.id === selected);

  return (
    <div style={{ padding: '0 5%', maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ color: 'var(--gold)', fontFamily: 'Amiri, serif', fontSize: '3rem', marginBottom: '0.5rem' }}>
        Événements
      </h1>
      <p style={{ opacity: 0.7, marginBottom: '3rem', fontSize: '1rem' }}>
        Les grands rendez-vous spirituels de la communauté Mouride & Thiantacône
      </p>

      {/* Event cards grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
        {events.map(ev => (
          <div key={ev.id} className="glass-panel" onClick={() => setSelected(selected === ev.id ? null : ev.id)}
            style={{
              padding: '1.8rem', borderRadius: '16px', cursor: 'pointer',
              borderTop: `3px solid ${ev.couleur}`,
              transition: 'all 0.3s',
              transform: selected === ev.id ? 'translateY(-4px)' : 'none',
              boxShadow: selected === ev.id ? `0 12px 30px rgba(0,0,0,0.4)` : 'none'
            }}
            onMouseOver={e => { if (selected !== ev.id) e.currentTarget.style.transform = 'translateY(-6px)'; }}
            onMouseOut={e => { if (selected !== ev.id) e.currentTarget.style.transform = 'translateY(0)'; }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '0.8rem' }}>{ev.icon}</div>
            <h3 style={{ color: ev.couleur, fontFamily: 'Amiri, serif', fontSize: '1.4rem', marginBottom: '0.8rem', lineHeight: '1.3' }}>
              {ev.titre}
            </h3>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', opacity: 0.7, fontSize: '0.85rem', marginBottom: '4px' }}>
              <Calendar size={14} color={ev.couleur} />
              <span>{ev.periode}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', opacity: 0.7, fontSize: '0.85rem' }}>
              <MapPin size={14} color={ev.couleur} />
              <span>{ev.lieu}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginTop: '1rem', color: ev.couleur, fontSize: '0.85rem' }}>
              <span>{selected === ev.id ? 'Fermer' : 'Lire plus'}</span>
              <ChevronRight size={14} style={{ transform: selected === ev.id ? 'rotate(90deg)' : 'none', transition: 'transform 0.2s' }} />
            </div>
          </div>
        ))}
      </div>

      {/* Expanded detail panel */}
      {event && (
        <div className="glass-panel" style={{
          padding: '2.5rem', borderRadius: '20px',
          borderLeft: `4px solid ${event.couleur}`,
          marginBottom: '3rem',
          animation: 'fadeIn 0.3s ease'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
            <span style={{ fontSize: '2rem' }}>{event.icon}</span>
            <h2 style={{ color: event.couleur, fontFamily: 'Amiri, serif', fontSize: '2rem' }}>{event.titre}</h2>
          </div>
          <p style={{ lineHeight: '2', fontSize: '1.1rem', opacity: 0.9 }}>{event.description}</p>
          <div style={{ display: 'flex', gap: '2rem', marginTop: '1.5rem', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: event.couleur }}>
              <Calendar size={16} />
              <span style={{ fontSize: '0.9rem' }}>{event.periode}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: event.couleur }}>
              <MapPin size={16} />
              <span style={{ fontSize: '0.9rem' }}>{event.lieu}</span>
            </div>
          </div>
        </div>
      )}
      <div style={{ height: '4rem' }} />
    </div>
  );
};

export default Evenements;
