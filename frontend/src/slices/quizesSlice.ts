import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  quizes: [],
  fetchStatus: "idle",
};

export const fetchQuizes = createAsyncThunk("quizes/fetchQuizes", async () => {
  try {
    const res = await fetch("/api/quizes", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    console.log(data);
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
    builder
      .addCase(fetchQuizes.fulfilled, (state, action) => {
        state.quizes = action.payload.result;
        state.fetchStatus = "success";
        return state;
      })
      .addCase(fetchQuizes.pending, (state, action) => {
        state.fetchStatus = "loading";
        return state;
      })
      .addCase(fetchQuizes.rejected, (state, action) => {
        state.fetchStatus = "failed";
        return state;
      });
  },
});

export default announcmentsSlice.reducer;

export const selectQuizById = (state, id) =>
  state.quiz.quizes.find((item) => item.id === id);
