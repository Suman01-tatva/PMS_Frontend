import { combineReducers } from "@reduxjs/toolkit";
// import usersReducer from "../features/users/usersSlice";
import authReducer from "../features/auth/authSlice";
// import homeReducer from "../features/home/homeSlice";
// Import other reducers as needed

const rootReducer = combineReducers({
//   users: usersReducer,
  auth: authReducer,
//   home: homeReducer,
  // Add other reducers here
});

export default rootReducer;