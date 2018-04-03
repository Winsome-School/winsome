// ########## Import Dependencies Here ##########
import React, { Component } from 'react';
import { arrayOf, shape, number } from 'prop-types';

// ########## Import Screens Here ##########

// ########## Import Components Here ##########
import PromoCard from './PromoCard';

export default class WinsomeSchool extends Component {

  renderPromoCardsSectionOne() {
    const { promoData } = this.props;
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
    const { promoData } = this.props;
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
    const { promoData, id } = this.props;
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
  promoData: arrayOf(shape({
    promoDataOne: shape({
      promoCardId: number.isRequired
    }).isRequired,
    promoDataTwo: shape({
      promoCardId: number.isRequired
    }).isRequired,
    promoDataThree: shape({
      promoCardId: number.isRequired
    }).isRequired,
    promoDataFour: shape({
      promoCardId: number.isRequired
    }).isRequired,
  })).isRequired,
  id: number.isRequired,
}