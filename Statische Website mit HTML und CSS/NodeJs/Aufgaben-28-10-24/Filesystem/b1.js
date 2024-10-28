const fs = require('fs');

// Datei lesen
fs.readFile('b1.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Es gab einen Fehler beim Lesen der Datei', err);
        return;
    }

    console.log(data);
});

const content = 'Den Text habe ich einfügen lassen. ';

// Text an die Datei anhängen
fs.appendFile('b1.txt', content, 'utf8', err => {
    if (err) {
        console.error('Es gab einen Fehler beim Schreiben der Datei. ');
        return;
    }
    console.log('Text wurde erfolgreich angehängt. ');
});



/*const fs = require('fs'); 

fs.readFile('b1.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Es gab einen Fehler beim Lesen der Datei', err);
        return;
    }

    console.log(data);
});

const content = 'Den Text habe ich einfügen lassen';

fs.writeFile('b1.txt', content, 'utf8', err => {
    if (err) {
        console.error('Es gab einen Fehler beim Schreiben der Datei');
        return;
    }
    console.log('Datei wurde erfolgreich beschrieben');
}); */
