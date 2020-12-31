import React from 'react';
// Import Sections
import Hero from '../components/sections/AltaPotentia/Hero';
import FeaturesTiles from '../components/sections/AltaPotentia/FeaturesTiles';
import FeaturesSplit from '../components/sections/AltaPotentia/FeaturesSplit';
import CtaContact from '../components/sections/CtaContact';


const Home = () => {

  return (
    <>
      <Hero className="illustration-section-01" />
      <FeaturesTiles />
      <FeaturesSplit invertMobile topDivider imageFill className="illustration-section-02" />
      <CtaContact id="Contact"/>

    </>

  );
}

export default Home;