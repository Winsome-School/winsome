import {
	ARROW_LEFT,
	ARROW_RIGHT,
	INITIAL_VIEW,
	NEXT_VIEW,
	PREVIOUS_VIEW,
	NEXT_RESP_VIEW,
	PREVIOUS_RESP_VIEW,
	NEXT_VIEW_SAGA,
	PREVIOUS_VIEW_SAGA,
	INITIAL_BLOG_VIEW,
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
  GET_CALENDER_DATA_FAIL,
  GET_PROMO,
  GET_PROMO_DATA
} from '../constants';

export function getPromoAction() {
  return {
    type: GET_PROMO
  }
}

export function getPromoData(data) {
  return {
    type: GET_PROMO_DATA,
    payload: data
  }
}

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
export function initialView(data) {
	return {
		type: INITIAL_VIEW,
		payload: data
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
export function initialBlogViewToSaga() {
	return {
		type: INITIAL_BLOG_VIEW
	};
}
export function nextViewToSaga() {
	return {
		type: NEXT_VIEW_SAGA
	};
}
export function previousViewToSaga() {
	return {
		type: PREVIOUS_VIEW_SAGA
	};
}
