import React from 'react';
// import GenericSection from '../components/sections/AltaCuisine/GenericSection';
import FeaturesTiles from '../components/sections/AltaCuisine/FeaturesTiles';
import FeaturesSplit from '../components/sections/AltaCuisine/FeaturesSplit';
import Testimonial from '../components/sections/AltaCuisine/Testimonial';
import Cta from '../components/sections/Cta';
import Hero from "../components/sections/AltaCuisine/Hero";


class Cuisine extends React.Component {
    render() {

        return (
            <React.Fragment>
                <Hero className="illustration-section-01" />
                <FeaturesTiles/>
                <FeaturesSplit/>
                <Testimonial/>
                <Cta topDivider split />
            </React.Fragment>
        );
    }
}

export default Cuisine;