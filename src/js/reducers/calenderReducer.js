import { ARROW_LEFT, ARROW_RIGHT } from '../constants';

const initial = {
	counter: 0,
	events: [
		{
			id: 1,
			event: 'Half terms End',
			eventDate: '01 May',
			time: ''
		},
		{
			id: 2,
			event: 'NetBall: first vii vs viii',
			eventDate: '20 May',
			time: '2:30 pm'
		},
		{
			id: 3,
			event: 'Parent presentation on healthy living',
			eventDate: '03 June',
			time: '12:35 pm'
		},
		{
			id: 4,
			event: 'M5 rs trip to walsigham',
			eventDate: '25 June',
			time: ''
		},
		{
			id: 5,
			event: 'Tour to muree',
			eventDate: '15 July',
			time: '2:30 pm'
		},
		{
			id: 6,
			event: 'Water splash Day',
			eventDate: '28 July',
			time: '11:35 am'
		},
		{
			id: 7,
			event: 'Visit to Jungle',
			eventDate: '05 Aug',
			time: ''
		},
		{
			id: 8,
			event: 'Independence Day',
			eventDate: '14 Aug',
			time: '12:35 am'
		},
		{
			id: 9,
			event: 'Bsant Day',
			eventDate: '25 Aug',
			time: '11:38 pm'
		}
	]
};
const calenderReducer = function calenderReducer(
	state = { ...initial },
	action
) {
	switch (action.type) {
		case ARROW_LEFT:
			if (state.counter <= 0) {
				return { ...state };
			}
			return { ...state, counter: state.counter - action.payload };

		case ARROW_RIGHT:
			if (state.counter >= state.events.length - 4) {
				return { ...state, counter: state.events.length - 4 };
			}
			return { ...state, counter: state.counter + action.payload };

		default:
			return state;
	}
};

export default calenderReducer;
