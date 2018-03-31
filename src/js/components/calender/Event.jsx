import React from 'react'
import {connect} from 'react-redux'


export class Event extends React.Component{
	constructor(){
		super();
	}
	renderArray(){
		let {counter,events}=this.props;
		return [...events].slice(counter,counter+4).map(({...item},index)=>{
			return (
				<div key={index} className="event">
					<div className="comingEvents">
						{item['event']}
					</div>
					<div className="comingEventsDates">
							{item['eventDate']}
					</div>
					<div className="time">
							{item['time']}
					</div>
					<div className="clear"></div>
				</div>
			)	
		})
	}
	render(){
		return (
		<div>{this.renderArray()}</div>
		)
	}
}
		
		
	
function mapStateToProps({calender}) {
	return {
		counter:calender.counter,
		events:calender.events
	}
}
export default connect(mapStateToProps,null)(Event)
