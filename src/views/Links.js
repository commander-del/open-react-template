import React from 'react';
import GenericSectionLinks from '../components/sections/AltaLinks/GenericSection';
import Hero from '../components/sections/AltaLinks/Hero';
import FeaturesTiles from '../components/sections/AltaLinks/FeaturesTiles';
import FeaturesSplit from '../components/sections/AltaLinks/FeaturesSplit';
import Testimonial from '../components/sections/AltaLinks/Testimonial';

class Links extends React.Component {
    render() {


        return (
            <React.Fragment>
                <Hero/>
                <FeaturesSplit/>
                <FeaturesTiles/>
            </React.Fragment>
        );
    }
}

export default Links;