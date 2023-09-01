export function getTimestampInSeconds() {
    return Math.floor(Date.now() / 1000);
  }

  export function getOneMonthAgoTimestamp(currentTime) {
    return Math.floor(currentTime - 2592000);
  }

  export function getOneWeekAgoTimestamp(currentTime) {
    return Math.floor(currentTime - 604800);
  }

  export function getOneDayAgoTimestamp(currentTime) {
    return Math.floor(currentTime - 86400);
  }

  export function timeConverter(UNIX_timestamp, format) {
    const a = new Date(UNIX_timestamp * 1000);
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const year = a.getFullYear();
    const date = a.getDate() < 10 ? "0" + a.getDate() : a.getDate();
    const hour = a.getHours();
    const min = a.getMinutes() < 10 ? "0" + a.getMinutes() : a.getMinutes();
    const sec = a.getSeconds() < 10 ? "0" + a.getSeconds() : a.getSeconds();
    if (format === "favorite") {
      const month = months[a.getMonth()];
      const time =
        date + " " + month + " " + year + " " + hour + ":" + min + ":" + sec;
      return time;
    } else if (format === "newsSearch") {
      const month = (a.getMonth() +1) < 10 ? "0" + (a.getMonth() + 1) : (a.getMonth() +1)
      const time = year + "-" + month + "-" + date;
      return time;
    }
  }
  export function alreadyFavoritedAlert(){
    alert("Already favorited!");
  }