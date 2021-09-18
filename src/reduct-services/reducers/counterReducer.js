
import {INCREAMENT_VALUE,DECREAMENT_VALUE} from '../types';

const initalState={
    count:5
}


export default function (state=initalState,action){

    switch(action.type){
        case INCREAMENT_VALUE:
            return {
                ...state,
                count:state.count+action.payload
            }

        case DECREAMENT_VALUE:
            return {
                ...state,
                count:state.count-action.payload
            }

            default:
                return state
    }
}
