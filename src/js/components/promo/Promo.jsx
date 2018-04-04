// ########## Import Dependencies Here ##########
import React from 'react';
import { shape, arrayOf, string } from 'prop-types';
import { connect } from 'react-redux';

// ########## Import Screens Here ##########

// ########## Import Components Here ##########
import WinsomeSchool from './WinsomeSchool';
import JuniorSchool from './JuniorSchool';


const Promo = (props) => {
  const { promoData } = props;
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

Promo.propTypes = {
  promoData: arrayOf(shape({
    id: string.isRequired
  })).isRequired
}

function mapStateToProps({ promoData }) {
  return {
    promoData
  }
}

export default connect(mapStateToProps, {})(Promo);