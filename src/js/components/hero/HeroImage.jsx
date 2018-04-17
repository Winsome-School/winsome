import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class HeroImage extends Component {
  
  componentDidMount(){

  }
  render() {
    const { style } = this.props;
    return (
      <section >
        <div className={style} />
      </section>
    );
  }
}

HeroImage.propTypes = {
  style: PropTypes.isRequired,
};