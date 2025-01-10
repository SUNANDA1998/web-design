function clock() {
  let d = new Date();
  let h = d.getHours();
  let m = d.getMinutes();
  let s = d.getSeconds();
  let session = "AM";

  if (h == 0) {
    h = 12;
  }
  if (h > 12) {
    h = h - 12;
    session = "PM";
  }

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let day = days[d.getDay()];
  let date = d.getDate();
  let month = months[d.getMonth()];
  let year = d.getFullYear();

  date = date < 10 ? "0" + date : date;

  document.getElementById("hours").innerHTML = h;
  document.getElementById("mins").innerHTML = m;
  document.getElementById("sec").innerHTML = s;
  document.getElementById("ampm").innerHTML = session;
  document.getElementById(
    "date"
  ).innerHTML = `<span class="day-style">${day}</span>, ${date} ${month} , ${year}`;
}

setInterval(clock, 1000);
clock();
