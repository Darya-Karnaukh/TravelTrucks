import { createSlice } from "@reduxjs/toolkit";
import { getCampers } from "./operations.js";

const initialState = {
  campers: [],
  total: 0,
  loading: false,
  error: null,
};

const slice = createSlice({
  name: "campers",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getCampers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getCampers.fulfilled, (state, action) => {
        state.loading = false;
        const existingIds = new Set(state.campers.map((camper) => camper.id));
        const newItems = action.payload.items.filter(
          (item) => !existingIds.has(item.id)
        );
        state.campers = [...state.campers, ...newItems];
        state.total = action.payload.total;
      })
      .addCase(getCampers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Something went wrong";
      });
  },
});

export const campersReducer = slice.reducer;
