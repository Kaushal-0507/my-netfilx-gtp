import { createSlice } from "@reduxjs/toolkit";

const tvSlice = createSlice({
  name: "tv",
  initialState: {
    tvShows: null,
    popularTV: null,
    topRatedTV: null,
    onTheAirTV: null,
    popularActor: null,
  },
  reducers: {
    addTVShows: (state, action) => {
      state.tvShows = action.payload;
    },
    addPopularTVShows: (state, action) => {
      state.popularTV = action.payload;
    },

    addTopRatedTVShows: (state, action) => {
      state.topRatedTV = action.payload;
    },
    addOnTheAirTVShows: (state, action) => {
      state.onTheAirTV = action.payload;
    },
    addPopularActors: (state, action) => {
      state.popularActor = action.payload;
    },
  },
});

export const {
  addTVShows,
  addPopularTVShows,
  addTopRatedTVShows,
  addOnTheAirTVShows,
  addPopularActors,
} = tvSlice.actions;
export default tvSlice.reducer;
