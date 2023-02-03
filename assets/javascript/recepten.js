function gotoRecipe(meal) {
    let overweight = parseInt(localStorage.getItem("sgl_weight")) > parseInt(localStorage.getItem("sgl_idealweight"));
    switch(meal) {
        case "ontbijt":
            if(overweight) {
                location.href = "./pages_recepten/page_ontbijt_afvallen.html";
            } else {
                location.href = "./pages_recepten/page_ontbijt_aankomen.html";
            }
    }
}