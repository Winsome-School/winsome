import React from 'react'
import events from './Data'
import {connect} from 'react-redux'


export const Event=({counter})=>{
	let selectedEvent=[...events];
		return selectedEvent.slice(counter,counter+4).map(({...item},index)=>(
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
				

		))
	}
function mapStateToProps({counter}) {
	return {
		counter
	}
}
export default connect(mapStateToProps,null)(Event)
