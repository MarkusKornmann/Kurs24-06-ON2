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
        case (age >= 18 && age < 30):
            // Wenn das Alter zwischen 18 und 29 liegt
            console.log("Du bist ein Ü18 und unter 29 ");
            break;
        case (age >= 30 && age < 67):
            // Wenn das Alter zwischen 30 und 59 liegt
            console.log("Du bist ein ü30!");
            break;
        case (age >= 67 && age < 80):
            // Wenn das Alter zwischen 60 und 79 liegt
            console.log("Du bist im Ruhestand !");
            break;
        default:
            // Wenn das Alter 80 oder älter ist
            console.log("Ü67 Geniese den Rest deines Lebens");
            break;
    }
}

// Funktionsaufruf (hiermit sehe ich die Terminalausgabe)
checkAge();
