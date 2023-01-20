let pageview = document.getElementById("pageview");

document.getElementById("page_back").onclick = function() {
	pageview.contentWindow.history.back();
}