// UI
const background = document.querySelector(".background");
const password = document.getElementById("password");
const eyeicon = document.getElementById("eye");

// Event Listener
password.addEventListener("input", (e)=>{
    // console.log(e.target.value);

    const input = e.target.value;
    const inlenght = input.length;
    const blurvalue = 20 - inlenght * 2;
    background.style.filter = `blur(${blurvalue}px)`;
});

eyeicon.addEventListener("click", (e)=>{

    if(e.target.classList.contains("fa-eye")){
        // console.log("show password");

        // Method 1
        // eyeicon.classList.remove("fa-eye");
        // eyeicon.classList.add("fa-eye-slash");
        
        // Method 2
            password.setAttribute("type", "text");
           eyeicon.classList.replace("fa-eye","fa-eye-slash");
           
    } else {
        // console.log("hide password");

        // eyeicon.classList.remove("fa-eye-slash");
        // eyeicon.classList.add("fa-eye");
        password.setAttribute("type", "password");
        eyeicon.classList.replace("fa-eye-slash","fa-eye");
        
    }
})

