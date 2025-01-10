const time = document.getElementById('time');
const timeformat = document.getElementById('timeformat');
// const date = document.getElementById('date');
const months = document.getElementById('months');
const year = document.getElementById('year')

document.addEventListener('DOMContentLoaded', () => {
    setInterval(showtime,1000);
});

const showtime = () => {
    let dat = new Date();

    let hr = dat.getHours();
    let mins = dat.getMinutes();
    let secs = dat.getSeconds();

    hr = hr<10 ? `0${hr}` : hr;
    mins = mins<10 ? `0${mins}` : mins;
    secs = secs<10 ? `0${secs}` : secs;


    time.innerHTML = `${hr} : ${mins} : ${secs}`;

    timeformat.innerHTML = hr>12 ? "PM" : "AM";
    //  console.log("hours "+ hr + "mins " + mins + "secs " + secs);

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
    //   let day = days[date.getHours()];
      let date = dat.getDate();
      let month = months[dat.getMonth()];
      let year = dat.getFullYear();
    
      date = date < 10 ? "0" + date : date;
    
      // document.getElementById('date').innerHTML = date;

      document.getElementById("months").innerHTML = month;
      document.getElementById("year").innerHTML = year;

    //   document.getElementById("mins").innerHTML = m;
    //   document.getElementById("sec").innerHTML = s;
    //   document.getElementById("ampm").innerHTML = session;
      // document.getElementById("date").innerHTML = `<span class="day-style">${days}</span>, ${date} ${month} , ${year}`;
    
    
    // setInterval(clock, 1000);
    // clock();
    
}
showtime()


