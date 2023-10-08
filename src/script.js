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

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="city">
    <div>
      <h2>${cityName}</h2>
      <div class="date">${cityTime.format("MMMM	Do YYYY")}</div>
    </div>
    <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format(
    "A"
  )}</small></div>
  </div>
  `;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
