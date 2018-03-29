import React from 'react';
import Content from './Content';
import {connect} from 'react-redux';

export class Calender extends React.Component {
	constructor(){
		super();
	}
	render(){
		
		return (
			<div>
			<Content/>	
			</div>
		)
	}
}

export default connect(null,null)(Calender); 