import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const base_url = "https://fakestoreapi.com/";

const initialState = {
  status: "",
  products: [],
};

const productSlice = createSlice({
  name: "products",
  initialState,
  extraReducers: () => {},
});

const getProduct = createAsyncThunk("fetch/prodcuts", () => {});

export default productSlice.reducer;
