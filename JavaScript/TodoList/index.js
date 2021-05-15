function Todo(details) {
	const { title, description, dueDate, priority } = details;
	this.title = title || "unknown";
	this.description = description || "unknown";
	this.dueDate = dueDate || "unknown";
	this.priority = priority || "unknown";
}

Todo.prototype.addToPage = function () {
	const el = document.createElement("tr");
	const table = document.getElementById("tasks");
	el.innerHTML = `
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
      const title = document.getElementById("title").value;
      const description = document.getElementById("description").value;
      const dueDate = document.getElementById("dueDate").value;
      const priority = document.getElementById("priority").value;
  
      const newTodoCreated = new Todo({
        title: `${title}`,
        description: `${description}`,
        dueDate: `${dueDate}`,
        priority: `${priority}`,
      });
      newTodoCreated.addToPage();
    });
  }
   addBtn();

   const editBtn = document.querySelector(".edit");
   const deleteBtn = document.querySelector(".delete");
   


// TODO Edit btn
// TODO Delete btn

// TODO Users should be able to create new projects and choose which project their todos go into.

// TODO When a user first opens the app, there should be some sort of 'default' project to which all of their todos are put.

// testing
