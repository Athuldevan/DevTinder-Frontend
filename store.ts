import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./src/features/Auth/slices/AuthSlice"
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
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
