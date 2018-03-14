import React from 'react';



const DropDownMenu = (props)=> {
	let {data2,func1,func2,styles}=props
	data2=data2.split(' ')
	let mydata=data2.map((item,index)=>{
		return (
			<a  key={index} >{item}</a>			
		)
	})
		return (
			<div id='div3'className={`drop-down-menu ${styles}`} onMouseOver={func1} onMouseLeave={func2}>	
			{mydata}
		</div>	
	)
}

export default DropDownMenu
