import React from 'react';
import { connect } from 'react-redux';
import { arrayOf, shape, number, string, func} from 'prop-types';
import * as actions from '../../actions'

export class Event extends React.Component {

	componentWillMount(){
		this.props.getCalenderData();
	}
	renderArray() {
		const {count,calender} = this.props;
		let events;
		const {counter}=calender;
		if(Object.keys(this.props.calender).length){
			 events=[...calender.events]
			 // counter=calender.counter;
		}
		else{
			return '';
		}
		return events
			.slice(counter, counter + count)
			.map(({ ...item }) => (
				<div key={item.id} className="event">
					<div className="comingEvents">{item.event}</div>
					<div className="comingEventsDates">{item.eventDate}</div>
					<div className="time">{item.time}</div>
					<div className="clear" />
				</div>
			));
	}
	render() {
		return <div>{this.renderArray()}</div>;
	}
}

function mapStateToProps({ calender }) {
	return {
		calender
	};
}

Event.propTypes = {
	count: number.isRequired,
	calender:shape({
		counter: number.isRequired,
		events: arrayOf(
			shape({
				id: number.isRequired,
				event: string.isRequired,
				eventDate: string.isRequired,
				time: string.isRequired
			})
		).isRequired
	}).isRequired,
	getCalenderData:func.isRequired
	
};
export default connect(mapStateToProps, {getCalenderData:actions.getCalenderData})(Event);
