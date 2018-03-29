import { combineReducers } from 'redux';
import testReducer from './testReducer';
import promoReducer from './promoReducer';
import calenderReducer from './calenderReducer'
import achieversReducer from './achieversReducer'

import { FILL_ME } from '../constants';


const rootReducer = combineReducers({
  test: testReducer,
  promoData: promoReducer,
  calender:calenderReducer,
  achieversData:achieversReducer
});

export default rootReducer;