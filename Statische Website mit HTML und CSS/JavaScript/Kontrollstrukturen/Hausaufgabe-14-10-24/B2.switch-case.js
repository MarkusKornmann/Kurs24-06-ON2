function interpretiereWetter() {
    const wetterlage = ["Sonnig", "Regnerisch", "Schnee", "Windig"];
    const zufaelligeWetterlage = wetterlage[Math.floor(Math.random() * wetterlage.length)];
    let zufaelligeAktivitaet;

    switch (zufaelligeWetterlage) {
        case "Sonnig":
            const sonnigAktivitaet = ["Gehe spazieren", "Mache ein Picknick", "Gehe joggen", "Gehe Schwimmen mit Freunden", "Gehe Eis essen"];
            zufaelligeAktivitaet = sonnigAktivitaet[Math.floor(Math.random() * sonnigAktivitaet.length)];
            break;
        case "Regnerisch":
            const regnerischAktivitaet = ["Bleibe zu Hause und lese ein Buch", "Schaue einen Film", "Koche etwas warmes", "Spiele etwas schönes", "Miste deinen Wohnraum aus"];
            zufaelligeAktivitaet = regnerischAktivitaet[Math.floor(Math.random() * regnerischAktivitaet.length)];
            break;
        case "Schnee":
            const schneeAktivitaet = ["Baue einen Schneemann", "Gehe Skifahren", "Mache eine Schneeballschlacht", "Trinke einen heißen Kakao", "Zieh dich dick an"];
            zufaelligeAktivitaet = schneeAktivitaet[Math.floor(Math.random() * schneeAktivitaet.length)];
            break;
        default:
            const windigAktivitaet = ["gehe ins Kino", "Quad fahren durch Matsch und Regen", "Fliege einen Drachen", "Gehe windsurfen", "Mache einen Spaziergang"];
            zufaelligeAktivitaet = windigAktivitaet[Math.floor(Math.random() * windigAktivitaet.length)];
            break;
    }

    return "Wetterlage: ${zufaelligeWetterlage}, Aktivität: ${zufaelligeAktivitaet}";
}

console.log(interpretiereWetter());








// mit Farbausgabe 
/* function interpretiereWetter() {
    const wetterlage = ["Sonnig", "Regnerisch", "Schnee", "Windig"];
    const zufaelligeWetterlage = wetterlage[Math.floor(Math.random() * wetterlage.length)];
    let zufaelligeAktivitaet;
    let farbe;

    switch (zufaelligeWetterlage) {
        case "Sonnig":
            const sonnigAktivitaet = ["Gehe spazieren", "Mache ein Picknick", "Gehe joggen", "Gehe Schwimmen mit Freunden", "Gehe Eis essen"];
            zufaelligeAktivitaet = sonnigAktivitaet[Math.floor(Math.random() * sonnigAktivitaet.length)];
            farbe = "\x1b[31m";
            break;
        case "Regnerisch":
            const regnerischAktivitaet = ["Bleibe zu Hause und lese ein Buch", "Schaue einen Film", "Koche etwas warmes", "Spiele etwas schönes", "Miste deinen Wohnraum aus"];
            zufaelligeAktivitaet = regnerischAktivitaet[Math.floor(Math.random() * regnerischAktivitaet.length)];
            farbe = "\x1b[40m";
            break;
        case "Schnee":
            const schneeAktivitaet = ["Baue einen Schneemann", "Gehe Skifahren", "Mache eine Schneeballschlacht", "Trinke einen heißen Kakao", "Zieh dich dick an"];
            zufaelligeAktivitaet = schneeAktivitaet[Math.floor(Math.random() * schneeAktivitaet.length)];
            farbe = "\x1b[32m";
            break;
        default:
            const windigAktivitaet = ["gehe ins Kino", "Quad fahren durch Matsch und Regen", "Fliege einen Drachen", "Gehe windsurfen", "Mache einen Spaziergang"];
            zufaelligeAktivitaet = windigAktivitaet[Math.floor(Math.random() * windigAktivitaet.length)];
            farbe = "\x1b[35m";
            break;
    }

    const reset = "\x1b[0m";
    return `${farbe}Wetterlage: ${zufaelligeWetterlage}, Aktivität: ${zufaelligeAktivitaet}${reset}`;
}

console.log(interpretiereWetter()); */
