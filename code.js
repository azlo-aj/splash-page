

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
let minimizeButtons = document.querySelectorAll('.min'); 
let windowOpen = true; // Assuming a single window logic

function windowResize() {
  if (windowOpen) {
    document.querySelector('#content').style.opacity = "0";
    document.querySelector('#content').style.transform = "scale(1, 0) ";
    windowOpen = false;
  } else {
    document.getElementById('content').style.opacity = "100";
    document.querySelector('#content').style.transform = "scale(1, 1)";
    windowOpen = true;
  }
}
minimizeButtons.forEach(button => {
    button.addEventListener('click', windowResize); 
});

// change to random background
function changeBackground() {
    const backgrounds = [ 
      "backgrounds/1.gif",
      "backgrounds/2.gif"
    //   "backgrounds/3.gif",
    //   "backgrounds/4.gif",
    ];

    // Get a random index within the array's range
    const randomIndex = Math.floor(Math.random() * backgrounds.length);
    const selectedBackground = backgrounds[randomIndex];

    // Update the body's background image
    document.body.style.backgroundImage = `url(${selectedBackground})`;
}
// Call the function when the page loads
window.onload = changeBackground; 