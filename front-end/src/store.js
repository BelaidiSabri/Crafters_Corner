import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slice/authSlice";
import profileReducer from "./slice/profileSlice";
import loginReducer from "./slice/loginSlice";
import thunk from "redux-thunk";
import productSlice from "./slice/productSlice";

export default configureStore({
  reducer: {
    auth: authReducer,
    profile: profileReducer,
    login: loginReducer,
    products :productSlice,
  },
  middleware: [thunk],
});

