import React from 'react';
import GenericSection from '../components/sections/AltaPotentia/GenericSection';
// import SectionHeader from '../components/sections/partialsHome/SectionHeader';
import FeaturesTilesMedia from "../components/sections/FeaturesTilesMedia";
import Cta from '../components/sections/Cta';

class Media extends React.Component {
    render() {


        return (
            <React.Fragment>
                <GenericSection>
                    <div className="hero-content">
                        <h1 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
                            Alta <span className="text-color-primary">Media</span>
                        </h1>
                    </div>
                </GenericSection>
                <FeaturesTilesMedia/>
                <Cta topDivider split />
            </React.Fragment>
        );
    }
}

export default Media;