import { configureStore } from "@reduxjs/toolkit";
import { campersReducer } from "./campers/slice.js";
import favoritesReducer from "./favorites/slice.js";
export const store = configureStore({
  reducer: {
    favorites: favoritesReducer,
    campers: campersReducer,
  },
});
