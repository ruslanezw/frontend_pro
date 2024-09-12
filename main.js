const userNumber = +prompt("Enter your number");

let i = 2;
while (i < userNumber) {
    if (userNumber % i === 0) {
        console.log(`${userNumber} not a prime number`);
        break;
    } else {
        if (i === userNumber - 1) {
            console.log(`${userNumber} prime number`);
            break;
        }
    }
    i++;
}