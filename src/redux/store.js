import { configureStore } from "@reduxjs/toolkit";
import menuSlice from "../redux/menuSlice";
import loginSlice from "../redux/loginSlice";
import signupSlice from "../redux/signupSlice";
import moviesSlice from "../redux/moviesSlice";

const store = configureStore({
  reducer: {
    menu: menuSlice,
    login: loginSlice,
    signup: signupSlice,
    movies: moviesSlice,
  },
});
export default store;
