import { createSlice } from "@reduxjs/toolkit";

export const menuSlice = createSlice({
  name: "menuSlice",
  initialState: {
    menuopen: false,
  },
  reducers: {
    openMenu: (state, action) => {
      state.menuopen = true;
    },
    closemenu: (state, action) => {
      state.menuopen = false;
    },
  },
});
export const { openMenu, closemenu } = menuSlice.actions;
export default menuSlice.reducer;
