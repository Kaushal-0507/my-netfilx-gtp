import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: false,
  reducers: {
    showGPTPage: (state) => !state,

    setGPTPage: (state) => false,
  },
});

export const { showGPTPage, setGPTPage } = gptSlice.actions;
export default gptSlice.reducer;
