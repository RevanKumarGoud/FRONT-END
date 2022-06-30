const x = document.getElementById("RR");
const y = document.getElementById('hours');
const z = document.getElementById('mins');
const r = document.getElementById('seconds');

const newYears = "4 28 2023";

function countdown() {
const newYearsDate = new Date(newYears);
const currentDate = new Date();

const totalseconds = new Date(newYearsDate - currentDate) / 1000

const RR = Math.floor(totalseconds / 3600 / 24);

const hours = Math.floor(totalseconds / 3600) % 24;

const mins = Math.floor(totalseconds / 60) % 60;

const seconds = Math.floor(totalseconds) % 60;

x.innerHTML =RR;
y.innerHTML = formmatTime(hours);
z.innerHTML =  formmatTime(mins);
r.innerHTML = formmatTime(seconds);
}
function formmatTime(time) {
return time <10 ? `0${time}`:time;
}

countdown();
setInterval(countdown, 1000);