const userNumber = +prompt("Enter your number");

let i = 0;

while (i < userNumber) {
    if (i * i > userNumber) break;
    console.log(i);
    i++;
}



