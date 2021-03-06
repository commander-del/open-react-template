import React from 'react';
import Header from '../components/layoutLinks/Header';
import Footer from '../components/layoutLinks/Footer';

const LayoutLinks = ({ children }) => (
  <>
    <Header navPosition="right" className="reveal-from-bottom" />
    <main className="site-content">
      {children}
    </main>
    <Footer />
  </>
);

export default LayoutLinks;