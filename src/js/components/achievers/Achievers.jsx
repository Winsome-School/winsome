import React from 'react';
import PropTypes from 'prop-types'


import FirstHeading from './FirstHeading'
import SecondPart2 from './SecondPart2';
import {Achieversdata} from './data';
import News from '../News/News';


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

				{
				// 	<SecondPart2
				//   top={0}
				//  firstNo={3} 
				//  secondNo={5} 
				//  heading={Achieversdata.classYear}
				//  classStudents={Achieversdata.classOf2017}
				 
				// />
			}
				 <SecondPart2  
				 top={0}
				 firstNo={2} 
				 secondNo={3} 
				 heading={Achieversdata.classYear2}
				 classStudents={[Achieversdata.classOf2016]}
				/>

        <News />
				<div className="clear"></div>
			</div>
		)
	}
} 

export default Achievers