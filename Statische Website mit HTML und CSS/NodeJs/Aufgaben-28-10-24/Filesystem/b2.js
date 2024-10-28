const fs = require('fs').promises;

async function readAndWrite() {
    try {
        // 1. Lesen der Datei
        const data = await fs.readFile('b1.txt', 'utf8');
        
        // 2. Inhalt ändern
        const modifiedData = data.replace(data, 'neuer Text');
        
        // 3. Geänderte Inhalte in die Datei schreiben
        await fs.writeFile('b1+.txt', modifiedData, 'utf8');

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

