import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import loaderReducer from "../common/loader/loaderSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  loader: loaderReducer,
});

export default rootReducer;