import React from 'react';
import Header from '../components/layoutProperty/Header';
import Footer from '../components/layoutProperty/Footer';

const LayoutProperty = ({ children }) => (
  <>
    <Header navPosition="right" className="reveal-from-bottom" />
    <main className="site-content">
      {children}
    </main>
    <Footer />
  </>
);

export default LayoutProperty;