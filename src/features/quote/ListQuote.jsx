import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchQuote, fetchCompanyName, updateSymbol } from "./quoteSlice";
import { fetchQuoteMoreInfo, updateMoreInfoVisibility } from "../moreInfo/moreInfoSlice";
import { useParams } from "react-router-dom";
import { Spinner } from "../../components/Spinner";
import { MoreInfo } from "../moreInfo/MoreInfo";
import { News } from "../news/News";
import { updateNewsVisibility } from "../news/newsSlice";
import { Chart } from "../chart/Chart";
import { updateChartVisibility } from "../chart/chartSlice";
import { addFavorite } from "../favorites/favoritesSlice";

export const ListQuote = () => {
  const dispatch = useDispatch();
  const quote = useSelector((state) => state.quote);
  const quoteStatus = useSelector((state) => state.quote.status);
  const moreInfoStatus = useSelector((state) => state.moreInfo.status);
  const stockAdditionalInfo = useSelector((state) => state.moreInfo.moreInfoData);
  const moreInfoVisible = useSelector((state) => state.moreInfo.visible);
  const companyName = useSelector((state) => state.quote.companyName.data);
  const ticker = useSelector((state) => state.quote.ticker);
  const showNews = useSelector((state) => state.news.visible);
  const chartVisible = useSelector((state) => state.chart.visible);
  const theme = useSelector((state) => state.quote.darkMode);
  const error = useSelector((state) => state.quote.error);
  const moreInfoError = useSelector((state) => state.moreInfo.error);

  const { quoteSymbol } = useParams();
  const stockData = quote.quoteData;

  useEffect(() => {
    if (quoteStatus === "idle") {
      dispatch(fetchQuote(quoteSymbol));
      dispatch(fetchCompanyName(quoteSymbol));
      dispatch(fetchQuoteMoreInfo(quoteSymbol));
      dispatch(updateSymbol(quoteSymbol));

    }
  }, [ticker, dispatch]);

  // HANDLE BUTTON CLICK FUNCTIONS
  function handleMoreInfoClick() {
    dispatch(updateMoreInfoVisibility());
    if (showNews) {
      dispatch(updateNewsVisibility());
    }
    if (chartVisible) {
      dispatch(updateChartVisibility());
    }
  }

  function handleShowNewsClick(){
    dispatch(updateNewsVisibility());
    if (moreInfoVisible) {
      dispatch(updateMoreInfoVisibility());
    }
    if (chartVisible) {
      dispatch(updateChartVisibility());
    }
  }

  function handleShowChartClick(){
    dispatch(updateChartVisibility());
    if (moreInfoVisible) {
      dispatch(updateMoreInfoVisibility());
    }
    if (showNews) {
      dispatch(updateNewsVisibility());
    }
  }
  function handleFavorite(){
    dispatch(addFavorite(quote))
  }

// END HANDLE BUTTON CLICK FUNCTIONS

  let content; // quote info
  let moreInfoContent; // quote more info

  if (moreInfoStatus === "loading") { // if more info call is loading
    moreInfoContent = <Spinner text="Loading..." />;
  } else if (moreInfoStatus === "succeeded") { // if more info call succeeded
    moreInfoContent = (
      <>
        <p className="pe-ttm">
          PE Ratio (TTM): {stockAdditionalInfo.metric.peTTM}
        </p>
        <p className="52week-range">
          52 week range: {stockAdditionalInfo.metric["52WeekLow"]} -{" "}
          {stockAdditionalInfo.metric["52WeekHigh"]}
        </p>
        <div className="show-additional-info">
              {moreInfoVisible ? (
                <button
                  type="submit"
                  className={`more-info-button ${theme}`}
                  onClick={handleMoreInfoClick}
                >
                  Hide Extra Info
                </button>
              ) : (
                <button
                  type="submit"
                  className={`more-info-button ${theme}`}
                  onClick={handleMoreInfoClick}
                >
                  Get More Info
                </button>
              )}
              {showNews ? (
                <button
                  type="submit"
                  className={`show-news-button ${theme}`}
                  onClick={handleShowNewsClick}
                >
                  Hide News
                </button>
              ) : (
                <button
                  type="submit"
                  className={`show-news-button ${theme}`}
                  onClick={handleShowNewsClick}
                >
                  Show Recent News
                </button>
              )}
              {chartVisible ? (
                <button
                  type="submit"
                  className={`show-chart-button ${theme}`}
                  onClick={handleShowChartClick}
                >
                  Hide Chart
                </button>
              ) : (
                <button
                  type="submit"
                  className={`show-chart-button ${theme}`}
                  onClick={handleShowChartClick}
                >
                  Show Chart
                </button>
              )}
              <button
                  type="submit"
                  className={`show-chart-button ${theme}`}
                  onClick={handleFavorite}
                >
                  Add Favorite
                </button>
            </div>
      </>
    );
  } else if (moreInfoStatus === "failed") {
    moreInfoContent = <div style={{color: "red", fontWeight: "bolder"}}>{moreInfoError}</div>;
  }

  if (quoteStatus === "loading") {
    content = <Spinner text="Loading..." />;
  } else if (quoteStatus === "succeeded") {
    // sort posts in reverse chronological order by datetime string
    if (stockData.d === null) {
      content = <div style={{color: "red", fontWeight: "bolder"}}>Error: Failed to load ticker data. Please check the symbol or try again later.</div>;
    }
    else{
    content = (
        <div className="quote-basic-info">
          <div className="quote-name">
            <h1 className="company-name">{companyName}</h1>
            <h4 className="ticker">{quoteSymbol}</h4>
          </div>
          <div className="quote-main-info">
            <p className="current-price">{stockData.c.toLocaleString("en-US", {style: "currency", currency: "USD"})}</p>
            {stockData.d < 0 ? (
              <p className="symbol-pricechange-red">
                {stockData.d.toLocaleString("en-US", {style: "currency", currency: "USD"})} ({stockData.dp.toFixed(2)}%)
              </p>
            ) : (
              <p className="symbol-pricechange-green">
                +{stockData.d.toLocaleString("en-US", {style: "currency", currency: "USD"})} ({stockData.dp.toFixed(2)}%)
              </p>
            )}
          </div>
          <div className="more-details">
            <p className="daily-high">
              High price of the day: <b>{stockData.h.toLocaleString("en-US", {style: "currency", currency: "USD"})}</b>
            </p>
            <hr className="half-width"></hr>
            <p className="daily-low">
              Low price of the day: <b>{stockData.l.toLocaleString("en-US", {style: "currency", currency: "USD"})}</b>
            </p>
            <hr className="half-width"></hr>
            <p className="open-price">
              Open price: <b>{stockData.o.toLocaleString("en-US", {style: "currency", currency: "USD"})}</b>
            </p>
            <hr className="half-width"></hr>

            <p className="p-close-price">
              Previous close price: <b>{stockData.pc.toLocaleString("en-US", {style: "currency", currency: "USD"})}</b>
            </p>
            {moreInfoContent}
          </div>
        </div>
    );
  }
  } else if (quoteStatus === "failed") {
    content = <div style={{color: "red", fontWeight: "bolder"}}>{error}</div>;
  }

  return <>
  <div className="quote-container">
  {content}
  {moreInfoVisible ? <MoreInfo /> : null}
  </div>
  <div className="news-container">
  {showNews ? <News /> : null}
  </div>
  <div className="chart-container">
  {chartVisible ? <Chart /> : null}
  </div>
  </>;
};
