const labels = document.querySelectorAll(".form-control label");

labels.forEach(label =>{
    // console.log(label.innerText.split(""));

    label.innerHTML=label.innerText
    .split("")
    .map((letter,index)=>
    `<span style="transition-delay:${50 * index}ms">${letter}</span>`).join('');
})