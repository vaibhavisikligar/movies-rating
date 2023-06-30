import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const signup = createAsyncThunk(
  "signup",
  async ({ values, navigate }, { dispatch }) => {
    try {
      const response = await axios.post(
        `http://localhost:5000/user/signup`,
        values
      );
      const data = await response;
      if (data.status === 200) {
        dispatch(setsignup(true));
        navigate("/login");
      }
    } catch (error) {
      console.log("error", error);
    }
  }
);

export const signupSlics = createSlice({
  name: "signup",
  initialState: {
    issignup: false,
  },
  reducers: {
    setsignup: (state, action) => {
      state.issignup = action.payload;
    },
  },
});
export const { setsignup } = signupSlics.actions;
export default signupSlics.reducer;
