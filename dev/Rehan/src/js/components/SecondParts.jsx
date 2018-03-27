import React from 'react';
import PropTypes from 'prop-types'

 class SecondParts extends React.Component {
	constructor(){
		super();
	}
	render(){
		let {text,textHeading,image}=this.props
		return (
			<div>
				<div className="part">
					<h4>{textHeading}</h4>
					<img src={image} />
					<div  className="paragraph">
					<p>{text}</p>
					</div>
				</div>
				<div className="clear"></div>
			</div>	
		)
	}
} 

export default SecondParts

SecondParts.propTypes={
	//getAction: PropTypes.func.isRequired
}
