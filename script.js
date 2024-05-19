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

// getting the tim and date
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

//setting screen

let screen = document.querySelector(".srn1");

const press = (numValue) => {
  if (screen.value == 0) {
    screen.value = "";
  }
  screen.value += numValue;
};

//screen clearing
const clearScreen = (val) => (screen.value = val);

//Del Key
const delKey = () => {
  const clear = screen;
  screen.value = clear.value.substring(0, clear.value.length - 1);
};

//calculate function
const calFunc = () => {
  try {
    clearScreen2(eval(screen.value));
  } catch {
    clearScreen2("Bad Expression");
  }
};

let screen2 = document.querySelector("#screen2");
const clearScreen2 = (val) => {
  screen2.textContent = val ? val : "Ans";
};

// Calculating sin, cos and tan
const sine = () => (screen.value = Math.sin((screen.value * Math.PI) / 180));
const cose = () => (screen.value = Math.cos((screen.value * Math.PI) / 180));
const taan = () => (screen.value = Math.tan((screen.value * Math.PI) / 180));

// Calculating Asin, acos and atan
const invSin = () => (screen.value = Math.asin(screen.value) * (180 / Math.PI));

const invCos = () => {
  if (screen.value >= -1 && screen.value <= 1) {
    screen.value = Math.acos(screen.value) * (180 / Math.PI);
  } else {
    screen.value = "value must be between -1 and 1";
  }
};

const invTan = () => {
  if (screen.value >= -1 && screen.value <= 1) {
    screen.value = Math.atan(screen.value) * (180 / Math.PI);
  } else {
    screen.value = "value must be between -1 and 1";
  }
};

//calculating ln amd Log
const ln = () => (screen.value = Math.log(screen.value));
const log = () => (screen.value = Math.log10(screen.value));

//calculating %
const percent = () => (screen.value = screen.value / 100);

//calculating square, cube and sqrt
const square = () => (screen.value = Math.pow(screen.value, 2));
const cube = () => (screen.value = Math.pow(screen.value, 3));
const sqrt = () => (screen.value = Math.sqrt(screen.value));

//plusMinus function
const plusMinus = () => {
  let x = screen;
  let y = parseFloat(x.value);
  y *= -1;
  x.value = y;
};

//Exp function
const exp = () => {
  screen.value ? (screen.value = Math.pow(10, screen.value)) : screen.value;
};
