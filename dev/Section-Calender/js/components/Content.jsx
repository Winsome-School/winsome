import React from 'react';
import Arrow from './Arrow';
import Event from './Event';
export default class Content extends React.Component{
	constructor(){
		super();
	}
	render(){
		return(
			<div className="heroImage">
				<div className="line"></div>
				<h2><strong>Up Coming Events</strong></h2>
				<div className="renderEvents">
						<Event {...this.props}/>
				</div>
				<Arrow
				{...this.props}
				 />
			</div>
		)
	}
}
