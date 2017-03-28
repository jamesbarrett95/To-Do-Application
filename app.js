const container = document.querySelector(".container");
const input = document.getElementById("input");
const submit = document.getElementById("submit");
const entry = document.getElementById("todoentry");
const buttonSection = document.getElementById("buttons");
const allButtons = document.getElementsByTagName("button");
const listItemEntries = new Set();

// Appends an error message, depending on what argument is passed through
function appendErrorMessage(errorMessage) {
    const firstElement = container.firstElementChild;
    const p = document.createElement("p");
    if (firstElement.tagName == "P") {
        return;
    } else {
        p.textContent = errorMessage;
        container.insertBefore(p, firstElement);
    }
}

function removeErrorMessage() {
    if (container.firstElementChild.tagName == "P") {
        container.removeChild(container.firstElementChild);
    }
}

// Create To-Do List
function createToDoList(appName) {

    // Create a list item
    function addListItem(input) {
        removeErrorMessage();
        if (listItemEntries.has(input)) {
            appendErrorMessage("This value is already inserted!");
            return;
        }
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
        listItemEntries.add(input);
    }

    // Remove all elements within the container to begin the creation of the To-Do App
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    const h2 = document.createElement("h2");
    h2.textContent = appName;
    container.appendChild(h2);

    const icon = document.createElement("i");
    icon.className = "fa fa-pencil";
    container.appendChild(icon);

    const ul = document.createElement("ul");
    container.appendChild(ul);

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
        if (addItemInput.value === "") {
            appendErrorMessage("Please enter a value!");
        } else {
            addListItem(addItemInput.value);
        }
    });

    // Add list item when pressing enter
    todoentry.addEventListener("keyup", (event) => {
        event.preventDefault();
        if (event.keyCode === 13) {
            if (addItemInput.value === "") {
                appendErrorMessage("Please enter a value!");
            } else {
                addListItem(addItemInput.value);
            }
        }
    });
}

// If user presses enter when naming their app, crete the app
input.addEventListener("keyup", (event) => {
    event.preventDefault();
    if (event.keyCode == 13) {
        if (input.value === "") {
            appendErrorMessage("Please enter a value!");
        } else {
            createToDoList(input.value);
        }
    }
});

// Create the app depending on what value is given to the app name
submit.addEventListener("click", (event) => {
    if (input.value === "") {
        appendErrorMessage("Please enter a value!");
    } else {
        createToDoList(input.value);
    }
});

// Create the app if choosing one of the pre-defined options
buttonSection.addEventListener("click", (event) => {
    if (event.target.tagName === "BUTTON") {
        let option = event.target.firstElementChild;
        createToDoList(option.textContent);
    }
});

// Event listener added to document to capture the dynamically created buttons
document.addEventListener("click", (event) => {
    const button = event.target;
    const li = button.parentNode;
    const ul = li.parentNode;

    if (event.target.tagName === "BUTTON") {
        if (event.target.textContent === "Edit") {
            const span = li.firstElementChild;
            const input = document.createElement('input');
            input.type = "text";
            input.value = span.textContent;
            li.insertBefore(input, span);
            li.removeChild(span);
            event.target.textContent = "Save";
        } else if (event.target.textContent === "Remove") {
            const span = li.firstElementChild.textContent;
            listItemEntries.delete(span);
            ul.removeChild(li);
        } else if (event.target.textContent === "Save") {
            const input = li.firstElementChild;
            const span = document.createElement('span');
            if (listItemEntries.has(input.value)) {
                appendErrorMessage("This value is already inserted!");
            } else {
                removeErrorMessage();
                span.textContent = input.value;
                li.insertBefore(span, input);
                li.removeChild(input);
                event.target.textContent = "Edit";
            }
        }
    } else if (event.target.tagName === "I") {
        if (event.target.className === "fa fa-pencil") {
            const h2 = document.querySelector("h2");
            const input = document.createElement("input");
            input.type = "text";
            input.id = "headingInput";
            input.value = h2.textContent;
            event.target.className = "fa fa-2x fa-floppy-o";
            container.insertBefore(input, h2);
            container.removeChild(h2);
        } else {
            const input = document.getElementById("headingInput");
            const h2 = document.createElement("h2");
            if (input.value === "") {
                appendErrorMessage("Please enter a value!");
            } else {
                removeErrorMessage();
                h2.textContent = input.value;
                event.target.className = "fa fa-pencil";
                container.insertBefore(h2, input);
                container.removeChild(input);
            }
        }
    }
});
