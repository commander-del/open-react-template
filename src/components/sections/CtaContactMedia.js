import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import Container from "../elements/Container";
import Button from "react-bootstrap/cjs/Button";
const propTypes = {
  ...SectionProps.types,
  split: PropTypes.bool
}

const defaultProps = {
  ...SectionProps.defaults,
  split: false
}

const Cta = ({
               className,
               topOuterDivider,
               bottomOuterDivider,
               topDivider,
               bottomDivider,
               hasBgColor,
               invertColor,
               split,
               ...props
             }) => {

  const outerClasses = classNames(
      'cta section center-content-mobile reveal-from-bottom',
      topOuterDivider && 'has-top-divider',
      bottomOuterDivider && 'has-bottom-divider',
      hasBgColor && 'has-bg-color',
      invertColor && 'invert-color',
      className
  );

  const innerClasses = classNames(
      'cta-inner section-inner',
      topDivider && 'has-top-divider',
      bottomDivider && 'has-bottom-divider',
      split && 'cta-split'
  );

    const triggerText = 'Contact Form';
    const onSubmit = (event) => {
        event.preventDefault(event);
        console.log(event.target.name.value);
        console.log(event.target.email.value);
    };

  return (
      <section
          {...props}
          className={outerClasses}
      >
        <div className="container">
          <div
              className={innerClasses}
          >
            <div className="cta-slogan">
              <h3 className="m-0">
               Got questions or ideas for an interesting collaboration? Get in touch with us!
              </h3>
            </div>
            <div className="cta-action">
                <Button variant="primary">
                    <Container triggerText={triggerText} onSubmit={onSubmit}/>
                </Button>
                {/*{'  Or  '}*/}
                {/*    <Button variant='primary' target="_blank" href="https://altapotentia.com/book" >Book A Meeting</Button>*/}
            </div>
          </div>
        </div>
      </section>
  );
}

Cta.propTypes = propTypes;
Cta.defaultProps = defaultProps;

export default Cta;