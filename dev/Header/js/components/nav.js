import React from 'react';

import Login from './login';
import Navbar from './navbar';
import dataArray from './dataGiver';


 const Nav = ()=>{
  let loginToRender=dataArray[0].loginData.map((item,index)=>{
    return(
      <Login key={index} data={item}/>
    )
  }) 
  return (
    <div className='my-nav wrapper'>
      {loginToRender}
      <Navbar/> 
      <div id="div4">
        
      </div>
    </div>
  )
}

export default Nav