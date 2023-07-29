import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  Processor: {},
  Motherboard: {},
  RAM: {},
  PowerSupplyUnit: {},
  StorageDevice: {},
  Monitor: {},
};

const componentSlice = createSlice({
  name: "component",
  initialState,
  reducers: {
    setComponent: (state, action) => {
      const { category, component } = action.payload;
      state[category] = component;
    },
    resetComponent: (state, action) => {
      state[action.payload.category]={};
    },
  },
});

export const { setComponent, resetComponent } = componentSlice.actions;

export default componentSlice.reducer;
