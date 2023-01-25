let submit = document.getElementById('submit-form');

function processForm(e) {
    if (e.preventDefault) e.preventDefault();

    const formData = new FormData(e.target);
    const formProps = Object.fromEntries(formData);

    var date = new Date();
	var current_date = date.getFullYear()+"-"+(date.getMonth()+1)+"-"+ date.getDate();

    localStorage.setItem("sgl_school", formData.get("sgl_school"));
    localStorage.setItem("sgl_classcode", formData.get("sgl_classcode"));
    localStorage.setItem("sgl_name", formData.get("sgl_name"));
    localStorage.setItem("sgl_birthday", formData.get("sgl_birthday"));
    localStorage.setItem("sgl_gender", formData.get("sgl_gender"));
    localStorage.setItem("sgl_weight", formData.get("sgl_weight"));
    localStorage.setItem("sgl_trainingintensity", formData.get("sgl_trainingintensity"));
    localStorage.setItem("sgl_idealweight", formData.get("sgl_idealweight"));
    localStorage.setItem("sgl_dailycalories", formData.get("sgl_dailycalories"));
    localStorage.setItem("sgl_joindate", date);
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
    googla[3].value = "2004-11-03";
    googla[4].value = "Man";
    googla[5].value = "68";
    googla[6].value = "Middel";
    googla[7].value = "80";
    googla[8].value = "3169";
}
