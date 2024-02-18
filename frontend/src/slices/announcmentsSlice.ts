import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  announcments: [],
  fetchStatus: "idle",
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
    builder
      .addCase(fetchAnnouncments.fulfilled, (state, action) => {
        state.announcments = action.payload.result;
        state.fetchStatus = "success";
        return state;
      })
      .addCase(fetchAnnouncments.pending, (state, action) => {
        state.fetchStatus = "loading";
        return state;
      })
      .addCase(fetchAnnouncments.rejected, (state, action) => {
        state.fetchStatus = "failed";
        return state;
      });
  },
});

export default announcmentsSlice.reducer;

export const selectAnnouncmentById = (state, id) =>
  state.announcment.announcments.find((item) => item.id === id);
