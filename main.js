let userNumber = prompt("Enter the number!");
let realUserNumber = +userNumber;
let firstNumber = Math.floor(realUserNumber / 100 % 10);
let secondNumber = Math.floor(realUserNumber / 10 % 10);
let thirdNumber = realUserNumber % 10;

if (firstNumber === secondNumber && secondNumber === thirdNumber && thirdNumber === firstNumber) {
    console.log('All numbers are the same!');
} else if (firstNumber === secondNumber || secondNumber === thirdNumber || thirdNumber === firstNumber) {
    console.log('Two numbers are the same!');
} else {
    console.log('All numbers are different!');
}
