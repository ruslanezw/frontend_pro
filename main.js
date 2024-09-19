function askNumber() {
    let attempts = 0;
    let lastNumber = null;

    while (attempts < 10) {
        let userInput = prompt("Введіть число більше 100:");

        if (userInput === null) {
            console.log("Ввід скасовано");
            return;
        }

        let userNumber = Number(userInput);

        if (isNaN(userNumber)) {
            console.log("Будь'ласка, введіть коректне число.");
            continue;
        }

        if (userNumber > 100) {
            lastNumber = userNumber;
            break;
        }

        attempts++;
    }

    if (lastNumber !== null) {
        console.log(`Останнє введене число більше 100: ${lastNumber}`);
    } else {
        console.log("Максимальна кількість спроб досягнута. Не було введено число більше 100.");
    }
}

askNumber();
