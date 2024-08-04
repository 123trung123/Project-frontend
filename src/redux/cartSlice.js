import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const { id } = action.payload;
      const existingItem = state.cart.find((item) => item.id === id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    deleteFromCart(state, action) {
      const { id } = action.payload;
      state.cart = state.cart.filter((item) => item.id !== id);
    },
    updateCartItem(state, action) {
      const { id, flag } = action.payload;
      const existingItem = state.cart.find((item) => item.id === action.payload);

      if (existingItem) {
        if (flag === 0 && existingItem.quantity > 1) {
          existingItem.quantity -= 1;
        } else {
          existingItem.quantity += 1;
        }
      }
    },
  },
});

export const { addToCart, deleteFromCart, updateCartItem } = cartSlice.actions;
export default cartSlice.reducer;
