

/*Function to display Day, Date, Time*/
/*Aachal Nimje*/
function smartTime() { 
  var today = new Date();
  var month = today.getMonth();
  var monthlist = [
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
    "Dec"
  ];
  var date = today.getDate();
  var day = today.getDay();
  var daylist = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday ",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  var hour = today.getHours();
  var minute = today.getMinutes();
  var d = daylist[day] + " ";

  if (date < 10) {
    date = "0" + date;
  } else {
    date = date;
  }
  if (hour < 10) {
    hour = "0" + hour;
  } else {
    hour = hour;
  }
  if (minute < 10) {
    minute = "0" + minute;
  } else {
    minute = minute;
  }
  var t = hour + ":" + minute;
  setTimeout(smartTime, 1000);
  document.getElementById("timeMus").innerHTML = t;
  document.getElementById("timeTim").innerHTML = t;
  document.getElementById("time").innerHTML = t;
  document.getElementById("timeMsg").innerHTML = t;
  document.getElementById("day").innerHTML = d;
  document.getElementById("date").innerHTML = monthlist[month] + " " + date;
}

// Function to hide and show the screens
//Shradha Bhosale
function messageIcon(icon) {
  x = document.getElementById("homescreen");
  x.style.display = "none";
  c = document.getElementById("message");
  c.style.display = "none";
  z = document.getElementById("music");
  z.style.display = "none";
  z = document.getElementById("timer");
  z.style.display = "none";
  if (icon === "me") {
    y = document.getElementById("message");
    y.style.display = "block";
  } else if (icon === "mu") {
    z = document.getElementById("music");
    z.style.display = "block";
  } else if (icon === "cl") {
    a = document.getElementById("timer");
    a.style.display = "block";
  } else if (icon === "hs") {
    k = document.getElementById("homescreen");
    k.style.display = "block";
  }
}

// Function to display timer
//Sneha Chawale
var h1 = document.getElementById("timerTimer"),
  start = document.getElementById("start"),
  stop = document.getElementById("stop"),
  clear = document.getElementById("clear"),
  seconds = 0,
  minutes = 0,
  hours = 0,
  t;

function add() {
  seconds++;
  if (seconds >= 60) {
    seconds = 0;
    minutes++;
    if (minutes >= 60) {
      minutes = 0;
      hours++;
    }
  }

  h1.textContent =
    (hours ? (hours > 9 ? hours : "0" + hours) : "00") +
    ":" +
    (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") +
    ":" +
    (seconds > 9 ? seconds : "0" + seconds);

  timer();
}
function timer() {
  start.style.pointerEvents = "none";
  t = setTimeout(add, 1000);
}

/* Start button */
//Swapnali Kanade

start.onclick = timer;

/* Stop button */
stop.onclick = function() {
  start.style.pointerEvents = "all";
  clearTimeout(t);
};

/* Clear button */
clear.onclick = function() {
  h1.textContent = "00:00:00";
  seconds = 0;
  minutes = 0;
  hours = 0;
};

