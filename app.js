document.getElementById("discord").onclick = function() {navigator.clipboard.writeText("saladexe")}

document.getElementById("about").onclick = () => {
    document.getElementById("a").style.left = "75vw";
    document.getElementById("t").style.left = "0vw";
    document.getElementById("t").style.opacity = "0.5";
}

document.getElementById("t").onclick = () => {
    document.getElementById("a").style.left = "110vw";
    document.getElementById("t").style.opacity = "0";
    document.getElementById("t").style.left = "100vw";
}

document.getElementById("title").onclick = () => {
    location.reload()
}