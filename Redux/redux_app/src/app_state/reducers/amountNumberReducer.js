// number reducer function

const initialState = 0;
const amountNumberReducer = (state=initialState, action) =>{
    if(action.type === 'add'){
        return state + action.payload;
    }else if(action.type === 'subtract'){
        return state - action.payload;
    }
    else{
        return state;
    }
}

export default amountNumberReducer;