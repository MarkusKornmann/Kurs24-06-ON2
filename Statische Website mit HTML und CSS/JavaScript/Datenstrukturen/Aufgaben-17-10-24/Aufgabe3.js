// Aufgabe 3: Iteration über Map
const orteMap = new Map();

orteMap.set('Berlin', 'Deutschland');
orteMap.set('Paris', 'Frankreich');  
orteMap.set('Rom', 'Italien');

Berlin = orteMap.get('Berlin');
console.log("Berlin liegt in:", Berlin); 

Paris = orteMap.get('Paris');
console.log("Paris liegt in:", Paris); 

Rom = orteMap.has('Rom');
console.log("Gibt es Rom in der Map?", Rom);