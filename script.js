const inputNumber = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const resultOutput = document.getElementById("output");
const transformKey = [
  {
    divider: 1000,
    roman: "M",
  },
  {
    divider: 900,
    roman: "CM",
  },
  {
    divider: 500,
    roman: "D",
  },
  {
    divider: 400,
    roman: "CD",
  },
  {
    divider: 100,
    roman: "C",
  },
  {
    divider: 90,
    roman: "XC",
  },
  {
    divider: 50,
    roman: "L",
  },
  {
    divider: 40,
    roman: "XL",
  },
  {
    divider: 10,
    roman: "X",
  },
  {
    divider: 9,
    roman: "IX",
  },
  {
    divider: 5,
    roman: "V",
  },
  {
    divider: 4,
    roman: "IV",
  },
  {
    divider: 1,
    roman: "I",
  },
];
const validateInput = () => {
  let inputNumberParsed = parseInt(inputNumber.value);
  if (inputNumberParsed === 0 || isNaN(inputNumberParsed)) {
    resultOutput.innerText = "Please enter a valid number";
    return;
  }
  if (inputNumberParsed < 0) {
    resultOutput.innerText = "Please enter a number greater than or equal to 1";
    return;
  }
  if (inputNumberParsed >= 4000) {
    resultOutput.innerText = "Please enter a number less than or equal to 3999";
    return;
  }
  convertToRoman(inputNumberParsed);
};
const convertToRoman = (number) => {
  let result = "";
  for (let i = 0; i < transformKey.length; i++) {
    let multiplier = Math.floor(number / transformKey[i].divider);
    if (multiplier !== 0) {
      result += transformKey[i].roman.repeat(multiplier);
      number = number % transformKey[i].divider;
    }
  }
  resultOutput.innerText = result;
};
convertBtn.addEventListener("click", validateInput);
