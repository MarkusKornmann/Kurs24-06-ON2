// 2. Arbeiten mit Schleifen und Arrays
orte = ["Oberhausen", "Duisburg", "Essen", "Koeln", "Duesseldorf"];

console.log("");

for (i = 0; i < orte.length; i++) {
    console.log(orte[i].toUpperCase());
}

console.log("");

Anzahl = [];
for (stadt of orte) {
    Anzahl.push(stadt.length);
}
console.log(Anzahl);
console.log("");