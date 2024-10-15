function interpretiereWetter() {
    const wetterlagen = ["Sonnig", "Regnerisch", "Schnee", "Windig"];
    const aktivitaeten = {
        "Sonnig": ["Gehe spazieren", "Mache ein Picknick", "Gehe joggen", "Gehe Schwimmen mit Freunden", "Gehe Eis essen"],
        "Regnerisch": ["Bleibe zu Hause und lese ein Buch", "Schaue einen Film", "Koche etwas warmes", "Spiele etwas schönes", "Miste deinen Wohnraum aus"],
        "Schnee": ["Baue einen Schneemann", "Gehe Skifahren", "Mache eine Schneeballschlacht", "Trinke einen heißen Kakao", "Zieh dich dick an"],
        "Windig": ["gehe ins Kino", "Quad fahren durch Matsch und Regen", "Fliege einen Drachen", "Gehe windsurfen", "Mache einen Spaziergang"]
    };

    const zufaelligeWetterlage = wetterlagen[Math.floor(Math.random() * wetterlagen.length)];
    const vorschlaege = aktivitaeten[zufaelligeWetterlage];
    const zufaelligeAktivitaet = vorschlaege[Math.floor(Math.random() * vorschlaege.length)];

    const farben = {
        "Sonnig": "\x1b[31m",
        "Regnerisch": "\x1b[40m",
        "Schnee": "\x1b[32m",
        "Windig": "\x1b[35m"
    };

    const reset = "\x1b[0m";

    return `${farben[zufaelligeWetterlage]}Wetterlage: ${zufaelligeWetterlage}, Aktivität: ${zufaelligeAktivitaet}${reset}`;
}

// Beispielaufrufe der Funktion
console.log(interpretiereWetter()); // Ausgabe: Eine zufällige Wetterlage und eine entsprechende zufällige Aktivität in Farbe

