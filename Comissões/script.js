const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value === ''){
        alert("Escreva algo!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();

/*const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value === ''){
        alert("You must write something!");
    } else {
        let li = document.createElement("li");
        li.textContent = inputBox.value; // Use textContent to avoid XSS
        listContainer.appendChild(li);

        let span = document.createElement("span");
        span.textContent = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    } else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask(){
    let storedData = localStorage.getItem("data");
    if (storedData) {
        listContainer.innerHTML = storedData;

        // Re-add event listeners to newly added items
        listContainer.querySelectorAll('li').forEach(li => {
            li.addEventListener('click', function(e) {
                if(e.target.tagName === "LI"){
                    e.target.classList.toggle("checked");
                    saveData();
                } else if(e.target.tagName === "SPAN"){
                    e.target.parentElement.remove();
                    saveData();
                }
            });
        });

        listContainer.querySelectorAll('span').forEach(span => {
            span.addEventListener('click', function(e) {
                e.target.parentElement.remove();
                saveData();
            });
        });
    }
}

showTask();*/
