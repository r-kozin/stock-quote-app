import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  quoteData: [],
  status: "idle",
  error: null,
  ticker: "",
  darkMode: "light",
  companyName: {
    status: "idle",
    data: "",
    error: null
  },
};

export const fetchQuote = createAsyncThunk( //get quote data
  "quote/fetchQuote", //action type, automatically creates /pending etc.
  async (ticker) => { //pass through ticker
    const response = await axios.get(`https://nodeserver-test-d8gu.onrender.com/api/quote/${ticker}`); // fetch
    return response.data; //return data from response
  }
);

export const fetchCompanyName = createAsyncThunk(
    "quote/fetchCompanyName",
    async (ticker) => {
    let companyName 
      const response = await axios.get(`https://nodeserver-test-d8gu.onrender.com/api/stockName/${ticker}`);
      for (let i=0; i<response.data.length; i++) {
        if(response.data[i].symbol === ticker){
            companyName = response.data[i].name;
        }
      return companyName;
    }}
  );

const quoteSlice = createSlice({
  name: "quote",
  initialState,
  reducers: {
    updateSymbol(state, action) {
      state.ticker = action.payload;
    },
    toggleTheme(state) {
        if (state.darkMode === "light"){
            state.darkMode = "dark";
        } else if (state.darkMode === "dark"){
            state.darkMode = "light";
      }}
  },
  extraReducers: (builder) => {
    builder.addCase(fetchQuote.fulfilled, (state, action) => {
      state.quoteData = action.payload;
      state.status = "succeeded";
    });
    builder.addCase(fetchQuote.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchQuote.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    });
    builder.addCase(fetchCompanyName.fulfilled, (state, action) => {
        state.companyName.data = action.payload;
        state.companyName.status = "succeeded";
      });
      builder.addCase(fetchCompanyName.pending, (state) => {
        state.companyName.status = "loading";
      });
      builder.addCase(fetchCompanyName.rejected, (state, action) => {
        state.companyName.status = "failed";
        state.companyName.error = action.error.message;
      });
  },
});

export const { updateSymbol, toggleTheme } = quoteSlice.actions;

export default quoteSlice.reducer;
