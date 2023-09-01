import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FavoriteStock } from "./FavoriteStock";
import { setFavorites, updateFavorites } from "./favoritesSlice";

export const Favorites = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const previousFavorites = JSON.parse(localStorage.getItem("favorites"));
    if (previousFavorites) {
      dispatch(setFavorites(previousFavorites));
      if (favorites.length > 0){
        dispatch(updateFavorites(favorites))
      }
    }
  }, []);

  const favorites = useSelector((state) => state.favorites.favoritesList);

  function handleClearFavorites() {
    localStorage.clear();
    dispatch(setFavorites([]));
  }

  async function handleRefreshFavorites(){
    if (favorites.length > 0){
      dispatch(updateFavorites(favorites))
      alert("Favorites refreshed");
    } else {
      alert("No favorites to refresh");
    }
  }

  let content;
  if (favorites.length > 0) {
    content = (
      <div className="fave-stock">
        {favorites.map((stock) => (
          <FavoriteStock
            key={stock.id}
            companyName={stock.companyName}
            stockTicker={stock.stockTicker}
            lastPrice={stock.lastPrice}
            lastPriceChange={stock.lastPriceChange}
            lastPChangePercent={stock.lastPChangePercent}
            timeStamp={stock.timeStamp}
          />
        ))}
      </div>
    );
  } else {
    content = (
      <div className="fave-stock">
        <h1>No Favorites</h1>
      </div>
    );
  }
  return (
    <>
      {content}
      <div className="fave-button-container">
      <button id="clearFavorites" onClick={handleClearFavorites}>
        Clear Favorites
      </button>
      <button id="refreshFavorites" onClick={handleRefreshFavorites}>
        Refresh Favorites
      </button>
      </div>
    </>
  );
};
