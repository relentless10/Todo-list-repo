
let project = [];

const todoproject = {
  name : "todoproject",
  todo : []
}

project.push(todoproject);


const todoitem1 = {
  title: "Sample Todo",
  description: "This is a test task",
  dueDate: "2026-03-01",
  priority: "medium",
  completed: false
}
//push item1 to to-do array in the. to-do project objects;
todoproject.todo.push(todoitem1);

//select todoo-list from the main content in indei.html

const list = document.querySelector("#todo-list");
//render todos
function renderTodos() {
  list.textContent = ""; // clear existing list
  project.forEach(proj => {
    proj.todo.forEach(todo => {
      const li = document.createElement("li");
      li.textContent = `${todo.title} - Due: ${todo.dueDate}`;
      list.appendChild(li);
    });
  });
}

renderTodos();

//add to do manually 

 const addbtn = document.querySelector("#add-todo");

addbtn.addEventListener("click",  () => {
  const title = prompt("Enter A title");
  const description = prompt ("Enter a description");
  const dueDate = prompt("Enter a due date");
  const priority = prompt("Enter Priority ");
  
  const newTodo = {
  title: title,
  description: description,
  dueDate: dueDate,
  priority: priority,
  completed: false
};

  todoproject.todo.push(newTodo)
  
  //making sure new todos are saved to local storage 

localStorage.setItem("projectdata", JSON.stringify(project));

  renderTodos();
  
  
});


// saved projects from local storage 

const savedproject = localStorage.getItem("projectdata") ;

if (savedproject) {
  project = JSON.parse(savedproject)
} else {
  project = [todoproject];
}


