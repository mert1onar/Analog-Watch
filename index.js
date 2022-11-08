const second = document.getElementById("second");
const minute = document.getElementById("minute");
const hour = document.getElementById("hour");

function getTime() {
  const now = new Date();
  const getSecond = now.getSeconds();
  const getMinute = now.getMinutes();
  const getHour = now.getHours();
  const getMillisecond = now.getMilliseconds();
  const timeInterval = 6;

  second.style.transform =
    "rotate(" + (getSecond + getMillisecond / 1000) * timeInterval + "deg)";
  minute.style.transform =
    "rotate(" + (getMinute + getSecond / 60) * timeInterval + "deg)";
  hour.style.transform =
    "rotate(" + ((getHour + getMinute / 60) * timeInterval * 5) / 2 + "deg)";
}

setInterval(getTime, 1);
