import React from 'react';
import PropTypes from 'prop-types'


import FirstHeading from './FirstHeading'
import SecondPart2 from './SecondPart2';
import {Achieversdata} from './data'


 class Achievers extends React.Component {
	constructor(){
		super();
	}
	renderArray(){

	}
	render(){
		
		return (
			<div className="achievers">
			<div className="box1"></div>
				<FirstHeading 
					heading={Achieversdata.firstPart.heading}
					text={Achieversdata.firstPart.text}
				/>
				<div className="clear"></div>

				<SecondPart2
				 Achieversdata={Achieversdata}
				 firstNo={3} 
				 secondNo={5} 
				 heading={'Class of 2017'} 
				/>
				<SecondPart2 
				 Achieversdata={Achieversdata} 
				 firstNo={2} 
				 secondNo={3} 
				 heading={'Class of 2016'}
				/>
				
			</div>
		)
	}
} 

export default Achievers