// ########## Import Dependencies Here ##########
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// ########## Import Screens Here ##########

// ########## Import Components Here ##########
import PromoCard from './PromoCard';

export default class WinsomeSchool extends Component {

  renderPromoCardsSectionOne() {
    let { promoData } = this.props;
    return (
      [
        <PromoCard 
          data={promoData[0].promoDataOne}
          key={promoData[0].promoDataOne.promoCardId}
        />,
        <PromoCard 
          data={promoData[0].promoDataTwo}
          key={promoData[0].promoDataTwo.promoCardId}
        />
      ]
    )
  }

  renderPromoCardsSectionTwo() {
    let { promoData } = this.props;
    return (
      [
        <PromoCard 
          data={promoData[1].promoDataThree}
          key={promoData[1].promoDataThree.promoCardId}
        />,
        <PromoCard 
          data={promoData[1].promoDataFour}
          key={promoData[1].promoDataFour.promoCardId}
        />
      ]
    )
  }

  render() {
    let { promoData, id } = this.props;
    return (
      <section id="winsome-school">
        {
          id === 2 && <div><h2 className="winsome-school-hidden-heading">{promoData[1].heading}</h2>{this.renderPromoCardsSectionTwo()}</div>
          ||
          id === 1 && <div><h2 className="winsome-school-heading">{promoData[0].heading}</h2>{this.renderPromoCardsSectionOne()}</div>
        }
      </section>
    );
  }
}

WinsomeSchool.propTypes = {
  promoData: PropTypes.array.isRequired,
  id: PropTypes.number.isRequired,
}