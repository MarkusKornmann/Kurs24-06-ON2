const fs = require('fs').promises;
const readline = require('readline');

const Read = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function askQuestion(query) {
    return new Promise(resolve => Read.question(query, resolve));
}

async function main() {
    try {
        // Frage den Benutzer nach dem Dateinamen
        const dateiName = await askQuestion('Gib den Namen der Datei ein: ');

        // Frage den Benutzer nach der Nachricht
        const nachricht = await askQuestion('Gib die Nachricht ein, die in die Datei geschrieben oder angehängt werden soll: ');

        // Versuche, die Datei zu lesen, um zu prüfen, ob sie existiert
        try {
            await fs.access(dateiName);
            // Datei existiert, Nachricht anhängen
            await fs.appendFile(dateiName, nachricht + '\n', 'utf8');
            console.log('Nachricht wurde an die Datei angehängt.');
        } catch (err) {
            // Datei existiert nicht, Nachricht schreiben
            await fs.writeFile(dateiName, nachricht + '\n', 'utf8');
            console.log('Nachricht wurde in die Datei geschrieben.');
        }
    } catch (err) {
        console.error('Es gab einen Fehler:', err);
    } finally {
        Read.close();
    }
}

main();
