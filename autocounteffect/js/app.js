
const counters = document.querySelectorAll(".counter");
// console.log(counters);

counters.forEach( counter=> {

    
    counter.innerText = "0";
    const updatecounter = ()=> {

        // const target = Number(counter.getAttribute("data-target"));
        const target = +counter.getAttribute("data-target");
        // console.log(target);
        // console.log(typeof target, target);

        const ctr = Number(counter.innerText);
        // console.log(typeof ctr, ctr);

        const increment = target / 100;
        // console.log(increment);

        if(ctr < target){
            counter.innerText = ctr + increment;

            setTimeout(updatecounter,50);
            // setInterval(updatecounter,50);
            console.log("if");
        }
        
    };
    updatecounter();
    console.log("outer");
});

// 29L2 WDP4050