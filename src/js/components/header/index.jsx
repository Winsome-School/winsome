import React from 'react';
import { connect } from 'react-redux';
import { arrayOf, object } from 'prop-types';

import Login from './Login';
import Navbar from './Navbar';
import ResponsiveNav from './ResponsiveNav';

// import dataArray from './DataGiver';#####

const Nav = ({ headerData }) => {
  // console.log(headerData);
  const loginToRender = headerData[0].loginData.map(item => {
    return (
      // the array is being passed to the component for better results
      <Login key={item.id} loginData={item} />
    );
  });
  return (
    <div>
      <div className="header-wrapper">
        <img
          className="header-logo"
          src="./images/logo.png"
          alt="header logo is not available!"
        />
        <div className="my-nav">
          {loginToRender}
          <Navbar dataNavbar={headerData[1].dataNavbar} />
          <div id="div4" />
        </div>
      </div>
      <ResponsiveNav data={headerData} />
    </div>
  );
};

function mapStateToProps({ headerData }) {
  return {
    headerData
  };
}
// ###################### SIMPLEST FORM OF PROP-TYPES #####################

Nav.propTypes = {
  headerData: arrayOf(object.isRequired).isRequired
};

export default connect(mapStateToProps, {})(Nav);

// #################### THESE ARE FULL PROP TYPES ##########################

// Full.propTypes = {
//   headerData: arrayOf(
//     shape({
//       loginData: arrayOf(
//         shape({
//           id: string.isRequired,
//           value: string.isRequired,
//           styles: string.isRequired,
//           addressValue: string.isRequired
//         })
//       ),
//       dataNavbar: arrayOf(
//         shape({
//           id: string.isRequired,
//           value: string.isRequired,
//           addressValue: string.isRequired,
//           styles: string.isRequired,
//           dropDownMenu: arrayOf(
//             shape({
//               id: string.isRequired,
//               value: string.isRequired,
//               addressValue: string.isRequired,
//               styles: string.isRequired
//             })
//           )
//         })
//       )
//     })
//   )
// };

// #################### THESE ARE PARTIAL PROP TYPES ##########################

// Partial.propTypes = {
//   headerData: arrayOf(
//     shape({
//       loginData: arrayOf(
//         shape({
//           id: string.isRequired,
//           value: string.isRequired,
//           styles: string.isRequired,
//           addressValue: string.isRequired
//         })
//       )
//     })
//   )
// };
