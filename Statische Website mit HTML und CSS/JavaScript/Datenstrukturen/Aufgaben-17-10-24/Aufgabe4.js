
// Aufgabe 4: Erste Schritte mit Set
const buchstabenSet = new Set();

buchstabenSet.add('A');
buchstabenSet.add('B');
buchstabenSet.add('C');

console.log(buchstabenSet.has('D')); 

buchstabenSet.add('A'); // A existiert bereits und wird nicht erstellt
console.log("Anzahl der Elemente im Set:", buchstabenSet.size); 