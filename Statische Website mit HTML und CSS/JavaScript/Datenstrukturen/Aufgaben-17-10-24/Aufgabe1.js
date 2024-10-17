// Aufgabe 1: Wiederholung - Arrays


luxusautos = ['BMW', 'Audi', 'Mercedes'];

console.log("2.:");
console.log(luxusautos[1]); 



luxusautos.push('Volkswagen');
console.log("");


console.log("4.:");
console.log(luxusautos); 
console.log("");


console.log("4.1:");
for (let i = 0; i < luxusautos.length; i++) {
  console.log(luxusautos[i].toUpperCase());
  console.log("");
}


console.log("4.2:");
luxusautos.forEach(luxusauto => {
  console.log(luxusauto.toUpperCase());
  console.log("");
});