// ########## Import Dependencies Here ##########
import React, { Component } from 'react';
import { connect } from 'react-redux';

// ########## Import Screens Here ##########

// ########## Import Components Here ##########
import WinsomeSchool from './WinsomeSchool';
import JuniorSchool from './JuniorSchool';
import { promoData } from './promoData';

export class Promo extends Component {
  render() {
    let { promoData } = this.props;
    return (
      <div>
        <WinsomeSchool 
          promoData={promoData}
          id={promoData[0].id}
        />
        <JuniorSchool />
        <WinsomeSchool 
          promoData={promoData}
          id={promoData[1].id}
        />
      </div>
    );
  }
}

function mapStateToProps({promoData}) {
  return {
    promoData
  }
}

export default connect(mapStateToProps, {})(Promo);