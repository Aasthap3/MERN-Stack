const from = document.getElementById("from");
const to = document.getElementById("to");
const fromFlag = document.querySelector("#fromFlag");
const toFlag = document.querySelector("#toFlag");


async function convert() {
  const amt = document.getElementById("amt").value.trim();
  const fromCurr = from.value.split(",")[1].toLowerCase();
  const toCurr = to.value.split(",")[1].toLowerCase();

  const URL = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${fromCurr}.json`;

  const response = await fetch(URL);
  const data = await response.json();

  const rate = data[fromCurr];
  const newAmt = amt * rate[toCurr];
  const txt = "1 " + fromCurr + " = " + newAmt + toCurr;
  document.getElementById("converted").innerText = txt;

}

async function autofill() {
  const response = await fetch("./codes.json");
  const data = await response.json();

  data.forEach((element) => {
    const newOption = document.createElement("option");
    newOption.innerText = element.Currency_Code;
    newOption.value = element.Country_Code + "," + element.Currency_Code;

    from.appendChild(newOption);
  });

  data.forEach((element) => {
    const newOption = document.createElement("option");
    newOption.innerText = element.Currency_Code;
    newOption.value = element.Country_Code + "," + element.Currency_Code;

    to.appendChild(newOption);
  });

  from.value = "US,USD";
  to.value = "IN,INR"
}

autofill();

from.addEventListener("change", updateFromFlag);
to.addEventListener("change", updateToFlag);

function updateFromFlag(){
    let countryCode = from.value.split(",")[0];
    fromFlag.src = `https://flagsapi.com/${countryCode}/flat/48.png`;
};

function updateToFlag(){
    let countryCode = to.value.split(",")[0];
    toFlag.src = `https://flagsapi.com/${countryCode}/flat/48.png`;
};