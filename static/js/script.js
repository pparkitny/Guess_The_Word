var elements = document.getElementsByClassName('box'); // get all elements with class 'box'
var requiredElement = elements[0]; // get first element with class 'box'
var count = 0;
var word = document.getElementById('word'); // get given random word from django views.py
var word_name = word.getAttribute("value"); // get value of given word from django views.py
var all_words = document.getElementById('all_words'); // get given random word from django views.py
var whole_all_words = all_words.getAttribute("value"); // get value of given word from django views.py
var another = document.getElementsByClassName('another')[0]; // get div button another
var show_word = document.getElementById('show_word'); // get given random word from django views.py

word.remove() // remove this div to hide it from users
all_words.remove() // remove this div to hide it from users
console.log(word_name)


const enter_click = new KeyboardEvent('keydown', {bubbles: true, cancelable: true, keyCode: 13});  // simulate enter click


var keys = Array.from(document.getElementsByClassName('key'))  // create array from key classes (from app keyboard)
keys.forEach(el => {
    el.addEventListener('click', function (event) {  // if user click on div do action
        if (el.innerHTML == 'enter'){
            document.body.dispatchEvent(enter_click);   // simulate enter click
        }
        else if (el.innerHTML == 'usuń'){
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
        else{
            if(document.getElementsByClassName('boxDone').length < 5){
            requiredElement.innerHTML = el.innerHTML  // change value of div to empty
            count++;
            requiredElement.setAttribute('name', 'letter' + count); // change value of div to key that user typed
            requiredElement.className = "boxDone"; // change name of class to "boxDone"
            requiredElement = elements[0]
        }
    }pr
    });
});

document.addEventListener('keydown', function(event) { // listening for typing on keyboard
    const key = event.key;
    var letters = /^[A-Za-z]+$/; // only letters
    var i = 0; // set variable 'i' to zero to begin checking letters from begining
    var win = 0; // set variable 'win' to zero to begin checking winning from begining
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
    else if(String.fromCharCode(event.keyCode).match(letters) && 
            document.getElementsByClassName('lineWin').length < 1 && 
            document.getElementsByClassName('box').length > 0) { // check if user type letter
        if(document.getElementsByClassName('boxDone').length < 5){ // check if there is only 5 divs with class "boxDone"
            requiredElement.innerHTML = key.toUpperCase();  // fill first empty div with box class
            count++;
            requiredElement.setAttribute('name', 'letter' + count); // change value of div to key that user typed
            requiredElement.className = "boxDone"; // change name of class to "boxDone"
            requiredElement = elements[0] // again get first element with class name "box"
     }
    }
     else if(event.keyCode === 13) { // Click 'enter' and app will change css style of each boxes
        if(document.getElementsByClassName('boxDone').length == 5){ // do it only when it is full line of letters
            var elArray = document.getElementsByClassName('boxDone'); // get all boxes in line which are not empty (so every box)
            var temp_string = ""
            Array.from(elArray).forEach(element => { // Create string to check if user type word that exist
                temp_string += element.innerHTML;
            })
            if (whole_all_words.includes(temp_string)) { // check if word exist in our db
                show_word.innerHTML = ("This is a word :)");
                show_word.style.color = '#121214';
                Array.from(elArray).forEach(element => { // for every box it will be change css style
                    if (word_name.includes(element.innerHTML)) { // check if given word includes letter from box
                        if (element.innerHTML == word_name[i]){ // check if letter from box is on right position
                            element.className = "boxGreen";  // change class name to another with another css style
                            win++;
                            console.log(win)
                            
                            if (win == 5) {
                                element.parentElement.className = "lineWin"; // win of the game!
                                show_word.innerHTML = (word_name); // show msg to user
                                show_word.style.color = 'Green';
                                // set every boxex to done, beacuse of end of the game
                                Array.from(document.getElementsByClassName('box')).forEach(element => {
                                    element.className = "boxBlack";
                                })
                            }
                        }
                        else {
                            element.className = "boxYellow"; // change class name to another with another css style
                            element.parentElement.className = "lineDone";
                            if (document.getElementsByClassName('lineDone').length == 6){ // if user lose, game just ends
                                show_word.innerHTML = (word_name); // show msg to user
                                show_word.style.color = 'Red';
                            }
                        }
                    }
                    else {
                        element.className = "boxBlack"; // change class name to another with another css style
                        element.parentElement.className = "lineDone";
                        if (document.getElementsByClassName('lineDone').length == 6){ // if user lose, game just ends
                            show_word.innerHTML = (word_name); // show msg to user
                            show_word.style.color = 'Red';
                        }
                    }
                    i++; // increment variable 'i' to check all the letters and positions in word
                });
            }
            else {
                if (show_word.style.color == "red" ){ 
                    show_word.innerHTML = ("To ciągle nie słowo!"); // show msg to user
                    show_word.style.color = 'pink';
                }
                else {
                show_word.innerHTML = ("To nie jest słowo!"); // show msg to user
                show_word.style.color = 'red';
                }
            }
        }
        else if (document.getElementsByClassName('boxDone').length < 5) { // check if user fill whole line or if game is ended
            show_word.innerHTML = ("Wpisz całe słowo"); // show msg to user
            show_word.style.color = 'white';
        }

        var BlackArray = document.getElementsByClassName('boxBlack'); // get all boxes in line which are not empty (so every box)
        var temp_string_black = ""
        var YellowArray = document.getElementsByClassName('boxYellow'); // get all boxes in line which are not empty (so every box)
        var temp_string_yellow = ""
        var GreenArray = document.getElementsByClassName('boxGreen'); // get all boxes in line which are not empty (so every box)
        var temp_string_green = ""
        Array.from(BlackArray).forEach(element => { 
            temp_string_black += element.innerHTML;
        })
        Array.from(YellowArray).forEach(element => { 
            temp_string_yellow += element.innerHTML;
        })
        Array.from(GreenArray).forEach(element => { 
            temp_string_green += element.innerHTML;
        })

        var keyArray = document.getElementsByClassName('key');
            Array.from(keyArray).forEach(element => { 
                if (temp_string_black.includes(element.innerHTML)) {
                    element.className = "key_black"
                }
            })
            Array.from(keyArray).forEach(element => { 
                if (temp_string_yellow.includes(element.innerHTML)) {
                    if (element.className == 'key_green') {
                        element.className == 'key_green'
                    }
                    else { element.className = "key_yellow" }
                }
            })
            Array.from(keyArray).forEach(element => { 
                if (temp_string_green.includes(element.innerHTML)) {
                    element.className = "key_green"
                }
            })
    }
});


document.addEventListener('click', function( event ) { // get another word by refreshing website
    if (another == event.target) {    
        window.location.reload(true); // reload site
    }
});
