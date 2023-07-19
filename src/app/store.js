import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";

// create store
const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  middleware: (getDefaultMiddlewares) => getDefaultMiddlewares(),
  devTools: true,
});

// export
export default store;
