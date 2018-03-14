import React, { Component } from 'react';
import HeroImage from './HeroImage';
import Footer from './Footer';

export default class App extends Component {
  

  render() {
    return (
      <div className="app">
      <HeroImage />
      <Footer />
      <div>rest of the page</div>
      </div>
    );
  }
};