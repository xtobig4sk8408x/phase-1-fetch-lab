function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  fetch("https://anapioficeandfire.com/api/books")
  .then((resp) => {
    resp.json()
  })
  .then((books) => {
    //console.log(bookData);
    renderBooks(books);
  });
}


function renderBooks(books) {
  const main = document.querySelector('main');
  //books.forEach(book => {
    //for (const book of books) {
      books.forEach(book => {
    const h2 = document.createElement('h2');
    // const pisbn = document.createElement('p');
    // const pCharacters = document.createElement('p');
    // const pointCharacters = document.createElement('p');
    h2.innerHTML = book.name;
    // pisbn.textContent = book.isbn;
    // pCharacters.innerText = book.characters;
    // pointCharacters.innerText = book.povCharacters
    main.appendChild(h2);
  });
}
//};


// const renderEach = ((books) => {
//   for (let i =0; i < books.length; i++) {
//     let sum = 0;
//     sum = books[i].numberOfPages;
//     return sum;
//   }

// })

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();

  // const numArray = [1, 3, 4, 6, 7];
  // for(let i=0; i<numArray.length; i++) {
  //   console.log(numArray[i]);
  // };
  //for loop 
});
