const currencyonel = document.getElementById('currency-one'),
 amountoneel = document.getElementById("amount-one");

const currencytwoel = document.getElementById("currency-two"),
    amounttwoel = document.getElementById("amount-two");

const swapel = document.getElementById('swap'),
    rateel = document.getElementById('rate');

function calculate(){
    // console.log("hay");

    const crcyone = currencyonel.value;
    const crcytwo = currencytwoel.value;

    // console.log(crcyone,crcytwo,amtone,amttwo);
    const apikey = `180680f4d580a514034b699e`;

    const uri = `https://v6.exchangerate-api.com/v6/${apikey}/latest/${crcyone}`;

    console.log("uri");

    // AJAX Request

    fetch(uri)
    .then(res=>res.json())
    .then(req=>{
        // console.log(data);

        const rate = req.conversion_rates[crcytwo];

        // console.log(rate);
        rateel.innerHTML = `1 ${crcyone} = ${rate} ${crcytwo}`;

        amounttwoel.value = (amountoneel.value * rate).toFixed(2); 
    })
}

//Event Listener
currencyonel.addEventListener("change",calculate);
amountoneel.addEventListener("input",calculate);
currencytwoel.addEventListener("change",calculate);
amounttwoel.addEventListener("input",calculate);

swapel.addEventListener("click", ()=>{
    const temp = currencyonel.value;
    
    currencyonel.value = currencytwoel.value;
    currencytwoel.value = temp;

    calculate();
})

// 18L1F WDF4050