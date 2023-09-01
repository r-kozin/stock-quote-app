import React from 'react'

export const FavoriteStock = (props) => {

  return (
    <div className="stock-container">
      <div className="stock-row">
        <div className="stock">
          <h1>{props.companyName}</h1>
          <h3>{props.stockTicker}</h3>
        </div>
        <div className="stock-data">
          <p className="stock-price">{props.lastPrice.toLocaleString("en-US", {style: "currency", currency: "USD"})}</p>
          {props.lastPriceChange < 0 ? (
            <p className="symbol-pricechange-red">
              {props.lastPriceChange.toLocaleString("en-US", {style: "currency", currency: "USD"})} (
              {props.lastPChangePercent.toFixed(2)}%)
            </p>
          ) : (
            <p className="symbol-pricechange-green">
              +{props.lastPriceChange.toLocaleString("en-US", {style: "currency", currency: "USD"})} (
              {props.lastPChangePercent.toFixed(2)}%)
            </p>
          )}
          <p className="stock-lastUpdate">
            Last Update: {props.timeStamp}
          </p>
        </div>
      </div>
    </div>
  )
}
