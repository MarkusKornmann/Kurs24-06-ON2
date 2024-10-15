function getTemperatur() {
    // Gibt eine zufällige Temperatur zwischen -20 und 40 Grad Celsius zurück
    return Math.floor(Math.random() * 61) - 20;
}
function checkTemperature() {
    const Celsius = getTemperatur();
    console.log(`Die Temperatur beträgt: ${Celsius} Celsius`);

    if (Celsius < 0) {
        console.log("Es ist Winter, es ist Eiskalt");
    } else if (Celsius >= 0 && Celsius <= 15) {
        console.log("Es ist Frühling, es ist noch kühl");
    } else if (Celsius >= 16 && Celsius <= 25) {
        console.log("Es ist Anfang des Sommers, es ist warm");
    } else {
        console.log("Es ist Hochsommer, es ist unerträglich heiss");
    }
}

// Funktionsaufruf
checkTemperature();
