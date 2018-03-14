// ########## Import Dependencies Here ##########
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// ########## Import Screens Here ##########

// ########## Import Components Here ##########

export default class ReadMoreButton extends Component {
  render() {
    let { align } = this.props;
    return (
      <div className={`read-more-button-${align}`}>
        <p className="read-more-button-text">
          Read More
        </p>
      </div>
    );
  }
}

ReadMoreButton.propTypes = {
  align: PropTypes.string.isRequired,
}