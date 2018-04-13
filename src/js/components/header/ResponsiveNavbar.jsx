import React from 'react';
//import { Link } from 'react-router-dom';

const ResponsiveNavbar = props => {
  return (
    <div className="responsive-header">
      <img className="header-logo" src="./images/logo.png" />
      <div className="responsive-nav">
        <div className="responsive-nav-lines" />
      </div>
    </div>
  );
};

export default ResponsiveNavbar;
