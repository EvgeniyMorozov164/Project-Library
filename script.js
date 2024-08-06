// CONSTANTS

const newBookBtn = document.querySelector(".new-book-btn");
const books = document.querySelector(".books-container");
const formContainer = document.querySelector(".form-container");
const closeModal = document.querySelector(".close-modal-btn");
const addBook = document.querySelector(".add-book-btn");
const bookTitle = document.querySelector(".title");
const bookAuthor = document.querySelector(".book-author");
const numberOfPages = document.querySelector(".pagenum");
const didYouRead = document.querySelector(".did-you-read");

const myLibrary = [];


// OBJECT CONSTRUCTOR

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

// INTERACTIONS

newBookBtn.addEventListener("click", () => {

  showForm();

});

closeModal.addEventListener("click", () => {

  hideForm();

});

addBook.addEventListener("click", (e) => {

  e.preventDefault();

  addBookToLibrary();

  hideForm();
  
  clearForm();
  console.log(myLibrary);
})

// FUNCTIONS

const showForm = () => {

  if (!formContainer.classList.contains("show")) {
    formContainer.classList.add("show");
  }

}

const hideForm = () => {
  
  if (formContainer.classList.contains("show")) {
    formContainer.classList.remove("show");
  }

}

const addBookToLibrary = () => {

  const newBook = new Book(bookTitle.value, bookAuthor.value, numberOfPages.value, didYouRead.value);

  myLibrary.push(newBook); 

  clearLibrary();
  
  displayBookCards();
}

const clearForm = () => {

  bookTitle.value = "";
  bookAuthor.value = "";
  numberOfPages.value = "";
  didYouRead.value = "";
}

function displayBookCards() {

  for (let i = 0; i < myLibrary.length; i++) {
    
    books.innerHTML += `<div class="book-card" data-id=${i}>        
        <div class="book-info">
          <p class="book-title">Title: ${myLibrary[i].title};</p>
          <p class="author">Author: ${myLibrary[i].author};</p>
          <p class="pages">Number of pages: ${myLibrary[i].pages};</p>
          <p class="read">Read: ${myLibrary[i].read}.</p>
        </div>
        <div class="btn-container">
          <button type="button" class="remove-btn">Remove</button>
          <button type="button" class="read-btn">Read</button>
        </div>
      </div> `;
  }

}

const clearLibrary = () => {
  books.innerHTML = "";
}
// function displayLibrary() {

//   if (myLibrary.length === 0) {
//     return;
//   }


// }

