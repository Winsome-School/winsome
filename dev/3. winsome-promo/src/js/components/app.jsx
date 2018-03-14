// ########## Import Dependencies Here ##########
import React, { Component } from 'react';

// ########## Import Screens Here ##########

// ########## Import Components Here ##########
import WinsomeSchool from './WinsomeSchool';
import JuniorSchool from './JuniorSchool';
import { promoData } from './promoData';

export default class App extends Component {
  render() {
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