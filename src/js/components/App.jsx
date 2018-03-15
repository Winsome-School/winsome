import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Header from './header/nav';
import HeroImage from './hero/HeroImage';
import Promo from './promo/app';
import Calender from './calender/Calender';
import Blog from './Whatshappen/Blog';
import Gallery from './gallery/Gallery';
import Footer from './footer/Footer';



class App extends Component {
  constructor() {
    super();
  }

  render() {
    let {} = this.props;

    return (
      <div className="app">
        <Header/>
        <HeroImage/>
        <Promo />
        <Calender />
        <Blog />
        <Gallery />
        <Footer />
      </div>
    );
  }
};

App.propTypes = {
  //getAction: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    test: state.test
  };
};

export default connect(mapStateToProps,{})(App);