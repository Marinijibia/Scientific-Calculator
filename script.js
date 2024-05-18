// setting date and time.

//padding zero function
const padZero = (num) => (num < 10 ? "0" + num : num);

// changing month to name
const getMonthName = (mothIndex) => {
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

  return months[mothIndex];
};
const startTime = () => {
  const date = new Date();
  let hour = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  const year = date.getFullYear();
  let month = date.getMonth();
  let day = date.getDate();

  //time format setting
  hour <= 12 ? (hour = hour) : (hour = hour - 12);

  hour = padZero(hour);
  const padMinute = padZero(minutes);
  const padSecond = padZero(seconds);

  const padDay = padZero(day);
  const monthName = getMonthName(month);

  // adding am/pm to time
  let timeFormat;
  hour < 12 ? (timeFormat = "AM") : (timeFormat = "PM");

  document.querySelector(
    "div.time"
  ).innerHTML = `${hour}:${padMinute}:${padSecond} ${timeFormat}`;
  document.querySelector(
    "div.date"
  ).innerHTML = `${padDay} ${monthName} ${year}`;
  setTimeout(startTime, 200);
};
