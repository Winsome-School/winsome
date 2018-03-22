import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Header from './header/nav';
import HeroImage from './hero/HeroImage';
import Home from './Home/home';
//import Promo from './promo/app';
//import Calender from './calender/Calender';
//import Blog from './Whatshappen/Blog';
//import Gallery from './gallery/Gallery';
import Career from './career/career';
import Footer from './footer/Footer';
import {BrowserRouter as Router,
        Link,
        Route,
         Switch} from 'react-router-dom';

class App extends Component {
  constructor() {
    super();
  }

  render() {
    let {} = this.props;

    return (
      <Router>

      <div className="app">
        <Header/>
        <HeroImage/>

        <Switch>
        <Route exact path="/HOME" component={Home} />
         <Route exact path="/CARREER" component={Career} />

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

export default connect(mapStateToProps,{})(App);