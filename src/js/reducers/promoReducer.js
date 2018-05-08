// import { FILL_ME } from '../constants';
import * as types from '../constants';
// import promoData from '../components/promo/promoData';

export default function(state = [], action) {
	switch (action.type) {
		case types.GET_PROMO_DATA:
			return action.payload;
		default:
			return state;
	}
}
