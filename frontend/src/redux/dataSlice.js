import { createSlice } from "@reduxjs/toolkit";

export const dataSlice = createSlice({
  name: "data",
  initialState: {
    videos: [],
  },
  reducers: {
    giveData: (state, action) => {
      state.videos = action.payload;
    },
  },
});

export const { giveData } = dataSlice.actions;
export default dataSlice.reducer;
