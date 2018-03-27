import React from 'react';
import Content from './Content';
import events from './Data';
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