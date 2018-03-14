import React from 'react'
import events from '../Data'


const Event=({n})=>{
	let selectedEvent=[...events];
		return selectedEvent.slice(n,n+4).map(({...item},index)=>(

				<div className="event">
					<div className="comingEvents">
						{item['event']}
					</div>
					<div className="comingEventsDates">
							{item['eventDate']}
					</div>
					<div className="time">
							{item['time']}
					</div>
				</div>
				

		))
	}
export default Event;