let library;

const title = document.querySelector("#title");
const author = document.querySelector("#author");
const pages = document.querySelector("#pages");
const status = document.querySelector("#status");
const tableBody = document.querySelector("#book-list");
const form = document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  addBookToLibrary();
  render();
  clearForm();
});
const table = document.querySelector("table").addEventListener("click", (e) => {
  const currentTarget = e.target.parentNode.parentNode.childNodes[1];
  if (e.target.innerHTML == "Remove") {
    if (confirm(`Are you sure you want to delete ${currentTarget.innerText}?`))
      deleteBook(findBook(library, currentTarget.innerText));
  }
  if (e.target.classList.contains("status-button")) {
    changeStatus(findBook(library, currentTarget.innerText));
  }
  updateLocalStorage();
  render();
});

class Book {
  constructor(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
  }
}

function addBookToLibrary() {
  if (
    title.value.length === 0 ||
    author.value.length === 0 ||
    pages.value.length === 0
  ) {
    alert("Please, fill in the fields!");
    return;
  }
  const newBook = new Book(
    title.value,
    author.value,
    pages.value,
    status.value
  );

  library.push(newBook);
  updateLocalStorage();
}
function changeStatus(book) {
  if (library[book].status === "Read") {
    library[book].status = "Not Read";
  } else library[book].status = "Read";
}
function deleteBook(currentBook) {
  library.splice(currentBook, currentBook + 1);
}
function findBook(libraryArray, title) {
  if (libraryArray.length === 0 || libraryArray === null) {
    return;
  }
  for (book of libraryArray)
    if (book.title === title) {
      return libraryArray.indexOf(book);
    }
}
function clearForm() {
  title.value = "";
  author.value = "";
  pages.value = "";
}
function updateLocalStorage() {
  localStorage.setItem("library", JSON.stringify(library));
}

function checkLocalStorage() {
  if (localStorage.getItem("library")) {
    library = JSON.parse(localStorage.getItem("library"));
  } else {
    library = [];
  }
}

function render() {
  checkLocalStorage();
  tableBody.innerHTML = "";
  library.forEach((book) => {
    const listBook = `
      <tr>
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.pages}</td>
        <td><button class="status-button">${book.status}</button></td>
        <td><button class="delete">Remove</button></td>
      </tr>
      `;
    tableBody.insertAdjacentHTML("afterbegin", listBook);
  });
}

render();