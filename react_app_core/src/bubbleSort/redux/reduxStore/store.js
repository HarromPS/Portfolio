import { configureStore } from "@reduxjs/toolkit";
import arrayReducer from "../state/arraySlice";

export default configureStore({
  reducer: { array: arrayReducer },
});
