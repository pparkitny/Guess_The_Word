var elements = document.getElementsByClassName('box'); // get all elements with class 'box'
var requiredElement = elements[0]; // get first element with class 'box'
var count = 0;
var word = document.getElementById('word'); // get given random word from django views.py
var wordName = word.getAttribute("value"); // get value of given word from django views.py
word.remove() // remove this div to hide it from users
console.log(wordName)

document.addEventListener('keydown', function(event) { // listening for typing on keyboard
    const key = event.key;
    var letters = /^[A-Za-z]+$/; // only letters
    var i = 0; // set variable 'i' to zero to begin checking letters from begining
    if (key === "Backspace") { // check if user typre 'Backspace'
        if(document.getElementsByClassName('boxDone').length > 0){
            var delElement = Array.from(
                document.getElementsByClassName('boxDone') // get last element with class 'boxDone'
            ).pop();
            
            delElement.innerHTML = ""; // change value of div to empty
            delElement.className = "box"; // change name of class to 'box'
            requiredElement = elements[0] // again get first element with 'box' class
            count--;
            requiredElement.setAttribute('name', ''); 
        }
    }
    else if(String.fromCharCode(event.keyCode).match(letters)) { // check if user type letter
        if(document.getElementsByClassName('boxDone').length < 5){ // check if there is only 5 divs with class "boxDone"
            requiredElement.innerHTML = key.toUpperCase();
            count++;
            requiredElement.setAttribute('name', 'letter' + count); // change value of div to key that user typed
            requiredElement.className = "boxDone"; // change name of class to "boxDone"
            requiredElement = elements[0] // again get first element with class name "box"
     }
    }
     else if(event.keyCode === 13) { // Click 'enter' and app will change css style of each boxes
        if(document.getElementsByClassName('boxDone').length == 5){ // do it only when it is full line of letters
            var elArray = document.getElementsByClassName('boxDone'); // get all boxes in line which are not empty (so every box)
            Array.from(elArray).forEach(element => { // for every box it will be change css style
                if (wordName.includes(element.innerHTML)) { // check if given word includes letter from box
                    if (element.innerHTML == wordName[i]){ // check if letter from box is on right opsition
                        element.className = "boxGreen";  // change class name to another with another css style
                    }
                    else {
                        element.className = "boxYellow"; // change class name to another with another css style
                    }
                }
                else {
                    element.className = "boxBlack"; // change class name to another with another css style
                }
                i++; // increment variable 'i' to check all the letters and positions in word
            });
        }
     }
});
