import React from 'react';
import ArchHeader from './ArchHeader';
import BottomMenu from './BottomMenu';
import RightMenu from './RightMenu';

interface LayoutProps {
  children: React.ReactNode;
}

const GlobalLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div style={{ position: 'relative', width: '100%', minHeight: '100vh', overflow: 'hidden' }}>
      <ArchHeader />
      
      <main style={{ position: 'relative', zIndex: 10, paddingTop: '40vh', paddingBottom: '100px', minHeight: '100vh' }}>
        {children}
      </main>

      <RightMenu />
      <BottomMenu />
    </div>
  );
};

export default GlobalLayout;
