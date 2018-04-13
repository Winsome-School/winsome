import { HEADER_DATA } from '../constants';
import headerData from '../components/header/DataGiver';

console.log(headerData);

export default function(state = headerData, action) {
	switch (action.type) {
		case HEADER_DATA:
			return state;
		default:
			return state;
	}
}
