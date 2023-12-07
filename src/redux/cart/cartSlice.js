import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      state.cart = [...state.cart, payload];
    },
  },
});

export const selectCart = (state) => state.cart.cart;

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
