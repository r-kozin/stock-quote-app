import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  updateSymbol,
  fetchCompanyName,
  fetchQuote,
} from "../quote/quoteSlice";
import { fetchQuoteMoreInfo } from "../moreInfo/moreInfoSlice";

export default function Search(props) {
  const [stockSymbol, setStockSymbol] = useState("");
  const navigateTo = useNavigate();
  const dispatch = useDispatch();

  function handleSearch() {
    if (stockSymbol.length > 0) {
      dispatch(updateSymbol(stockSymbol));
      dispatch(fetchQuote(stockSymbol));
      dispatch(fetchCompanyName(stockSymbol));
      dispatch(fetchQuoteMoreInfo(stockSymbol));
      navigateTo(`/quote/${stockSymbol}`);
    } else {
      alert("Please enter a valid stock symbol");
    }
  }

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
        <p>
          Welcome to the Stock Quotes site! Please enter a stock ticker symbol
          in the search bar above to get your quote and see additional
          information related to the company! Please allow additional time for
          first request as the server spins down to reduce costs during periods
          of inactivity.
        </p>
      </div>
      <div className="project-description">
        <h3>Technologies Used</h3>
        <img
          src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"
          alt="JavaScript"
        />
        <br />
        <img
          src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB"
          alt="React"
        />
        <br />
        <img
          src="https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white"
          alt="Vite"
        />
        <br />
        <img
          src="https://img.shields.io/badge/redux_toolkit-%23323330.svg?style=for-the-badge&logo=redux&logoColor=%2361DAFB"
          alt="Redux Toolkit"
        />
        <br />
        <img
          src="https://img.shields.io/badge/node.js-%23323330.svg?style=for-the-badge&logo=node.js&logoColor=%2361DAFB"
          alt="Node.js"
        />
        <br />
        <img
          src="https://img.shields.io/badge/express-%23646CFF.svg?style=for-the-badge&logo=express&logoColor=white"
          alt="Express"
        />
        <br />
        <img
          src="https://img.shields.io/badge/react_bootstrap-%230081CB.svg?style=for-the-badge&logo=react&logoColor=white"
          alt="React Bootstrap"
        />
        <br />
        <img
          src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white"
          alt="HTML5"
        />
        <br />
        <img
          src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white"
          alt="CSS3"
        />
        <br />
        <br />
        <h3>Project Overview </h3> The Stock Quote App is a fully functional web
        application that provides real-time stock market data from various
        financial APIs. It leverages React, Redux and Bootstrap on the front end
        and Node and Express on the backend to deliver a seamless user
        experience.
        <br />
        <br />
        <h3>Key Features</h3>{" "}
        <ul>
          <li>
            Search for stock ticker symbols and access real-time stock quote
            information.
          </li>
          <li>
            Explore detailed information about stocks and their respective
            companies.
          </li>
          <li>
            Stay updated with current news related to the selected company.{" "}
          </li>
          <li>
            Easily manage favorite stocks for quick access to their current
            pricing.
          </li>
          <li>Optimized for both mobile and desktop viewing.</li>
        </ul>
      </div>
    </>
  );
}
