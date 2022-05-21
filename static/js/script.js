var elements = document.getElementsByClassName('box');
var requiredElement = elements[0];

document.addEventListener('keydown', function(event) {
    const key = event.key;
    if (key === "Backspace") {
        var delElement = Array.from(
            document.getElementsByClassName('boxDone')
          ).pop();
        delElement.innerHTML = "";
        delElement.className = "box";
        requiredElement = elements[0]
    }
    else {
    requiredElement.innerHTML += key;
    requiredElement.className = "boxDone";
    requiredElement = elements[0]
    }
});