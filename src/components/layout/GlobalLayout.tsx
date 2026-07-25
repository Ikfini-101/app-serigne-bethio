import React from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import ArchHeader from './ArchHeader';
import BottomMenu from './BottomMenu';
import RightMenu from './RightMenu';

const pageVariants = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as [number,number,number,number] } },
  exit:    { opacity: 0, y: -12, transition: { duration: 0.3 } },
};

const GlobalLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();

  return (
    <div style={{ position: 'relative', minHeight: '100vh', overflow: 'hidden' }}>

      {/* ── Blobs de fond animés ── */}
      <div className="blob blob-1" />
      <div className="blob blob-2" />
      <div className="blob blob-3" />

      {/* ── Arche / Header carrousel ── */}
      <ArchHeader />

      {/* ── Contenu avec transition de page ── */}
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          variants={pageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          style={{ position: 'relative', zIndex: 10, paddingBottom: '120px' }}
        >
          {children}
        </motion.main>
      </AnimatePresence>

      {/* ── Navigation ── */}
      <RightMenu />
      <BottomMenu />
    </div>
  );
};

export default GlobalLayout;
