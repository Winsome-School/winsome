// ########## Import Dependencies Here ##########
import React from 'react';
import { string } from 'prop-types';

// ########## Import Screens Here ##########

// ########## Import Components Here ##########

const ReadMoreButton = (props) => {
  const { align } = props;
  return (
    <div className={`read-more-button-${align}`}>
      <p className="read-more-button-text">
        Read More
      </p>
    </div>
  );
}

ReadMoreButton.propTypes = {
  align: string.isRequired,
}

export default ReadMoreButton;