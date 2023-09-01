import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  stockNews: [],
  status: "idle",
  error: null,
  visible: false,
};

export const fetchNews = createAsyncThunk(
  //get quote data
  "news/fetchNews", //action type, automatically creates /pending etc.
  async (ticker) => {
    //pass through ticker

    const response = await axios.get(
      `https://nodeserver-test-d8gu.onrender.com/api/news/${ticker}`
    );
    return response.data; //return data from response
  }
);

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    updateNewsVisibility(state) {
      state.visible = !state.visible;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchNews.fulfilled, (state, action) => {
      state.stockNews = action.payload;
      state.status = "succeeded";
    });
    builder.addCase(fetchNews.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchNews.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    });
  },
});

export const { updateNewsVisibility } = newsSlice.actions;

export default newsSlice.reducer;
