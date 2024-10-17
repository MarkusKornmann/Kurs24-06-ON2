// Aufgabe 2: Erste Schritte mit Map
const besuchteSeiten = new Set();

besuchteSeiten.add('Startseite');
besuchteSeiten.add('Profil');
besuchteSeiten.add('Einstellungen');
besuchteSeiten.add('Kontakt');
besuchteSeiten.add('Impressum');
besuchteSeiten.add('Profil'); // Duplikat
besuchteSeiten.add('Startseite'); // Duplikat

console.log("Anzahl der eindeutigen Seiten:", besuchteSeiten.size);

function zeigeSeiten(seitenSet) {
  seitenSet.forEach(seite => {
    console.log("Besuchte Seite:", seite);
  });
}


zeigeSeiten(besuchteSeiten);