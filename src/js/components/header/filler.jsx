import React from 'react';

export default class Filler extends React.Component {

	render() { 
		console.log(this.props.x)
   		return (
  			<div className={this.props.x} >
    			my name is my name is {this.props.name}
   			</div>
		)
 	}

}