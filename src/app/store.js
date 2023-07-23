import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "../Redux/features/Product/ProductSlice";
import CartReducer from "../Redux/features/Cart/CartSlice";
import WishListReducer from "../Redux/features/wishlist/WishListSlice";
import FilterProductReducer from "../Redux/features/ProductFilter/FilterSlice";

export const store = configureStore({
  reducer: {
    products: ProductReducer,
    cart: CartReducer,
    wishlist: WishListReducer,
    productFilter: FilterProductReducer,
  },
});
