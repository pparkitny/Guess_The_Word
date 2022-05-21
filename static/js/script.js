var elements = document.getElementsByClassName('box');
var requiredElement = elements[0];

document.addEventListener('keydown', function(event) {
    const key = event.key;
    var letters = /^[A-Za-z]+$/;
    if (key === "Backspace") {
        var delElement = Array.from(
            document.getElementsByClassName('boxDone')
          ).pop();
        delElement.innerHTML = "";
        delElement.className = "box";
        requiredElement = elements[0]
    }
    else if(String.fromCharCode(event.keyCode).match(letters)) {
        if(document.getElementsByClassName('boxDone').length < 5){
            requiredElement.innerHTML += key;
            requiredElement.className = "boxDone";
            requiredElement = elements[0]
     }
    }
});