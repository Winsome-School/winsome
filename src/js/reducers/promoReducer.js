import { FILL_ME } from '../constants';
import { promoData } from '../components/promo/promoData';

const initial = promoData;

export default function(state=promoData, action) {
  switch(action.type) {
    case FILL_ME:
      return state;
  }
  return state;
};