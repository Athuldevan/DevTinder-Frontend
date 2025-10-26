import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./src/features/Auth/slices/AuthSlice";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
import persistStore from "redux-persist/es/persistStore";
import storage from "redux-persist/lib/storage";

//Persist configuration setting
// const persistConfig = {
//   key: "auth-persist",
//   storage,
//   blacklist: ["isLoggedIn", "user" ],
// };

//Making out Auth reducer persistable
// const persistedAuthReducer = persistReducer(persistConfig, authReducer);

//creting the store
const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware({
  //     serializableCheck: {
  //       // 👇 this line tells Redux to ignore redux-persist actions
  //       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  //     },
  //   }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);
export default store;
