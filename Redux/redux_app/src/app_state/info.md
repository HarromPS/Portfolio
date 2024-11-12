## Redux: 
1. A state managemen library which provides a centralized way to manage and update the state in a react application
2. Redux introduces concepts like actions, reducers, and the store to manage state and make it easier to test and debug your application.
3. Creates a single global object -> doesn't matter how deep a component is.
4. Allows you to add lifecycle hooks to components that don't support them by themselves (like DOM nodes).
5. Consistency through the application

### Actions: 
1. An action is a plain JS object describes changes/event in application
2. 'type' property: indicates type of action being performed/occured
3. 'payload' property: carries data
```javascript
// e.g 
const actionObject = {
    type: "addition",
    payload: 1
}
```

## Reducers
1. Arguments i.e current state + action are passed to it, it returns a new state.
2. it is a pure function, do not mutate state, instead returns a new state object.
```javascript
// e.g 
const countReducer = (state:{count=0}, action) => {
    if(actio.type === "addition"){
        return {action.payload + state.count};
    }
    return state.count;
}
```

## E.g: We have an app where we have 2 actions, 1. Money deposit, 2. Money Withdraw

> action-creators (folder: holding actions) 
>> index.js

#### First function

``` js
export const depositMoney = (amount)=>{
    // depositMoney is a action creator (parent)

    // 1. returns a function which takes a function as an argument 
    // 2. after taking the argument, it uses the dispatched function to send an action to store

    return (dispatch)=>{  // returns an arrow function, dispatch is an argument to it
                          // then dispatch function is called, it sends the action to store
        // dispatch function
        dispatch({
            type:'deposit',
            payload: amount
        })
    }

    // 3. dispatched: message to child caretaker
    // 4. when it is called it sends message with a type and payload
}


```

#### Second function

``` js
export const withdrawMoney = (amount)=>{
    return (dispatch)=>{
        dispatch({              // when action is dispatched to store
                                // reducer is called with current state & action to produce next state
            type:'withdraw',
            payload: amount
        })
    }
}
```


## Reducers 

> reducers
>> amountReducer.js

```js
// takes 2 arguments: state and action
// initial state is 0 if no state is provided by default
// action describes the type of action and payload, means data

// reducer is called by redux store to actually update state
// after the changes are done, it is updated on the UI.
export const amountReducer = (state=0, action)=>{
    // checks when the action creator calls the dispatched function, it is determined here, by reducer

    // by analysing action type, it returns new state

    if(action.type==='deposit'){
        return state + action.payload;
    }

    else if(action.type==='withdraw'){
        return state - action.payload;
    }

    else {
        // if nothing happens, return previous state
        return state;
    }
}
```

## Creating a Redux Store

- import all the reducers to one place
- using redux reducer combiner, combine all reducers, name it, export it

```js
import {combineReducers} from "redux";

// import all the reducer function in a single file to be combined into a single function 
import amountRedcer from './amountReducers';

// import reducer1 from "./reducer1.js";
// import reducer2 from "./reducer2.js";
// import reducer3 from "./reducer3.js";
// import reducer4 from "./reducer4.js";


/*

Turns an object whose values are different reducer functions, into a single reducer function. 
It will call every child reducer, and gather their results into a single state object,
whose keys correspond to the keys of the passed reducer functions.

*/

const reducers = combineReducers({
    amount: amountRedcer,
    // rateReducer: reducer2,
    // colorReducer: reducer3,
    // sizeReducer: reducer4,
})

export default reducers;
```

### Store

```js
// create a redux store

import {applyMiddleware} from "redux";
import { configureStore, Tuple } from '@reduxjs/toolkit'
import reducer from "./reducers/index";
import {thunk} from "redux-thunk";

// arguments, reducers, initial states and middleware functions, thunk is used for async functions implementations
export const store = configureStore({
    reducer: rootReducers,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

// now using create store, but now it is depercated 
export const store = createStore(rootReducers,{}, applyMiddleWare(thunk));
```


## Make the store available for the app
```js
import { Provider } from "react-redux";
import { store } from "./states/store";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

```

### Redux flow:

1. for e.g a user click (+) icon, an action should be taken by react to reflect the desired changes.
2. so 1st an action is created (with a type and payload), when clicked
3. that action is dispatched/send to the redux store
4. redux store calls reducer function(to actually update state)
5. reducer determines action and returns new state accordingly
6. after changes are made, it is rendered on the UI.

### State access: 

1. _After redux store is created and provided to the whole app._
2. _lets access the state using 'useSelector()' Hook._

#### Syntax:
```javascript

// Syntax: 
// arrow function with curly braces
const state = useSelector((state)=>{
                return state.state;
            })

// arrow function without curly braces
const state = useSelector((state)=> state.state)


// default way of getting any state in react, initial value is 0 
const [amount, setAmount] = useState(0);    

// how to get it from store
// remember this
const reducers = combineReducers({
    // amount is a state, named amount of amountReducer
    amount: amountRedcer,
});

// and amount reducer is the state, intial state is 0
export const amountReducer = (state=0, action)=>{
    // setAmount is applied here accordingly
}
```