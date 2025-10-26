import { createSlice } from "@reduxjs/toolkit";
interface User {
  _id: string;
  firstName: string;
  lastName: string;
  emailId: string;
  password: string;
  skills: string[];
  age: number;
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
}

const initialState: AuthState = {
  user: null,
  isLoggedIn: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginUser: (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state.user = null
      state.isLoggedIn=false;
    },
  },
});
export const { loginUser, logout } = authSlice.actions;
export default authSlice.reducer;
