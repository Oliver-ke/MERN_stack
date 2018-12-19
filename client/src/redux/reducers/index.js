// this is the root reducers 
// the root ruducer is used to bring all reducer togerther

import {combineReducers} from 'redux'
import itemReducer from './itemReducer';

export default combineReducers({
    item: itemReducer,
    //login: loginReducer
})

//here we are just having one reducer for this app