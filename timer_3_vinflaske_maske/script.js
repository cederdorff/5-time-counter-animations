window.addEventListener("load", sidenVises);

function sidenVises() {
  console.log("sidenVises");
  document.querySelector("#time_container").addEventListener("click", startSpillet);
}

function startSpillet() {
  console.log("startSpillet - tiden er startet");

  //Starter de to timer-animationer (flaske 1 & 2)
  document.querySelector("#vin").classList.add("flasketimer");

  // når timeranimationen(erne) er færdige kaldes funktionen stopSpillet()
  document.querySelector("#vin").addEventListener("animationend", stopSpillet);
}

function stopSpillet() {
  console.log("stopSpillet - tiden er gået");

  //...til levelComplete eller gameOver
}
