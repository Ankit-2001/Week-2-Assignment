function clock() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    let zone, actualHours;
    if (hours >= 0 && hours <= 11) {
      zone = "AM";
    } else {
      zone = "PM";
    }
    if (hours == 12) {
      actualHours = 12;
    } else {
      actualHours = hours % 12;
    }
    
    console.log(`${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`);
    console.log(`${padZero(actualHours)}:${padZero(minutes)}:${padZero(seconds)} ` + zone);
  }
  function padZero(num) {
    return num < 10 ? "0" + num : num;
}
  setInterval(clock, 1000);


