// UI 
const toggle = document.querySelector(".toggle");

const hourel = document.querySelector(".hour"),
minutel = document.querySelector(".minute"),
secondel = document.querySelector(".second");

const timeel = document.querySelector(".time"),
      dateel = document.querySelector(".date");


const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];


const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

toggle.addEventListener("click", e =>{
    const html = document.querySelector("html");
    
    if( html.classList.contains("dark")){
        html.classList.remove("dark");

        if(e.target.classList.contains("fas")){
            // console.log(e.target.classList);
            e.target.classList.replace("fa-sun","fa-moon");
        } else{
            e.target.innerHTML = `<i class="fas fa-moon"></i>Dark Mode`;
        }

    } else {
        html.classList.add("dark");

        if(e.target.classList.contains("fas")){
            e.target.classList.replace("fa-moon","fa-sun");
        } else{
            e.target.innerHTML = `<i class="fas fa-sun"></i>Light Mode`;
        }
    }
    
})

function setTime(){
    const date = new Date();

    const month = date.getMonth();
    const day = date.getDay();
    const today = date.getDate();
    const hours = date.getHours();
    const hoursforclock = hours % 12; 
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    const getampm = hours >= 12 ? "PM" : "AM";

    // console.log(month);


    // 12 မှာ 360 ရှိတယ် 1 မှာဆိုဘယ်လောက်လည်း ETC 
    //    12      =        360
     //   1       =         ?
             //   =        360 * 1 / 12;

    //Method 1
    // setRotation(hourel, hours/12);
    // setRotation(minutel, minutes/60);
    // setRotation(secondel, seconds/60);

    // num က ပြောင်းလဲမှု input 
    // in က  input value ထည်ပေးမဲ့ မူလ ဂဏန်း range
    // out က ဖြစ်စေချင်တဲ့ output value range
    // num ဆိုတဲ့ ပြောင်းလဲမှု တိုင်းကိုအခြေခံပြီး  0-12 ရှိတဲ့ကောင်ကို အခြေခံပြီး 0 ကနေ 360 အတွင်းသွားပေးပါ 

    // Method 2
    const scale = (num,inmin,inmax,outmin,outmax) => (num - inmin) * (outmax - outmin) / (inmax - inmin) + outmin;

    hourel.style.transform = `translate(-50%,-100%) rotate(${scale(hoursforclock, 0, 12, 0, 360)}deg)`;

    minutel.style.transform = `translate(-50%,-100%) rotate(${scale(minutes, 0, 60, 0, 360)}deg)`;

    secondel.style.transform = `translate(-50%,-100%) rotate(${scale(seconds, 0, 60, 0, 360)}deg)`;

    timeel.innerText = `${hoursforclock}:${minutes < 10 ? "0"+minutes : minutes} ${getampm}`;

    dateel.innerHTML = `${days[day]} ,${months[month]} <span class="circle">${today}</span>`
}

function setRotation(needle, rotation){
    needle.style.setProperty("--rotation", rotation * 360);
}

setInterval( setTime , 1000);
setTime();