function getTimeSince(newUnixTimestamp){
    const currentTime = Math.floor(Date.now() / 1000);
    const timeSinceSeconds = currentTime - newUnixTimestamp;
    let interval = Math.floor(timeSinceSeconds / 31536000);
    let intervalType = '';
    if (interval >= 1) {
    intervalType = 'year';
  } else {
    interval = Math.floor(timeSinceSeconds / 2592000);
    if (interval >= 1) {
      intervalType = 'month';
    } else {
      interval = Math.floor(timeSinceSeconds / 86400);
      if (interval >= 1) {
        intervalType = 'day';
      } else {
        interval = Math.floor(timeSinceSeconds / 3600);
        if (interval >= 1) {
          intervalType = "hour";
        } else {
          interval = Math.floor(timeSinceSeconds / 60);
          if (interval >= 1) {
            intervalType = "minute";
          } else {
            interval = timeSinceSeconds;
            intervalType = "second";
          }
        }
      }
    }
  }

  if (interval > 1 || interval === 0) {
    intervalType += 's';
  }

  return interval + ' ' + intervalType;
}

export default function NewsItem(props) {
  
    return (
    <>
      <a className="news-link" href={props.url} target="_blank" rel="noreferrer">
        <li className="news-item">
          <div className="news-item-box">
            {props.image === "" ? null : ( //check if image is blank, only show image when available
              <div className="news-img">
                <img src={props.image} alt="news-img" />
              </div>
            )}
            <div className="news-text">
              <div className="news-basics">
                <p className="news-source">Source: {props.source}</p>
                <p className="news-timestamp">{getTimeSince(props.datetime)} ago</p>
                <p className="news-category">Category: {props.category}</p>
              </div>
              <div className="news-title">
                <h5 className="news-headline">{props.headline}</h5>
              </div>
              {props.summary === "" ? null : (
                <div className="news-description">
                  <p className="news-summary">{props.summary}</p>
                </div>
              )}
              <div className="news-related">
                <p className="related-stocks">Related: {props.related}</p>
              </div>
            </div>
          </div>
        </li>
      </a>
    </>
  );
}
