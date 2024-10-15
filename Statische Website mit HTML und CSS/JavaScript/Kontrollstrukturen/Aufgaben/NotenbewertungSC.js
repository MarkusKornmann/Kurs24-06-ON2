function getGrade() {
     return Math.floor(Math.random() * 6) + 1;
}

function checkGrade() {
    const Noten = getGrade();
    console.log("Note ist: " + Noten);

    switch (Noten) {
        case 1:
            console.log("Sehr gut");
            break;
        case 2:
            console.log("Gut");
            break;
        case 3:
            console.log("Befriedigend");
            break;
        case 4:
            console.log("Ausreichend");
            break;
        case 5:
            console.log("Mangelhaft");
            break;
        default:
            console.log("Ungenuegend, Du bist durchgefallen");
            break;
    }
}

// Funktionsaufruf
checkGrade();
