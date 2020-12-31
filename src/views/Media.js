import React from 'react';
import GenericSection from '../components/sections/AltaMedia/GenericSection';
import FeaturesTiles from '../components/sections/AltaMedia/FeaturesTiles';
import FeaturesSplit from '../components/sections/AltaMedia/FeaturesSplit';
import Hero from "../components/sections/AltaMedia/Hero";
// import Testimonial from "../components/sections/AltaMedia/Testimonial";
import CtaContactMedia from '../components/sections/CtaContactMedia';
import Price from '../components/sections/AltaMedia/PricingSocial';

class Media extends React.Component {
    render() {


        return (
            <React.Fragment>
                <Hero/>
                <GenericSection>
                    <div className="hero-content">
                        <h1 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
                            Alta <span className="text-color-primary">Media</span>
                        </h1>
                    </div>
                </GenericSection>
                <FeaturesTiles/>
                <FeaturesSplit/>

                <h1> Pricing </h1>
                <Price/>

                {/*<Testimonial/>*/}

                <CtaContactMedia topDivider split/>
            </React.Fragment>
        );
    }
}

export default Media;