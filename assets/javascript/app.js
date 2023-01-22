let pageview = document.getElementById("pageview");
let debug_mode = true;

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

document.getElementById("home1").onclick = function() {
	pageview.contentWindow.location = "./assets/pages/homepagina.html";
}

document.getElementById("page_createaccount").onclick = function() {
	if(localStorage.getItem("sgl_loggedin") === null) {
		pageview.contentWindow.location = "./assets/pages/accountaanmaken.html";
		return;
	}
	pageview.contentWindow.location = "./assets/pages/profiel.html";
}

if(!debug_mode) {
	if(localStorage.getItem("sgl_loggedin") === null){
		pageview.contentWindow.location = "./assets/pages/accountaanmaken.html";
	}
}