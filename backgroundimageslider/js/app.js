//UI
const body = document.body;
const slides = document.querySelectorAll(".slide");
const leftbtn = document.getElementById("left");
const rightbtn = document.getElementById("right");

let activeslide = 0;

function setbody(){
    body.style.backgroundImage = slides[activeslide].style.backgroundImage;
    settactiveslide();
}
setbody();

function settactiveslide(){
    // slides.forEach( slide =>{
    //     slide.classList.remove("active");
    // });

    slides.forEach(slide=> slide.classList.remove("active"));

    slides[activeslide].classList.add("active");
}

rightbtn.addEventListener("click", function(){
    // console.log("hay");
    activeslide++;
    if(activeslide > slides.length -1) {
        activeslide = 0;
    }
    setbody();
});

leftbtn.addEventListener("click", function(){
    // console.log("hay");
    activeslide--;
    if(activeslide < 0) {
        activeslide = slides.length - 1;
    }
    setbody();
});

//4VW WDF4050