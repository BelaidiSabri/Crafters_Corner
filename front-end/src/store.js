import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slice/authSlice";
import profileReducer from "./slice/profileSlice";
import loginReducer from "./slice/loginSlice";
import thunk from "redux-thunk";
import productSlice from "./slice/productSlice";
import ArtisanProductsSlice from "./slice/artisanProductSlice"

export default configureStore({
  reducer: {
    auth: authReducer,
    profile: profileReducer,
    login: loginReducer,
    products :productSlice,
    ArtisanProducts : ArtisanProductsSlice
  },
  middleware: [thunk],
});