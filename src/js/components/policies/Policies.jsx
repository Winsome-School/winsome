import React, { Component } from 'react';
import Discover from '../discover/Discover';
import Hero from '../hero/HeroImage';

export default class Policies extends Component {
  render() {
    return (
      <div>
        <Hero
          style={'header-image'}
        />
        <div id="policies">
          <div className="wrapper">
            <h3 className="policies-heading">Policies & Procedures</h3>
            <div className="box"></div>
            <p className="policies-paragraph">Please find below all our policies for Winsome School System.</p>
            <h4 className="policy-name-heading">Admissions Policy</h4>
            <p className="policy-name-paragraph">Download PDF</p>
            <h4 className="policy-name-heading">Curriculum Policy</h4>
            <p className="policy-name-paragraph">Download PDF</p>
            <h4 className="policy-name-heading">Child Protection</h4>
            <p className="policy-name-paragraph">Download PDF</p>
            <h4 className="policy-name-heading">Complaint Procedure</h4>
            <p className="policy-name-paragraph">Download PDF</p>
          </div>
          <Discover />
        </div>
      </div>
    );
  }
}