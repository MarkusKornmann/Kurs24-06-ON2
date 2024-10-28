const fs = require('fs');

async function readAndWrite() {
    try {
        // 1. Lesen der Datei
        const data = fs.readFileSync('b1.txt', 'utf8');
        
        // 2. Inhalt ändern
        const modifiedData = data.replace(data, 'neuer Text');
        
        // 3. Geänderte Inhalte in die Datei schreiben
        fs.writeFileSync('b3.txt', modifiedData, 'utf8');
        
        console.log("Es war alles erfolgreich");
    } catch (err) {
        console.error('Es gab einen Fehler beim Bearbeiten der Datei', err);
    }
}

readAndWrite();







/*const content = 'Den Text habe ich einfügen lassen';

fs.writeFile('b1.txt', content, 'utf8', err => {
    if (err) {
        console.error('Es gab einen Fehler beim Schreiben der Datei');
        return;
    }
    console.log('Datei wurde erfolgreich beschrieben');
}); 
}
fs.readFile('b1.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Es gab einen Fehler beim Lesen der Datei', err);
        return;
    }

    console.log(data);
}); */

