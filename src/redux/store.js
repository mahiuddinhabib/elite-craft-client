import { configureStore } from "@reduxjs/toolkit";
import componentReducer from "./features/components/componentSlice";

const store = configureStore({
  reducer: {
    component: componentReducer,
  },
});

export default store;
