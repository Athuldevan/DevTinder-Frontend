import { createSlice } from "@reduxjs/toolkit";
interface User {
  _id?: string;
  firstName: string;
  lastName: string;
  emailId: string;
  password: string;
  skills?: string[];
  age?: number;
  about?: string;
  gender?: string;
  photoUrl?: string;
  createdAt?: string;
  updatedAt?: string;
  __v?: number;
}
interface AuthState {
  user: User | null;
  isLoggedIn?: boolean;
  token?: string | null;
}

const initialState: AuthState = {
  user: null,
  isLoggedIn: false,
  token: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginUser: (state, action) => {
      // Accept either a user object or an object { user, token }
      const payload = action.payload;
      if (payload && typeof payload === "object" && (payload.user || payload.token)) {
        state.user = payload.user ?? payload;
        state.token = payload.token ?? null;
      } else {
        state.user = payload;
      }
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state.user = null
      state.isLoggedIn=false;
      state.token = null;
    },
  },
});
export const { loginUser, logout } = authSlice.actions;
export default authSlice.reducer;
