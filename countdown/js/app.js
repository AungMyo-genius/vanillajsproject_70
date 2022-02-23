const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const year = document.getElementById("year");
const countdown = document.getElementById("countdown");
const loading = document.getElementById("loading");

const currentyear = new Date().getFullYear();
// console.log(currentyear);

const newYearTime = new Date(`January 01 ${currentyear + 1} 00:00:00`);
// console.log(newYearTime);

year.textContent = currentyear + 1;
// year.textContent = newYearTime;

function updateCountdown() {
    // console.log("hay");

    const currentTime = new Date();

    const diff = newYearTime - currentTime;
    // console.log(diff);

    const d = Math.floor( diff /1000 / 60 / 60 / 24);

    const h = Math.floor( diff /1000 / 60 / 60 ) % 24;

    const m = Math.floor( diff /1000 / 60 ) % 60;

    const s = Math.floor( diff/ 1000) % 60;

    days.textContent = d;
    hours.textContent = h < 10 ? "0" +h : h;
    minutes.innerText = m < 10 ? "0" +m : m;
    seconds.innerText = s < 10 ? "0" +s : s;
}

setTimeout(()=>{
    loading.remove();
    countdown.style.display = "flex";
} , 1000);

setInterval(updateCountdown, 1000);

// 1000 က mili seconds
// 26ST WDF4050