import React from 'react';
import Header from '../components/layoutAutobody/Header';
import Footer from '../components/layoutAutobody/Footer';

const LayoutAutobody = ({ children }) => (
  <>
    <Header navPosition="right" className="reveal-from-bottom" />
    <main className="site-content">
      {children}
    </main>
    <Footer />
  </>
);

export default LayoutAutobody;