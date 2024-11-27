let merchant = document.getElementById("merchant");
let total = document.getElementById("total");
let final = document.querySelector(".final");
let span = document.createElement("span");

function end() {
  if (total.value != "") {
    let price = total.value - merchant.value;
    let span = document.createElement("span");
    span.innerHTML = price;
    final.appendChild(span);
  }
  convertToDollar();
}

const valuesToDollar = [
  { value: 60, dollar: 1 },
  { value: 325, dollar: 5 },
  { value: 660, dollar: 10 },
  { value: 1800, dollar: 25 },
  { value: 3850, dollar: 50 },
  { value: 8100, dollar: 100 },
];

function convertToDollar() {
  let inputValue = parseInt(document.getElementById("inputValue").value);
  let totalDollar = 0;

  for (let i = valuesToDollar.length - 1; i >= 0; i--) {
    while (inputValue >= valuesToDollar[i].value) {
      inputValue -= valuesToDollar[i].value;
      totalDollar += valuesToDollar[i].dollar;
    }
  }
  
  span.innerHTML = totalDollar + "$";
  final.appendChild(span);
  span.classList.add("dollar");
}


function findClosestCombination() {
  let inputValue = parseInt(document.getElementById("inputValue2").value);
  let closestSum = 0;
  let combination = [];
  let valuesToAdd = [60, 325, 660, 1800, 3850, 8100];
  let result = findCombination(inputValue, valuesToAdd);

  span.innerHTML = `أقرب مجموعة :  ${result.combination.join(" + ")} = ${result.sum}`;
  final.appendChild(span);
}

function findCombination(target, valuesToAdd) {
  let bestCombination = [];
  let bestSum = 0;


  valuesToAdd.sort((a, b) => b - a);
  let currentSum = 0;
  let combination = [];

  for (let value of valuesToAdd) {
    while (currentSum + value <= target + 10) {
      currentSum += value;
      combination.push(value);
    }
  }
  
  bestCombination = combination;
  bestSum = currentSum;
  
  return {
    sum: bestSum,
    combination: bestCombination,
  };
}
