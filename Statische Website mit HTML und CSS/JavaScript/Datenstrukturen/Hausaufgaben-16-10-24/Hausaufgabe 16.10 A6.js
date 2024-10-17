// 6. Herausforderung - Spielkarte Implementierung

// war mir gerade zu schwer, die KI hat mir bei der Aufgabe geholfen.

// Definiere ein Array von Objekten, die die verschiedenen Kartenfarben darstellen
/*const cards = [
    { name: 'Herz', code: '♥', color: { name: 'Rot', code: 'Rot' } },
    { name: 'Schellen', code: '♦', color: { name: 'Gelb', code: 'Gelb' } },
    { name: 'Laub', code: '♠', color: { name: 'Grün', code: 'Grün' } },
    { name: 'Eichel', code: '♣', color: { name: 'Schwarz', code: 'Schwarz' } }
  ];
  
  // Dieses Array enthält die verschiedenen Kartenwerte (z.B. '2', '3', 'König', 'Ass')
  const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Bube', 'Dame', 'König', 'Ass', 'Joker'];
  
  // Funktion zum Erstellen eines neuen Kartenstapels
  const createDeck = () => {
    const deck = []; // Initialisiere ein leeres Array zum Speichern der Karten
    for (const suit of cards) { // Durchlaufe jede Farbe im 'suits'-Array
      for (const rank of ranks) { // Durchlaufe jeden Wert im 'ranks'-Array
        deck.push({ suit: suit.name, rank, color: suit.color }); // Erstelle ein Kartenobjekt und füge es dem Deck-Array hinzu
        // Das Kartenobjekt enthält Eigenschaften für Farbname, Wert und Farbe
      }
    }
    return deck; // Gebe den neu erstellten Kartenstapel zurück
  };
  
  // Funktion zum Mischen des Kartenstapels (Fisher-Yates-Algorithmus)
  const shuffleDeck = (deck) => {
    for (let i = deck.length - 1; i > 0; i--) { // Durchlaufe den Stapel vom Ende zum Anfang
      const j = Math.floor(Math.random() * (i + 1)); // Generiere einen zufälligen Index zwischen 0 und dem aktuellen Index (inklusive)
      [deck[i], deck[j]] = [deck[j], deck[i]]; // Tausche die Elemente an den Indizes i und j (direkt im Array)
    }
  };
  
  // Funktion zum Ziehen einer einzelnen Karte vom Stapel (oben)
  const drawCard = (deck) => {
    return deck.pop(); // Entferne und gib das letzte Element aus dem Deck-Array zurück (stellt die oberste Karte dar)
  };
  
  // Funktion zur Ermittlung der Anzahl verbleibender Karten im Stapel
  const remainingCards = (deck) => {
    return deck.length; // Gib die Länge des Deck-Arrays zurück (entspricht der Anzahl verbleibender Karten)
  };
  
  // Erstelle ein neues Kartenspiel
  const deck = createDeck();
  
  // Mische den Stapel
  shuffleDeck(deck);
  
  // Ziehe eine Karte vom gemischten Stapel
  const drawnCard = drawCard(deck);
  
  // Gib Informationen über die gezogene Karte aus (Farbe, Wert und Farbcode)
  console.log('Gezogene Karte:', drawnCard.suit, drawnCard.rank, ' (', drawnCard.color.code, ')');
 
  // Gib die Anzahl der verbleibenden Karten im Stapel aus
  console.log('Verbleibende Karten:', remainingCards(deck)); */