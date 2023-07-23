const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  searchedProduct: "",
  category: "",
};

const filterSlice = createSlice({
  name: "filterProduct",
  initialState,
  reducers: {
    setSearchProduct: (state, action) => {
      state.searchedProduct = action.payload;
    },
    setCategory: (state, action) => {
      state.category = action.payload;
    },
  },
});

export const { setCategory, setSearchProduct } = filterSlice.actions;
export default filterSlice.reducer;
