const panels = document.querySelectorAll(".panel");

panels.forEach((panel)=>{

    panel.addEventListener('click', ()=> {
        removeactiveprevclass();
        panel.classList.add("active");
    })
});

function removeactiveprevclass() {
    panels.forEach((panel) => {
        panel.classList.remove("active");
    })
}