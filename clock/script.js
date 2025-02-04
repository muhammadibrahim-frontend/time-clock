// This function is used to attach the "0" with single dijit
function formatTimeUnit(unit) {
  return unit < 10 ? "0" + unit : unit; //ternary operator
}
// This function is used to get the hours , minutes and seconds from Date object
function updateClock() {
  const clockElement = document.getElementById("clock");
  const timeFormat = document.getElementById("time-format").value;
  const now = new Date();

  let hours = now.getHours();
  const minutes = formatTimeUnit(now.getMinutes());
  const seconds = formatTimeUnit(now.getSeconds());
  let period = "";
  //This statement is used to set the AM and
  if (timeFormat === "12") {
    period = hours >= 12 ? " PM" : " AM";
    hours = hours % 12 || 12;
  }
  // Final step of display the Current time
  hours = formatTimeUnit(hours);
  clockElement.textContent = `${hours}:${minutes}:${seconds}${period}`;
}
// This step is used for change the current watch Format either 12 or 24
document.getElementById("time-format").addEventListener("change", updateClock);
// This step will update time after every second
setInterval(updateClock, 1000);
updateClock();
