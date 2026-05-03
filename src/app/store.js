import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cartSlice";
import productReducer from "../features/productSlice";
import authReducer from "../features/authSlice";

export default configureStore({
  reducer: {
    cart: cartReducer,
    products: productReducer,
    auth: authReducer,
  },
});
