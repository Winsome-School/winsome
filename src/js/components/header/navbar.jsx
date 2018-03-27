import React, { Component } from 'react';

import NavSubmenu from './NavSubMenu';
//import dataArray from './dataGiver';
import {
  Link,
} from 'react-router-dom';


export default class Navbar extends Component {
  render() {
    let { dataArray } = this.props;
    var dataToRender = dataArray[1].dataNavbar.map((item,i)=> {
      return	(
      <NavSubmenu 
      key={i} 
      data={
              <Link to={dataArray[1].dataNavbar[i].dropDownMenu[i].value}>
                {dataArray[1].dataNavbar[i].value}
              </Link>
            }
      data2={dataArray[1].dataNavbar[i].dropDownMenu}
      styles={dataArray[1].dataNavbar[i].styles}
      />
    )
    })
    return(
      <div className='my-navbar'>
      {dataToRender}
    </div>
    );
  }
}