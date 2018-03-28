import React from 'react';
import PropTypes from 'prop-types'

 class Part extends React.Component {
	constructor(){
		super();
	}
	render(){
		let {text,textHeading,image}=this.props
		return (			
			<div className="part">
				
				<img src={image} />
				<div  className="paragraph">
				<h4>{textHeading}</h4>
				<p>{text}</p>
				</div>
			</div>	
		)
	}
} 

export default Part

Part.propTypes={
	//getAction: PropTypes.func.isRequired
}
