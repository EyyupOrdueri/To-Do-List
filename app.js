
//declaring items
const input = document.getElementById("inp-box");
const plus = document.querySelector("form button");
const itemSection = document.querySelector(".item-section");

const ul = document.createElement("ul");
itemSection.appendChild(ul);


// window.onload(input.focus());


plus.addEventListener("click", () => {
    if (!input.value) {
        alert("You didn't enter any item. Please check again..")
    }
    
    else {
        const li = document.createElement("li");
        li.innerHTML = input.value;
        ul.appendChild(li);
        li.innerHTML += `<input type="checkbox" name="" id="">`
        input.value = ""
    }
})
