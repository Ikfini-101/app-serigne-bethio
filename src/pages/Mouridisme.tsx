import React, { useState } from 'react';
import { Book, Music, Users, Star, ChevronRight } from 'lucide-react';

const sections = [
  { id: 'serigne-touba', label: 'Serigne Touba', icon: <Star size={18} /> },
  { id: 'historique', label: 'Historique & Touba', icon: <Book size={18} /> },
  { id: 'khalifs', label: 'Les Khalifs', icon: <Users size={18} /> },
  { id: 'relations', label: 'Relations avec le Cheikh', icon: <ChevronRight size={18} /> },
  { id: 'khassaides', label: 'Khassaïdes', icon: <Music size={18} /> },
];

const content: Record<string, React.ReactNode> = {
  'serigne-touba': (
    <div>
      <h2 style={{ color: 'var(--gold)', fontFamily: 'Amiri, serif', fontSize: '2.8rem', marginBottom: '1.5rem' }}>
        Cheikh Ahmadou Bamba — Serigne Touba
      </h2>
      <p style={{ lineHeight: '2', fontSize: '1.1rem', opacity: 0.9, marginBottom: '1.5rem' }}>
        Cheikh Ahmadou Bamba Mbacké (1853-1927), connu comme <strong style={{ color: 'var(--gold)' }}>Khadimou Rassoul</strong> — 
        le Serviteur du Prophète —, est le fondateur de la confrérie Mouride. Né à Mbacké-Baol, 
        il consacra sa vie à la prière, au travail et à l'éducation spirituelle.
      </p>
      <p style={{ lineHeight: '2', fontSize: '1.1rem', opacity: 0.9, marginBottom: '1.5rem' }}>
        Face au colonialisme français, il fut exilé deux fois — au Gabon (1895-1902) et en Mauritanie (1903-1907) — 
        mais sa résistance spirituelle resta inébranlable. Il fonda la ville sainte de <strong style={{ color: 'var(--gold)' }}>Touba</strong>, 
        qui est aujourd'hui le cœur du Mouridisme à travers le monde.
      </p>
      <blockquote style={{
        borderLeft: '3px solid var(--gold)',
        paddingLeft: '1.5rem',
        margin: '2rem 0',
        fontFamily: 'Amiri, serif',
        fontSize: '1.3rem',
        color: 'var(--gold-light)',
        fontStyle: 'italic'
      }}>
        "Ma demeure est dans le cœur de celui qui m'aime, et mon amour est dans le cœur de celui qui aime Allah."
      </blockquote>
    </div>
  ),
  'historique': (
    <div>
      <h2 style={{ color: 'var(--gold)', fontFamily: 'Amiri, serif', fontSize: '2.8rem', marginBottom: '1.5rem' }}>
        Touba la Sainte & La Grande Mosquée
      </h2>
      <p style={{ lineHeight: '2', fontSize: '1.1rem', opacity: 0.9, marginBottom: '1.5rem' }}>
        Fondée en 1887 par Serigne Touba, la ville de <strong style={{ color: 'var(--gold)' }}>Touba</strong> est 
        devenue la capitale spirituelle du Sénégal et l'un des hauts lieux de l'Islam en Afrique occidentale. 
        Son nom signifie "bonheur" ou "béatitude" en arabe.
      </p>
      <p style={{ lineHeight: '2', fontSize: '1.1rem', opacity: 0.9, marginBottom: '1.5rem' }}>
        La <strong style={{ color: 'var(--gold)' }}>Grande Mosquée de Touba</strong>, dont la construction 
        commença en 1926, est la plus grande mosquée du Sénégal. Son minaret central, nommé <em>Lamp Fall</em>, 
        s'élève à 87 mètres et est visible à des kilomètres à la ronde.
      </p>
      <p style={{ lineHeight: '2', fontSize: '1.1rem', opacity: 0.9 }}>
        Chaque année, lors du <strong style={{ color: 'var(--gold)' }}>Grand Magal</strong>, des millions de pèlerins 
        affluent vers Touba pour commémorer le départ en exil de Serigne Touba, transformant cette ville 
        en un immense rassemblement spirituel et culturel.
      </p>
    </div>
  ),
  'khalifs': (
    <div>
      <h2 style={{ color: 'var(--gold)', fontFamily: 'Amiri, serif', fontSize: '2.8rem', marginBottom: '2rem' }}>
        Les Khalifs de Serigne Touba
      </h2>
      {[
        { name: 'Serigne Mouhamadou Moustapha Mbacké', periode: '1927 – 1945', role: '1er Khalife Général' },
        { name: 'Serigne Falilou Mbacké', periode: '1945 – 1968', role: '2ème Khalife Général' },
        { name: 'Serigne Abdoul Lahat Mbacké', periode: '1968 – 1989', role: '3ème Khalife Général' },
        { name: 'Serigne Abdoul Ahad Mbacké', periode: '1989 – 1997', role: '4ème Khalife Général' },
        { name: 'Serigne Saliou Mbacké', periode: '1997 – 2007', role: '5ème Khalife Général — Guide de Cheikh Serigne Béthio' },
        { name: 'Serigne Cheikh Sidy Mokhtar Mbacké', periode: '2007 – 2018', role: '6ème Khalife Général' },
        { name: 'Serigne Mountakha Mbacké', periode: '2018 – présent', role: '7ème Khalife Général' },
      ].map((k, i) => (
        <div key={i} className="glass-panel" style={{
          padding: '1.2rem 1.5rem',
          borderRadius: '12px',
          marginBottom: '1rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '1rem',
          flexWrap: 'wrap'
        }}>
          <div>
            <div style={{ color: 'var(--gold)', fontFamily: 'Amiri, serif', fontSize: '1.3rem' }}>{k.name}</div>
            <div style={{ opacity: 0.7, fontSize: '0.9rem', marginTop: '4px' }}>{k.role}</div>
          </div>
          <div style={{
            background: 'rgba(201,168,76,0.15)',
            border: '1px solid var(--gold)',
            borderRadius: '20px',
            padding: '4px 12px',
            fontSize: '0.85rem',
            color: 'var(--gold)',
            whiteSpace: 'nowrap'
          }}>{k.periode}</div>
        </div>
      ))}
    </div>
  ),
  'relations': (
    <div>
      <h2 style={{ color: 'var(--gold)', fontFamily: 'Amiri, serif', fontSize: '2.8rem', marginBottom: '1.5rem' }}>
        Cheikh Serigne Béthio & les Héritiers de Serigne Touba
      </h2>
      <p style={{ lineHeight: '2', fontSize: '1.1rem', opacity: 0.9, marginBottom: '1.5rem' }}>
        Le lien qui unit <strong style={{ color: 'var(--gold)' }}>Cheikh Serigne Béthio Thioune</strong> à la 
        famille de Serigne Touba est d'une profondeur et d'une sincérité remarquables. 
        Ce lien s'est noué dès son allégeance à <strong style={{ color: 'var(--gold)' }}>Serigne Saliou Mbacké</strong>, 
        5ème Khalife Général des Mourides.
      </p>
      <div className="glass-panel" style={{ padding: '2rem', borderRadius: '15px', margin: '2rem 0', borderLeft: '4px solid var(--gold)' }}>
        <p style={{ fontFamily: 'Amiri, serif', fontSize: '1.4rem', color: 'var(--gold-light)', marginBottom: '0.8rem' }}>
          Paroles de Serigne Saliou (11 janvier 1983, Daaray Njàppandal)
        </p>
        <blockquote style={{ fontStyle: 'italic', lineHeight: '1.8', opacity: 0.9 }}>
          <em>« Bés ni tey képp ku bëgg lu ma neex, tay jëfe ndigal, bumu sàlawlooti sa turam wi... 
          Bumu ko waxati BEECO, na koy woowee SËRIÑ BEECO. »</em>
        </blockquote>
        <p style={{ marginTop: '1rem', fontSize: '0.9rem', opacity: 0.7, fontStyle: 'italic' }}>
          « À partir d'aujourd'hui, quiconque voulait me plaire... celui qui l'appelait simplement "Béthio", 
          qu'il l'appelle désormais SERIGNE BÉTHIO. »
        </p>
      </div>
      <p style={{ lineHeight: '2', fontSize: '1.1rem', opacity: 0.9 }}>
        Ce jour-là — <strong style={{ color: 'var(--gold)' }}>Mardi 11 janvier 1983</strong> — marqua 
        la première consécration officielle de Cheikh Serigne Béthio. Le 17 Avril 1987, 
        Serigne Saliou lui conféra le titre suprême de <strong style={{ color: 'var(--gold)' }}>Cheikh</strong>.
      </p>
    </div>
  ),
  'khassaides': (
    <div>
      <h2 style={{ color: 'var(--gold)', fontFamily: 'Amiri, serif', fontSize: '2.8rem', marginBottom: '1.5rem' }}>
        Les Khassaïdes
      </h2>
      <p style={{ lineHeight: '2', fontSize: '1.1rem', opacity: 0.9, marginBottom: '2rem' }}>
        Les Khassaïdes sont des poèmes mystiques en arabe composés par Serigne Touba et ses successeurs. 
        Ils constituent le pilier de la spiritualité Mouride. Cheikh Serigne Béthio les a introduits 
        au cœur de la voie du Thiant comme un chemin de purification et d'élévation.
      </p>
      {[
        { titre: 'Khassida Sass Wi', auteur: 'Cheikh Serigne Béthio Thioune', desc: 'Pilier de la voie du Thiant' },
        { titre: 'Rumna', auteur: 'Cheikh Serigne Béthio Thioune', desc: 'Poème d\'invocation et de grâce' },
        { titre: 'Burdatoul Mouchtaq', auteur: 'Serigne Touba (Cheikh Ahmadou Bamba)', desc: 'Ode à l\'Envoyé' },
        { titre: 'Jawharoul Kamâl', auteur: 'Serigne Touba (Cheikh Ahmadou Bamba)', desc: 'La Perle de la Perfection' },
      ].map((k, i) => (
        <div key={i} className="glass-panel" style={{
          padding: '1.5rem',
          borderRadius: '12px',
          marginBottom: '1rem',
          cursor: 'pointer',
          transition: 'all 0.3s',
          display: 'flex',
          alignItems: 'center',
          gap: '1.5rem'
        }}
        onMouseOver={e => (e.currentTarget.style.transform = 'translateX(8px)')}
        onMouseOut={e => (e.currentTarget.style.transform = 'translateX(0)')}>
          <div style={{
            width: '50px', height: '50px', borderRadius: '50%',
            background: 'rgba(201,168,76,0.2)', display: 'flex',
            alignItems: 'center', justifyContent: 'center', flexShrink: 0
          }}>
            <Music size={22} color="var(--gold)" />
          </div>
          <div>
            <div style={{ color: 'var(--gold)', fontFamily: 'Amiri, serif', fontSize: '1.3rem' }}>{k.titre}</div>
            <div style={{ opacity: 0.7, fontSize: '0.9rem' }}>{k.auteur}</div>
            <div style={{ opacity: 0.5, fontSize: '0.85rem', marginTop: '2px' }}>{k.desc}</div>
          </div>
        </div>
      ))}
    </div>
  )
};

const Mouridisme: React.FC = () => {
  const [active, setActive] = useState('serigne-touba');

  return (
    <div style={{ display: 'flex', minHeight: '80vh', padding: '0 3%', gap: '2rem', maxWidth: '1400px', margin: '0 auto' }}>
      {/* Sidebar */}
      <aside style={{ width: '260px', flexShrink: 0, paddingTop: '1rem' }}>
        <div className="glass-panel" style={{ borderRadius: '16px', overflow: 'hidden', position: 'sticky', top: '20px' }}>
          <div style={{ padding: '1.2rem 1.5rem', borderBottom: '1px solid rgba(201,168,76,0.2)', color: 'var(--gold)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '2px' }}>
            Mouridisme
          </div>
          {sections.map(s => (
            <button key={s.id} onClick={() => setActive(s.id)} style={{
              display: 'flex', alignItems: 'center', gap: '10px',
              width: '100%', padding: '14px 20px', border: 'none', cursor: 'pointer',
              background: active === s.id ? 'rgba(201,168,76,0.15)' : 'transparent',
              color: active === s.id ? 'var(--gold)' : 'var(--cream)',
              borderLeft: active === s.id ? '3px solid var(--gold)' : '3px solid transparent',
              textAlign: 'left', fontSize: '0.95rem',
              transition: 'all 0.2s'
            }}>
              {s.icon}
              {s.label}
            </button>
          ))}
        </div>
      </aside>

      {/* Content */}
      <main style={{ flex: 1, padding: '1rem 0', minWidth: 0 }}>
        {content[active]}
      </main>
    </div>
  );
};

export default Mouridisme;
