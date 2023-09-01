import { configureStore } from "@reduxjs/toolkit";

import moreInfoReducer from '../features/moreInfo/moreInfoSlice';
import quoteReducer from '../features/quote/quoteSlice';
import newsReducer from '../features/news/newsSlice';
import chartReducer from '../features/chart/chartSlice';
import favoritesReducer from '../features/favorites/favoritesSlice';

export default configureStore({
    reducer: {
        quote: quoteReducer,
        moreInfo: moreInfoReducer,
        news: newsReducer,
        chart: chartReducer,
        favorites: favoritesReducer
        }
});