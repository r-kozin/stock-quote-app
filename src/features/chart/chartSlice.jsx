import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
  chartData: [],
  status: "idle",
  error: null,
  visible: false,
};

export const fetchChartData = createAsyncThunk(
  //get quote data
  "chart/fetchChartData", //action type, automatically creates /pending etc.
  async (ticker) => {
      const chartDataResponse = await axios.get(
        `https://nodeserver-test-d8gu.onrender.com/api/chart/${ticker}`
      );
      const chartData = chartDataResponse.data;
    return chartData; //return data from response
  }
);

const chartSlice = createSlice({
  name: "chart",
  initialState,
  reducers: {
    updateChartVisibility(state) {
      state.visible = !state.visible;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchChartData.fulfilled, (state, action) => {
      state.chartData = action.payload;
      state.status = "succeeded";
    });
    builder.addCase(fetchChartData.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchChartData.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    });
  },
});

export const { updateChartVisibility } = chartSlice.actions;

export default chartSlice.reducer;
