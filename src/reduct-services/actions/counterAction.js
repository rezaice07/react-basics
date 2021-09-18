import {INCREAMENT_VALUE,DECREAMENT_VALUE} from '../types';

export const Increament=(value)=>{
    return {
        type:INCREAMENT_VALUE,
        payload:value
    }
}

export const Decreament=(value)=>{
    return {
        type:DECREAMENT_VALUE,
        payload:value
    }
}