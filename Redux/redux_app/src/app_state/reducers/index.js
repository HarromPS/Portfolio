import {combineReducers} from "redux";

// import all the reducer functions in a single file to be combined into a single function 
import amountReducer from './amountReducers';
import amountNumberReducer from './amountNumberReducer';

// import reducer1 from "./reducer1.js";
// import reducer2 from "./reducer2.js";
// import reducer3 from "./reducer3.js";
// import reducer4 from "./reducer4.js";


/*

Turns an object whose values are different reducer functions, into a single reducer function. 
It will call every child reducer, and gather their results into a single state object,
whose keys correspond to the keys of the passed reducer functions.

*/

const rootReducers = combineReducers({
    amount: amountReducer,
    amountNumber: amountNumberReducer
    // rateReducer: reducer2,
    // colorReducer: reducer3,
    // sizeReducer: reducer4,
});

export default rootReducers;



