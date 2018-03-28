import React from 'react';
import PropTypes from 'prop-types'

 class FirstHeading extends React.Component {
	constructor(){
		super();
	}
	render(){
		let {heading,text}=this.props;
		
		return (
			<div className="first">
				<div className="firstPart">
					<h2>{heading}</h2>
					<div className="box"></div>
					<p>{text}</p>
				</div>
				<div className="clear"></div>
			</div>
		)
	}
} 

export default FirstHeading

FirstHeading.propTypes={
	//getAction: PropTypes.func.isRequired
}
