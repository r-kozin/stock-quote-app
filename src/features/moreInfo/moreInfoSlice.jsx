import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  moreInfoData: [],
  status: "idle",
  error: null,
  visible: false,
};

export const fetchQuoteMoreInfo = createAsyncThunk(
    "moreInfo/fetchQuoteMoreInfo",
    async (ticker) => {
      const response = await axios.get(`https://nodeserver-test-d8gu.onrender.com/api/moreInfo/${ticker}`);
      return response.data;
    }
  );

const moreInfoSlice = createSlice({
  name: "moreInfo",
  initialState,
  reducers: {
    updateMoreInfoVisibility(state) {
        state.visible = !state.visible;
      },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchQuoteMoreInfo.fulfilled, (state, action) => {
      console.log("attempting to change null to N/A");
      let metrics = Object.entries(action.payload.metric);
      let metricsObj = {};
      console.log(metrics);
      metrics.forEach((metric) => {
        if (metric[1] === null) {
          metric[1] = "N/A";
        }
        metricsObj[metric[0]] = metric[1];
        console.log(metric);
      });
      console.log(metricsObj);
      state.moreInfoData = action.payload;
      state.moreInfoData.metric = metricsObj;
        state.status = "succeeded";
      });
      builder.addCase(fetchQuoteMoreInfo.pending, (state) => {
        state.status = "loading";
      });
      builder.addCase(fetchQuoteMoreInfo.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

// export const { reducerName } = moreInfoSlice.actions; <-- if I add any reducers

export const {updateMoreInfoVisibility, setNulltoNA} = moreInfoSlice.actions;

export default moreInfoSlice.reducer;
