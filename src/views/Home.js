import React from 'react';
// import sections
import Hero from '../components/sections/AltaPotentia/Hero';
import FeaturesTiles from '../components/sections/AltaPotentia/FeaturesTiles';
import FeaturesSplit from '../components/sections/AltaPotentia/FeaturesSplit';
// import Testimonial from '../components/sections/AltaPotentia/Testimonial';
// import Cta from '../components/sections/Cta';

const Home = () => {

  return (
    <>
      <Hero className="illustration-section-01" />
      <FeaturesTiles />
      <FeaturesSplit invertMobile topDivider imageFill className="illustration-section-02" />
      {/*<TestimonialConstruction topDivider />*/}
      {/*<Cta split />*/}

    </>

  );
}

export default Home;