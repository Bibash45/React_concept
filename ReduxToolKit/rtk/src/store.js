import { configureStore,combineReducers } from "@reduxjs/toolkit";
import cartReducer from "./features/cart/cartSlice.js";
import modalReducer from "./features/model/modelSlice.js";

const rootReducer = combineReducers({
  cart: cartReducer,
  modal: modalReducer,
});
export const store = configureStore({
  reducer: rootReducer,
});
