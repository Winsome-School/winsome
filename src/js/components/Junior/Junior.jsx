import React from 'react';
import { connect } from 'react-redux';
import Discover from '../discover/Discover';
import Hero from '../hero/HeroImage';
import News from '../News/News';

export const Junior = ({ juniorData }) => (
  <div id="junior">
    <Hero style={'header-image'} />
    <div className="container">
      <div className="junior">
        <h2>{juniorData.p1.heading}</h2>
        <div className="box" />
        <p>{juniorData.p1.text}</p>
        <div className="image">
          <img src="./images/junior1.jpg" width="90%" alt="Junior1" />
        </div>
      </div>
      <div className="creating">
        <h2>{juniorData.p2.heading}</h2>
        <div className="box" />
        <div className="textimage">
          <div className="pdivs">
            <p>{juniorData.p2.p21.text}</p>
            <p>{juniorData.p2.p22.text}</p>
            <p>{juniorData.p2.p23.text}</p>
          </div>
          <div className="image">
            <img className="imglion" src="./images/junior2.jpg" alt="junior2" />
          </div>
          <div className="clear" />
        </div>
      </div>
      <div className="key">
        <h2>{juniorData.p3.heading}</h2>
        <div className="box" />
        <p>{juniorData.p3.text}</p>
      </div>
    </div>
    <div className="junior-news">
      <News />
    </div>
    <div className="clear">
      <Discover />
    </div>
  </div>
);

function mapStateToProps({ juniorData }) {
  return {
    juniorData
  };
}

export default connect(mapStateToProps, null)(Junior);
