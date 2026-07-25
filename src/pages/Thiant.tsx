import React, { useState, useRef } from 'react';
import { Play, Pause, Volume2, Mic } from 'lucide-react';

/* ---------- Audio Player mini ---------- */
const AudioPlayer: React.FC<{ titre: string; fichier: string }> = ({ titre }) => {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const toggle = () => {
    if (!audioRef.current) return;
    if (playing) { audioRef.current.pause(); } else { audioRef.current.play(); }
    setPlaying(!playing);
  };

  return (
    <div className="glass-panel" style={{
      display: 'flex', alignItems: 'center', gap: '1rem',
      padding: '1rem 1.5rem', borderRadius: '50px', marginBottom: '0.8rem'
    }}>
      <button onClick={toggle} style={{
        width: '42px', height: '42px', borderRadius: '50%',
        background: 'var(--gold)', border: 'none', cursor: 'pointer',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        flexShrink: 0, transition: 'transform 0.2s'
      }} onMouseOver={e => e.currentTarget.style.transform = 'scale(1.1)'}
         onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}>
        {playing ? <Pause size={18} color="#0D2117" /> : <Play size={18} color="#0D2117" />}
      </button>
      <div style={{ flex: 1 }}>
        <div style={{ color: 'var(--cream)', fontSize: '0.95rem', fontWeight: 500 }}>{titre}</div>
        <div style={{ height: '3px', background: 'rgba(255,255,255,0.1)', borderRadius: '2px', marginTop: '6px' }}>
          <div style={{ height: '100%', width: playing ? '40%' : '0%', background: 'var(--gold)', borderRadius: '2px', transition: 'width 1s' }} />
        </div>
      </div>
      <Volume2 size={18} color="var(--gold)" style={{ opacity: 0.7 }} />
    </div>
  );
};

/* ---------- Page Thiant ---------- */
const subsections = ['Genèse & Essence', 'La Voie du Thiant', 'Médiathèque', 'Podcast'];

const Thiant: React.FC = () => {
  const [active, setActive] = useState('Genèse & Essence');

  return (
    <div style={{ padding: '0 5%', maxWidth: '1100px', margin: '0 auto' }}>
      {/* Tabs */}
      <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '3rem', flexWrap: 'wrap' }}>
        {subsections.map(s => (
          <button key={s} onClick={() => setActive(s)} style={{
            padding: '10px 22px', borderRadius: '30px', border: '1px solid',
            borderColor: active === s ? 'var(--gold)' : 'rgba(201,168,76,0.3)',
            background: active === s ? 'rgba(201,168,76,0.15)' : 'transparent',
            color: active === s ? 'var(--gold)' : 'var(--cream)',
            cursor: 'pointer', fontSize: '0.95rem', transition: 'all 0.2s'
          }}>{s}</button>
        ))}
      </div>

      {/* Genèse & Essence */}
      {active === 'Genèse & Essence' && (
        <div>
          <h2 style={{ color: 'var(--gold)', fontFamily: 'Amiri, serif', fontSize: '2.8rem', marginBottom: '1.5rem' }}>
            Genèse & Essence du Thiant
          </h2>
          <p style={{ lineHeight: '2', fontSize: '1.1rem', opacity: 0.9, marginBottom: '1.5rem' }}>
            Le <strong style={{ color: 'var(--gold)' }}>Thiant</strong> — mot Wolof signifiant "réunion", "assemblée" 
            ou "rassemblement" — est bien plus qu'un simple événement collectif. Il est l'expression vivante 
            d'une voie spirituelle inaugurée et animée par <strong style={{ color: 'var(--gold)' }}>Cheikh Serigne Béthio Thioune</strong>.
          </p>
          <p style={{ lineHeight: '2', fontSize: '1.1rem', opacity: 0.9, marginBottom: '1.5rem' }}>
            Le Thiant est né de la vision du Cheikh de rassembler les Mourides autour du travail 
            (<em>Khelcom</em>), de la récitation des Khassaïdes et de l'amour du Prophète Muhammad ﷺ. 
            C'est un cadre de formation, de discipline et d'élévation spirituelle.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem', marginTop: '2rem' }}>
            {[
              { titre: 'Travail (Khelcom)', desc: 'Le travail manuel comme acte d\'adoration, héritage de Serigne Touba.' },
              { titre: 'Khassaïdes', desc: 'Récitation collective des poèmes mystiques comme chemin de purification.' },
              { titre: 'Fraternité', desc: 'L\'unité des Thiantacônes au-delà de toutes frontières sociales.' },
              { titre: 'Ndigueul', desc: 'L\'obéissance à la recommandation du Cheikh comme acte de foi.' },
            ].map((p, i) => (
              <div key={i} className="glass-panel" style={{ padding: '1.5rem', borderRadius: '12px' }}>
                <h4 style={{ color: 'var(--gold)', marginBottom: '0.8rem', fontFamily: 'Amiri, serif', fontSize: '1.2rem' }}>{p.titre}</h4>
                <p style={{ opacity: 0.8, lineHeight: '1.7', fontSize: '0.95rem' }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* La Voie du Thiant */}
      {active === 'La Voie du Thiant' && (
        <div>
          <h2 style={{ color: 'var(--gold)', fontFamily: 'Amiri, serif', fontSize: '2.8rem', marginBottom: '1.5rem' }}>
            La Voie du Thiant
          </h2>
          <div className="glass-panel" style={{ padding: '2rem', borderRadius: '15px', borderLeft: '4px solid var(--gold)', marginBottom: '2rem' }}>
            <p style={{ fontFamily: 'Amiri, serif', fontSize: '1.4rem', color: 'var(--gold-light)', marginBottom: '0.8rem' }}>
              Paroles du Khalife (3 Novembre 2003)
            </p>
            <blockquote style={{ fontStyle: 'italic', lineHeight: '1.8', opacity: 0.9, marginBottom: '0.8rem' }}>
              <em>« Na nga xam tay ne, yoon wii di yoonou Murit, ku la si ëpp daraja amatu ci »</em>
            </blockquote>
            <p style={{ fontSize: '0.9rem', opacity: 0.7 }}>
              « Sache qu'aujourd'hui, cette voie est la voie du Mouride — personne qui te dépasse dans 
              cette voie n'a de rang au-dessus de toi. » — Serigne Saliou Mbacké à Cheikh Serigne Béthio
            </p>
          </div>
          <p style={{ lineHeight: '2', fontSize: '1.1rem', opacity: 0.9, marginBottom: '1.5rem' }}>
            La voie du Thiant repose sur trois piliers fondamentaux hérités du Mouridisme : 
            <strong style={{ color: 'var(--gold)' }}> la foi absolue (Imane)</strong>, 
            <strong style={{ color: 'var(--gold)' }}> l'obéissance au guide (Ndigueul)</strong>, et 
            <strong style={{ color: 'var(--gold)' }}> le travail collectif (Khelcom)</strong>.
          </p>
          <p style={{ lineHeight: '2', fontSize: '1.1rem', opacity: 0.9 }}>
            Les Thiantacônes — disciples de Cheikh Serigne Béthio — forment une communauté mondiale 
            unie par ces valeurs, portant haut le flambeau du Mouridisme à travers le monde.
          </p>
        </div>
      )}

      {/* Médiathèque */}
      {active === 'Médiathèque' && (
        <div>
          <h2 style={{ color: 'var(--gold)', fontFamily: 'Amiri, serif', fontSize: '2.8rem', marginBottom: '2rem' }}>
            Médiathèque — Audio & Vidéo
          </h2>
          <h3 style={{ color: 'var(--gold-light)', marginBottom: '1rem', fontSize: '1.2rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
            Khassaïdes du Cheikh
          </h3>
          <AudioPlayer titre="Laylatul Xadar 1990 — Cheikh Serigne Béthio" fichier="/assets/audio/laylatul_xadar.mp3" />
          <AudioPlayer titre="Sass Wi — La récitation du Cheikh" fichier="/assets/audio/sass_wi.mp3" />
          <AudioPlayer titre="Wahtane — Réponse au Cheikh" fichier="/assets/audio/wahtane.mp3" />

          <h3 style={{ color: 'var(--gold-light)', margin: '2rem 0 1rem', fontSize: '1.2rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
            Vidéos — Archives
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            <div className="glass-panel" style={{ borderRadius: '12px', overflow: 'hidden', cursor: 'pointer' }}>
              <div style={{ height: '160px', background: 'linear-gradient(135deg, #1A3A2A, #0D2117)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'rgba(201,168,76,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid var(--gold)' }}>
                  <Play size={24} color="var(--gold)" />
                </div>
              </div>
              <div style={{ padding: '1rem' }}>
                <p style={{ color: 'var(--gold)', fontFamily: 'Amiri, serif' }}>Waxtan sur Baytil Makhdiss</p>
                <p style={{ opacity: 0.6, fontSize: '0.85rem', marginTop: '4px' }}>Cheikh Serigne Béthio Thioune</p>
              </div>
            </div>
            <div className="glass-panel" style={{ borderRadius: '12px', overflow: 'hidden', cursor: 'pointer' }}>
              <div style={{ height: '160px', background: 'linear-gradient(135deg, #2D6A4F, #1A3A2A)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'rgba(201,168,76,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid var(--gold)' }}>
                  <Play size={24} color="var(--gold)" />
                </div>
              </div>
              <div style={{ padding: '1rem' }}>
                <p style={{ color: 'var(--gold)', fontFamily: 'Amiri, serif' }}>Le Chemin de la Himma</p>
                <p style={{ opacity: 0.6, fontSize: '0.85rem', marginTop: '4px' }}>Publication Officielle</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Podcast */}
      {active === 'Podcast' && (
        <div>
          <h2 style={{ color: 'var(--gold)', fontFamily: 'Amiri, serif', fontSize: '2.8rem', marginBottom: '2rem' }}>
            Podcast Thiant
          </h2>
          {[
            { ep: 'Épisode 01', titre: 'Qui est Cheikh Serigne Béthio Thioune ?', duree: '32 min', date: 'Saison 2024' },
            { ep: 'Épisode 02', titre: 'La nuit de Laylatul Xadar — 1990', duree: '45 min', date: 'Saison 2024' },
            { ep: 'Épisode 03', titre: 'Le Khelcom — Travail et Spiritualité', duree: '28 min', date: 'Saison 2024' },
            { ep: 'Épisode 04', titre: 'Thiant hebdomadaire — La voie chaque Samedi', duree: '38 min', date: 'Saison 2024' },
            { ep: 'Épisode 05', titre: 'Les relations avec les Khalifs', duree: '51 min', date: 'Saison 2024' },
            { ep: 'Épisode 06', titre: 'L\'héritage des Thiantacônes', duree: '42 min', date: 'Saison 2024' },
          ].map((ep, i) => (
            <div key={i} className="glass-panel" style={{
              display: 'flex', alignItems: 'center', gap: '1.5rem',
              padding: '1.2rem 1.5rem', borderRadius: '12px', marginBottom: '0.8rem',
              cursor: 'pointer', transition: 'all 0.2s'
            }}
            onMouseOver={e => e.currentTarget.style.transform = 'translateX(6px)'}
            onMouseOut={e => e.currentTarget.style.transform = 'translateX(0)'}>
              <div style={{ width: '50px', height: '50px', borderRadius: '10px', background: 'rgba(201,168,76,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Mic size={22} color="var(--gold)" />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: '0.8rem', color: 'var(--gold)', opacity: 0.7, marginBottom: '3px' }}>{ep.ep} · {ep.date}</div>
                <div style={{ color: 'var(--cream)', fontFamily: 'Amiri, serif', fontSize: '1.1rem' }}>{ep.titre}</div>
              </div>
              <div style={{ color: 'var(--gold)', opacity: 0.6, fontSize: '0.85rem', flexShrink: 0 }}>{ep.duree}</div>
              <Play size={18} color="var(--gold)" style={{ flexShrink: 0 }} />
            </div>
          ))}
        </div>
      )}

      <div style={{ height: '4rem' }} />
    </div>
  );
};

export default Thiant;
