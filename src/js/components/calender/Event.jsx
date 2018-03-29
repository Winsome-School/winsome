import React from 'react'
import {connect} from 'react-redux'


export const Event=({counter,events})=>{
		console.log('counter  in events',counter)
		return [...events].slice(counter,counter+4).map(({...item},index)=>(
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
function mapStateToProps({calender}) {
	return {
		counter:calender.counter,
		events:calender.events
	}
}
export default connect(mapStateToProps,null)(Event)
