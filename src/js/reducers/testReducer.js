import { FILL_ME } from '../constants';

const initial = null;

export default function(state=initial, action) {
  switch(action.type) {
    case FILL_ME:
      return state;
  }
  return state;
};