let pageview = document.getElementById("pageview");

document.getElementById("page_back").onclick = function() {
	pageview.contentWindow.history.back();
}

document.getElementById("page_forward").onclick = function() {
	pageview.contentWindow.history.forward();
}

document.getElementById("page_home").onclick = function() {
	pageview.contentWindow.location = "./assets/pages/keuzepagina.html";
}

document.getElementById("page_debug").onclick = function() {
	pageview.contentWindow.location = "./assets/pages/dev.html";
}

document.getElementById("page_createaccount").onclick = function() {
	pageview.contentWindow.location = "./assets/pages/accountaanmaken.html";
}