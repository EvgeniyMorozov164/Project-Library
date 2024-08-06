// CONSTANTS

const newBookBtn = document.querySelector(".new-book-btn");
const books = document.querySelector(".books-container");
const formContainer = document.querySelector(".form-container");
const closeModal = document.querySelector(".close-modal-btn");

const myLibrary = [];

// INTERACTIONS

newBookBtn.addEventListener("click", () => {

  showForm();

});

closeModal.addEventListener("click", () => {

  hideForm();

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