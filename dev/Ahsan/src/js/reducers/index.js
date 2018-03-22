import { combineReducers } from 'redux';
import testReducer from './testReducer'

import { FILL_ME } from '../constants';

const rootReducer = combineReducers({
  test: testReducer
});

export default rootReducer;