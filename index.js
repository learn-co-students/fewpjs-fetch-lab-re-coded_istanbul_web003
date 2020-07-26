function fetchBooks() {
  return fetch('https://anapioficeandfire.com/api/books')
  .then(function(response){
    return response.json();
  })
  .then(function(json){
    let total = 0;
    for(let i = 0; i<10; i++){
      console.log(json[i].numberOfPages)
      total += json[i].numberOfPages;
    }
    console.log(total, "total")

    renderBooks(json);
  })

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
