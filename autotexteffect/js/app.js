const textel = document.getElementById("text");
const speedel = document.getElementById("speed");

const text = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. ";

let idx = 1;
let speed = 1000;

function autotext() {
    textel.innerText = text.slice(0,idx);
    idx++;

    if(idx > text.length) {
        idx = 1;
    }

    // setTimeout(autotext,speed);
    setTimeout( ()=>{
        console.log(idx);
        autotext();
    } , speed);
}

autotext();

speedel.addEventListener('click' ,()=>{

    speed = 1000/speedel.value;
}  );

// speed =1
// 2000/1 = 2000 = 2
// 2000/50 = 400