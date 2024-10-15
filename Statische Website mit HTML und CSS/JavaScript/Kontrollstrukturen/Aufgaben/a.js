function getAge() {
    // floor = Math.floor macht aus Kommazahlen Ganzzahlen, indem die Nachkommastellen gestrichen werden
    // random = Math.random ermittelt eine Zufallszahl zwischen 0.0 und 0.99 (1).
    return Math.floor(Math.random() * 100);
}

function checkAge() {
    // Holt sich den Wert aus der Funktion getAge()
    age = getAge();
    console.log(`Dein Alter ist: ${age}`);

    if (age < 18) {
        console.log("Du bist minderjährig!");
    } else if (age >= 18 && age < 30) {
        console.log("Du bist in den besten Jahren!");
    } else if (age >= 30 && age < 67) {
        console.log("Du bist ü30!");
    } else {
        console.log("Du bist ein Rentner!");
    }
}

// Funktionsaufruf (hiermit sehe ich die Terminalausgabe)
checkAge();

