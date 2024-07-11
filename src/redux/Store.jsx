import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/users/userSlice";
import baseApi from "./features/baseApi/baseApi";

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    users: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});
