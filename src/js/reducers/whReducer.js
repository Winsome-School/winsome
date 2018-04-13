import data from '../Data';

import {
	NEXT_VIEW,
	PREVIOUS_VIEW,
	NEXT_RESP_VIEW,
	PREVIOUS_RESP_VIEW
} from '../constants';

const initial = {
	selectedView: [data[0], data[1]],
	respView: [data[0]],
	firstIndexofSelectedView: 0,
	indexofRespView: 0
};

export default function whReducer(state = initial, action) {
	const {
		selectedView,
		firstIndexofSelectedView,
		respView,
		indexofRespView
	} = state;

	let newRespview;
	let newRespindex;
	let newview;
	let newindex;
	switch (action.type) {
		case NEXT_VIEW:
			if (firstIndexofSelectedView < data.length - 2) {
				newview = [...selectedView];

				newview.splice(
					0,
					2,
					data[firstIndexofSelectedView + 1],
					data[firstIndexofSelectedView + 2]
				);
				newindex = firstIndexofSelectedView + 1;
				return {
					...state,
					selectedView: newview,
					firstIndexofSelectedView: newindex
				};
			}

			break;
		case PREVIOUS_VIEW:
			if (firstIndexofSelectedView > 0 && firstIndexofSelectedView < 5) {
				newview = [...selectedView];
				newview.splice(
					0,
					2,
					data[firstIndexofSelectedView - 1],
					data[firstIndexofSelectedView]
				);
				newindex = firstIndexofSelectedView - 1;
				return {
					...state,
					selectedView: newview,
					firstIndexofSelectedView: newindex
				};
			}
			break;
		case NEXT_RESP_VIEW:
			if (indexofRespView < data.length - 1) {
				newRespview = [...respView];

				newRespview.splice(0, 1, data[indexofRespView + 1]);
				newRespindex = indexofRespView + 1;
				return {
					...state,
					respView: newRespview,
					indexofRespView: newRespindex
				};
			}
			break;
		case PREVIOUS_RESP_VIEW:
			if (indexofRespView > 0 && indexofRespView < 6) {
				newRespview = [...respView];
				newRespview.splice(0, 1, data[indexofRespView - 1]);
				newRespindex = indexofRespView - 1;
				return {
					...state,
					respView: newRespview,
					indexofRespView: newRespindex
				};
			}
			break;
		default:
			return { ...state };
	}
	return { ...state };
}
