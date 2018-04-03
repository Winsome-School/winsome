<<<<<<< HEAD
import {
	ARROW_LEFT,
	ARROW_RIGHT,
	NEXT_VIEW,
	PREVIOUS_VIEW,
	GET_USERNAME,
	GET_PASSWORD,
	LOGIN
} from '../constants';
=======
import { ARROW_LEFT, ARROW_RIGHT } from '../constants';
>>>>>>> 0e2bb0bf8a7c4da622c6eee85d4f822541b0cb07

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
