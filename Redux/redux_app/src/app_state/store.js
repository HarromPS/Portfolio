// create a redux store

// import {applyMiddleware} from "redux";
import { configureStore} from '@reduxjs/toolkit'
import rootReducers from "./reducers/index";
import {thunk} from "redux-thunk";

// arguments: reducers, initial state and middleware functions, thunk is used for async functions implementations-> basically is a middleware
export const store = configureStore({
    reducer: rootReducers,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});