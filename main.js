const userYearOfBirth = prompt("Enter year of birth!");
const userCity = prompt("Enter city!");
const userSport = prompt("Enter your favorite sport!");

if (userYearOfBirth) {
    console.log(`Your age: ${2024 - userYearOfBirth}`);
} else {
    console.log("It's a pity that you did not want to enter your date of birth (");
}

if (userCity === "Kyiv") {
    console.log("You live in the capital of Ukraine!");
} else if (userCity === "London") {
    console.log("You live in the capital of Great Britain!");
} else if (userCity === "Washington") {
    console.log("You live in the capital of United States!");
} else {
    console.log("It's a pity that you did not want to enter the city (");
}

if (userSport === "Football") {
    console.log("Cool! Do you want to Cristiano Ronaldo?");
} else if (userSport === "Boxing") {
    console.log("Cool! Do you want to Mike Tyson?");
} else if (userSport === "Tennis") {
    console.log("Cool! Do you want to Jannik Sinner?");
} else {
    console.log("It's a pity that you didn't want to enter your sport (");
}