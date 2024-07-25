
// Variables goes here
const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

// onclick button function goes here
function addTask() {
    if (inputBox.value === '') {
        // Adding alert pop here
        alert("Oops! You have not added any task.");
    }else{

        // Adding li element here
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        
        // Adding span element here
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);

    }
    inputBox.value = "";
    saveData();
}

// Adding click event here
listContainer.addEventListener("click", function (e) {
            if(e.target.tagName === "LI") {
                e.target.classList.toggle("checked");
                saveData();

    } else if(e.target.tagName === "SPAN"){
            e.target.parentElement.remove();
            saveData();
    }
}, false);


// Add Data into local Storage
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

// Showing Data from local Storage
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();