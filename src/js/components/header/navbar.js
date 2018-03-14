import React from 'react';

import NavSubmenu from './navsubmenu';
import dataArray from './dataGiver';


const Navbar = ()=>{
	var dataToRender = dataArray[1].data.map((item,i)=> {
		return	<NavSubmenu key={i} 
		data={dataArray[1].data[i]} 
		data2={dataArray[1].dataDropDown[i]} 
		styles={dataArray[1].styles[i]}/>
	})
	return (
	<div className='my-navbar'>
		{dataToRender}
	</div>	
	)
}

export default Navbar