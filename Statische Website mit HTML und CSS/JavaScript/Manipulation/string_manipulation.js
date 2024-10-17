// str Manipulation
// 1. string -verkettung
let name = "Markus";
let greeting = "Hallo";
console.log("Willkommen, " + name);
console.log("Willkommen, " + name + ". Möchtest du " + greeting + " sagen?");

// 2.Template Strings
// `...` erlauben das Einfügen von Variable mit ${}
let nachname = "Kornmann"
let gruss = `Willkommen Herr ${nachname}`;
console.log(gruss);
let zahl1 = 5;
let zahl2 = 7;
let erg = (zahl1 + zahl2)
console.log(`Das ergebnis ist ${erg}`);
console.log("Das ergebnis ist " + erg);

//3. String Methoden

let str1 = "   Hallo Welt!";
let formattedStrTU = str1.trim().toUpperCase(); // trim + uppercase
let formattedStrTL = str1.trim().toLowerCase(); // trim + lowercase
console.log(formattedStrTU); console.log(formattedStrTL);

// 4. String-Interpolation in Funktionen

function mehrwertSteuerpreis(preis) {
const steuersatz = 0.19;
gesammtpreis = preis * (1 + steuersatz); // 100 + 19
return `Der Gesammtpreis beträgt: €${gesammtpreis.toFixed(2)}`
}
console.log(mehrwertSteuerpreis(100))

// 5 . verwendung von replace()
let text = "Das ist ein Test";
let neuerText = text.replace("Test", "Beispiel");
console.log(neuerText)











