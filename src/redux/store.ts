import { configureStore } from "@reduxjs/toolkit";
import form from './slices/formSlice';
import global from "./slices/globalSlice";

export const store = configureStore({
  reducer: { global, form },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
