import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
// export const getallmovies = createAsyncThunk("getallmovies", async () => {
//   const token = localStorage.getItem("token");
//   const option = {
//     Headers: {
//       Authorization: token,
//     },
//   };
//   try {
//     const response = await axios.get(
//       `http://localhost:5000/movie/getAllMovie`,
//       option
//     );
//     console.log("response data", response);
//     return response.data.data;
//   } catch (error) {
//     console.log("error", error);
//   }
// });
export const getallmovies = createAsyncThunk("getallmovies", async () => {
  try {
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0OWE4ZGQ5YjIyMzZkYTg5MTIzYmU1NSIsImVtYWlsIjoidmFpYmhhdmlAZ21haWwuY29tIiwiaWF0IjoxNjg4MTExNDkzLCJleHAiOjE2ODgxNDAyOTN9.uWyDPcgvtH-jx9jBq4kKE5ogq9rBbCH_J_Z3300FaAk"; // Retrieve token from localStorage
    // const token = localStorage.getItem("token"); // Retrieve token from localStorage
    const config = {
      headers: {
        Authorization: token,
      },
    };
    const response = await axios.get(
      `http://localhost:5000/movie/getAllMovie`,
      config
    );
    return response;
    console.log("response", response);
  } catch (error) {
    console.log("error", error);
  }
});

export const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    movieslist: [],
    loading: false,
  },
  reducers: {},
  extraReducers: {
    [getallmovies.pending]: (state, action) => {
      state.loading = true;
    },
    [getallmovies.fulfilled]: (state, action) => {
      state.loading = false;
      state.movieslist = action.payload;
    },
    [getallmovies.rejected]: (state, action) => {
      state.loading = false;
      state.movieslist = [];
    },
  },
});
// export const {getallmovies}= moviesSlice.actions
export default moviesSlice.reducer;
