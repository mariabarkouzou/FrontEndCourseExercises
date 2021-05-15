"use strict";

function Todo(details) {
  const { project, title, description, dueDate, priority } = details;
  this.project = project || "unknown";
  this.title = title || "unknown";
  this.description = description || "unknown";
  this.dueDate = dueDate || "unknown";
  this.priority = priority || "unknown";
}

Todo.prototype.addToPage = function () {
  const el = document.createElement("tr");
  const table = document.getElementById("tasks");
  el.innerHTML = `
  <td>${this.project}</td>
          <td>${this.title}</td>
          <td>${this.description}</td>
          <td>${this.dueDate}</td>
          <td>${this.priority}</td>
          <td><button class="edit"></button></td>
          <td><button class="delete">X</button></td>
        `;
  table.appendChild(el);


  return "addToPage used!";
};


function addBtn() {
  const btnSubmit = document.getElementById("submit-btn");

  btnSubmit.addEventListener("click", (e) => {
    e.preventDefault();
    const project = document.getElementById("project").value;
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    const dueDate = document.getElementById("dueDate").value;
    const priority = document.getElementById("priority").value;


    const newTodoCreated = new Todo({
      project: `${project}`,
      title: `${title}`,
      description: `${description}`,
      dueDate: `${dueDate}`,
      priority: `${priority}`,
    });
    newTodoCreated.addToPage();
  });
}
addBtn();


const editAndDeleteBtns = () => {
  const tableBody = document.querySelector("#tasks");
  tableBody.addEventListener("click", (e) => {
    if (e.target.classList.contains("edit")) {
      editItem();
    }
    if (e.target.classList.contains("delete")) {
      removeItem();
    }

    function editItem() {
      console.log("edit clicked!");
    }

    function removeItem() {
      console.log("delete clicked!");
      e.target.closest("tr").remove();
    }
  });
};
editAndDeleteBtns();


// TODO When a user first opens the app, there should be some sort of 'default' project to which all of their todos are put.
