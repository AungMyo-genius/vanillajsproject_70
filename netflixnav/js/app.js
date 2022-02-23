const openbtn = document.querySelector(".open-btn");
const closebtn = document.querySelector(".close-btn");
const navs = document.querySelectorAll(".nav");
// console.log(navs);

openbtn.addEventListener("click", ()=>{
    navs.forEach( nav => {
        nav.classList.add("visible");
    })
})

closebtn.addEventListener("click", ()=>{
    navs.forEach( nav => {
        nav.classList.remove("visible");
    })
})

// 29NF WDF4050