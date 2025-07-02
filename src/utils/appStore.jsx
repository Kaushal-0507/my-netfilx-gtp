import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import movieReducer from "./movieSlice";
import tvReducer from "./tvSlice";
import filterReducer from "./filterSlice";
import gptReducer from "./gptSlice";

const Store = configureStore({
  reducer: {
    user: userReducer,
    movie: movieReducer,
    tv: tvReducer,
    filter: filterReducer,
    gpt: gptReducer,
  },
});

export default Store;
