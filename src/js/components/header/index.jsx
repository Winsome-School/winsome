import React from 'react';
import { connect } from 'react-redux';

import Login from './Login';
import Navbar from './Navbar';
import ResponsiveNavbar from './ResponsiveNavbar';

// import dataArray from './DataGiver';

const Nav = ({ headerData }) => {
  console.log(headerData);
  //console.log(dataArray)
  let loginToRender = headerData[0].loginData.map((item, index) => {
    return (
      ///////// the array is being passed to the component for better results
      <Login key={index} data={item} />
    );
  });
  return (
    <div>
      <div className="header-wrapper">
        <img className="header-logo" src="./images/logo.png" />
        <div className="my-nav">
          {loginToRender}
          <Navbar dataArray={headerData} />
          <div id="div4" />
        </div>
      </div>
      <ResponsiveNavbar />
    </div>
  );
};

function mapStateToProps({ headerData }) {
  return {
    headerData
  };
}

export default connect(mapStateToProps, {})(Nav);
