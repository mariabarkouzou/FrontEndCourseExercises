import Todo from "./todo-constructor.js";
import { addTodo, enableProjectBtns } from "./btns.js";
import { changeProjectTitle, render } from "./dom.js";
import {
  saveProjectToLocalStorage,
  reloadLocalStorage,
} from "./local-storage.js";
import { supermarket, myproject } from "./index.js";

// adding new projects to the projects array
export function addProjectToArray(todo, array) {
  array.push(todo);
}

// removing project from Array and from the DOM
export function removeProjectFromArray() {
  const table = document.getElementById("tasks");

  table.addEventListener("click", (e) => {
    if (!e.target.classList.contains("delete")) {
      return;
    }
    e.target.closest("tr").remove();

    let currentTodoProject = e.target.closest("tr").dataset.todoProject;
    let currentTodoTitle = e.target.closest("tr").dataset.todoTitle;

    console.log({ currentTodoProject });

    if (currentTodoProject === "Supermarket") {
      console.log("entered Supermarket");
      removeTodoFromProject(supermarket, currentTodoProject, currentTodoTitle);
      saveProjectToLocalStorage("Supermarket", supermarket);
    } else {
      console.log("entered My Project");
      removeTodoFromProject(myproject, currentTodoProject, currentTodoTitle);
      saveProjectToLocalStorage("My Project", myproject);
    }
  });

  function removeTodoFromProject(projectName, TodoProject, TodoTitle) {
    if (projectName.length === 0) {
      return;
    }
    for (let todo of projectName) {
      if (todo.project === TodoProject && todo.title === TodoTitle) {
        let todoToRemoveIndex = projectName.indexOf(todo);
        projectName.splice(todoToRemoveIndex, 1);
      }
    }
  }
}
