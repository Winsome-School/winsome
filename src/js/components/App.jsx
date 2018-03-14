import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from './header/nav';
import HeroImage from './hero/HeroImage';
import Promo from './promo/app';
import Calender from './calender/Calender';

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