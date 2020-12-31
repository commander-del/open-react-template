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

            {/*Analysis*/}
            <div className="split-item" id="Analysis">
              <div className="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Know your Audience
                </div>
                <h3 className="mt-0 mb-12">
                  Analysis
                </h3>
                <p className="m-0">
                  Systematic review of who is seeing and engaging with your content.
                  Understand their age, location,
                  gender, and keywords they use to find your products and services.                   You'll recieve a full report generated, utilizing your existing data, along with a fresh 30 day data set we collect. This report will help inform you which of your marketing efforts have the very best ROI.                </p>
              </div>
              <div className={
                classNames(
                    'split-item-image center-content-mobile reveal-from-bottom',
                    imageFill && 'split-item-image-fill'
                )}
                   data-reveal-container=".split-item">
                <Image
                    src={require('../../../assets/stockphotos/AltaMedia/workplace-1245776_1920.jpg')}
                    alt="Features split 02"
                    width={528}
                    height={396} />
              </div>
            </div>

            {/*Production*/}
            <div className="split-item" id="Production">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Visuals That Drive Impact
                </div>
                <h3 className="mt-0 mb-12">
                  Video and Photo Produciton
                </h3>
                <p className="m-0">
                  Photography and videography production services to create impactful brand focused content to promote your products and services.
                </p>
              </div>
              <div className={
                classNames(
                    'split-item-image center-content-mobile reveal-from-bottom',
                    imageFill && 'split-item-image-fill'
                )}
                   data-reveal-container=".split-item">
                <Image
                    src={require('../../../assets/stockphotos/AltaMedia/camera-690163_1920.jpg')}
                    alt="Features split 03"
                    width={528}
                    height={396} />
              </div>
            </div>

            {/*Private Label*/}
            <div className="split-item" id="PrivateLabel">
              <div className="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Dress For The Part
                </div>
                <h3 className="mt-0 mb-12">
                  Private Labeled Merchandise
                </h3>
                <p className="m-0">
                  Custom content products printed or designed with the company's logo,
                  can help people think about the job asides from being recognized by prospective or
                  future clients. By using this content product selling, you will promote the company ,
                  too as give it to more prospective customers at an incredibly low price.
                </p>
              </div>
              <div className={
                classNames(
                    'split-item-image center-content-mobile reveal-from-bottom',
                    imageFill && 'split-item-image-fill'
                )}
                   data-reveal-container=".split-item">
                <Image
                    src={require('../../../assets/stockphotos/AltaMedia/mockup-5257439_1920.jpg')}
                    alt="Features split 02"
                    width={528}
                    height={396} />
              </div>
            </div>

            {/*/!*alta construction*!/*/}
            {/*<div className="split-item" id="AltaConstruction">*/}
            {/*  <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">*/}
            {/*    <div className="text-xxs text-color-primary fw-600 tt-u mb-8">*/}
            {/*    Save time and Money*/}
            {/*    </div>*/}
            {/*    <h3 className="mt-0 mb-12">*/}
            {/*      Alta Construction*/}
            {/*    </h3>*/}
            {/*    <p className="m-0">*/}
            {/*      Give your customers the tools and information they need to quote jobs themselves, providing them control over their customer experience while saving you time and money.*/}
            {/*      Send automated notifications, confirmations and reminders, share invoices, inspection sheets, collect payments or answer questions all from one dashboard.*/}
            {/*    </p>*/}
            {/*  </div>*/}
            {/*  <div className={*/}
            {/*    classNames(*/}
            {/*        'split-item-image center-content-mobile reveal-from-bottom',*/}
            {/*        imageFill && 'split-item-image-fill'*/}
            {/*    )}*/}
            {/*       data-reveal-container=".split-item">*/}
            {/*    <Image*/}
            {/*        src={require('../../../assets/images/features-split-image-03.png')}*/}
            {/*        alt="Features split 03"*/}
            {/*        width={528}*/}
            {/*        height={396} />*/}
            {/*  </div>*/}
            {/*</div>*/}

            {/*/!*Alta PropertyManagement*!/*/}
            {/*<div className="split-item" id="AltaProperty">*/}
            {/*  <div className="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item">*/}
            {/*    <div className="text-xxs text-color-primary fw-600 tt-u mb-8">*/}
            {/*      Managing your Property not other people*/}
            {/*    </div>*/}
            {/*    <h3 className="mt-0 mb-12">*/}
            {/*      Alta PropertyManagement*/}
            {/*    </h3>*/}
            {/*    <p className="m-0">*/}
            {/*    Coming soon...*/}
            {/*    </p>*/}
            {/*  </div>*/}
            {/*  <div className={*/}
            {/*    classNames(*/}
            {/*        'split-item-image center-content-mobile reveal-from-bottom',*/}
            {/*        imageFill && 'split-item-image-fill'*/}
            {/*    )}*/}
            {/*       data-reveal-container=".split-item">*/}
            {/*    <Image*/}
            {/*        src={require('../../../assets/images/features-split-image-02.png')}*/}
            {/*        alt="Features split 02"*/}
            {/*        width={528}*/}
            {/*        height={396} />*/}
            {/*  </div>*/}
            {/*</div>*/}

            {/*/!*Alta Cuisine*!/*/}
            {/*<div className="split-item" id="AltaCuisine">*/}
            {/*  <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">*/}
            {/*    <div className="text-xxs text-color-primary fw-600 tt-u mb-8">*/}
            {/*      Stimulate your sense of Taste*/}
            {/*    </div>*/}
            {/*    <h3 className="mt-0 mb-12">*/}
            {/*      Alta Cuisine*/}
            {/*    </h3>*/}
            {/*    <p className="m-0">*/}
            {/*      Coming soon...*/}
            {/*    </p>*/}
            {/*  </div>*/}
            {/*  <div className={*/}
            {/*    classNames(*/}
            {/*        'split-item-image center-content-mobile reveal-from-bottom',*/}
            {/*        imageFill && 'split-item-image-fill'*/}
            {/*    )}*/}
            {/*       data-reveal-container=".split-item">*/}
            {/*    <Image*/}
            {/*        src={require('../../../assets/images/features-split-image-03.png')}*/}
            {/*        alt="Features split 03"*/}
            {/*        width={528}*/}
            {/*        height={396} />*/}
            {/*  </div>*/}
            {/*</div>*/}

          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;