"use strict";

export let supermarket = [];
export let myproject = [];

import Todo from "./todo-constructor.js";
import { addTodo, enableProjectBtns } from "./btns.js";
import {
  saveProjectToLocalStorage,
  reloadLocalStorage,
} from "./local-storage.js";
import { addProjectToArray, removeProjectFromArray } from "./arrays.js";
import { changeProjectTitle, render } from "./dom.js";

addTodo();
enableProjectBtns();
reloadLocalStorage();
removeProjectFromArray();
