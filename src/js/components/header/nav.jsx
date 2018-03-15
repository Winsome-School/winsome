import React from 'react';

import Login from './login';
import Navbar from './navbar';
import dataArray from './dataGiver';


 const Nav = ()=>{
  //console.log(dataArray)
  let loginToRender=dataArray[0].loginData.map((item,index)=>{
    return(
      // the array is being passed to the component for better results 
      <Login key={index} data={item} />
    )
  }) 
  return (
    <div className='my-nav wrapper'>
      {loginToRender}
      <Navbar dataArray={dataArray}/> 
      <div id="div4">
        
      </div>
    </div>
  )
}

export default Nav