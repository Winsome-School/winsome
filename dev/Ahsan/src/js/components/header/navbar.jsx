import React from 'react';

import NavSubmenu from './navsubmenu';
//import dataArray from './dataGiver';


const Navbar = (props)=>{
	let {dataArray} = props
	//console.log(dataArray[1].dataNavbar[0][1])
	var dataToRender = dataArray[1].dataNavbar.map((item,i)=> {
		return	<NavSubmenu 
		key={i} 
		data={dataArray[1].dataNavbar[i][0]} 
		data2={dataArray[1].dataNavbar[i][1]} 
		styles={dataArray[1].dataNavbar[i][2]}/>
	})
	return (
	<div className='my-navbar'>
		{dataToRender}
	</div>	
	)
}

export default Navbar