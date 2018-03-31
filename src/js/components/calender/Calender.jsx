import React from 'react';
import Content from './Content';
import {connect} from 'react-redux';

export default class Calender extends React.Component {
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