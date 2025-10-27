import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./src/features/Auth/slices/AuthSlice";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

// Persist configuration setting
const persistConfig = {
  key: "devtinder-auth",
  storage,
  whitelist: ["user", "isLoggedIn"], // persist user and isLoggedIn
};

// Making our Auth reducer persistable
const persistedAuthReducer = persistReducer(persistConfig, authReducer);

// Creating the store
const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
      },
    }),
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
