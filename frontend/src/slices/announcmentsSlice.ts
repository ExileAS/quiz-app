import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  announcments: [],
};

export const fetchAnnouncments = createAsyncThunk(
  "announcments/fetchAnnouncments",
  async () => {
    try {
      const res = await fetch("/api/announcments", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      const data = await res.json();
      return data;
    } catch (err) {
      console.log(err);
    }
  }
);

const announcmentsSlice = createSlice({
  initialState,
  name: "announcment",
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchAnnouncments.fulfilled, (state, action) => {
      state.announcments = action.payload;
      return state;
    });
  },
});

export default announcmentsSlice.reducer;
