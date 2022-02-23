const gettoggles = document.querySelectorAll(".faq-toggle");

gettoggles.forEach( gettoggle =>{

    gettoggle.addEventListener('click' , ()=>{

        
        gettoggle.parentNode.classList.toggle("active");
    })
});

//10F075 WDF4050