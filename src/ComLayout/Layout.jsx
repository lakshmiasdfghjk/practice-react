
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import LeftNavigation from './LeftNavigation';
import RightNavigation from './RightNavigation';

function Layout() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <div style={{ display: 'flex', flex: 1 }}>
        <LeftNavigation />
        <main style={{ flex: 1, padding: '20px', margin: 'Auto'}}>Body</main>
        <RightNavigation />
      </div>
      <Footer />
    </div>
  );
}

export default Layout;


