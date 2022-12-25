const sunIcon = "./sun-icon.png" 
const moonIcon = "./moon-icon.png"
const mode = document.getElementById("mode")
const btn = document.getElementById("toggle_button")
const icon  = document.getElementById("icon")

btn.addEventListener("click", ()=> {
    if(mode.getAttribute("class") == "dark-mode" ){
        mode.classList.toggle("dark-mode")
        mode.classList.toggle("Light-mode")
        document.body.style.background = "white"
        icon.setAttribute("src", moonIcon);
    }else{
        mode.classList.toggle("Light-mode")
        mode.classList.toggle("dark-mode")
        document.body.style.background = "black"
        icon.setAttribute("src", sunIcon);
    }
})
