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


export const withdrawMoney = (amount)=>{
    return (dispatch)=>{
        dispatch({              // when action is dispatched to store
                                // reducer is called with current state & action to produce next state
            type:'withdraw',
            payload: amount
        })
    }
}

export const addNumber = (number)=>{
    return (dispatch)=>{
        dispatch({              
            type:'add',
            payload: number
        })
    }
}
export const subtractNumber = (number)=>{
    return (dispatch)=>{
        dispatch({              
            type:'subtract',
            payload: number
        })
    }
}