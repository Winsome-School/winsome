import data from '../Data';

import { NEXT_VIEW, PREVIOUS_VIEW } from '../constants';

const initial = {
	selectedView: [data[0], data[1]],
	firstIndexofSelectedView: 0
};

export default function whReducer(state = initial, action) {
	const { selectedView, firstIndexofSelectedView } = state;
	switch (action.type) {
		case NEXT_VIEW:
			if (firstIndexofSelectedView < data.length - 2) {
				const newview = [...selectedView];

				newview.splice(
					0,
					2,
					data[firstIndexofSelectedView + 1],
					data[firstIndexofSelectedView + 2]
				);
				const newindex = firstIndexofSelectedView + 1;
				return {
					...state,
					selectedView: newview,
					firstIndexofSelectedView: newindex
				};
			}
			break;
		case PREVIOUS_VIEW:
			if (firstIndexofSelectedView > 0 && firstIndexofSelectedView < 5) {
				const newview = [...selectedView];
				newview.splice(
					0,
					2,
					data[firstIndexofSelectedView - 1],
					data[firstIndexofSelectedView]
				);
				const newindex = firstIndexofSelectedView - 1;
				return {
					...state,
					selectedView: newview,
					firstIndexofSelectedView: newindex
				};
			}
			break;
		default:
			return { ...state };
	}
	return { ...state };
}
