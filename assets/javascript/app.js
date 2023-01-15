let pageview = document.getElementById("pageview");
document.getElementById("homepage").onclick = function() {
    if(localStorage.getItem("sgl_loggedin") === null) {
        pageview.src = "./assets/pages/accountnodig.html";
        return;
    }
    pageview.src = "./assets/pages/homepagina.html";
}
document.getElementById("profile").onclick = function() {
    if(localStorage.getItem("sgl_loggedin") === null) {
        pageview.src = "./assets/pages/accountaanmaken.html";
        return;
    }
    pageview.src = "./assets/pages/profiel.html";
}
document.getElementById("friends").onclick = function() {
    if(localStorage.getItem("sgl_loggedin") === null) {
        pageview.src = "./assets/pages/accountnodig.html";
        return;
    }
    pageview.src = "./assets/pages/vrienden.html";
}
document.getElementById("exercises").onclick = function() {
    if(localStorage.getItem("sgl_loggedin") === null) {
        pageview.src = "./assets/pages/accountnodig.html";
        return;
    }
    pageview.src = "./assets/pages/oefeningen.html";
}
document.getElementById("devmenu").onclick = function() {
    pageview.src = "./assets/pages/dev.html";
}