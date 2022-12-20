const btn = document.getElementById("btn")

btn.addEventListener("click",()=>{
    document.body.style.background = changeColour();
})


function changeColour(){
    return `hsl(${Math.floor(Math.random()*360)},100%,50%)`
}