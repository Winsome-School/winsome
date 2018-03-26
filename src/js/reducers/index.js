import { combineReducers } from 'redux';
import testReducer from './testReducer';
import promoReducer from './promoReducer';

import { FILL_ME } from '../constants';


const rootReducer = combineReducers({
  test: testReducer,
  promoData: promoReducer
});

export default rootReducer;