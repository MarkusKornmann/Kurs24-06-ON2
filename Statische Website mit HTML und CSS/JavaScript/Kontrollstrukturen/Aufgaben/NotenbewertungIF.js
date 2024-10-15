
function getGrade() {
    return Math.floor(Math.random() * 6) + 1;
}
    function checkGrade() {
        const noten = getGrade();
        console.log("Note ist: " + noten);

if (noten === 1) {
        console.log("Sehr gut");
    } else if (noten == 2) {
        console.log("Gut");
    } else if (noten == 3) {
        console.log("Befriedigend");
    } else if (noten == 4) {
        console.log("Ausreichend");
    } else if (noten == 5) {
        console.log("Mangelhaft");
    } else {
        console.log("Ungenuegend, Du bist durchgefallen");
    }
}

// Funktionsaufruf
checkGrade();
