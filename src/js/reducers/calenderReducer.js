import {ARROW_LEFT,ARROW_RIGHT} from '../constants';
import events from '../components/calender/Data'

const calenderReducer=function(state=0,action){
	switch(action.type){
		case ARROW_LEFT:
			if(state<=0){
				return state
			}
			else{
				return state-action.payload
			}
		case ARROW_RIGHT:
			if(state>=events.length-4){
				return events.length-4;
 
			}
			else{
				return state+action.payload
			}
	}
	return state;
}

export default calenderReducer;