import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';



import Promo from '../promo/app';
import Calender from '../calender/Calender';
import Blog from '../Whatshappen/Blog';
import Gallery from '../gallery/Gallery';



class Home extends Component {
  constructor() {
    super();
  }

  render() {
    let {} = this.props;

    return (
     

      <div className="Home">
       
       
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