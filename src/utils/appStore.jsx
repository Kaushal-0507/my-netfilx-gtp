import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import movieReducer from "./movieSlice";
import tvReducer from "./tvSlice";
import filterReducer from "./filterSlice";
import gptReducer from "./gptSlice";
import searchResultReducer from "./searchResultSlice";

const Store = configureStore({
  reducer: {
    user: userReducer,
    movie: movieReducer,
    tv: tvReducer,
    filter: filterReducer,
    gpt: gptReducer,
    searchResult: searchResultReducer,
  },
});

export default Store;
