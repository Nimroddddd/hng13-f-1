
function updateTime() {
  const timeElement = document.getElementById("currentTime");
  timeElement.textContent = Date.now();
}

updateTime();
setInterval(updateTime, 1000);

