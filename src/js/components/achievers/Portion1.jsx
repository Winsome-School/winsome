import React from 'react';
import PropTypes from 'prop-types'
import Part from './Part';

 class Portion1 extends React.Component {
	constructor(){
		super();
	}
	renderArrayHandler(){
		let {achieversData}=this.props;

		return (
			<div>
			<h2>{achieversData.class17Data.textYear}</h2>
			<div className='box'></div>
			{
				achieversData.class17Data.data.map((item,index)=>(
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
		
		return (
			<div className="portion1">
				{
					this.renderArrayHandler()
				}
			</div>
		)
	}
} 

export default Portion1

Portion1.propTypes={
	//getAction: PropTypes.func.isRequired
}
