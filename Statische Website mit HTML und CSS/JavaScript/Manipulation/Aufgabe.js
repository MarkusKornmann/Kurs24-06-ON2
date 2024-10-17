// 1. String Verkettung
let name = "Markus Kornmann";
alter = 49;
gruss = "Hallo, " + name + ". Du bist " + alter + " Jahre alt.";
console.log(gruss);

// 2. Template String
vorname = "Markus"; nachname = "Kornmann"; stadt = "Tamponcity";
pitch = `Ich heiße ${vorname} ${nachname} und komme aus ${stadt}.`;
console.log(pitch);

// 3. String-Methoden
vollerName = "  Markus Kornmann  ";
console.log(vollerName.toLowerCase());
console.log(vollerName.toUpperCase());
console.log(vollerName.trim());

// 4. String-Interpolation in Funktionen
function begruesse(name) {
    return `Willkommen, ${name}!`;
  }
    result = begruesse("Markus");
console.log(result);

// 5. Verwendung von replace()
satz = "Das Wetter ist heute schlecht.";
neuerSatz = satz.replace("schlecht", "großartig");
console.log(neuerSatz); 