import React from 'react';
import Header from '../components/layoutConstruction/Header';
import Footer from '../components/layoutConstruction/Footer';

const LayoutConstruction = ({ children }) => (
  <>
    <Header navPosition="right" className="reveal-from-bottom" />
    <main className="site-content">
      {children}
    </main>
    <Footer />
  </>
);

export default LayoutConstruction;