let total_breakfast = document.getElementById("total_breakfast");
let total_lunch = document.getElementById("total_lunch");
let total_dinner = document.getElementById("total_dinner");
let total_snacks = document.getElementById("total_snacks");
let total_calories = document.getElementById("total_calories");

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
    total_calories.innerHTML = total;
}

updateDisplay();