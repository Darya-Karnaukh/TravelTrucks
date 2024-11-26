import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiCampers } from "../../config/apiCampers.js";

export const getCampers = createAsyncThunk(
  "campers/getAll",
  async (_, thunkAPI) => {
    try {
      const response = await apiCampers.get("/campers");
      return response.data.items;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
