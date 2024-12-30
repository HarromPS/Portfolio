import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../counter/_3_counterSlice";

// creating a redux store
export default configureStore({
  reducer: {
    counter: counterReducer
  }
});
