import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      state.cart = [...state.cart, payload];
    },
    removeFromCart: (state, { payload }) => {
      state.cart = state.cart.filter((item) => item.id !== payload);
    },
    increaseCount: (state, { payload }) => {
      state.cart = state.cart.map((item) =>
        item.id === payload ? { ...item, count: item.count + 1 } : item
      );
    },
    decreaseCount: (state, { payload }) => {
      state.cart = state.cart.map((item) =>
        item.id === payload ? { ...item, count: item.count - 1 } : item
      );
    },
  },
});

export const selectCart = (state) => state.cart.cart;
export const selectItems = (state) => state.cart.items;

export const {
  setItems,
  addToCart,
  removeFromCart,
  increaseCount,
  decreaseCount,
} = cartSlice.actions;

export default cartSlice.reducer;
