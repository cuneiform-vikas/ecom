import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      const existingItem = state.cart.find((item) => item.id === payload.id);

      if (existingItem) {
        state.cart = state.cart.map((item) =>
          item.id === payload.id ? { ...item, count: item.count + 1 } : item
        );
      } else {
        state.cart = [...state.cart, { ...payload, count: 1 }];
      }
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
        item.id === payload
          ? { ...item, count: Math.max(item.count - 1, 1) }
          : item
      );
    },
  },
});

export const selectCart = (state) => state.cart.cart;

export const { addToCart, removeFromCart, increaseCount, decreaseCount } =
  cartSlice.actions;

export default cartSlice.reducer;
