window.addEventListener("load", sidenVises);

function sidenVises() {
  console.log("sidenVises");
  document.querySelector("#time_container").addEventListener("click", startSpillet);
}

function startSpillet() {
  console.log("startSpillet - tiden er startet");

  //Starter timeren (ur-animationen)
  document.querySelector("#minut_viser").classList.add("minut_animation");
  document.querySelector("#time_viser").classList.add("time_animation");

  //Når animationen er færdig kaldes stopSpillet()
  document.querySelector("#minut_viser").addEventListener("animationend", stopSpillet);
}

function stopSpillet() {
  console.log("stopSpillet - tiden er gået");

  //...til levelComplete eller gameOver
}
