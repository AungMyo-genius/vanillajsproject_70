const buttons = document.querySelectorAll(".btnripple");


buttons.forEach(function(button){

    button.addEventListener("click", function(e){

        const cx = e.clientX;
        const cy = e.clientY;
        // console.log(cx,cy);

        const btnleft = e.target.offsetLeft;
        const btntop = e.target.offsetTop;
        // console.log(btnleft = x, btntop = y);

        const xinside = cx - btnleft;
        const yinside = cy - btntop;
        // Create circle
        const circle = document.createElement("span");
        // circle.className = "circle";
        circle.classList.add("circle");
        // console.log(circle);

        circle.style.top = yinside+"px";
        circle.style.left = xinside+"px";

        // e.target.appendChild(circle);
        this.appendChild(circle);

        setTimeout(()=>{
            circle.remove();
        }, 600);
    });
});

// this က regular function() မှာဘဲ အလုပ်လုပ်
// ()=> မှာ အလုပ်မလုပ်
// e.target == this