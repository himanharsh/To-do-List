const addBtn = document.querySelector("#addBtn");
const inputTask = document.querySelector("#input-task");

addBtn.addEventListener("click", () => {
    const task = inputTask.value;

    const taskUl = document.querySelector("#task-list");
    const taskLi = document.createElement("li");

    // styling list items or task list
    taskLi.classList.add("taskList");

    // taskLi.innerText = task;
    const taskText = document.createElement("span");
    taskText.innerText = task;
    
    // styling task text
    taskText.classList.add("taskText");

    taskLi.appendChild(taskText);

    // check button
    const checkButton = document.createElement("button");
    // styling check button
    checkButton.classList.add("chkBtn");

    checkButton.innerHTML = '<i class="fa-solid fa-check"></i>';
    taskLi.appendChild(checkButton);

    // delete button
    const deleteButton = document.createElement("button");
    // styling delete button
    deleteButton.classList.add("delBtn");

    deleteButton.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
    taskLi.appendChild(deleteButton);

    if (task === ""){
        alert("Please Enter A Task Before Adding!")
    }
    else{
        taskUl.appendChild(taskLi);
        inputTask.value = "";
    }

    checkButton.addEventListener("click", () => {
        checkButton.parentElement.style.textDecoration = "line-through";
        // console.log(checkButton.parentElement);
    })

    deleteButton.addEventListener("click", () => {
        // console.log(deleteButton.parentElement.parentElement);
        deleteButton.parentElement.parentElement.removeChild(deleteButton.parentElement);
    })
})