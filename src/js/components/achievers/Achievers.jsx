import React from 'react';
import PropTypes from 'prop-types'


import FirstHeading from './FirstHeading'
import Portion1 from './Portion1'
import Portion2 from './Portion2'
import {achieversData} from './data'


 class Achievers extends React.Component {
	constructor(){
		super();
	}
	renderArray(){

	}
	render(){
		
		return (
			<div className="achievers">
				<FirstHeading 
					heading={achieversData.firstPart.heading}
					text={achieversData.firstPart.text}
				/>
				<Portion1 
					achieversData={achieversData}
				/>
				<Portion2 
					achieversData={achieversData}
				/>
				<div className="clear"></div>
			</div>
		)
	}
} 

export default Achievers