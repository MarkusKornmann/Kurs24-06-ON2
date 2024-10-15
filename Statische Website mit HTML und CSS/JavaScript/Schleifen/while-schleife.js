function calcSum(array) {
    var sum = 0;
    var i = 0;
    while (i < array.length) {
        sum += array[i]; i++;
    }
    return sum;
}

const zahlenArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const ergebnisSum = calcSum(zahlenArray);
console.log("Die Summe beträgt: " + ergebnisSum);




