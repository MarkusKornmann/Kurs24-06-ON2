function interpretiereWetter() {
    const wetterlage = ["Sonnig", "Regnerisch", "Schnee", "Windig"];
    const aktivitaet = {
        "Sonnig": ["Gehe spazieren", "Mache ein Picknick", "Gehe schwimmen"],
        "Regnerisch": ["Bleibe zu Hause und lese ein Buch", "Schaue einen Film", "Koche etwas Leckeres"],
        "Schnee": ["Baue einen Schneemann", "Gehe Skifahren", "Mache eine Schneeballschlacht"],
        "Windig": ["Drachenfliegen gehen", "Gehe windsurfen", "Mache einen Spaziergang"]
    };

    const zufaelligeWetterlage = wetterlage[Math.floor(Math.random() * wetterlage.length)];
    const vorschlaege = aktivitaet[zufaelligeWetterlage];
    const zufaelligeAktivitaet = vorschlaege[Math.floor(Math.random() * vorschlaege.length)];

    return `Wetterlage: ${zufaelligeWetterlage}, Aktivität: ${zufaelligeAktivitaet}`;
}

console.log(interpretiereWetter()); 