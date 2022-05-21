var a = document.getElementById("a"),
    b = document.getElementById("b"),
    c = document.getElementById("c"),
    d = document.getElementById("d"),
    e = document.getElementById("e");

a.onkeyup = function() {
    if (this.value.length === parseInt(this.attributes["maxlength"].value)) {
        b.focus();
    }
}

b.onkeyup = function() {
    if (this.value.length === parseInt(this.attributes["maxlength"].value)) {
        c.focus();
    }
}
c.onkeyup = function() {
    if (this.value.length === parseInt(this.attributes["maxlength"].value)) {
        d.focus();
    }
}
d.onkeyup = function() {
    if (this.value.length === parseInt(this.attributes["maxlength"].value)) {
        e.focus();
    }
}