

function buttonUp(button) {
    button.style.webkitFilter = "brightness(100%)";
    button.style.borderBottom = "2px solid black";
    button.style.borderRight = "2px solid black";
    button.style.borderTop = "2px solid white";
    button.style.borderLeft = "2px solid white";
}
function buttonDown(button) {
    button.style.webkitFilter = "brightness(110%)";
    button.style.borderBottom = "2px solid white";
    button.style.borderRight = "2px solid white";
    button.style.borderTop = "2px solid black";
    button.style.borderLeft = "2px solid black";
}

// window hiding 
let minimize = document.querySelector('#min');
let minimize2 = document.querySelector('#ok');
let windowOpen = true;
function windowResize() {
    if (windowOpen === true) {
        document.querySelector('#border').style.opacity = "0";
        document.querySelector('#border').style.transform = "scale(1, 0) ";
        windowOpen = false;
    } else {
        document.getElementById('border').style.opacity = "100";
        document.querySelector('#border').style.transform = "scale(1, 1)";
        windowOpen = true;
    }
}
minimize.addEventListener('click', windowResize);
minimize2.addEventListener('click', windowResize);


