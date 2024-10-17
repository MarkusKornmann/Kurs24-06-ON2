// Aufgabe 1: Benutzerverwaltung mit Map
benutzerVerwaltung = new Map();
benutzerVerwaltung.set("Markus Kornmann", { email: "mkornmann@masko.com", rolle: "Admin" });
benutzerVerwaltung.set("Tanja Müller",    { email: "tmüller@masko.com",   rolle: "User" });
benutzerVerwaltung.set("Rudi Rüssel",     { email: "rruessel@masko.com",  rolle: "Gast" });

function zeigeBenutzer(benutzerMap) {
  benutzerMap.forEach((wert, schluessel) => {
    console.log(`Benutzername: ${schluessel}, E-Mail: ${wert.email}, Rolle: ${wert.rolle}`);
  });
}

zeigeBenutzer(benutzerVerwaltung);