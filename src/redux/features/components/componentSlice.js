import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  processor: "",
  motherboard: "",
  RAM: "",
  powerSupplyUnit: "",
  storageDevice: "",
  monitor: "",
};

const componentSlice = createSlice({
  name: "component",
  initialState,
  reducers: {
    setComponent: (state, action) => {

    },
    resetComponents: (state) => {
        
    },
  },
});

export const { setComponent, resetComponents } = componentSlice.actions;

export default componentSlice.reducer;
