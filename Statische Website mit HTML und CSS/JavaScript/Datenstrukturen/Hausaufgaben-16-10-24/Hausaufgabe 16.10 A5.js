//5. Deep Dive mit Complex Array Methods
books = [
    { title: "Microsoft Windows Server 2022", author: "O´Reilly", pages: 1002 },
    { title: "Microsoft Exchange Server 2019", author: "T. Joos", pages: 620 },
    { title: "SQL Server 2019 Administration", author: "R. West", pages: 992 },
    { title: "Linux-Server", author: "Rheinwerk", pages: 1306 },
    { title: "Linux for beginners", author: "Masko", pages: 150 }
  ];
  
  books.sort((a, b) => b.pages - a.pages);
  longBooks = books.filter(book => book.pages > 300);
  //longBooks = books.filter(book => book.pages <= 300);
  longBookTitles = longBooks.map(book => book.title);

  for (book of longBooks) {
    console.log(`${book.title} - ${book.pages} Seiten`);
  }