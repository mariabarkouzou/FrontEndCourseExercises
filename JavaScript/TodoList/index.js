"use strict";

// let allProjects = [];
let supermarket = [];
let myproject = [];

function Todo(details) {
  const { project, title, description, dueDate, priority } = details;
  this.project = project || "unknown";
  this.title = title || "unknown";
  this.description = description || "unknown";
  this.dueDate = dueDate || "unknown";
  this.priority = priority || "unknown";
}

function addTodo() {
  const btnSubmit = document.getElementById("submit-btn");
  const table = document.getElementById("tasks");

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

    if (project.toLowerCase() === "supermarket") {
      addProjectToArray(newTodoCreated, supermarket);
      render(supermarket, table);
      changeProjectTitle("Supermarket");
      saveProjectToLocalStorage("Supermarket", supermarket);
    } else {
      addProjectToArray(newTodoCreated, myproject);
      render(myproject, table);
      changeProjectTitle("My Project");
      saveProjectToLocalStorage("My Project", myproject);
    }
  });
}
addTodo();

// adding new projects to the projects array
function addProjectToArray(todo, array) {
  array.push(todo);
}

// rendering new todo from project array to the Dom
function render(array, parentDiv) {
  parentDiv.innerHTML = "";

  for (let i = 0; i < array.length; i++) {
    let row = `<tr data-todo-title="${array[i].title}">
    <td>${array[i].title}</td>
    <td>${array[i].description}</td>
    <td>${array[i].dueDate}</td>
    <td>${array[i].priority}</td>
    <td><button class="edit"></button></td>
    <td><button class="delete">X</button></td>
    </tr>
		`;
    parentDiv.insertAdjacentHTML("beforeend", row);
  }
}

function changeProjectTitle(projectName) {
  const projectTitle = document.querySelector("#project-title");
  projectTitle.innerText = projectName;
}

// function addArrayToAllProjects() {}

// Edit btn
// Delete btn
// const editAndDeleteBtns = () => {
//   const tableBody = document.querySelector("#tasks");
//   tableBody.addEventListener("click", (e) => {
//     if (e.target.classList.contains("edit")) {
//       editItem();
//     }
//     if (e.target.classList.contains("delete")) {
//       removeItem();
//     }
//     function editItem() {
//       console.log("edit clicked!");
//     }
//     function removeItem() {
//       console.log("delete clicked!");
//       e.target.closest("tr").remove();
//     }
//   });
// };
// editAndDeleteBtns();

//click event listener to view the respective project

const myProjectBtns = document.querySelector(".project-btns");

myProjectBtns.addEventListener("click", (e) => {
  const table = document.getElementById("tasks");
  console.log(e.target.textContent.toLowerCase().replace(/\s/g, ""));
  if (e.target.textContent.toLowerCase().replace(/\s/g, "") === "supermarket") {
    render(supermarket, table);
    changeProjectTitle("Supermarket");
  } else {
    render(myproject, table);
    changeProjectTitle("My Project");
  }
});

// removing project from Array and from the DOM

function removeProjectFromArray(array) {
  const table = document.getElementById("tasks");
  table.addEventListener("click", (e) => {
    if (!e.target.classList.contains("delete")) {
      return;
    }
    e.target.closest("tr").remove();

    let currentTodoTitle = e.target.closest("tr").dataset.todoTitle;
    removeTodoFromProject(array, currentTodoTitle);
    // saveLibraryToLocalStorage("myLibrary", myLibrary);
  });
  function removeTodoFromProject(projectName, currentTodoTitle) {
    if (projectName.length === 0) {
      return;
    }
    for (let todo of projectName) {
      if (todo.title === currentTodoTitle) {
        let todoToRemoveIndex = projectName.indexOf(todo);
        projectName.splice(todoToRemoveIndex, 1);
      }
    }
  }
  saveProjectToLocalStorage("Supermarket", supermarket);
  saveProjectToLocalStorage("My Project", myproject);
}

removeProjectFromArray(supermarket);
removeProjectFromArray(myproject);

//TODO When a user first opens the app, there should be some sort of 'default' project to which all of their todos are put.

// view all todos in each project (probably just the title and duedate.. perhaps changing color for different priorities)

//TODO use localStorage

// saving library to localStorage
function saveProjectToLocalStorage(projectName, array) {
  localStorage.setItem(projectName, JSON.stringify(array));
  return;
}

// reload localStorage
function reloadLocalStorage() {
  if (localStorage["My Project"] === "[]") {
    addProjectToArray("My Project", "Buy Mouse Pad", "Logitech", "2021-08-10", "Medium", myproject);
  } else {
    let arrayDestringified = JSON.parse(localStorage.getItem("My Project"));
    arrayDestringified.forEach((element) => {
      addProjectToArray(
        element.project,
        element.title,
        element.description,
        element.dueDate,
        element.priority,
        myproject
      );
    });
  }
}
reloadLocalStorage();

//TODO separate your application logic in separate modules.
