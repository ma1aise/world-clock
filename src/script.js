function updateTime() {
  // Brisbane
  let brisbaneElement = document.querySelector("#brisbane");
  if (brisbaneElement) {
    let brisbaneDateElement = brisbaneElement.querySelector(".date");
    let brisbaneTimeElement = brisbaneElement.querySelector(".time");
    let brisbaneTime = moment().tz("Australia/Brisbane");

    brisbaneDateElement.innerHTML = brisbaneTime.format("MMMM	Do YYYY");
    brisbaneTimeElement.innerHTML = brisbaneTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  // Madrid
  let madridElement = document.querySelector("#madrid");
  if (madridElement) {
    let madridDateElement = madridElement.querySelector(".date");
    let madridTimeElement = madridElement.querySelector(".time");
    let madridTime = moment().tz("Europe/Madrid");

    madridDateElement.innerHTML = madridTime.format("MMMM	Do YYYY");
    madridTimeElement.innerHTML = madridTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
