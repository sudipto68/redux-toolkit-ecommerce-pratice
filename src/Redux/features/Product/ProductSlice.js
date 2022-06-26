import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { STATUS } from "../../../constants/Status";
const base_url = "https://fakestoreapi.com/";

const initialState = {
  status: "",
  products: [],
};

const productSlice = createSlice({
  name: "products",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchProduct.pending, (state, action) => {
        state.status = STATUS.LOADING;
      })
      .addCase(fetchProduct.fulfilled, (state, action) => {
        state.products = action.payload;
        state.status = STATUS.IDLE;
      })
      .addCase(fetchProduct.rejected, (state, action) => {
        state.status = STATUS.ERROR;
      });
  },
});

//fetching product using build in thunk on toolkit

export const fetchProduct = createAsyncThunk("fetch/prodcuts", async () => {
  const data = await axios.get(`${base_url}products`).then((res) => res.data);
  return data;
});

export default productSlice.reducer;
