function getAge() {
    // floor = Math.floor macht aus Kommazahlen Ganzzahlen, indem die Nachkommastellen gestrichen werden
    // random = Math.random ermittelt eine Zufallszahl zwischen 0.0 und 0.99 (1).
    return Math.floor(Math.random() * 100);
}

function checkAge() {
    // Holt sich den Wert aus der Funktion getAge()
    age = getAge();
    console.log(`Dein Alter ist: ${age}`);

    switch (true) {
        case (age < 18):
            // Wenn das Alter kleiner als 18 ist
            console.log("Du bist minderjährig!");
            break;
        case (age >= 18 && age <= 66):
                   console.log("Du bist ein Erwachsener!");
            break;
        case (age <= 67):
                   console.log("Du bist ein Senior!");
            break;
        default:
            // Wenn das Alter 80 oder älter ist
            console.log("Du bist älter als 67");
            break;
    }
}

// Funktionsaufruf (hiermit sehe ich die Terminalausgabe)
checkAge();
