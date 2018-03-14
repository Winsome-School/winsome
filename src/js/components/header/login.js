import React from 'react';

export default class Login extends React.Component {

	render() {
   		return (
   			<div id='div1' >
	  			<div className='login'>
		  			{this.props.data}	
		   		</div>
		   		<div className='loginImage'>
		   		</div>
   			</div>
		)
 	}

}