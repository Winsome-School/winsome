import { combineReducers } from 'redux';
import testReducer from './testReducer';
import promoReducer from './promoReducer';
import calenderReducer from './calenderReducer';
import achieversReducer from './achieversReducer';
import whReducer from './whReducer';
import loginReducer from './loginReducer';

// import { FILL_ME } from '../constants';

const rootReducer = combineReducers({
	test: testReducer,
	promoData: promoReducer,
	calender: calenderReducer,
	achieversData: achieversReducer,
	viewData: whReducer,
	loginData: loginReducer
});

export default rootReducer;
