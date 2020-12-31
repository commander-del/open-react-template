import React from 'react';
import Hero from '../components/sections/AltaLinks/Hero';
import FeaturesTiles from '../components/sections/AltaLinks/FeaturesTiles';
import FeaturesSplit from '../components/sections/AltaLinks/FeaturesSplit';

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