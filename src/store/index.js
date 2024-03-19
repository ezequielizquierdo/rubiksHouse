import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import shopReducer from "../features/shop/shopSlice";
import cartReducer from "../features/shop/cartSlice";
import authReducer from "../features/auth/authSlice";
import { shopApi } from "../services/shopService";
import { authApi } from "../services/authService";
import { setupListeners } from "@reduxjs/toolkit/query";

export default configureStore({
  reducer: {
    counterReducer,
    shopReducer,
    cartReducer,
    authReducer,
    [shopApi.reducerPath]: shopApi.reducer, // Agrego el reducer
    [authApi.reducerPath]: authApi.reducer, // Agrego el reducer de la API
  },
  // Configuro el middleware con la función getDefaultMiddleware
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(shopApi.middleware)
      .concat(authApi.middleware),
});

setupListeners(configureStore.dispatch);
