import Todo from "./todo-constructor.js";
import { addTodo, enableProjectBtns } from "./btns.js";
import {
  saveProjectToLocalStorage,
  reloadLocalStorage,
} from "./local-storage.js";
import { addProjectToArray, removeProjectFromArray } from "./arrays.js";
import { supermarket, myproject } from "./index.js";

export function changeProjectTitle(projectName) {
  const projectTitle = document.querySelector("#project-title");
  projectTitle.innerText = projectName;
}

// rendering new todo from project array to the Dom
export function render(array, parentDiv) {
  parentDiv.innerHTML = "";

  for (let i = 0; i < array.length; i++) {
    let row = `
		<tr data-todo-title="${array[i].title}" data-todo-project="${array[i].project}">
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
