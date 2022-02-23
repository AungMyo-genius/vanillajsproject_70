// UI
const container = document.querySelector('.container');
const url = "https://source.unsplash.com/random/";
const row = 10;

for(let i = 0; i< row *3; i++){
    const img = document.createElement('img');
    img.src = `${url}${getrandomsize()}`;
    container.appendChild(img);
}

function getRandomNumber() {
    return Math.floor(Math.random() *  10) + 300;
}

// console.log(getRandomNumber());

function getrandomsize() {
    return `${getRandomNumber()}x${getRandomNumber()}`;
}