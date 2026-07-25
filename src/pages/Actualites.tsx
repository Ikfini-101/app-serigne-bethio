import React, { useState } from 'react';
import { Bell, Wheat, Coffee, ChevronRight, Tag } from 'lucide-react';

type Article = {
  id: number;
  categorie: 'ndigueul' | 'khelcom' | 'voie-mouride' | 'communaute';
  titre: string;
  date: string;
  extrait: string;
  complet: string;
};

const articles: Article[] = [
  {
    id: 1,
    categorie: 'ndigueul',
    titre: 'Ndigueul du Khalif Général : Renforcer l\'unité des Thiantacônes',
    date: '20 Juillet 2026',
    extrait: 'Le Khalif Général a rappelé l\'importance de la solidarité entre Thiantacônes et du respect du Ndigueul en toutes circonstances...',
    complet: `Le Khalif Général a rappelé l'importance de la solidarité entre Thiantacônes et du respect du Ndigueul en toutes circonstances. Dans ce message adressé aux fidèles, il souligne que l'unité de la communauté est la condition première de l'élévation spirituelle. Il invite chaque Thiantacône à redoubler d'ardeur dans la pratique des Khassaïdes et dans le Khelcom.`,
  },
  {
    id: 2,
    categorie: 'khelcom',
    titre: 'Khelcom 2026 — Les travaux champêtres de cette saison',
    date: '15 Juillet 2026',
    extrait: 'Les Thiantacônes ont participé en nombre aux travaux champêtres annuels, incarnant ainsi la philosophie du travail prêchée par Cheikh Serigne Béthio...',
    complet: `Les Thiantacônes ont participé en nombre aux travaux champêtres annuels, incarnant ainsi la philosophie du travail prêchée par Cheikh Serigne Béthio. Des milliers de disciples ont pris part aux travaux agricoles dans différentes régions du Sénégal, suivant la tradition du "Khelcom" — le travail collectif au service de la communauté et de la voie Mouride.`,
  },
  {
    id: 3,
    categorie: 'khelcom',
    titre: 'Café-Sucre : Le geste de bienvenue du Cheikh perpétué',
    date: '10 Juillet 2026',
    extrait: 'Le traditionnel "Café-Sucre" de bienvenue — symbole de générosité inauguré par Cheikh Serigne Béthio — continue de marquer chaque Thiant...',
    complet: `Le traditionnel "Café-Sucre" de bienvenue — symbole de générosité inauguré par Cheikh Serigne Béthio — continue de marquer chaque Thiant. Ce geste, simple et profond, consistait à offrir du café avec du sucre à tous les visiteurs et disciples, incarnant l'hospitalité et l'amour du Cheikh pour ses fidèles. Cette tradition est aujourd'hui perpétuée dans chaque rassemblement Thiantacône comme un acte de mémoire et de fidélité.`,
  },
  {
    id: 4,
    categorie: 'voie-mouride',
    titre: 'La voie Mouride à l\'international : Les Thiantacônes du monde entier',
    date: '5 Juillet 2026',
    extrait: 'Des communautés Thiantacônes actives sur tous les continents témoignent du rayonnement universel de l\'enseignement de Cheikh Serigne Béthio...',
    complet: `Des communautés Thiantacônes actives sur tous les continents témoignent du rayonnement universel de l'enseignement de Cheikh Serigne Béthio. De Paris à New York, de Madrid à Tokyo, les disciples maintiennent vivante la flamme du Thiant à travers des rassemblements hebdomadaires, la récitation des Khassaïdes et des actions de solidarité. Ce réseau mondial est le testament vivant du Cheikh.`,
  },
  {
    id: 5,
    categorie: 'communaute',
    titre: 'Le Thiant du Samedi : Rapport de la semaine dernière',
    date: '22 Juillet 2026',
    extrait: 'Plus de 50 groupes Thiantacônes ont célébré le Thiant hebdomadaire ce samedi, en France, au Sénégal, aux États-Unis et en Italie...',
    complet: `Plus de 50 groupes Thiantacônes ont célébré le Thiant hebdomadaire ce samedi, en France, au Sénégal, aux États-Unis et en Italie. Les participants ont récité les Khassaïdes du Cheikh et écouté des Ndigueuls. Partout, la même ferveur, la même unité, le même amour pour Cheikh Serigne Béthio Thioune.`,
  },
];

const categorieLabels: Record<string, { label: string; couleur: string; icon: React.ReactNode }> = {
  'ndigueul': { label: 'Ndigueul', couleur: '#C9A84C', icon: <Bell size={14} /> },
  'khelcom': { label: 'Khelcom', couleur: '#2D6A4F', icon: <Wheat size={14} /> },
  'voie-mouride': { label: 'Voie Mouride', couleur: '#E5CD7A', icon: <Tag size={14} /> },
  'communaute': { label: 'Communauté', couleur: '#4A9A7A', icon: <Coffee size={14} /> },
};

const Actualites: React.FC = () => {
  const [filtre, setFiltre] = useState<string>('tous');
  const [ouvert, setOuvert] = useState<number | null>(null);

  const filtres = ['tous', 'ndigueul', 'khelcom', 'voie-mouride', 'communaute'];
  const affichés = filtre === 'tous' ? articles : articles.filter(a => a.categorie === filtre);

  return (
    <div style={{ padding: '0 5%', maxWidth: '1000px', margin: '0 auto' }}>
      <h1 style={{ color: 'var(--gold)', fontFamily: 'Amiri, serif', fontSize: '3rem', marginBottom: '0.5rem' }}>
        Actualités
      </h1>
      <p style={{ opacity: 0.7, marginBottom: '2rem' }}>
        Ndigueuls reçus, Khelcom, vie de la communauté Thiantacône
      </p>

      {/* Filtres */}
      <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '2.5rem', flexWrap: 'wrap' }}>
        {filtres.map(f => (
          <button key={f} onClick={() => setFiltre(f)} style={{
            padding: '8px 18px', borderRadius: '20px', border: '1px solid',
            borderColor: filtre === f ? 'var(--gold)' : 'rgba(201,168,76,0.3)',
            background: filtre === f ? 'rgba(201,168,76,0.15)' : 'transparent',
            color: filtre === f ? 'var(--gold)' : 'var(--cream)',
            cursor: 'pointer', fontSize: '0.85rem', textTransform: 'capitalize',
            transition: 'all 0.2s'
          }}>
            {f === 'tous' ? 'Toutes' : categorieLabels[f]?.label}
          </button>
        ))}
      </div>

      {/* Articles */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
        {affichés.map(art => {
          const cat = categorieLabels[art.categorie];
          const isOpen = ouvert === art.id;
          return (
            <div key={art.id} className="glass-panel" style={{
              borderRadius: '16px', overflow: 'hidden',
              borderLeft: `3px solid ${cat.couleur}`,
              transition: 'all 0.3s'
            }}>
              <div style={{ padding: '1.5rem', cursor: 'pointer' }}
                onClick={() => setOuvert(isOpen ? null : art.id)}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem', flexWrap: 'wrap' }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                      <span style={{
                        display: 'inline-flex', alignItems: 'center', gap: '4px',
                        background: `${cat.couleur}22`, color: cat.couleur,
                        padding: '2px 10px', borderRadius: '12px', fontSize: '0.78rem', fontWeight: 500
                      }}>
                        {cat.icon}{cat.label}
                      </span>
                      <span style={{ opacity: 0.5, fontSize: '0.8rem' }}>{art.date}</span>
                    </div>
                    <h3 style={{ color: 'var(--cream)', fontFamily: 'Amiri, serif', fontSize: '1.3rem', lineHeight: '1.4', marginBottom: isOpen ? '0' : '0.6rem' }}>
                      {art.titre}
                    </h3>
                    {!isOpen && <p style={{ opacity: 0.7, fontSize: '0.9rem', lineHeight: '1.6' }}>{art.extrait}</p>}
                  </div>
                  <ChevronRight size={18} color="var(--gold)" style={{
                    transform: isOpen ? 'rotate(90deg)' : 'none',
                    transition: 'transform 0.2s', flexShrink: 0, marginTop: '4px'
                  }} />
                </div>
              </div>
              {isOpen && (
                <div style={{ padding: '0 1.5rem 1.5rem', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                  <p style={{ lineHeight: '2', fontSize: '1rem', opacity: 0.9, paddingTop: '1rem' }}>
                    {art.complet}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
      <div style={{ height: '6rem' }} />
    </div>
  );
};

export default Actualites;
