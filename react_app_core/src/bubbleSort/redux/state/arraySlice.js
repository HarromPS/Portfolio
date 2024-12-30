import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

export const arraySlice = createSlice({
  name: "array",
  initialState: {
    value: [],
    status: null,
  },
  reducers: {
    generateArray: (state, action) => {
      let size = action.payload;
      // initializing array of size "size" having random numbers from 1 to 100
      let tempArray = [];
      while (size--) {
        let obj = {
          id: uuidv4(),
          ele: Math.floor(Math.random() * 100),
        };
        tempArray.push(obj); // key value pair
      }
      state.value = tempArray.slice();
      state.status = null;
    },

    checkSortArray: (state) => {
      if (state.value.length === 0) return;

      let flag = 0; // sorted
      // perform the bubble sort and return the array after every pass
      for (let i = 0; i < state.value.length - 1; i++) {
        if (state.value[i].ele > state.value[i + 1].ele) {
          flag = 1; // unsorted
          break;
        }
      }
      state.status = flag === 0 ? "sorted" : "unsorted"; // Modify the draft
      console.log(state.status)

      //   return { ...state, status: flag ? "sorted" : "unsorted" }; // Explicitly returning
    },

    moveLeft: (state, action) => {
      let i = parseInt(action.payload); // index of element to move
      let size = state.value.length;
      // perform shift left for this element
      if (i - 1 < 0) {
        let temp = state.value[i].ele;
        state.value[i].ele = state.value[size - 1].ele;
        state.value[size - 1].ele = temp;
      } else {
        let temp = state.value[i].ele;
        state.value[i].ele = state.value[i - 1].ele;
        state.value[i - 1].ele = temp;
      }
      state.status = null;
    },
    moveRight: (state, action) => {
      let i = parseInt(action.payload); // index of element to move
      let size = state.value.length;
      // perform shift right for this element
      if (i + 1 > size - 1) {
        let temp = state.value[i].ele;
        state.value[i].ele = state.value[0].ele;
        state.value[0].ele = temp;
      } else {
        let temp = state.value[i].ele;
        state.value[i].ele = state.value[i + 1].ele;
        state.value[i + 1].ele = temp;
      }
      state.status = null;
    },

    resetArray: (state) => {
      state.value = [];
      state.status = null;
    },
  },
});

// actions are generated and exported
export const {
  checkSortArray,
  generateArray,
  moveLeft,
  moveRight,
  resetArray,
} = arraySlice.actions;

// export reducer to combine with store
export default arraySlice.reducer;
