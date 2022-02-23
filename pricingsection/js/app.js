// UI

const checkbox = document.getElementById("toggle"),
slider = document.getElementById("slider");

const basic = document.querySelector(".basic");
const prof = document.querySelector(".prof");
const master = document.querySelector(".master");

slider.addEventListener("click", ()=>{
    
    if(checkbox.checked){
        basic.innerText = 120;
        prof.innerText = 230;
        master.innerText = 350;
    }else{
        [basic.innerText, prof.innerText, master.innerText] = [9.99, 19.99, 29.99];
    }
    console.log(checkbox.checked);
    // if(checkbox.checked){
    //     [basic.innerText, prof.innerText, master.innerText] = [9.99, 19.99, 29.99];
        
    // }else{
    //     basic.innerText = 120;
    //     prof.innerText = 230;
    //     master.innerText = 350;
    // }
})