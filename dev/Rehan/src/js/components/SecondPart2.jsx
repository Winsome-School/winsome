import React from 'react';
import PropTypes from 'prop-types'
import SecondParts from './SecondParts'

 class SecondPart2 extends React.Component {
	constructor(){
		super();
	}
	render(){
		let {Achieversdata ,firstNo,secondNo,heading}=this.props;
		return (
			<div>
				<div className="secondPart">
				<div className="box"></div>
					<h2>{heading}</h2>
					<div className="col1">
					{[...Achieversdata.secondPart].slice(0,firstNo).map(function(item,index){
						return (
						<SecondParts
							textHeading={item.textHeading}
							text={item.text}
							image={item.image}
						 />
						 )
					})}
						
					</div>
					<div className="col2">
						{[...Achieversdata.secondPart].slice(firstNo,secondNo).map(function(item,index){
						return (
						<SecondParts
							textHeading={item.textHeading}
							text={item.text}
							image={item.image}
						 />
						 )
					})}
					</div>
				</div>
				<div className="clear"></div>
			</div>
		)
	}
} 

export default SecondPart2

SecondPart2.propTypes={
	//getAction: PropTypes.func.isRequired
}
