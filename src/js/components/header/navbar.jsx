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
      data={<Link to={dataArray[1].dataNavbar[i][0]}>{dataArray[1].dataNavbar[i][0]}</Link>}
      // data={dataArray[1].dataNavbar[i][0]}
      data2={dataArray[1].dataNavbar[i][1]}
      styles={dataArray[1].dataNavbar[i][2]}
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