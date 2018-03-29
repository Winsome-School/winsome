import { combineReducers } from 'redux';
import testReducer from './testReducer';
import promoReducer from './promoReducer';
import calenderReducer from './calenderReducer'

import { FILL_ME } from '../constants';


const rootReducer = combineReducers({
  test: testReducer,
  promoData: promoReducer,
  calender:calenderReducer
});

export default rootReducer;