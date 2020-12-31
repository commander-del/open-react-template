/*
React App that takes pricing / billing codes from JS Object (potentiall an external file) and creates pricing cards with toggle to switch between product lineups

Button links, billing codes, pricing, descriptions, etc. all change on toggle

*/
import React from 'react';
import './Price.css';

const pricingDataAll = {

      generic: {
        priceDesc: "",
        ctaText: "Schedule a Meeting",
        ctaLinkPrefix : "https://altapotentia.com/book/index.php?service=2",
        ctaSecondaryText: "purchase now",
        ctaSecondaryLinkPrefix: "http://www.bing.com/",
        description: "This is the most basic package but it's also the cheapest. Great for ordinary use."
      },

      common: {
        one: {
          description: "10 Scheduled Posts Per Month \n Optimized across social platforms"
        },
        two: {
          description: "17 Scheduled Posts Per Month \n Optimized across social platforms"
        },
        three: {
          description: "30 Scheduled Posts Per Month \n Optimized across social platforms"
        }
      },

      regular: {

        generic: {
          priceOverview: "Social Media Management"
        },

        one: {
          title: "Bronze",
          price: 1000,
          billingCode: "basic-regular",
          priceOverview: "Management Only",
        },
        two: {
          title: "Silver",
          price: 1500,
          billingCode: "advanced-regular",
          priceOverview: "Management Only",
        },
        three: {
          title: "Gold",
          price: 2000,
          billingCode: "enterprise-regular",
          priceOverview: "Management Only",
        }
      },

      promo: {

        generic: {
          priceOverview: ""
        },
        one: {
          title: "Platinum",
          price: 2000,
          billingCode: "basic-extra",
          priceOverview: "Content management and production. \n Includes all equipment plus, 1-2 people on set and Excludes rentals, extra crew etc",
        },
        two: {
          title: "Ruby (Recommended)",
          price: 2500,
          billingCode: "advanced-extra",
          priceOverview: "Content management and production",
        },
        three: {
          title: "Diamond",
          price: 3000,
          billingCode: "enterprise-extra",
          priceOverview: "Content management and production",
        }
      }

    }

export default class Price extends React.Component {

  render() {


    return (
      <div className="App">

        <PricingCardContainer pricingDataAll={pricingDataAll}></PricingCardContainer>

      </div>
    );
  }
}


class PricingCardContainer extends React.Component {

  constructor(){
    super();
    this.state = {
      promo: false
    }
  }

  togglePromo(){
    this.setState({
      promo: !this.state.promo
    })
    console.log(!this.state.promo)
  }



  render() {

    let pricingDataCurrent = this.props.pricingDataAll.regular
    let common = this.props.pricingDataAll.common

    this.state.promo ? pricingDataCurrent = this.props.pricingDataAll.promo : pricingDataCurrent = this.props.pricingDataAll.regular


    const generic = this.props.pricingDataAll.generic,
          one = pricingDataCurrent.one,
          two = pricingDataCurrent.two,
          three = pricingDataCurrent.three

    return (
      <section>
        <div className="toggle-container">
          Include 'Production' <input type="checkbox" onChange={this.togglePromo.bind(this)}></input>
        </div>

        <div className="pricingcontainer">
            <PricingCard
            pricingData={one}
            common={common.one}
            generic={generic}
            >
            </PricingCard>
            <PricingCard
            pricingData={two}
            common={common.two}
            generic={generic}
            featured
            >
            </PricingCard>
            <PricingCard
            pricingData={three}
            common={common.three}
            generic={generic}
            >
            </PricingCard>
          </div>
        </section>
    );
  }
}


class PricingCard extends React.Component {

  render() {

  	const price = this.props.pricingData.price.toString().split('.'),
  			dollar = price[0]

	let	cent = price[1] || "00";

    return (
      <div className={"pricingCard " + (this.props.featured ? 'featured' : '')}>

      	<div className="title">
      		{this.props.pricingData.title}
      	</div>

   		<div className="card">

   			<h2 className="price">
   				<span className="price__currency">$</span>
   				<span className="price__dollar">{dollar}</span>.
   				<span className="price__cent">{cent}</span>
   			</h2>

   			<p className="price-desc">{this.props.generic.priceDesc}</p>

				<p className="price-overview">{this.props.pricingData.priceOverview}</p>

				<p className="description">{this.props.common.description}</p>

   		</div>
<a className={'bttn bttn-' + this.props.btnClass} href={this.props.generic.ctaLinkPrefix + this.props.pricingData.billingCode}>{this.props.generic.ctaText}</a>
      </div>
    );
  }
}

