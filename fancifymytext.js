function bigger() {
    document.getElementById("text").style.fontSize = "2em";
}

function fancy() {
    document.getElementById("text").style.fontWeight = "bold";
    document.getElementById("text").style.color = "blue";
    document.getElementById("text").style.textDecoration = "underline";
}

function boring() {
    document.getElementById("text").style.fontWeight = "normal";
    document.getElementById("text").style.color = "black";
    document.getElementById("text").style.textDecoration = "none";
}

function moo() {
    document.getElementById("text").value = document.getElementById("text").value.toUpperCase();

    let s = document.getElementById("text").value;

    var parts = s.split(".");
    s = parts.join("-Moo. ");

    document.getElementById("text").value = s;
}