import React from 'react';
import Header from '../components/layoutCuisine/Header';
import Footer from '../components/layoutCuisine/Footer';

const LayoutCuisine = ({ children }) => (
  <>
    <Header navPosition="right" className="reveal-from-bottom" />
    <main className="site-content">
      {children}
    </main>
    <Footer />
  </>
);

export default LayoutCuisine;