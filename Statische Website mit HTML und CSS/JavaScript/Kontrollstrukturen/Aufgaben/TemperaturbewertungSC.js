function getTemperatur() {
    return Math.floor(Math.random() * 61) - 20;
}

function checkTemperature() {
    const Celsius = getTemperatur();
    console.log(`Die Temperatur beträgt: ${Celsius} Celsius`);

    switch (true) {
        case (Celsius < 0):
            console.log("Es ist Winter, es ist Eiskalt");
            break;
        case (Celsius >= 0 && Celsius <= 15):
            console.log("Es ist Frühling, es ist noch kühl");
            break;
        case (Celsius >= 16 && Celsius <= 25):
            console.log("Es ist Anfang des Sommers, es ist warm");
            break;
        default:
            console.log("Es ist Hochsommer, es ist unerträglich heiss");
            break;
    }
}

// Funktionsaufruf
checkTemperature();
