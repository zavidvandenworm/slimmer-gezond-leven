function updateScore() {
    document.getElementById("score-value").innerHTML = localStorage.getItem("sgl_score")
}

function claimChallenge(name, points) {
    if(localStorage.getItem("sgl_score" === null)){
        alert("Maak een account aan");
        return
    }
    localStorage.setItem("sgl_score", parseInt(localStorage.getItem("sgl_score")) + points);
    document.getElementById("c_"+name).remove();
    updateScore();
}

updateScore();