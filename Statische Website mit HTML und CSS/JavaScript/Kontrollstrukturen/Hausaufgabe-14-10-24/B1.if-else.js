function bestimmeKategorie() {
    const alter = Math.floor(Math.random() * 100);
    let kategorie;
    if (alter >= 0 && alter <= 12) {
        kategorie = "Kind";
    } else if (alter >= 13 && alter <= 17) {
        kategorie = "Jugendlicher";
    } else if (alter >= 18 && alter <= 64) {
        kategorie = "Erwachsener";
    } else {
        kategorie = "Senior";
    }
    return "Alter: ${alter}, Kategorie: ${kategorie}"; 
}
console.log(bestimmeKategorie());































































/*function interpretiereWetter() {
    const wetterlage = ["Sonnig", "Regnerisch", "Schnee", "Windig"];
    const zufaelligeWetterlage = wetterlage[Math.floor(Math.random() * wetterlage.length)];
    let zufaelligeAktivitaet;

    if (zufaelligeWetterlage === "Sonnig") {
        const aktivitaet = ["Gehe spazieren", "Mache ein Picknick", "Gehe joggen", "Gehe Schwimmen mit Freunden", "Gehe Eis essen"];
        zufaelligeAktivitaet = aktivitaet[Math.floor(Math.random() * aktivitaet.length)];
    } else if (zufaelligeWetterlage === "Regnerisch") {
        const aktivitaet = ["Bleibe zu Hause und lese ein Buch", "Schaue einen Film", "Koche etwas warmes", "Spiele etwas schönes", "Miste deinen Wohnraum aus"];
        zufaelligeAktivitaet = aktivitaet[Math.floor(Math.random() * aktivitaet.length)];
    } else if (zufaelligeWetterlage === "Schnee") {
        const aktivitaet = ["Baue einen Schneemann", "Gehe Skifahren", "Mache eine Schneeballschlacht", "Trinke einen heißen Kakao", "Zieh dich dick an"];
        zufaelligeAktivitaet = aktivitaet[Math.floor(Math.random() * aktivitaet.length)];
    } else {
        const aktivitaet = ["gehe ins Kino", "Quad fahren durch Matsch und Regen", "Fliege einen Drachen", "Gehe windsurfen", "Mache einen Spaziergang"];
        zufaelligeAktivitaet = aktivitaet[Math.floor(Math.random() * aktivitaet.length)];
    }

    return `Wetterlage: ${zufaelligeWetterlage}, Aktivität: ${zufaelligeAktivitaet}`;
} 


console.log(interpretiereWetter()); */



/*
function interpretiereWetter() {
    const wetterlage = ["Sonnig", "Regnerisch", "Schnee", "Windig"];
    const zufaelligeWetterlage = wetterlage[Math.floor(Math.random() * wetterlage.length)];
    let zufaelligeAktivitaet;
    let farbe;

    if (zufaelligeWetterlage === "Sonnig") {
        const aktivitaet = ["Gehe spazieren", "Mache ein Picknick", "Gehe joggen", "Gehe Schwimmen mit Freunden", "Gehe Eis essen"];
        zufaelligeAktivitaet = aktivitaet[Math.floor(Math.random() * aktivitaet.length)];
        farbe = "\x1b[31m";
    } else if (zufaelligeWetterlage === "Regnerisch") {
        const aktivitaet = ["Bleibe zu Hause und lese ein Buch", "Schaue einen Film", "Koche etwas warmes", "Spiele etwas schönes", "Miste deinen Wohnraum aus"];
        zufaelligeAktivitaet = aktivitaet[Math.floor(Math.random() * aktivitaet.length)];
        farbe = "\x1b[40m";
    } else if (zufaelligeWetterlage === "Schnee") {
        const aktivitaet = ["Baue einen Schneemann", "Gehe Skifahren", "Mache eine Schneeballschlacht", "Trinke einen heißen Kakao", "Zieh dich dick an"];
        zufaelligeAktivitaet = aktivitaet[Math.floor(Math.random() * aktivitaet.length)];
        farbe = "\x1b[32m";
    } else {
        const aktivitaet = ["gehe ins Kino", "Quad fahren durch Matsch und Regen", "Fliege einen Drachen", "Gehe windsurfen", "Mache einen Spaziergang"];
        zufaelligeAktivitaet = aktivitaet[Math.floor(Math.random() * aktivitaet.length)];
        farbe = "\x1b[35m";
    }

    const reset = "\x1b[0m";
    return `${farbe}Wetterlage: ${zufaelligeWetterlage}, Aktivität: ${zufaelligeAktivitaet}${reset}`;
}

console.log(interpretiereWetter()); */
