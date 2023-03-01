window.addEventListener("load", ready);

function ready() {
    document.querySelector("#btn_start_timer").addEventListener("click", startTimer);
}

function startTimer() {
    // Sæt timer-animationen (count) i gang ved at tilføje klassen count til number
    document.querySelector("#number").classList.add("count");

    // Tilføj en eventlistener som lytter efter at animationen er færdig (animationend) og kalder funktionen timeIsUp
    document.querySelector("#number").addEventListener("animationend", timeIsUp);
}

function timeIsUp() {
    console.log("Tiden er gået!");
    document.querySelector("#number").classList.remove("count");
}
