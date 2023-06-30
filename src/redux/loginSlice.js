import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
function getlocalstoragedata() {
  let islogin = localStorage.getItem("islogin");
  if (islogin) {
    return true;
  }
  return false;
}
export const login = createAsyncThunk(
  "login",
  async ({ values, navigate }, { dispatch }) => {
    try {
      const response = await axios.post(
        `http://localhost:5000/user/login`,
        values
      );
      const data = await response;
      if (data.status === 200) {
        dispatch(setlogin(true));
        navigate("/");
      }
    } catch (error) {
      console.log("error", error);
    }
  }
);

export const loginSlice = createSlice({
  name: "login",
  initialState: {
    islogin: getlocalstoragedata(),
  },
  reducers: {
    setlogin: (state, action) => {
      localStorage.setItem("isLogin", "true");
      state.islogin = action.payload;
    },
    setlogout: (state, action) => {
      localStorage.removeItem("isLogin");
      state.islogin = false;
    },
  },
  extraReducers: {},
});
export const { setlogin, setlogout } = loginSlice.actions;
export default loginSlice.reducer;
