import { ARROW_LEFT, ARROW_RIGHT } from '../constants';

export function onClickLeftArrow() {
	return {
		type:ARROW_LEFT,
		payload:1
	}
}

export function onClickRightArrow() {
	return {
		type:ARROW_RIGHT,
		payload:1
	}
}

