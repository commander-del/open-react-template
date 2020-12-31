import React from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../../utils/SectionProps';
import ButtonGroup from '../../elements/ButtonGroup';
import Button from '../../elements/Button';
import Image from '../../elements/Image';

const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

const HeroAutobody = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {


  const outerClasses = classNames(
    'hero section center-content',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'hero-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container-sm">
        <div className={innerClasses}>
          <div className="hero-content">
            <h1 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
              Alta <span className="text-color-primary">Auto body</span>
            </h1>
            <div className="container-xs">
              <div className="reveal-from-bottom" data-reveal-delay="600">
                <ButtonGroup>
                  <Button tag="a" color="primary" wideMobile href="######">
                    Live Demo
                    </Button>

                </ButtonGroup>
              </div>
            </div>
          </div>
          <div className="hero-figure reveal-from-bottom illustration-element-01" data-reveal-value="20px" data-reveal-delay="800">

              <Image
                className="has-shadow"
                src={require('../../../assets/autobody_dashboard_screenshot.png')}
                alt="HeroConstruction"
                width={896}
                height={504} />
            {/*</a>*/}
          </div>

        </div>
      </div>
    </section>
  );
}

HeroAutobody.propTypes = propTypes;
HeroAutobody.defaultProps = defaultProps;

export default HeroAutobody;