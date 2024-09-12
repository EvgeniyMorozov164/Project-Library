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
const date = document.querySelector(".year");
const form = document.querySelector(".form");

const myLibrary = [];


// OBJECT CONSTRUCTOR

function Book(title, author, pages, read) {

  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

// INTERACTIONS

document.addEventListener("DOMContentLoaded", () => {
  getCurrentYear();
});

newBookBtn.addEventListener("click", () => {

  showForm();

});

closeModal.addEventListener("click", () => {

  hideForm();

});

// addBook.addEventListener("click", (e) => {
 
//   e.preventDefault();

//   addBookToLibrary();

//   hideForm();
  
//   clearForm();

//   clearLibrary();
  
//   displayBookCards();
  
// });

books.addEventListener("click", (e) => {

  const index = e.target.parentElement.parentElement.dataset.id;

  if (e.target.classList.contains("read-btn")) {
    
    myLibrary[index].read = "yes";

    clearLibrary();
  
    displayBookCards();
  }

  if (e.target.classList.contains("remove-btn")) {

    myLibrary.splice(index,1);

    clearLibrary();
  
    displayBookCards();
  }

});

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

const getCurrentYear = () => {
  
  date.textContent = new Date().getFullYear();
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const titleF = bookTitle.value;
  const authorF = bookAuthor.value;
  const pagesF = numberOfPages.value;
  const readF = didYouRead.value;   
  if (!titleF || !authorF || !pagesF || !readF) {
    alert("Please, fill all the fields!");
    return;
  } 
  else {
    addBookToLibrary();

  hideForm();
  
  clearForm();

  clearLibrary();
  
  displayBookCards();
  }
})
