import React from 'react';
import { shape, arrayOf, string } from 'prop-types';
import { connect } from 'react-redux';

import Hero from '../hero/HeroImage';
import FirstHeading from './FirstHeading';
import Portion1 from './Portion1';
import Portion2 from './Portion2';
import News from '../News/News';

export const Achievers = ({ achieversData }) => (
  <div>
    <Hero style={'header-image'} />
    <div className="achievers">
      <div className="content">
        <FirstHeading
          heading={achieversData.firstPart.heading}
          text={achieversData.firstPart.text}
        />
        <Portion1 achieversData={achieversData} />
        <Portion2 achieversData={achieversData} />
      </div>
      <News />
      <div className="clear" />
    </div>
  </div>
);

function mapStateToProps({ achieversData }) {
  return {
    achieversData
  };
}
Achievers.propTypes = {
  achieversData: shape({
    firstPart: shape({
      heading: string.isRequired,
      text: string.isRequired
    }).isRequired,
    class17Data: shape({
      textYear: string.isRequired,
      data: arrayOf(
        shape({
          textHeading: string.isRequired,
          text: string.isRequired,
          image: string.isRequired
        })
      ).isRequired
    }).isRequired,
    class16Data: shape({
      textYear: string.isRequired,
      data: arrayOf(
        shape({
          textHeading: string.isRequired,
          text: string.isRequired,
          image: string.isRequired
        })
      ).isRequired
    }).isRequired
  }).isRequired
};

export default connect(mapStateToProps, null)(Achievers);
