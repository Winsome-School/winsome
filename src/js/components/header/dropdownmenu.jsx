import React from 'react';
import {
  Link,
} from 'react-router-dom';



const DropDownMenu = (props)=> {
	let {data2,func1,func2,styles}=props
	let mydata=data2.map((item,index)=>{
		return (
			<Link to={item.value} key={index} ><a>{"text not"}</a></Link>		
		)
	})
		return (
			<div id='div3'className={`drop-down-menu ${styles}`} onMouseOver={func1} onMouseLeave={func2}>	
			{mydata}
		</div>	
	)
}

export default DropDownMenu
