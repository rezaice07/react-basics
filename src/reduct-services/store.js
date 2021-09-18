import  {createStore} from 'redux'

import combineReducers from './reducers/reducerCombine'

const initialState={
    //count:0
}

export const store=createStore(
    combineReducers,
    initialState
)

