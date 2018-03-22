import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch
} from 'react-router-dom';

import Header from './header/nav';
import HeroImage from './hero/HeroImage';
import Promo from './promo/app';
import Calender from './calender/Calender';
import Blog from './Whatshappen/Blog';
import Gallery from './gallery/Gallery';
import Footer from './footer/Footer';
import Career from './career/Career';



class App extends Component {
  constructor() {
    super();
  }

  render() {
    let { } = this.props;

    return (
      <Router>
        <div className="app">
          <Header />
          <HeroImage />
          <Promo />
          <Calender />
          <Blog />
          <Gallery />
          <Switch>
            <Router
              exact path="/career"
              render={
                routerProps => {
                  <div>
                    <Header {...routeProps} />
                    <HeroImage {...routeProps} />
                    <Career {...routeProps} />
                    <Footer {...routeProps} />
                  </div>
                }
              }
            />
          </Switch>
          <Footer />
        </div>
      </Router>
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

export default connect(mapStateToProps, {})(App);