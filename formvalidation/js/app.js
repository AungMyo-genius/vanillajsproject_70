//UL
const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const cfmpassword = document.getElementById("cfmpassword");

// console.log(form, username, email, password, cfmpassword);

// Method 1
// form.addEventListener("submit", function (e){
//     e.preventDefault();
//     // console.log(e);
//
//     if(username.value === ""){
//         showerror(username, "Username is required");
//     }else{
//         showsuccess(username);
//     }
//
//     if(email.value === ""){
//         showerror(email, "Email is required");
//     } else if(!validateEmail(email.value)){
//         showerror(email, "Email is not valid");
//     } else {
//         showsuccess(email);
//     }
//
//     if(password.value === ""){
//         showerror(password, "Password is required");
//     }else{
//         showsuccess(password);
//     }
//
//     if(cfmpassword.value === ""){
//         showerror(cfmpassword, "Confirm password is required");
//     }else if( password.value !== cfmpassword.value ) {
//         showerror(cfmpassword, "Password does not match.");
//     }else{
//         showsuccess(cfmpassword);
//     }
//
// })

function  showerror( input, message) {
    const formcontrol = input.parentElement;
    formcontrol.className = "form-control error";

    const small = formcontrol.querySelector("small");              //document အစား formcontrol ပြောင်းလိုက်
    small.innerText = message;
}

function  showsuccess(input) {
    const formcontrol = input.parentElement;
    formcontrol.classList.add("success");
    formcontrol.classList.remove("error");
}

// for checking email format
function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function checkrequired(inpurarrs){

    inpurarrs.forEach(function(inputarr){
        // console.log(inputarr);
        // console.log(inputarr.value);
        // console.log(inputarr.id);
        if(inputarr.value === ""){
        showerror(inputarr, `${getFieldName(inputarr)} is required`);
        }else{
        showsuccess(inputarr);
        }
    });
}
//Get Field Name
const getFieldName = (inputarr) => {
    return inputarr.id.charAt(0).toUpperCase() + inputarr.id.slice(1);
    // slice(1, inputarr.length -1 );
}


// Event Listener Method 2
form.addEventListener("submit", function(e){
    e.preventDefault();
    // console.log("hay");

    checkrequired([username, email,password,cfmpassword]);
    checklength(username, 3, 15);
    checklength(password, 6, 25);
    checkEmail(email);
    checkpasswordMatch(password,cfmpassword);
})

//Check input length
function  checklength(input, min,max){

    if(input.value.length < min){
        showerror(input, `${getFieldName(input)} must be at least ${min} characters.`);
    } else if(input.value.length > max){
        showerror(input, `${getFieldName(input)} must be less than ${max} charactures`);
    } else{
        showsuccess(input);
    }
}

//Check Email
function checkEmail(input) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(input.value)){
        showsuccess(input);
    }else{
        showerror(input,`Email is not valid`);
    }
}

//check password
function checkpasswordMatch(input1, input2){
    if(input1.value === input2.value){
        showerror(input2,`Password does not match`);
    }
}