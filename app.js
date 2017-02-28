const container = document.querySelector(".container");
const input = document.getElementById("input");
const submit = document.getElementById("submit");
const buttonSection = document.getElementById("buttons");

function createToDoList(appName) {

  function addListItem(value) {
    let li = document.createElement("li");
    li.textContent = value;
    ul.appendChild(li);
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

  let addButton = document.createElement("button");

  addButton.className = "addButton";
  addButton.id = "addButton";
  addButton.textContent = "Add!";
  container.appendChild(addButton);

  addButton.addEventListener("click", (event) => {
    addListItem(addItemInput.value);
  });

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
    console.log("Please enter a value");
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
