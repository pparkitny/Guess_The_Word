var a = document.getElementById("a"),
    b = document.getElementById("b"),
    c = document.getElementById("c"),
    d = document.getElementById("d"),
    e = document.getElementById("e");

a.addEventListener('keydown', function(event) {
    const key = event.key;
    if (key === "Backspace") {
        if (this.value.length < parseInt(this.attributes["maxlength"].value)) {a.focus()};
    }
    else if (this.value.length === parseInt(this.attributes["maxlength"].value)) {
        b.focus();
    }
});

b.addEventListener('keydown', function(event) {
    const key = event.key;
    if (key === "Backspace") {
        if (this.value.length < parseInt(this.attributes["maxlength"].value)) {a.focus()};
    }
    else if (this.value.length === parseInt(this.attributes["maxlength"].value)) {
        c.focus();
    }
});

c.addEventListener('keydown', function(event) {
    const key = event.key;
    if (key === "Backspace") {
        if (this.value.length < parseInt(this.attributes["maxlength"].value)) {b.focus()};
    }
    else if (this.value.length === parseInt(this.attributes["maxlength"].value)) {
        d.focus();
    }
});

d.addEventListener('keydown', function(event) {
    const key = event.key;
    if (key === "Backspace") {
        if (this.value.length < parseInt(this.attributes["maxlength"].value)) {c.focus()};
    }
    else if (this.value.length === parseInt(this.attributes["maxlength"].value)) {
        e.focus();
    }
});

e.addEventListener('keydown', function(event) {
    const key = event.key;
    if (key === "Backspace") {
        if (this.value.length < parseInt(this.attributes["maxlength"].value)) {d.focus()};
    }
});
