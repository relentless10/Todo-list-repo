let project = [];

const todoproject = {
  name: "todoproject",
  todo: []
};

const todoitem1 = {
  title: "Sample Todo",
  description: "This is a test task",
  dueDate: "2026-03-01",
  priority: "medium",
  completed: false
};

// Load from local storage FIRST
const savedproject = localStorage.getItem("projectdata");

if (savedproject) {
  project = JSON.parse(savedproject);
} else {
  project = [todoproject];
  project[0].todo.push(todoitem1); // only add dummy item on first load
}

// Select the list element
const list = document.querySelector("#todo-list");

// Render todos

function renderTodos() {
  list.textContent = "";
  project.forEach(proj => {
    const projectHeader = document.createElement("h3");
    projectHeader.textContent = proj.name;
    list.appendChild(projectHeader);

    proj.todo.forEach(todo => {
      const li = document.createElement("li");
      li.textContent = `${todo.title} - Due: ${todo.dueDate}`;
      list.appendChild(li);
    });
  });
} 

renderTodos();

// Add todoo button
const addbtn = document.querySelector("#add-todo");

addbtn.addEventListener("click", () => {
  const title = prompt("Enter a title");
  const description = prompt("Enter a description");
  const dueDate = prompt("Enter a due date");
  const priority = prompt("Enter priority");

  const newTodo = {
    title: title,
    description: description,
    dueDate: dueDate,
    priority: priority,
    completed: false
  };

  project[0].todo.push(newTodo); // push to project array not todoproject directly

  localStorage.setItem("projectdata", JSON.stringify(project));

  renderTodos();
});




//addd project 

const addProjectBtn = document.querySelector("#addproject");

addProjectBtn.addEventListener("click", () => {
  const projectName = prompt("Enter a project name");

  const newProject = {
    name: projectName,
    todo: []
  };

  project.push(newProject);

  localStorage.setItem("projectdata", JSON.stringify(project));

  renderTodos();

});