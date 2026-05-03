import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk(
  "products/fetch",
  async () => {
    const res = await axios.get("https://dummyjson.com/products");
    return res.data.products;
  }
);

const productSlice = createSlice({
  name: "products",
  initialState: { items: [], filtered: [] },
  reducers: {
    search: (state, action) => {
      state.filtered = state.items.filter(p =>
        p.title.toLowerCase().includes(action.payload.toLowerCase())
      );
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.items = action.payload;
      state.filtered = action.payload;
    });
  },
});

export const { search } = productSlice.actions;
export default productSlice.reducer;
