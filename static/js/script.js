var a = document.getElementById("a"),
    b = document.getElementById("b"),
    c = document.getElementById("c"),
    d = document.getElementById("d"),
    e = document.getElementById("e");

a.onkeyup = function() {
    if (this.value.length === parseInt(this.attributes["maxlength"].value)) {
        b.focus();
    }
    this.addEventListener('keydown', function(event) {
        const key = event.key; 
        if (key === "Backspace") {
            if (this.value.length < parseInt(this.attributes["maxlength"].value)) {a.focus()};
        }
    });
}

b.onkeyup = function() {
    if (this.value.length === parseInt(this.attributes["maxlength"].value)) {
        c.focus();
    }
    this.addEventListener('keydown', function(event) {
        const key = event.key;
        if (key === "Backspace") {
            if (this.value.length < parseInt(this.attributes["maxlength"].value)) {a.focus()};
        }
    });
}

c.onkeyup = function() {
    if (this.value.length === parseInt(this.attributes["maxlength"].value)) {
        d.focus();
    }
    this.addEventListener('keydown', function(event) {
        const key = event.key;
        if (key === "Backspace") {
            if (this.value.length < parseInt(this.attributes["maxlength"].value)) {b.focus()};  
        }
    });
}

d.onkeyup = function() {
    if (this.value.length === parseInt(this.attributes["maxlength"].value)) {
        e.focus();
    }
    this.addEventListener('keydown', function(event) {
        const key = event.key;
        if (key === "Backspace") {
            if (this.value.length < parseInt(this.attributes["maxlength"].value)) {c.focus()};  
        }
    });
}

e.onkeyup = function() {
    this.addEventListener('keydown', function(event) {
        const key = event.key;
        if (key === "Backspace") {
            if (this.value.length < parseInt(this.attributes["maxlength"].value)) {d.focus()};
        }
    });
}
