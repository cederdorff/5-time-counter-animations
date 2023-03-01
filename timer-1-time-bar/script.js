// når siden er loadet går man til funktionen sidenVises
window.addEventListener("load", sidenVises);

function sidenVises() {
  // Skriv ud i konsollen hvor langt vi er nået
  console.log("sidenVises");

  // En eventlistener som lytter efter et klik på timeren og sender os til funktionen startSpillet når det sker
  document.querySelector("#time_container").addEventListener("click", startSpillet);
}

function startSpillet() {
  // Skriv ud i konsollen hvor langt vi er nået
  // Skriv ud i konsollen at tiden er startet...
  console.log("startSpillet - tiden er startet");

  // fjern eventlistneren for click
  document.querySelector("#time_container").removeEventListener("click", startSpillet);

  // Sæt timer-animationen (shrink) i gang ved at tilføje klassen shrink til time_sprite
  document.querySelector("#time_sprite").classList.add("shrink");

  // Tilføj en eventlistener som lytter efter at animationen er færdig (animationend) og kalder funktionen stopSpillet
  document.querySelector("#time_sprite").addEventListener("animationend", stopSpillet);
}

function stopSpillet() {
  // Skriv ud i konsollen hvor langt vi er nået
  // Skriv ud i konsollen at tiden er gået...
  console.log("stopSpillet - tiden er gået");

  //Fjern eventlistner der lytter efter animationend
  document.querySelector("#time_sprite").addEventListener("animationend", stopSpillet);

  // fjern animationen fra timeren (fjern klassen shrink fra time_sprite)
  document.querySelector("#time_sprite").classList.remove("shrink");

  // sætter click-eventlistener på igen, så vi kan lytte efter om der bliver klikket igen
  document.querySelector("#time_container").addEventListener("click", startSpillet);
}
