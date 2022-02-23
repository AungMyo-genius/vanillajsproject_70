// UI
const loginsection = document.querySelector(".login"),
registersection = document.querySelector(".register"),
forgotsection = document.querySelector(".forgot");

const loginlink = document.querySelector(".login-link"),
registerlink = document.querySelector(".register-link"),
forgotlink = document.querySelector(".forgot-link");

const closebtn = document.querySelector(".close");

registerlink.addEventListener("click", ()=>{
    // loginsection.style.display = "none";
    // registersection.style.display = "flex";
    changedisplay(loginsection, registersection);
});

loginlink.addEventListener("click", ()=>changedisplay(registersection, loginsection));

forgotlink.addEventListener("click", ()=>
changedisplay(loginsection, forgotsection)
);

closebtn.addEventListener("click", ()=>
changedisplay(forgotsection, loginsection)
);

function changedisplay(first , second){
    first.style.display = "none";
    second.style.display = "flex";
}