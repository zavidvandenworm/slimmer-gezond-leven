let total_breakfast = document.getElementById("bc_amount");
let total_lunch = document.getElementById("lc_amount");
let total_dinner = document.getElementById("dc_amount");
let total_snacks = document.getElementById("sn_amount");
let calorie_goal_bar = document.getElementById("goal_bar_filled");
let goal_number = document.getElementById("goal_number");

if(localStorage.getItem("sgl_calories_breakfast") === null) {
    localStorage.setItem("sgl_calories_breakfast", "0");
    localStorage.setItem("sgl_calories_lunch", "0");
    localStorage.setItem("sgl_calories_dinner", "0");
    localStorage.setItem("sgl_calories_snacks", "0");
}

function updateDisplay() {
    let total = 
    parseInt(localStorage.getItem("sgl_calories_breakfast")) +
    parseInt(localStorage.getItem("sgl_calories_lunch")) +
    parseInt(localStorage.getItem("sgl_calories_dinner")) +
    parseInt(localStorage.getItem("sgl_calories_snacks"));
    total_breakfast.innerHTML = localStorage.getItem("sgl_calories_breakfast");
    total_lunch.innerHTML = localStorage.getItem("sgl_calories_lunch");
    total_dinner.innerHTML = localStorage.getItem("sgl_calories_dinner");
    total_snacks.innerHTML = localStorage.getItem("sgl_calories_snacks");
    goal_number.innerHTML = total + "/" + localStorage.getItem("sgl_dailycalories");
    calorie_goal_bar.style.width = (total / parseInt(localStorage.getItem("sgl_dailycalories")))*100 + "%";
}

updateDisplay();

function addCalories(type, amount) {
    switch(type){
        case "breakfast":
            localStorage.setItem("sgl_calories_breakfast", 
            parseInt(localStorage.getItem("sgl_calories_breakfast"))+parseInt(amount));
            break;
        case "lunch":
            localStorage.setItem("sgl_calories_lunch", 
            parseInt(localStorage.getItem("sgl_calories_lunch"))+parseInt(amount));
            break;
        case "dinner":
            localStorage.setItem("sgl_calories_dinner", 
            parseInt(localStorage.getItem("sgl_calories_dinner"))+parseInt(amount));

            break;
        case "snack":
            localStorage.setItem("sgl_calories_snacks", 
            parseInt(localStorage.getItem("sgl_calories_snacks"))+parseInt(amount));

            break;
    }
    updateDisplay();
}