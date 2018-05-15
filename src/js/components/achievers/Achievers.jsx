import React from 'react';
import { shape, arrayOf, string, func } from 'prop-types';
import { connect } from 'react-redux';

import Hero from '../hero/HeroImage';
import FirstHeading from './FirstHeading';
import Portion1 from './Portion1';
import Portion2 from './Portion2';
import News from '../News/News';
import * as actions from '../../actions';

export class Achievers extends React.Component {
  componentWillMount() {
    this.props.getAchieversData();
  }

  render() {
    let data;
    if (Object.keys(this.props.achieversData).length) {
      data = this.props.achieversData;
    } else {
      return '';
    }
    return (
      <div>
        <Hero style={'achievers-img'} />
        <div className="achievers">
          <div className="content">
            <FirstHeading
              heading={data.firstPart.heading}
              text={data.firstPart.text}
            />
            <Portion1 achieversData={data} />
            <Portion2 achieversData={data} />
          </div>
          <div className="achievers-news">
            <News />
          </div>
          <div className="clear" />
        </div>
      </div>
    );
  }
}

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
  }).isRequired,
  getAchieversData: func.isRequired
};

export default connect(mapStateToProps, {
  getAchieversData: actions.getAchieversData
})(Achievers);
