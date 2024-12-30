import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// this createSlice api helps in generating complete slice of redux with action creators and reducers
// redux requires that we write all state updates immutably, by making copies of data & updating copies
// uses immer library internally to enable mutating syntax in redux

// for a counter state variable ,creare a slice which includes action creators and reducers

// action type ans second is a callback function which returns a promise
export const addAsyncPromise = createAsyncThunk(
  "counter/addAsyncPromise",
  async () => {
    // returns a promise
    return new Promise((resolve, reject) => {
      try {
        setTimeout(() => {
          // The value we return becomes the `fulfilled` action payload
          resolve(10);
        }, 5000);
    } catch (error) {
        reject(12);
    }
    });
  }
);

export const counterSlice = createSlice({
  name: "counter", // string name to identify slice, type
  initialState: {
    value: 0,
    status:""
  },
  reducers: {
    increment: (state) => {
      state.value += 1; // state change by creating copies
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      // Handle the action types defined by the addAsyncPromise thunk defined below.
      // This lets the slice reducer update the state with request status and results.
      .addCase(addAsyncPromise.pending, (state) => {
        state.status = "loading";
        state.value -= 100;
      })
      .addCase(addAsyncPromise.fulfilled, (state, action) => {
        state.status = "idle";
        console.log(action)
        state.value += 100 + action.payload;
    })
    .addCase(addAsyncPromise.rejected, (state,action) => {
        state.status = "failed";
        console.log(action)
        state.value += 100 - action.payload;
      });
  },
});

// A thunk is a specific kind of Redux function that can contain asynchronous logic.
// Thunks are written using two functions:

// An inner thunk function, which gets dispatch and getState as arguments
// The outer creator function, which creates and returns the thunk function
export const incrementAsync = (amount) => {
  return (dispatch, getState) => {
    // async operation happening
    setTimeout(() => {
      // resolved
      // after async operation it dispatches the incrementByAmount action with specified amount to redux store
      const currStateVal = getState().counter.value;
      console.log(currStateVal % 5);
      if (currStateVal % 5 === 0) {
        dispatch(incrementByAmount(currStateVal));
      } else {
        dispatch(incrementByAmount(3));
      }
    }, 1000);
  };
};

// action creators are created for each reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// export reducer function to store
export default counterSlice.reducer;
