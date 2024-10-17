// 2. Erstellen einer neuen Map namens "stadtMap",
const orteMap = new Map();

orteMap.set('Berlin', 'Deutschland');
orteMap.set('Paris', 'Frankreich');  


const landVonBerlin = orteMap.get('Berlin');
console.log("Berlin liegt in:", landVonBerlin); 

Paris = orteMap.get('Paris');
console.log("Paris liegt in:", Paris); 


const istRomInMap = orteMap.has('Rom');
console.log("Gibt es Rom in der Map?", istRomInMap); 