import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  announcments: [],
};

export const fetchAnnouncments = createAsyncThunk(
  "announcments/fetchAnnouncments",
  async () => {
    try {
      console.log("fetching");
      const res = await fetch("/api/announcments", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      const data = await res.json();
      console.log(data);
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
      console.log(action.payload);
      state.announcments = action.payload.result;
      return state;
    });
  },
});

export default announcmentsSlice.reducer;
