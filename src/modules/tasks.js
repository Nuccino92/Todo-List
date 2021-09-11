
const tasks = [];

function createTask() {
     
    document.addEventListener('DOMContentLoaded', () => {
        document.getElementById('task-submit').addEventListener('click',(e) => {
            addTask(e);
        })
    })

    const addTask = (e) => {
        e.preventDefault();
        
        let task = {
            title: document.getElementById('task-title').value,
        }
        
        tasks.push(task);
        document.querySelector('form').reset(); 
        renderTasks(tasks);
    }
}

function renderTasks(tasks) {
    const taskContainer = document.querySelector('.list');
    
    taskContainer.innerHTML = '';

    tasks.forEach(function(item) {
        let newli = document.createElement('li');
        
        newli.classList.add('task-list');
        newli.textContent = item.title;

        const deleteIcon = document.createElement('btn');
        deleteIcon.classList.add('delete-task');
        
        taskContainer.appendChild(newli);
        newli.appendChild(deleteIcon);   
    });
    renderEvents();  
}

function renderEvents() {
    
    const deleteButton = document.querySelector('.delete-task');
    deleteButton.addEventListener('click', () => {
        deleteTask();
    })
}



function deleteTask() {
    let div = document.querySelector('.task-list')
    for(let i = tasks.length -1; i >= 0; i--) {
        if (div.innerText == tasks[i].title){
            tasks.splice(i, 1);
            
        }
    }
}



export { createTask }