import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  processor: {productName:'Bell'},
  motherboard: {},
  ram: {},
  powerSupplyUnit: {},
  storageDevice: {},
  monitor: {},
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
