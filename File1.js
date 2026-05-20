let minions=document.querySelectorAll(".estyle");
let hey=document.querySelectorAll(".hey");
let click=document.querySelector("button");


for(one of minions){
    one.addEventListener("click",function(e){
        console.log(e.target);
        // if(e.target.className=="estyle")
            if(e.target.closest(".estyle"))
            {
            let hey1=this.querySelector(".hey");
            setTimeout(()=>{
              hey1.style.display="block";
              hey1.style.fontSize="0.7rem";
        },300);
        setTimeout(()=>{
             hey1.style.display="none";
        },1500);

        }
    });

}

document.addEventListener("click", function(e){
    console.log(e.target);
});

click.addEventListener("click",function(){
    for(let one of minions){
        setTimeout(()=>{
            one.style.transform="rotate(50deg)";
        },200);
           setTimeout(()=>{
            one.style.transform="rotate(0deg)";
        },800);

    }



});