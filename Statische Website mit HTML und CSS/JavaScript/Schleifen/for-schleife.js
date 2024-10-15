function calcSum(array) {
    var sum = 0 
    // var und let Mit beiden können variablen angegeben werden. //
    // der Einsatz hängt von der Verwendung im gültigkeitsbereich =Scope //
    // let : hat einen Block-Gültigkeitsbereich. Das bedeutet, dass eine mit let deklarierte Variable nur innerhalb des Blocks (z.B. innerhalb von {}) verfügbar ist, in dem sie deklariert wurde.
    // var : hat einen Funktions- oder globalen Gültigkeitsbereich. Das bedeutet, dass eine mit var deklarierte Variable entweder innerhalb einer Funktion oder global verfügbar ist.
    for ( let i = 0; i < array.length; i++ ) {
        sum += array[i]
    } return sum;
}
const zahlenArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const ergebnisSum = calcSum(zahlenArray);
console.log ("Die Summe beträgt: " + ergebnisSum);







