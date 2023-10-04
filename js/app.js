import ElementSelected, { addStyle } from "./elementClass.js"; 
import { windowSize } from "./windowSize.js";
const elements = new ElementSelected(".open" , "#headerContainer" , ".cancel" , ".abouthText" , ".activeBoxOne" , ".activeBoxElementTitle");
const styleArray = addStyle(elements);
styleArray[0].element.addEventListener("click" , (event) => {
    styleArray[1].element.style.display = "block";
    styleArray[1].element.style.height = "100vh";
    styleArray[0].element.style.display = "none"
    styleArray[2].element.style.display = "block"
    event.preventDefault();
})
styleArray[2].element.addEventListener("click" , (event) => {
    styleArray[1].element.style.display = "none";
    styleArray[1].element.style.height = "0vh";
    styleArray[0].element.style.display = "block";
    styleArray[2].element.style.display = "none";
    event.preventDefault();
})
styleArray[3].element.addEventListener("mouseenter" , () => {
    styleArray[4].element.classList.add("animate__heartBeat")
})

window.addEventListener("scroll" , () => {
    const scrollPosition = window.scrollY;
    if(scrollPosition >= 700){
        styleArray[3].element.classList.add("animate__tada")
    }
})

