import React, { Component } from 'react';

import NavSubmenu from './NavSubMenu';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
  render() {
    let { dataArray } = this.props;
    //console.log(dataArray[1].dataNavbar[0].adressValue)
    var dataToRender = dataArray[1].dataNavbar.map((item, i) => {
      return (
        <NavSubmenu
          key={i}
          data={
            <Link
              className="navbar-main-anchors"
              to={dataArray[1].dataNavbar[i].addressValue}
            >
              {dataArray[1].dataNavbar[i].value}
            </Link>
          }
          data2={dataArray[1].dataNavbar[i].dropDownMenu}
          styles={dataArray[1].dataNavbar[i].styles}
        />
      );
    });
    return <div className="my-navbar">{dataToRender}</div>;
  }
}
