// UI
const terms = document.getElementById('years');
const bubble = document.querySelector('.bubble');

const loanform = document.getElementById("loan-form");
const loader = document.getElementById("loading");
const ulresult = document.getElementById("result");

// Event Listener
terms.addEventListener("input", function(){
    const val = terms.value;
    bubble.textContent = val > 1 ? `${val} Months` : `${val} Month`;
});

loanform.addEventListener("submit" ,function(e){
    // console.log('hay');

    // hide result
    ulresult.style.display = "none";
    //show loader
    loader.style.display = "block";


    setTimeout(calculateresult, 1000);
    
    e.preventDefault();
});

// Calculate Result
function calculateresult() {
    // console.log("calculating ....");
    
    // UL
    const amount = document.getElementById("amount");
    const interest = document.getElementById("interest");

    const monthlyPayment = document.getElementById("monthly-payment");
    const totalInterest = document.getElementById("total-interest");
    const totalPayment = document.getElementById("total-payment");

    const getprincipal = parseFloat(amount.value);
    const getinterest = parseFloat(interest.value);
    const getterm = parseFloat(terms.value);
    // console.log(getterm);

    // compute all monthly payment
    const monthly = Math.round((getprincipal * (getterm * getinterest)) / 100);

    // console.log(monthly);
    if(monthly){
        

        //hideloader
        loader.style.display = "none";
        
        //Show result
        ulresult.style.display = "block";

        monthlyPayment.value = ((getprincipal+monthly) / getterm).toFixed(2);
        totalInterest.value = monthly.toFixed(2);
        totalPayment.value = (monthlyPayment.value * getterm).toFixed(2);
    }else{
        // console.log("Please check your number");
        showerror("Please check your number");
    }

}

// showerror
function showerror(message){
    // hide loader
    loader.style.display = "none";

    // createElement
    const errordiv = document.createElement("div");

    //add class
    errordiv.className = "alert alert-danger";

    //Create text node
    errordiv.appendChild(document.createTextNode(message));

    // get Element
    const card = document.querySelector(".card");
    const heading = document.getElementById("heading");
    
    // insert error above heading insertBefore(up,down)
    card.insertBefore(errordiv, heading);

    // clear errordiv after display
    setTimeout(clearerror , 2000);
}

// clearerror
function clearerror(){
    document.querySelector(".alert").remove();
}

//17L1LC WDF4050