import { configureStore } from "@reduxjs/toolkit";
import componentReducer from "./features/components/componentSlice";

const store = configureStore({
  reducer: {
    component: componentReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export default store;
