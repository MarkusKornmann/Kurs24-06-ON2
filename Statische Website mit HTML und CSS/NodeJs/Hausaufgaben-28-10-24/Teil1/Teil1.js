const readline = require('readline');
const fs = require('fs').promises;
const readlineSync = require('readline-sync');

// Asynchrone Benutzereingabe mit readline
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Beispiel für die Benutzerabfrage mit readline
rl.question('Gib den Namen der Datei ein: ', async (fileName) => {
    console.log(`Dateiname: ${fileName}`);
    
    rl.question('Gib die Nachricht ein, die in die Datei geschrieben oder angehängt werden soll: ', async (message) => {
        try {
            await fs.appendFile(fileName, message + '\n');
            console.log('Nachricht erfolgreich hinzugefügt.');
        } catch (err) {
            console.error('Fehler beim Schreiben in die Datei:', err);
        }
        rl.close(); // Schnittstelle schließen
    });
});

// Beispiel für die Benutzerabfrage mit readline-sync
const fileNameSync = readlineSync.question('Gib den Namen der Datei ein: ');
console.log(`Dateiname: ${fileNameSync}`);

try {
    fs.appendFileSync(fileNameSync, 'Neue Nachricht\n');
    console.log('Nachricht erfolgreich hinzugefügt.');
} catch (err) {
    console.error('Fehler beim Schreiben in die Datei:', err);
}

// Asynchrone Funktion zum Anhängen einer Nachricht an eine Datei
async function appendToFile() {
    try {
        await fs.appendFile('beispielTextdatei.txt', 'Neue Nachricht\n');
        console.log('Nachricht erfolgreich hinzugefügt.');
    } catch (err) {
        console.error('Fehler beim Schreiben in die Datei:', err);
    }
}

// Funktion aufrufen
appendToFile();
