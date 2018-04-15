import * as types from '../constants';

const initial = {};

const achieversReducer = function achieversReducer(state = initial, action) {
	switch (action.type) {
		case types.GET_ACHIEVERS_DATA_ATTEMPT:
			return state;
		case types.GET_ACHIEVERS_DATA_SUCCESS:
			return action.payload;
		case types.GET_ACHIEVERS_DATA_FAIL:
			return action.payload;
	}
	return state;
};

export default achieversReducer;
