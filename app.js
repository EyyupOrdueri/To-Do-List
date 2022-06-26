// selectors
const btn = document.getElementById("todo-button");
const todoInput = document.getElementById("todo-input");
const todoUl = document.getElementById("todo-ul");
const span = document.querySelector("span");


// focus the input at the beginning and change the day
window.onload = function () {
    todoInput.focus();
    changeDay();
}

// add "button event"
btn.addEventListener("click", (e) => {
    if (!todoInput.value) {
        alert("Please enter your todo");
    }
    else {
        todoUl.innerHTML += `        
        <li>
        <i class="fa fa-check"></i>
        <p>${todoInput.value}</p>
        <i class="fa fa-trash"></i>
        </li>`;
        todoInput.value = "";
    }
})

//   when we click enter, return the add button's click function
todoInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        btn.click();
    }
})

// describing "delete" and "ok" buttons's event
todoUl.addEventListener("click", (e)=> {
    // if event comes from delete buttons
    if (e.target.classList.contains("fa-trash")) {
        // remove the related li element and refresh the DOM
        e.target.parentElement.remove();
    }

    // if event comes from ok or delete buttons
    if (e.target.classList.contains("fa-check")) {
        // if the related li element has checked class, remove it
        if (e.target.parentElement.classList.contains("checked")) {
            e.target.parentElement.classList.remove("checked");
        }
        else {
        // if the related li element has not checked class, add it
            e.target.parentElement.classList.add("checked");
        }
    }
})

// change the day
const changeDay = () => {
    // week starts with sunday
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    // date
    const date = new Date();
    let day = days[date.getDay()];
    
    span.innerHTML = day;
}