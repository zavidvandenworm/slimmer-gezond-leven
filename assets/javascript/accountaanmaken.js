let submit = document.getElementById('submit-form');

function js_yyyy_mm_dd_hh_mm_ss () {
    now = new Date();
    year = "" + now.getFullYear();
    month = "" + (now.getMonth() + 1); if (month.length == 1) { month = "0" + month; }
    day = "" + now.getDate(); if (day.length == 1) { day = "0" + day; }
    hour = "" + now.getHours(); if (hour.length == 1) { hour = "0" + hour; }
    minute = "" + now.getMinutes(); if (minute.length == 1) { minute = "0" + minute; }
    second = "" + now.getSeconds(); if (second.length == 1) { second = "0" + second; }
    return year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + second;
  }

function processForm(e) {
    if (e.preventDefault) e.preventDefault();

    const formData = new FormData(e.target);
    const formProps = Object.fromEntries(formData);

    localStorage.setItem("sgl_school", formData.get("sgl_school"));
    localStorage.setItem("sgl_classcode", formData.get("sgl_classcode"));
    localStorage.setItem("sgl_name", formData.get("sgl_name"));
    localStorage.setItem("sgl_username", formData.get("sgl_username"));
    localStorage.setItem("sgl_birthday", formData.get("sgl_birthday"));
    localStorage.setItem("sgl_gender", formData.get("sgl_gender"));
    localStorage.setItem("sgl_weight", formData.get("sgl_weight"));
    localStorage.setItem("sgl_trainingintensity", formData.get("sgl_trainingintensity"));
    localStorage.setItem("sgl_idealweight", formData.get("sgl_idealweight"));
    localStorage.setItem("sgl_dailycalories", formData.get("sgl_dailycalories"));
    localStorage.setItem("sgl_joindate", js_yyyy_mm_dd_hh_mm_ss());
    localStorage.setItem("sgl_score", 0);
    localStorage.setItem("sgl_loggedin", "true");

    location.href = "./profiel.html";
    return false;
}

var form = document.getElementById('accountform');
if (form.attachEvent) {
    form.attachEvent("submit", processForm);
} else {
    form.addEventListener("submit", processForm);
}

document.getElementById("quick-fill").onclick = function() {
    var form = document.querySelector('#accountform');
    var googla = Array.from(form.elements);
    googla[0].value = "Graaf Huyn";
    googla[1].value = "GH123";
    googla[2].value = "Maik";
    googla[3].value = "maik240";
    googla[4].value = "2004-11-03";
    googla[5].value = "Man";
    googla[6].value = "68";
    googla[7].value = "Middel";
    googla[8].value = "80";
    googla[9].value = "3169";
}
