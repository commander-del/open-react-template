import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../../utils/SectionProps';
import SectionHeader from '../partialsHome/SectionHeader';
import Image from '../../elements/Image';

const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

const FeaturesSplit = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {

  const outerClasses = classNames(
    'features-split section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-split-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const splitClasses = classNames(
    'split-wrap',
    invertMobile && 'invert-mobile',
    invertDesktop && 'invert-desktop',
    alignTop && 'align-top'
  );

  const sectionHeader = {
    title: 'Tools That Scale and Grow With You',
    // paragraph: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum — semper quis lectus nulla at volutpat diam ut venenatis.'
  };

  return (
    <section
      {...props}
      className={outerClasses}
      id="Products"
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={splitClasses}>

            {/*Customer Database*/}
            <div className="split-item" id="customerdb">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  </div>
                <h3 className="mt-0 mb-12">
                  Customer Database
                  </h3>
                <p className="m-0">
                  Create complete customer profiles, with multiple vehicles, Insurance, Estimates, Work Orders, and Invoices.
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('../../../assets/media.png')}
                  alt="Features split 01"
                  width={528}
                  height={396} />
              </div>
            </div>

            {/*Automated Email Messages*/}
            <div className="split-item" id="automatedreminders">
              <div className="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                </div>
                <h3 className="mt-0 mb-12">
                  Automated Notifications and Reminders
                </h3>
                <p className="m-0">
                  Automatically keep your customers updated on the status of their vehicles, and let them know when their vehicle is ready for pick up.
                </p>
              </div>
              <div className={
                classNames(
                    'split-item-image center-content-mobile reveal-from-bottom',
                    imageFill && 'split-item-image-fill'
                )}
                   data-reveal-container=".split-item">
                <Image
                    src={require('../../../assets/links_screenshot.png')}
                    alt="Features split 02"
                    width={528}
                    height={396} />
              </div>
            </div>

            {/*Scheduled Pickup and Drop Off*/}
            <div className="split-item" id="Scheduling">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                </div>
                <h3 className="mt-0 mb-12">
                  Automated Scheduling and Booking
                </h3>
                <p className="m-0">
                Give your customers the power to schedule a drop off or pick up that is convenient to them.
                </p>
              </div>
              <div className={
                classNames(
                    'split-item-image center-content-mobile reveal-from-bottom',
                    imageFill && 'split-item-image-fill'
                )}
                   data-reveal-container=".split-item">
                <Image
                    src={require('../../../assets/media.png')}
                    alt="Features split 01"
                    width={528}
                    height={396} />
              </div>
            </div>

            {/*Automated Email Messages*/}
            <div className="split-item" id="automatedreminders">
              <div className="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                </div>
                <h3 className="mt-0 mb-12">
                  Automated Notifications and Reminders
                </h3>
                <p className="m-0">
                  Automatically keep your customers updated on the status of their vehicles, and let them know when their vehicle is ready for pick up.
                </p>
              </div>
              <div className={
                classNames(
                    'split-item-image center-content-mobile reveal-from-bottom',
                    imageFill && 'split-item-image-fill'
                )}
                   data-reveal-container=".split-item">
                <Image
                    src={require('../../../assets/links_screenshot.png')}
                    alt="Features split 02"
                    width={528}
                    height={396} />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;