import React from 'react';
// import GenericSection from '../components/sections/AltaPotentia/GenericSection';
import FeaturesTilesAutobody from '../components/sections/AltaAutobody/FeaturesTilesAutobody';
import FeaturesSplitAutobody from '../components/sections/AltaAutobody/FeaturesSplitAutobody';
import TestimonialAutobody from '../components/sections/AltaAutobody/TestimonialAutobody';
import Cta from '../components/sections/Cta';
import HeroAutobody from "../components/sections/AltaAutobody/HeroAutobody";


class Autobody extends React.Component {
    render() {

        return (
            <React.Fragment>
                <HeroAutobody className="illustration-section-01" />
                <FeaturesTilesAutobody/>
                <FeaturesSplitAutobody/>
                <TestimonialAutobody/>
                <Cta topDivider split />
            </React.Fragment>
        );
    }
}

export default Autobody;