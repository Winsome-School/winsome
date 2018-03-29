import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


import Hero from '../hero/HeroImage';
import Promo from '../promo/Promo';
import Calender from '../calender/Calender';
import Blog from '../Whatshappen/Blog';
import Gallery from '../gallery/Gallery';

const headerImageData = [
  {
    id: 1,
    heroImage: 'hero-image',
  },
  {
    id: 2,
    headerImage: 'header-image'
  }
]

class Home extends Component {
  constructor() {
    super();
  }

  render() {
    let {} = this.props;

    return (
      <div className="Home">
        <Hero 
          heroImage = {heroImageData[0]}
        />
        <Promo />
        <Calender/>
        <Blog/>
        <Gallery/>
        
      </div>

          );
  }
};

Home.propTypes = {
  //getAction: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    test: state.test
  };
};

export default connect(mapStateToProps,{})(Home);