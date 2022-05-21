var elements = document.getElementsByClassName('box'); // get all elements with class 'box'
var requiredElement = elements[0]; // get first element with class 'box'

document.addEventListener('keydown', function(event) { // listening for typing on keyboard
    const key = event.key;
    var letters = /^[A-Za-z]+$/; // only letters
    if (key === "Backspace") { // check if user typre 'Backspace'
        var delElement = Array.from(
            document.getElementsByClassName('boxDone') // get last element with class 'boxDone'
          ).pop();
        delElement.innerHTML = ""; // change value of div to empty
        delElement.className = "box"; // change name of class to 'box'
        requiredElement = elements[0] // again get first element with 'box' class
    }
    else if(String.fromCharCode(event.keyCode).match(letters)) { // check if user type letter
        if(document.getElementsByClassName('boxDone').length < 5){ // check if there is only 5 divs with class "boxDone"
            requiredElement.innerHTML += key; // change value of div to key that user typed
            requiredElement.className = "boxDone"; // change name of class to "boxDone"
            requiredElement = elements[0] // again get first element with class name "box"
     }
    }
});