import React from 'react';


const Login = (props) => {

	let {data} = props
	return(
		<div id='div1' >
			<div className='login '>
	  			{data.value}	
	   		</div>
	   		<div className={`loginImage ${data.styles}`}>
	   		</div>
		</div>
	)
}

export default Login