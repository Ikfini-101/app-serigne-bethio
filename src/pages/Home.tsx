import React from 'react';

const Home: React.FC = () => {
  return (
    <div style={{ padding: '0 5%', maxWidth: '1200px', margin: '0 auto', color: 'var(--cream)' }}>
      <section style={{ marginTop: '2rem' }}>
        <h2 style={{ color: 'var(--gold)', fontSize: '2.5rem', marginBottom: '1.5rem', borderBottom: '1px solid rgba(201,168,76,0.3)', paddingBottom: '10px' }}>
          Bienvenue
        </h2>
        <p style={{ fontSize: '1.2rem', lineHeight: '1.8', maxWidth: '800px', opacity: 0.9 }}>
          Ce site est dédié à la vie, l'œuvre et l'héritage de Cheikh Serigne Béthio Thioune. 
          Découvrez son parcours exceptionnel, son engagement pour le Mouridisme, et la voie du Thiant.
        </p>
      </section>

      <section style={{ marginTop: '4rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
        <div className="glass-panel" style={{ padding: '2rem', borderRadius: '15px', transition: 'transform 0.3s' }} onMouseOver={e => e.currentTarget.style.transform = 'translateY(-10px)'} onMouseOut={e => e.currentTarget.style.transform = 'translateY(0)'}>
          <h3 style={{ color: 'var(--gold)', fontSize: '1.8rem', marginBottom: '1rem' }}>Mouridisme</h3>
          <p style={{ opacity: 0.8, lineHeight: '1.6' }}>L'histoire de Touba, les Khalifs de Serigne Touba, et les Khassaïdes sacrés.</p>
        </div>
        
        <div className="glass-panel" style={{ padding: '2rem', borderRadius: '15px', transition: 'transform 0.3s' }} onMouseOver={e => e.currentTarget.style.transform = 'translateY(-10px)'} onMouseOut={e => e.currentTarget.style.transform = 'translateY(0)'}>
          <h3 style={{ color: 'var(--gold)', fontSize: '1.8rem', marginBottom: '1rem' }}>Thiant</h3>
          <p style={{ opacity: 0.8, lineHeight: '1.6' }}>La genèse, l'essence et la voie du Thiant. Accédez à la médiathèque audio et vidéo.</p>
        </div>

        <div className="glass-panel" style={{ padding: '2rem', borderRadius: '15px', transition: 'transform 0.3s' }} onMouseOver={e => e.currentTarget.style.transform = 'translateY(-10px)'} onMouseOut={e => e.currentTarget.style.transform = 'translateY(0)'}>
          <h3 style={{ color: 'var(--gold)', fontSize: '1.8rem', marginBottom: '1rem' }}>Khelcom</h3>
          <p style={{ opacity: 0.8, lineHeight: '1.6' }}>Actualités sur les travaux champêtres, les Ndigueuls et la communauté Thiantacône.</p>
        </div>
      </section>
      
      {/* Spacer pour pouvoir scroller et voir le menu réapparaître */}
      <div style={{ height: '50vh' }} />
    </div>
  );
};

export default Home;
