import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { timeConverter, alreadyFavoritedAlert } from "../functions/functions";
import axios from "axios";

const initialState = {
  favoritesList: [],
  error: null,
  status: "idle",
};

export const updateFavorites = createAsyncThunk(
  //get quote data
  "favorites/updateFavorites", //action type, automatically creates /pending etc.
  async (favoriteslist) => {
    const updatedFavoritesList = [];
    //pass through favoriteslist
    for (let i = 0; i < favoriteslist.length; i++) {
      const response = await axios.get(
        `https://nodeserver-test-d8gu.onrender.com/api/quote/${favoriteslist[i].stockTicker}`
      ); // fetch
      let updatedFavorite = {
        companyName: "",
        stockTicker: "",
        lastPrice: "",
        lastPriceChange: "",
        lastPChangePercent: "",
        timeStamp: "",
        id: "",
      }
      try {
        updatedFavorite.companyName = favoriteslist[i].companyName;
        updatedFavorite.stockTicker = favoriteslist[i].stockTicker;
        updatedFavorite.lastPrice = response.data.c;
        updatedFavorite.lastPriceChange = response.data.d;
        updatedFavorite.lastPChangePercent = response.data.dp;
        updatedFavorite.timeStamp = timeConverter(response.data.t, "favorite");
        updatedFavorite.id = favoriteslist[i].id;
        updatedFavoritesList.push(updatedFavorite);
      } catch (err) {
        console.log(err);
      }
    }
    return updatedFavoritesList; //return updated favorites list
  }
);

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavorite(state, quoteState) {
      if (
        state.favoritesList.find(
          (e) => e.stockTicker === quoteState.payload.ticker
        )
      ) {
        alreadyFavoritedAlert();
      } else {
        let format = "favorite";
        state.favoritesList.push({
          companyName: quoteState.payload.companyName.data,
          stockTicker: quoteState.payload.ticker,
          lastPrice: quoteState.payload.quoteData.c,
          lastPriceChange: quoteState.payload.quoteData.d,
          lastPChangePercent: quoteState.payload.quoteData.dp,
          timeStamp: timeConverter(quoteState.payload.quoteData.t, format),
          id: state.favoritesList.length + 1,
        });
        localStorage.setItem("favorites", JSON.stringify(state.favoritesList));
      }
    },
    setFavorites(state, favoritesState) {
      state.favoritesList = favoritesState.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(updateFavorites.fulfilled, (state, action) => {
      state.favoritesList = action.payload;
      state.status = "succeeded";
    });
    builder.addCase(updateFavorites.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(updateFavorites.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    });
  },
});

export const { addFavorite, setFavorites } = favoritesSlice.actions;

export default favoritesSlice.reducer;
