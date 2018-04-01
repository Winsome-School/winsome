// ########## Import Dependencies Here ##########
import React, { Component } from 'react';
import { string } from 'prop-types';

// ########## Import Screens Here ##########

// ########## Import Components Here ##########

export default class ReadMoreButton extends Component {

  componentDidMount() {

  }

  render() {
    const { align } = this.props;
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
  align: string.isRequired,
}