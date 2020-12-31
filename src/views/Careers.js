import React from 'react';
// import sections
import CareerForm from '../components/sections/AltaCareers/CareerForm';
import Hero from '../components/sections/AltaCareers/Hero';


class Careers extends React.Component  {
    render () {

        return (
            <React.Fragment>
                <CareerForm>
                    <Hero className="illustration-section-01" />
                </CareerForm>
            </React.Fragment>
        );
    }
}

export default Careers;