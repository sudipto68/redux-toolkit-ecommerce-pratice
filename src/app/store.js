import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "../Redux/features/Product/ProductSlice";

export const store = configureStore({
  reducer: {
    products: ProductReducer,
  },
});
