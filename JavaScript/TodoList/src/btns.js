import Todo from "./todo-constructor.js";
import { addProjectToArray, removeProjectFromArray } from "./arrays.js";
import { changeProjectTitle, render } from "./dom.js";
import {
  saveProjectToLocalStorage,
  reloadLocalStorage,
} from "./local-storage.js";
import { supermarket, myproject } from "./index.js";

export function addTodo() {
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

// ProjectBtns event listeners
export function enableProjectBtns() {
  const myProjectBtns = document.querySelector(".project-btns");

  myProjectBtns.addEventListener("click", (e) => {
    const table = document.getElementById("tasks");

    if (
      e.target.textContent.toLowerCase().replace(/\s/g, "") === "supermarket"
    ) {
      render(supermarket, table);
      changeProjectTitle("Supermarket");
    } else {
      render(myproject, table);
      changeProjectTitle("My Project");
    }
  });
}
