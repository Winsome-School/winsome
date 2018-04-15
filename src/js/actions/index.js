import {
	ARROW_LEFT,
	ARROW_RIGHT,
	NEXT_VIEW,
	PREVIOUS_VIEW,
	NEXT_RESP_VIEW,
	PREVIOUS_RESP_VIEW,
	GET_USERNAME,
	GET_PASSWORD,
	LOGIN,
	GET_ACHIEVERS_DATA,
	GET_ACHIEVERS_DATA_SUCCESS,
	GET_ACHIEVERS_DATA_ATTEMPT,
	GET_ACHIEVERS_DATA_FAIL,
	GET_CALENDER_DATA,
	GET_CALENDER_DATA_SUCCESS,
	GET_CALENDER_DATA_ATTEMPT,
	GET_CALENDER_DATA_FAIL
} from '../constants';

export function onClickLeftArrow() {
	return {
		type: ARROW_LEFT,
		payload: 1
	};
}

export function onClickRightArrow() {
	return {
		type: ARROW_RIGHT,
		payload: 1
	};
}

export function nextView() {
	return {
		type: NEXT_VIEW
	};
}

export function previousView() {
	return {
		type: PREVIOUS_VIEW
	};
}
export function nextRespView() {
	return {
		type: NEXT_RESP_VIEW
	};
}

export function previousRespView() {
	return {
		type: PREVIOUS_RESP_VIEW
	};
}
export function getUserAction(username) {
	return {
		type: GET_USERNAME,
		payload: username
	};
}

export function getPassAction(password) {
	return {
		type: GET_PASSWORD,
		payload: password
	};
}

export function loginAction() {
	return {
		type: LOGIN
	};
}
export function getAchieversData() {
	return {
		type: GET_ACHIEVERS_DATA
	};
}
export function getAchieversDataSuccess(data) {
	return {
		type: GET_ACHIEVERS_DATA_SUCCESS,
		payload: data
	};
}
export function getAchieversDataAttempt() {
	return {
		type: GET_ACHIEVERS_DATA_ATTEMPT
	};
}
export function getAchieversDataFail(error) {
	return {
		type: GET_ACHIEVERS_DATA_FAIL,
		payload: error
	};
}

export function getCalenderData() {
	return {
		type: GET_CALENDER_DATA
	};
}
export function getCalenderDataSuccess(data) {
	return {
		type: GET_CALENDER_DATA_SUCCESS,
		payload: data
	};
}
export function getCalenderDataAttempt() {
	return {
		type: GET_CALENDER_DATA_ATTEMPT
	};
}
export function getCalenderDataFail(error) {
	return {
		type: GET_CALENDER_DATA_FAIL,
		payload: error
	};
}
