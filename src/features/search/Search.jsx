import React, { useState } from "react";
import { useDispatch } from 'react-redux'
import {useNavigate} from 'react-router-dom';
import { updateSymbol, fetchCompanyName, fetchQuote } from "../quote/quoteSlice";
import { fetchQuoteMoreInfo } from "../moreInfo/moreInfoSlice";

export default function Search(props) {
  const [stockSymbol, setStockSymbol] = useState("");
    const navigateTo = useNavigate()
  const dispatch = useDispatch()

    function handleSearch(){
      if (stockSymbol.length > 0) {
        dispatch(updateSymbol(stockSymbol))
        dispatch(fetchQuote(stockSymbol));
        dispatch(fetchCompanyName(stockSymbol));
        dispatch(fetchQuoteMoreInfo(stockSymbol));
        navigateTo(`/quote/${stockSymbol}`)
    }
    else {
      alert("Please enter a valid stock symbol");
    }}

  return (
    <>
    <div className="searchBar">
      <input
        type="search"
        id="default-search"
        className="symbolSearch"
        placeholder="Enter stock symbol to search..."
        onChange={(e) => setStockSymbol(e.target.value.toUpperCase())}
        required
      />
      <button
        type="submit"
        className="searchButton"
        disabled={!stockSymbol.length}
        onClick={handleSearch}
      >
        Get Quote
      </button>
      </div>
      <div className="below-search">
      <p>Welcome to the Stock Quotes site! Please enter a stock ticker symbol in the search bar above to get your quote and see additional information related to the company! Please allow additional time for first request as the server spins down to reduce costs during periods of inactivity.</p>
      </div>
    </>
  );
}