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
}

const initialState: AuthState = {
  user: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});
export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
