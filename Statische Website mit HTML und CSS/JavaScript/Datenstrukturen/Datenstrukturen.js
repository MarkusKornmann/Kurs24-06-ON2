// Arrays
//let fruits = ["Apple", "Banana", "Cherry"];
//let array = fruits.split(","); // ergibt ["Apfel", "Birne", "Banane"]
//console.log(fruits[0]); // Ausgabe: Apple

//leeres Array
const leeresArray = [];

// zahlen-array, hat eine länge von 5, indizes 1-4
const zahlenArray = [1, 2, 3, 4, 5]

// String array
const namen = ["Markus", "Sascha", "Karin", "Werner"]

console.log(namen[0]); 
console.log(namen[1]);
console.log(zahlenArray[3]);

// Befüllung von arrays
namen.push("Werner");
//array.push(6);
leeresArray.push("Hund")
console.log(leeresArray);
console.log(namen);
console.log(zahlenArray);

// entfernen des letzten Elements aus dem array
namen.pop("");
