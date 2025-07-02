import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";

// Configure the Redux store with the combined rootReducer
export const store = configureStore({
  reducer: rootReducer,
  // Optionally, you can add middleware or devTools options here
});

// Infer the RootState and AppDispatch types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;