// UI

const button = document.getElementById("button");
const toasts = document.getElementById("toasts");

const messages = [
    'Message One',
    'Message Two',
    'Message Three',
    'Message Four',
    'Message Five'
];

button.addEventListener("click", ()=>createnotifiction());
// button.addEventListener("click", ()=>createnotifiction(`Can't access`));
// button.addEventListener("click", ()=>createnotifiction(`Can't access`, 'success'));

function createnotifiction(message, type){
    // console.log("Hay");

    const notify = document.createElement("div");
    notify.classList.add("toast");
    notify.classList.add(type ? type: "info");
    // notify.innerText = getrandommessage();
    notify.innerText = message ? message : getrandommessage();

    toasts.appendChild(notify);

    setTimeout(()=>{
        notify.remove();
    }, 3000);
}

function getrandommessage(){
    return messages[Math.floor(Math.random()*messages.length)];
}

// console.log(getrandommessage());

//5TN WDF4050