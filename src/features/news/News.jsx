import React, { useEffect } from "react";
import NewsItem from "./NewsItem";
import { useSelector, useDispatch } from "react-redux";
import { fetchNews } from "./newsSlice";
import { Spinner } from "../../components/Spinner";

export const News = () => {
  const dispatch = useDispatch();
  const ticker = useSelector((state) => state.quote.ticker);
  const todayNews = useSelector((state) => state.news.stockNews);
  const newsStatus = useSelector((state) => state.news.status);
  const error = useSelector((state) => state.news.error);

  useEffect(() => {
    dispatch(fetchNews(ticker));
  }, []);

  let content

  if (newsStatus === "loading") {
    content = <Spinner text="Loading..." />;
  } else if (newsStatus === "succeeded") {
    // sort posts in reverse chronological order by datetime string

    content = (
      <div className="news-box">
        <h2>Past 24hr News</h2>
        <ul className="news-list">
          {todayNews.map((newsItem) => (
            <NewsItem
              key={newsItem.id}
              id={newsItem.id}
              category={newsItem.category}
              datetime={newsItem.datetime}
              headline={newsItem.headline}
              image={newsItem.image}
              related={newsItem.related}
              source={newsItem.source}
              summary={newsItem.summary}
              url={newsItem.url}
            />
          ))}
        </ul>
      </div>
    );
  } else if (newsStatus === "failed") {
    content = <div>{error}</div>;
  }

  return <>{content}</>;
};
