import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "../Redux/features/Product/ProductSlice";
import CartReducer from "../Redux/features/Cart/CartSlice";

export const store = configureStore({
  reducer: {
    products: ProductReducer,
    cart: CartReducer,
  },
});
