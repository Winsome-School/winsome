import React from 'react';



const Login = (props) => {
	let {data} = props
		return (
			<div id='div1' >
				<div className='login '>
	  			{data[0]}	
	   		</div>
	   		<div className={`loginImage ${data[1]}`}>
	   		</div>
			</div>
	)
}

export default Login