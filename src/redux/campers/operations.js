import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiCampers } from "../../config/apiCampers.js";

export const getCampers = createAsyncThunk(
  "campers/getAll",
  async ({ page = 1, limit = 4 }, thunkAPI) => {
    try {
      const response = await apiCampers.get("/campers", {
        params: { page, limit },
      });
      return { items: response.data.items, total: response.data.total };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getCamperById = createAsyncThunk(
  "campers/getById",
  async (id, thunkAPI) => {
    try {
      const response = await apiCampers.get(`/campers/${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
