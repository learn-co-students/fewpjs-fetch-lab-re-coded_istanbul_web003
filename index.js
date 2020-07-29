function fetchBooks() {
  fetch("https://anapioficeandfire.com/api/books")
  .then(function(response){
    return response.json();
  })
  .then(function(json){
    renderBooks(json)
  })
  return fetch("https://anapioficeandfire.com/api/books");
  
}

function renderBooks(books) {
  const main = document.querySelector('main')
  books.forEach(book => {
    const h2 = document.createElement('h2')
    h2.innerHTML = book.name
    main.appendChild(h2)
  })
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks()
})
