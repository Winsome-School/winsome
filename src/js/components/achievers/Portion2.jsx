import React from 'react';
import PropTypes from 'prop-types';
import Part from './Part'

 class Portion2 extends React.Component {
	constructor(){
		super();
	}
	renderArrayHandler(){
		let {achieversData}=this.props
		return (
			<div>
			<h2>{achieversData.class16Data.textYear}</h2>
			<div className='box'></div>
			{
				achieversData.class16Data.data.map((item,index)=>(
					<Part 
						key={index}
						text={item.text}
						textHeading={item.textHeading}
						image={item.image}
					/>
				))
			}	
			</div>
		)
	}
	render(){
		console.log('array in portion 2 is ',this.props.achieversData.class16Data.data)
		return (
			<div className="portion2">
			<div className="invisibleBox"></div>
				{this.renderArrayHandler()}
			</div>
		)
	}
} 

export default Portion2

Portion2.propTypes={
	//getAction: PropTypes.func.isRequired
}
