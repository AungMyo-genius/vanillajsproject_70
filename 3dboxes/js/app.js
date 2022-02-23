// UI
const btn = document.getElementById("btn");
const boxexcontainer = document.getElementById("boxes");

btn.addEventListener("click", ()=> boxexcontainer.classList.toggle("big"));

function createbox(){

    for(let i=0; i < 4; i++){
        // console.log(i*-125);

        for(let j=0; j<4; j++){
            // console.log(j);

            const box = document.createElement('div');
            box.classList.add('box');
            box.style.backgroundPosition=`${-j * 125}px ${-i * 125}px`;
            // console.log(box);

            boxexcontainer.appendChild(box);
        }
    }
}

createbox();
