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

            {/*alta media*/}
            <div className="split-item" id="AltaMedia">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Ignite Your Audience
                  </div>
                <h3 className="mt-0 mb-12">
                  Alta Media
                  </h3>
                <p className="m-0">
                  Alta media provides social media marketing services to connect with your audience, build your brand, increase sales, and drive website traffic.
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

            {/*alta links*/}
            <div className="split-item" id="AltaLinks">
              <div className="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Link your Networks
                </div>
                <h3 className="mt-0 mb-12">
                  Alta Links
                </h3>
                <p className="m-0">
                  Alta Links is a page where users/influencers/ and marketeers can add links to a single mobile friendly page, along with a profile picture, company name, contact.vcf, chat bot, to connect and engage with customers and audience.
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

            {/*alta safe appointments*/}
            <div className="split-item" id="AltaSafeAppointments">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Never Miss an Opportunity
                </div>
                <h3 className="mt-0 mb-12">
                  Alta Safe Appointments
                </h3>
                <p className="m-0">
                  Alta Safe Appointments automates the process of creating and maintaining schedules. Helping you stay in sync with your customers providing notifications, and reminders.                </p>
              </div>
              <div className={
                classNames(
                    'split-item-image center-content-mobile reveal-from-bottom',
                    imageFill && 'split-item-image-fill'
                )}
                   data-reveal-container=".split-item">
                <Image
                    src={require('../../../assets/safeappointments_screenshot.png')}
                    alt="Features split 03"
                    width={528}
                    height={396} />
              </div>
            </div>

            {/*alta autobody*/}
            <div className="split-item" id="AltaAutobody">
              <div className="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  make your business scalable
                </div>
                <h3 className="mt-0 mb-12">
                  Alta Autobody
                </h3>
                <p className="m-0">
                  Get an all-in-one, cloud-based solution to automate,and completely manage your business.
                  Experience and provide world-class customer service.
                  Leverage optimized tools to communicate instantly with customers directly via text and email.
                  Send automated notifications, confirmations, reminders, and more.
                </p>
              </div>
              <div className={
                classNames(
                    'split-item-image center-content-mobile reveal-from-bottom',
                    imageFill && 'split-item-image-fill'
                )}
                   data-reveal-container=".split-item">
                <Image
                    src={require('../../../assets/autobody_dashboard_screenshot.png')}
                    alt="Features split 02"
                    width={528}
                    height={396} />
              </div>
            </div>

            {/*alta construction*/}
            <div className="split-item" id="AltaConstruction">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                Save time and Money
                </div>
                <h3 className="mt-0 mb-12">
                  Alta Construction
                </h3>
                <p className="m-0">
                  Give your customers the tools and information they need to quote jobs themselves, providing them control over their customer experience while saving you time and money.
                  Send automated notifications, confirmations and reminders, share invoices, inspection sheets, collect payments or answer questions all from one dashboard.
                </p>
              </div>
              <div className={
                classNames(
                    'split-item-image center-content-mobile reveal-from-bottom',
                    imageFill && 'split-item-image-fill'
                )}
                   data-reveal-container=".split-item">
                <Image
                    src={require('../../../assets/images/features-split-image-03.png')}
                    alt="Features split 03"
                    width={528}
                    height={396} />
              </div>
            </div>

            {/*Alta PropertyManagement*/}
            <div className="split-item" id="AltaProperty">
              <div className="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Managing your Property not other people
                </div>
                <h3 className="mt-0 mb-12">
                  Alta PropertyManagement
                </h3>
                <p className="m-0">
                Coming soon...
                </p>
              </div>
              <div className={
                classNames(
                    'split-item-image center-content-mobile reveal-from-bottom',
                    imageFill && 'split-item-image-fill'
                )}
                   data-reveal-container=".split-item">
                <Image
                    src={require('../../../assets/images/features-split-image-02.png')}
                    alt="Features split 02"
                    width={528}
                    height={396} />
              </div>
            </div>

            {/*Alta Cuisine*/}
            <div className="split-item" id="AltaCuisine">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Stimulate your sense of Taste
                </div>
                <h3 className="mt-0 mb-12">
                  Alta Cuisine
                </h3>
                <p className="m-0">
                  Coming soon...
                </p>
              </div>
              <div className={
                classNames(
                    'split-item-image center-content-mobile reveal-from-bottom',
                    imageFill && 'split-item-image-fill'
                )}
                   data-reveal-container=".split-item">
                <Image
                    src={require('../../../assets/images/features-split-image-03.png')}
                    alt="Features split 03"
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