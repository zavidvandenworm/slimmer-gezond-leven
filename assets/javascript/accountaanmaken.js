let submit = document.getElementById('submit-form');

function processForm(e) {
    if (e.preventDefault) e.preventDefault();

    const formData = new FormData(e.target);
    const formProps = Object.fromEntries(formData);
    localStorage.setItem("sgl_school", formData.get("sgl_school"));
    localStorage.setItem("sgl_classcode", formData.get("sgl_classcode"));
    localStorage.setItem("sgl_name", formData.get("sgl_name"));
    localStorage.setItem("sgl_classcode", formData.get("sgl_classcode"));
    localStorage.setItem("sgl_birthday", formData.get("sgl_birthday"));
    localStorage.setItem("sgl_gender", formData.get("sgl_gender"));
    localStorage.setItem("sgl_weight", formData.get("sgl_weight"));
    localStorage.setItem("sgl_trainingintensity", formData.get("sgl_trainingintensity"));
    localStorage.setItem("sgl_idealweight", formData.get("sgl_idealweight"));
    localStorage.setItem("sgl_dailycalories", formData.get("sgl_dailycalories"));
    localStorage.setItem("sgl_loggedin", "true");

    return false;
}

var form = document.getElementById('accountform');
if (form.attachEvent) {
    form.attachEvent("submit", processForm);
} else {
    form.addEventListener("submit", processForm);
}