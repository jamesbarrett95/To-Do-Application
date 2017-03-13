const container = document.querySelector(".container");
const input = document.getElementById("input");
const submit = document.getElementById("submit");
const entry = document.getElementById("todoentry");
const buttonSection = document.getElementById("buttons");

// Create To-Do List
function createToDoList(appName) {

  // Create a list item
  function addListItem(input) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const editButton = document.createElement("button");
    const removeButton = document.createElement("button");
    editButton.textContent = "Edit";
    removeButton.textContent = "Remove";
    span.textContent = input;
    li.appendChild(span);
    li.appendChild(editButton);
    li.appendChild(removeButton);
    ul.appendChild(li);
    todoentry.value = "";
  }

  // Remove all elements within the container to begin the creation of the To-Do App
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }

  container.appendChild(appName);

  const ul = document.createElement("ul");
  ul.id = "listItems";
  container.appendChild(ul);
  listItems = document.getElementById("listItems");

  const addItemInput = document.createElement("input");

  addItemInput.setAttribute("type", "text");
  addItemInput.setAttribute("placeholder", "Enter To-Do Here!")
  addItemInput.className = "addItemInput";
  addItemInput.id = "todoentry";
  container.appendChild(addItemInput);
  addItemInput.focus();

  const addButton = document.createElement("button");

  addButton.className = "addButton";
  addButton.id = "addButton";
  addButton.textContent = "Add!";
  container.appendChild(addButton);

  // Add list item when clicking the 'Add' button
  addButton.addEventListener("click", (event) => {
    addListItem(addItemInput.value);
  });

  // Add list item when pressing enter
  todoentry.addEventListener("keyup", (event) => {
    event.preventDefault();
    if(event.keyCode === 13) {
      addListItem(addItemInput.value);
    }
  })
}

// Create app
function createAppName(input) {
  let nameOfToDo = document.createElement("p");
  nameOfToDo.textContent = input;
  createToDoList(nameOfToDo);
}

// If user presses enter when naming their app, crete the app
input.addEventListener("keyup", (event) => {
  event.preventDefault();
  if(event.keyCode == 13) {
    createAppName(input.value);
  }
});

// Create the app depending on what value is given to the app name
submit.addEventListener("click", (event) => {
  if(input.value === "") {
    let error = document.createElement("p");
    p.textContent = "Please enter a value";
    container.appendChild(p);
  } else {
    createAppName(input.value);
  }
});

// Create the app if choosing one of the pre-defined options
buttonSection.addEventListener("click", (event) => {
  if(event.target.tagName === "BUTTON") {
    let option = event.target.firstElementChild;
    createToDoList(option);
  }
});
