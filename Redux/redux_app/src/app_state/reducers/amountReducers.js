// takes 2 arguments: state and action
// initial state is 0 if no state is provided by default
// action describes the type of action and payload, means data

// reducer is called by redux store to actually update state
// after the changes are done, it is updated on the UI.

const intialState = 0;
const amountReducer = (state = intialState, action) => {
    // checks when the action creator calls the dispatched function, it is determined here, by reducer

    // by analysing action type, it returns new state

    if (action.type === 'deposit') {
        return state + action.payload;
    }

    else if (action.type === 'withdraw') {
        return state - action.payload;
    }

    else {
        // if nothing happens, return previous state
        return state;
    }
}

export default amountReducer;