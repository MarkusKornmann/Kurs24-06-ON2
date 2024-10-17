// Aufgabe 6: Praktische Anwendung - Map für Bücher
const buecherMap = new Map();

buecherMap.set("Microsoft Exchange Server 2019", { autor: "T. Joos", seiten: 620, preis: "59,95 €" });
buecherMap.set("Linux-Server", { autor: "Rheinwerk", seiten: 1306, preis: "39,99 €" });
buecherMap.set("Microsoft Windows Server 2022", { autor: "O´REILLY", seiten: 1002, preis: "79,00 €"});
buecherMap.set("SQL Server 2019 Administration", { autor: "R. West", seiten: 992, preis: "55,50 €" });

    console.log("*****************************************************************************************");
function zeigeBuecher(buchMap) {
  for (const [titel, details] of buchMap) {
    console.log(`Titel: ${titel}, Autor: ${details.autor}, Seiten: ${details.seiten}, Preis: ${details.preis}`);
    
    console.log("*****************************************************************************************");
  }
}

zeigeBuecher(buecherMap);
