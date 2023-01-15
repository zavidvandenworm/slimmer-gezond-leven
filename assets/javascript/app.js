let pageview = document.getElementById("pageview");
document.getElementById("homepage").onclick = function() {
    pageview.src = "./assets/pages/homepagina.html";
}
document.getElementById("profile").onclick = function() {
    pageview.src = "./assets/pages/profiel.html";
}
document.getElementById("friends").onclick = function() {
    pageview.src = "./assets/pages/vrienden.html";
}
document.getElementById("exercises").onclick = function() {
    pageview.src = "./assets/pages/oefeningen.html";
}