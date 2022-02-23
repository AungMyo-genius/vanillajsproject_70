// UI
const picdiv = document.querySelector(".fill");
const empties = document.querySelectorAll(".empty");

//dragstart & dragend
picdiv.addEventListener("dragstart",dragstart);
picdiv.addEventListener("dragend", dragend);

// empties.forEach( empty=>{
//     empty.addEventListener("dragover", dragover);

//     empty.addEventListener("dragenter", dragenter);

//     empty.addEventListener("dragleave", dragleave);

//     empty.addEventListener("drop", dragdrop);
// })


for(let empty of empties){

    empty.addEventListener("dragover", dragover);

    empty.addEventListener("dragenter", dragenter);

    empty.addEventListener("dragleave", dragleave);

    empty.addEventListener("drop", dragdrop);
}

// for(let x in empties){
//     empties[x].addEventListener("dragover", dragover);

//     empties[x].addEventListener("dragenter", dragenter);

//     empties[x].addEventListener("dragleave", dragleave);

//     empties[x].addEventListener("drop", dragdrop);
// }


// Drag Start
function dragstart(){
    // console.log("dragstart is working");

    // this.classList.add("hold");
    this.className += " hold";

    setTimeout(()=>{
        this.className = "invisible";
    },0);

}

function dragend(){
    // console.log("dragend is working");

    this.className = "fill";
}


function dragover(e){
    console.log("drag over");
    e.preventDefault();
}
function dragenter(e){
    console.log("drag enter");
    e.preventDefault();
    this.className += " hovered";
}
function dragleave(e){
    // console.log("drag leave");
    e.preventDefault();
    this.className = "empty";
}
function dragdrop(){
    console.log("drag drop");

    this.className = "empty";
    this.appendChild(picdiv);
}

// 25DND