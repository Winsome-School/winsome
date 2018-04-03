import { GET_USERNAME, GET_PASSWORD, LOGIN } from '../constants';

const data = {
	username: 'admin',
	password: 'winsome'
};
const initial = {
	user: '',
	pass: '',
	usermatch: false,
	loginMsg: ''
};
export default function loginReducer(state = initial, action) {
	let { user, pass } = state;

	switch (action.type) {
		case GET_USERNAME:
			user = action.payload;

			return { ...state, user };
		case GET_PASSWORD:
			pass = action.payload;

			return { ...state, pass };
		case LOGIN:
			if (user !== '' && pass !== '') {
				if (user === data.username && pass === data.password) {
					return { ...state, usermatch: true };
				}
				if (user !== data.username || pass !== data.password) {
					return {
						...state,
						loginMsg: 'Please Enter valid Credentials'
					};
				}
			}
			break;
		default:
			return { ...state };
	}
	return { ...state };
}
