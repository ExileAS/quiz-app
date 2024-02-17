import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  quizes: [],
};

export const fetchQuizes = createAsyncThunk("quizes/fetchQuizes", async () => {
  try {
    const res = await fetch("/api/quizes", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
});

const announcmentsSlice = createSlice({
  initialState,
  name: "quiz",
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchQuizes.fulfilled, (state, action) => {
      state.quizes = action.payload;
      return state;
    });
  },
});

export default announcmentsSlice.reducer;
