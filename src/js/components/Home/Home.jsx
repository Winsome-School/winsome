import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


import Hero from '../hero/HeroImage';
import Promo from '../promo/Promo';
import Calender from '../calender/Calender';
import Blog from '../Whatshappen/Blog';
import Gallery from '../gallery/Gallery';


class Home extends Component {

  render() {
    let { style } = this.props;

    return (
      <div className="Home">
        <Hero
          style={'hero-image'}
        />
        <Promo />
        <Calender />
        <Blog />
        <Gallery />
      </div>
    );
  }
};

Home.propTypes = {
  // getAction: PropTypes.func.isRequired,
};

// function mapStateToProps(state) {
//   return {
//     test: state.test
//   };
// };

export default connect(null, {})(Home);