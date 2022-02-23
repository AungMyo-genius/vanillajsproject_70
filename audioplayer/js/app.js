//ul
const musiccontainer = document.getElementById("music-container");

const title = document.getElementById("title"),
        progresscontainer = document.getElementById("progress-container"),
        progress = document.getElementById("progress");

const audio = document.getElementById("audio");

const cover = document.getElementById("cover");

const prevbtn = document.getElementById("prev"),
    playbtn = document.getElementById("play"),
    nextbtn = document.getElementById("next");

let songindex = 0;

//Song Title
const songs = ['sample1', 'sample2', 'sample3'];
// console.log(songs[songindex]);

loading(songs[songindex]);

function loading(music) {
    // console.log(music);

    title.textContent = music;
    audio.src = `music/${music}.mp3`;
    cover.src = `img/${music}.jpg`;
}

//Event listener for play/ pause
play.addEventListener("click", ()=>{
    // console.log("hay");
    const isplaying = musiccontainer.classList.contains('play');

    if(isplaying) {
        pausesong();
    } else{
        playsong();
    }
})

//Play Song
function playsong() {
    musiccontainer.classList.add("play");

    playbtn.querySelector("i.fas").classList.remove("fa-play");
    playbtn.querySelector("i.fas").classList.add("fa-pause");

    audio.play();
}

function pausesong(){
    musiccontainer.classList.remove("play");

    playbtn.querySelector("i.fas").classList.add("fa-play");
    playbtn.querySelector("i.fas").classList.remove("fa-pause");

    audio.pause();
}

// Change Song
prevbtn.addEventListener("click", previoussong);

nextbtn.addEventListener("click", nextsong);

// Previous Song
function previoussong() {
    songindex--;
    if(songindex < 0) {
        songindex = songs.length - 1;
    }

    loading(songs[songindex]);
    playsong();
}

function nextsong() {
    songindex++;

    if(songindex > songs.length - 1){
        songindex = 0;
    }

    loading(songs[songindex]);
    playsong();
}

//Update Progress bar
function updateprogress(e) {
    // console.log(audio.currentTime);
    // console.log(audio.duration);

    //Method 1
    // const progresspercent = audio.currentTime / audio.duration * 100;

    // Event Call
    // console.log(e.target); e ဆို e para လေးထည့်ရ
    // console.log(this);
    // console.log(e.srcElement);

    // Method 2
    // const currentTime = e.target.currentTime;
    // const duration = e.target.duration;
    // const progresspercent = (currentTime / duration) * 100;

    // Method 3
    // const {currentTime} = e.target;
    // const {duration} = e.target;
    // const progresspercent = (currentTime / duration) * 100;

    // Method 4
    //  const {currentTime, duration} = e.target;
    //  const progresspercent = (currentTime/ duration) * 100;

    //Method 5
    function scale (number, inMin, inMax, outMin, outMax) {
        return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
    }
    // audio.currentTime က num ပြောင်းလဲမှုဖြစ်ပြီး
    // 0 - audio.duration က input range ဖြစ်သွားမယ်
    // ကိုယ်ဖြစ်စေချင်တာက 0 - 100 အတွင်းဆိုတော့ output 0 - 100

    const progresspercent = scale(audio.currentTime, 0 ,audio.duration,0,100);

    // console.log(progresspercent);
    progress.style.width = `${progresspercent}%`;
}


// Time Play and stop update
audio.addEventListener("timeupdate" , updateprogress );

//Click on prograss bar
progresscontainer.addEventListener("click", setprogress);

// Set Progress Bar
function setprogress(e){
    // console.log(e.target);


    const width = e.target.clientWidth;
    // console.log(width);

    const clickx = e.offsetX;
    // console.log(clickx);

    const duration = audio.duration;

    audio.currentTime = (clickx / width) * duration;
}

// song's currentTime end
audio.addEventListener("ended", nextsong);