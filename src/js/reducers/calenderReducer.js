import * as types from '../constants';

const initial={}
const calenderReducer = function calenderReducer(
	state = initial,
	action
) {
	switch (action.type) {
		case types.GET_CALENDER_DATA_ATTEMPT:
			return state;
		case types.GET_CALENDER_DATA_SUCCESS:
			return action.payload;
		case types.GET_CALENDER_DATA_FAIL:
			return action.payload;
		case types.ARROW_LEFT:
			if (state.counter <= 0) {
				return { ...state };
			}
			return { ...state, counter: state.counter - action.payload };

		case types.ARROW_RIGHT:
			if (state.counter >= state.events.length - 4) {
				return { ...state, counter: state.events.length - 4 };
			}
			return { ...state, counter: state.counter + action.payload };

		default:
			return state;
	}
};

export default calenderReducer;
