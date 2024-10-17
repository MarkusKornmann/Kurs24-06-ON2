// Aufgabe 6: Praktische Anwendung - Map für Bücher
buecherMap = new Map();

buecherMap.set("Microsoft Exchange Server 2019", { autor: "T. Joos", seiten: 620, preis: "59,95 €" });
buecherMap.set("Linux-Server", { autor: "Rheinwerk", seiten: 1306, preis: "39,99 €" });
buecherMap.set("Microsoft Windows Server 2022", { autor: "O´REILLLY", seiten: 1002, preis: "79,00 €"});
buecherMap.set("SQL Server 2019 Administration", { autor: "R. West", seiten: 992, preis: "55,50 €" });


fachbuchSeiten = buecherMap.get("Microsoft Exchange Server 2019").seiten;
console.log("Das Buch hat", fachbuchSeiten, "Seiten.");


for (const [titel, details] of buecherMap) {
  console.log(`Titel: ${titel}`);
  console.log(`Autor: ${details.autor}`);
  console.log(`Seiten: ${details.seiten}`);
  console.log(`Preis: ${details.preis}`);
  console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
}