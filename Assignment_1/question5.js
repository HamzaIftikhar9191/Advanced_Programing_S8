function getBookTitles(books) {
  return books.map((book) => book.title);
}

const totalPages = (books) => {
  return books.reduce((total, book) => total + book.pages, 0);
};

const filterBooksByAuthor = function (books, author) {
  return books.filter((book) => book.author === author);
};


const books = [
    { title: "Lets Go", author: "Hamza", pages: 200 },
    { title: "FAST Life", author: "Hina", pages: 150 },
    { title: "4 GPA in FAST", author: "Hamza", pages: 300 },
    { title: "Life At FAST", author: "Hira", pages: 400 }
  ];
  
  console.log(getBookTitles(books)); 
  
  console.log(filterBooksByAuthor(books, "Hamza")); 
  
  console.log(totalPages(books)); 
  