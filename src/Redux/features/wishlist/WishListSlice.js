import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wishList: JSON.parse(localStorage.getItem("wishlist")) ?? [],
};

export const wishListSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishList(state, action) {
      state.wishList.push(action.payload);
      localStorage.setItem("wishlist", JSON.stringify(state.wishList));
    },
    removeFromWishList(state, action) {
      state.wishList.pop(action.payload);
      localStorage.setItem("wishlist", JSON.stringify(state.wishList));
    },
    removeAll(state) {
      state.wishList = [];
      localStorage.setItem("wishlist", JSON.stringify(state.wishList));
    },
  },
});

export const { addToWishList, removeFromWishList, removeAll } =
  wishListSlice.actions;
export default wishListSlice.reducer;
