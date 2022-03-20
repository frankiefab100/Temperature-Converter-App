const celsiusElem = document.querySelector("#celsius");
const fahrenheitElem = document.querySelector("select #fahrenheit");
const kelvinElem = document.querySelector("select #kelvin");
const degree = document.querySelector("#degree");
const convertBtn = document.querySelector("#convert-btn");

window.addEventListener("load", () => {
  degree.value = "";
});

convertBtn.addEventListener("click", (e) => {
  e.preventDefault();
  getCelsiusValue();
});

function getCelsiusValue() {
  let inputValue = degree.value;

  if (fahrenheitElem) {
    let FahrenheitToCelsius = (inputValue - 32) * 0.55555;
    celsiusElem.innerHTML = `${FahrenheitToCelsius} &deg;c`;
  } else {
    let KelvinToCelsius = inputValue - 273;
    celsiusElem.innerHTML = `${KelvinToCelsius} &deg;c`;
  }
}
