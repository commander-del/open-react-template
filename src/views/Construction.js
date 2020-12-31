import React from 'react';
// import HeroConstruction from '../components/sections/AltaConstruction/HeroConstruction';
import FeaturesTilesConstruction from '../components/sections/AltaConstruction/FeaturesTilesConstruction';
import FeaturesSplitConstruction from '../components/sections/AltaConstruction/FeaturesSplitConstruction';
import TestimonialConstruction from '../components/sections/AltaConstruction/TestimonialConstruction';
import GenericSectionConstruction from "../components/sections/AltaConstruction/GenericSectionConstruction";
// import CtaConstruction from '../components/sections/CtaConstruction';

class Construction extends React.Component {
    render() {


        return (
            <React.Fragment>
                {/*<HeroConstruction/>*/}
                <GenericSectionConstruction>
                    <div className="hero-content">
                        <h1 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
                            Alta <span className="text-color-primary">Construction</span>
                        </h1>
                    </div>
                </GenericSectionConstruction>
                <FeaturesSplitConstruction/>
                <FeaturesTilesConstruction/>
                <TestimonialConstruction/>
                {/*<CtaConstruction topDivider split />*/}
            </React.Fragment>
        );
    }
}

export default Construction;