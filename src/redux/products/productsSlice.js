import { createSlice } from "@reduxjs/toolkit";

export const productsSlice = createSlice({
  initialState: [],
  name: "products",
  reducers: {
    addProducts: (state, {payload}) => {
      state.length = 0;
      state.push(...payload.products);
    },
  },
});

export const { addProducts } = productsSlice.actions;

export const selectProducts = (state) => state.products;

export default productsSlice.reducer;
