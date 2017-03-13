const container = document.querySelector(".container");
const input = document.getElementById("input");
const submit = document.getElementById("submit");
const entry = document.getElementById("todoentry");
const buttonSection = document.getElementById("buttons");

function createToDoList(appName) {

  function addListItem(input) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const editButton = document.createElement("button");
    const removeButton = document.createElement("button");
    editButton.id = "edit";
    removeButton.id = "removeButton";
    editButton.textContent = "Edit";
    removeButton.textContent = "Remove";
    span.textContent = input;
    li.appendChild(span);
    li.appendChild(editButton);
    li.appendChild(removeButton);
    ul.appendChild(li);
    todoentry.value = "";
  }

  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
  container.appendChild(appName);

  let ul = document.createElement("ul");
  container.appendChild(ul);

  let addItemInput = document.createElement("input");

  addItemInput.setAttribute("type", "text");
  addItemInput.setAttribute("placeholder", "Enter To-Do Here!")
  addItemInput.className = "addItemInput";
  addItemInput.id = "todoentry";
  container.appendChild(addItemInput);
  addItemInput.focus();

  let addButton = document.createElement("button");

  addButton.className = "addButton";
  addButton.id = "addButton";
  addButton.textContent = "Add!";
  container.appendChild(addButton);

  addButton.addEventListener("click", (event) => {
    addListItem(addItemInput.value);
  });

  todoentry.addEventListener("keyup", (event) => {
    event.preventDefault();
    if(event.keyCode === 13) {
      addListItem(addItemInput.value);
    }
  })
}

function createAppName(input) {
  let nameOfToDo = document.createElement("p");
  nameOfToDo.textContent = input;
  createToDoList(nameOfToDo);
}

input.addEventListener("keyup", function(event) {
  event.preventDefault();
  if(event.keyCode == 13) {
    createAppName(input.value);
  }
});

submit.addEventListener("click", (event) => {
  if(input.value === "") {
    let error = document.createElement("p");
    p.textContent = "Please enter a value";
    container.appendChild(p)
  } else {
    createAppName(input.value);
  }
});

buttonSection.addEventListener("click", (event) => {
  if(event.target.tagName === "BUTTON") {
    let option = event.target.firstElementChild;
    createToDoList(option);
  }
});
