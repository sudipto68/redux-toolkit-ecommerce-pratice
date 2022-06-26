import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  status: "",
};

export const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      //if that action product has already in cart then if block will work
      const itemIndex = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.cart[itemIndex].quantity += 1;
      } else {
        const product = { ...action.payload, quantity: 1 };
        state.cart.push(product);
      }
    },
    removeFromCart(state, action) {
      return state.cart.filter((p) => p.id !== action.payload.id);
    },
    removeAll(state, action) {
      state.cart = [];
    },
  },
});

export const { addToCart, removeFromCart, removeAll } = CartSlice.actions;
export default CartSlice.reducer;
