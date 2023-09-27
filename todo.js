
let a =0;
function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();
 
    if (taskText !== "") {
        const taskList = document.getElementById("taskList");

        const li = document.createElement("li");
        a+=1;
        li.innerHTML =` ${a}  ${taskText} <button class="delete-button" onclick="deleteTask(this)">Delete</button>`;
        
        taskList.appendChild(li);
        
        taskInput.value = "";
    }
}

function deleteTask(button) {
    a-=1;
    const taskList = document.getElementById("taskList");
    taskList.removeChild(button.parentElement);
    
}