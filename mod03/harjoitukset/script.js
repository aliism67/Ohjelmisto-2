function calculateAverage(numbers) {
    let sum = 0;

    for (let number of numbers) {
        sum += number;
    }
    return sum / numbers.length;
}

const numbers = [1, 2, 3, 4, 5];

console.log(calculateAverage(numbers));