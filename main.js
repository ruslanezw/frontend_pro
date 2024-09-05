let stringNumber = "10369";
let realNumber = +stringNumber;

let firstNumber = Math.floor(realNumber / 10000 % 10);
let secondNumber = Math.floor(realNumber / 1000 % 10);
let thirdNumber = Math.floor(realNumber / 100 % 10);
let fourthNumber = Math.floor(realNumber / 10 % 10);
let fifthNumber = realNumber % 10;

console.log(realNumber);
console.log(`${firstNumber} ${secondNumber} ${thirdNumber} ${fourthNumber} ${fifthNumber}`);