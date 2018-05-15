import React, { Component } from 'react';
import Discover from '../discover/Discover';
import Hero from '../hero/HeroImage';
import News from '../News/News';

export default class Policies extends Component {
  componentDidMount() {}
  render() {
    return (
      <div>
        <Hero style={'policies-img'} />
        <div id="policies-container">
          <div id="policies">
            <div className="wrapper">
              <h3 className="policies-heading">Policies & Procedures</h3>
              <div className="box" />
              <p className="policies-paragraph">
                Please find below all our policies for Winsome School System.
              </p>
              <h4 className="policy-name-heading">Admissions Policy</h4>
              <p className="policy-name-paragraph">Download PDF</p>
              <h4 className="policy-name-heading">Curriculum Policy</h4>
              <p className="policy-name-paragraph">Download PDF</p>
              <h4 className="policy-name-heading">Child Protection</h4>
              <p className="policy-name-paragraph">Download PDF</p>
              <h4 className="policy-name-heading">Complaint Procedure</h4>
              <p className="policy-name-paragraph">Download PDF</p>
            </div>
          </div>

          <div className="policies-news">
            <News />
          </div>
        </div>
        <div className="clear">
          <Discover />
        </div>
      </div>
    );
  }
}
