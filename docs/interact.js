window.addEventListener('DOMContentLoaded',init,false);
            
function init() {
    alert('The page loaded!');
}
window.addEventListener('DOMContentLoaded',init,false);
function init() {
    var buttons = document.getElementsByTagName("p")
buttons[0].addEventListener('click', changeColor,false)
}
function changeColor() {
var colorMe1 = document.getElementById("colorToggle") 
{colorMe1.style.backgroundColor = "grey";
}
