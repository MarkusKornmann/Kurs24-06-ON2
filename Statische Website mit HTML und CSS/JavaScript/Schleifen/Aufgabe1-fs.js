function sumEvenNumbersFor() {
    let sum = 0;
    for (let i = 2; i <= 100; i += 2) {
        sum += i;
    }
    return sum;
}

console.log("Die Summe der geraden Zahlen von 1 bis 100 beträgt: " + sumEvenNumbersFor());