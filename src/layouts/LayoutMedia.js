import React from 'react';
import Header from '../components/layoutMedia/Header';
import Footer from '../components/layoutMedia/Footer';

const LayoutMedia = ({ children }) => (
  <>
    <Header navPosition="right" className="reveal-from-bottom" />
    <main className="site-content">
      {children}
    </main>
    <Footer />
  </>
);

export default LayoutMedia;