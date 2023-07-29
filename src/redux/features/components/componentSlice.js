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
    resetComponents: (state) => {
        state.Processor = {};
        state.Motherboard = {};
        state.RAM = {};
        state.PowerSupplyUnit = {};
        state.StorageDevice = {};
        state.Monitor = {};
    },
  },
});

export const { setComponent, resetComponents } = componentSlice.actions;

export default componentSlice.reducer;
