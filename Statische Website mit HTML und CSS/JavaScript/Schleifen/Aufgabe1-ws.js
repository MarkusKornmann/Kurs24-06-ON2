function sumEvenNumbersWhile() {
    let sum = 0;
    let i = 2;
    while (i <= 100) {
        sum += i;
        i += 2;
    }
    return sum;
}

console.log("Die Summe der geraden Zahlen von 1 bis 100 beträgt: " + sumEvenNumbersWhile());
