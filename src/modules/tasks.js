



function createTask() {
     
    const tasks = [];

    document.addEventListener('DOMContentLoaded', () => {
        document.getElementById('task-submit').addEventListener('click',(e) => {
            
            addTask(e);
        })
    })

    const addTask = (e) => {
        e.preventDefault();
        
        if(document.getElementById('task-title').value.length == 0) {
            return alert('No task was added')
        }
        
        let task = {
            title: document.getElementById('task-title').value,
        }
        
        tasks.push(task);
        
        renderTasks(tasks);
    }


    
    
    function renderTasks(tasks) {
        const taskContainer = document.querySelector('.list');
        
        taskContainer.innerHTML = '';

        for(let i = 0; i < tasks.length; i++) {
            createList(i); 
        }
        
        function createList(i) {
            let newli = document.createElement('li');
                
            newli.classList.add('task-list');
            newli.textContent = tasks[i].title;
            taskContainer.appendChild(newli);
            
            createListDeleteButton(newli);
            // createImportance();
            // createDate();
        }
      
        function createListDeleteButton(newli) {
            const deleteIcon = document.createElement('btn');
            deleteIcon.classList.add('delete-task');

            
            deleteIcon.addEventListener('click', () => { 

                for(let i = tasks.length - 1; i >= 0; i--) {
                    if(newli.innerText == tasks[i].title) {
                        tasks.splice(i, 1);          
                    }
                }
                newli.remove();
            })
            newli.appendChild(deleteIcon); 
        }
    } 
}

export { createTask }