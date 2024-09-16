let arr = [1, 2, "privet", 3, true, 4, 5];

function calcTheArithmetic(arr) {
    let numbers = [];

    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === "number") {
            numbers.push(arr[i]);
        }
    }
    if (numbers.length !== 0) {
        let sum = 0;

        for (let i = 0; i < numbers.length; i++) {
            sum += numbers[i]
        }

        return sum / numbers.length;
    } else {

        return "No numeric values in the array"
    }
}

console.log(calcTheArithmetic(arr));
