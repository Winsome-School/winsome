import { combineReducers } from 'redux';
import testReducer from './testReducer';
import promoReducer from './promoReducer';
<<<<<<< HEAD
import calenderReducer from './calenderReducer';
import achieversReducer from './achieversReducer';
import whReducer from './whReducer';
import loginReducer from './loginReducer';
=======
import calenderReducer from './calenderReducer'
import achieversReducer from './achieversReducer'
>>>>>>> 0e2bb0bf8a7c4da622c6eee85d4f822541b0cb07

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
