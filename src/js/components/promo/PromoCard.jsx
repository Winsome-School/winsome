// ########## Import Dependencies Here ##########
import React, { Component } from 'react';
import { shape, number, string } from 'prop-types';

// ########## Import Screens Here ##########

// ########## Import Components Here ##########
import ReadMoreButton from './ReadMoreButton';

export default class PromoCard extends Component {

  componentDidMount() {

  }

  render() {
    const { data } = this.props;
    return (
      <div className="promo-card">
        <div className="wrapper">
          <div className={`promo-card-container-${data.promoCardId > 2 && "sectionTwo-" || data.promoCardId <= 2 && "sectionOne-"}${data.imageDirection}`}>
            <div className={`promo-image-container-${data.promoCardId > 2 && "sectionTwo-" || data.promoCardId <= 2 && "sectionOne-"}${data.imageDirection}`}>
              <div className={`promo-image-${data.promoCardId > 2 && "sectionTwo-" || data.promoCardId <= 2 && "sectionOne-"}${data.imageDirection}`} />
            </div>
            <div className="promo-text-container">
              <div className="promo-text-wrapper">
                <h4 className="promo-heading">{data.title}</h4>
                <p className="promo-description">{data.description}</p>
                <ReadMoreButton 
                  align="left"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

PromoCard.propTypes = {
  data: shape({
    promoCardId: number.isRequired,
    imageDirection: string.isRequired,
    title: string.isRequired,
    description: string.isRequired
  }).isRequired
}