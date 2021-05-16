import Todo from "./todo-constructor.js";
import { addTodo, enableProjectBtns } from "./btns.js";
import { addProjectToArray, removeProjectFromArray } from "./arrays.js";
import { changeProjectTitle, render } from "./dom.js";
import { supermarket, myproject } from "./index.js";

// saving library to localStorage
export function saveProjectToLocalStorage(projectName, array) {
  return localStorage.setItem(projectName, JSON.stringify(array));
}

// reload localStorage
export function reloadLocalStorage() {
  const table = document.getElementById("tasks");

  if (localStorage.length === 0 || localStorage["My Project"] === "[]") {
    const defaultTodo = new Todo({
      project: "My Project",
      title: "Buy Mouse Pad",
      description: "Logitech",
      dueDate: "2021-08-10",
      priority: "Medium",
    });
    addProjectToArray(defaultTodo, myproject);
    render(myproject, table);
  } else {
    let myProjectDestringified = JSON.parse(localStorage.getItem("My Project"));
    let supermarketDestringified = JSON.parse(
      localStorage.getItem("Supermarket")
    );

    const myArraysDistringified = [
      myProjectDestringified,
      supermarketDestringified,
    ];

    myArraysDistringified.forEach((array) => {
      array.forEach((element) => {
        const previousTodos = new Todo({
          project: element.project,
          title: element.title,
          description: element.description,
          dueDate: element.dueDate,
          priority: element.priority,
        });

        if (previousTodos.project === "My Project") {
          addProjectToArray(previousTodos, myproject);
          render(myproject, table);
        } else {
          addProjectToArray(previousTodos, supermarket);
        }
      });
    });
  }
}
