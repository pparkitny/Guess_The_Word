var elements = document.getElementsByClassName('box'); // get all elements with class 'box'
var requiredElement = elements[0]; // get first element with class 'box'
var count = 0;
var word = document.getElementById('word');
var wordName = word.getAttribute("value");
word.remove()
console.log(wordName)

document.addEventListener('keydown', function(event) { // listening for typing on keyboard
    const key = event.key;
    var letters = /^[A-Za-z]+$/; // only letters
    var i = 0;
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
                if (wordName.includes(element.innerHTML)) {
                    if (element.innerHTML == wordName[i]){
                        element.className = "boxGreen"; 
                    }
                    else {
                        element.className = "boxYellow";
                    }
                }
                else {
                    element.className = "boxBlack";
                }
                i++;
            });
        }
     }
});
