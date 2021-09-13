

function createTask() { 
    
    const tasks = [];

    function taskEvents() {   // all event listeners for tasks
            
        document.getElementById('task-submit').addEventListener('click',() => {  //submit listener
            if(document.getElementById('task-title').value.length == 0) {
                addTask.priority = undefined;   //so it doesn't set priority value if the alert pops up
                return alert('No task was added');
            }
                addTask();
        });

        document.querySelectorAll('.priority-button').forEach(button => {  //priority listener, gets value of which button clicked
            button.addEventListener('click', () => {
                return addTask.priority = button.value;
            })
        }); 

        let alpha = false;
        document.querySelector('.alphabetical-sort-button').addEventListener('click', () => { //alphabetical sort button listener
                
            if(alpha == false) {
                sortTaskListAlphaStart();
                alpha = true;
                return;
            }
            
            if(alpha == true) {
                sortTaskListAlphaEnd();
                alpha = false;
                return;
            }
        });

        let prio = false;
        document.querySelector('.priority-sort-button').addEventListener('click', () => { //priority sort button listener
            
            if(prio == false) {
                sortPriorityHigh();
                prio = true;
                return;
            }

            if(prio == true) {
                sortPriorityLow();
                prio = false;
                return;
            }
        });
    }   
    
    taskEvents();
        

    const addTask = () => { // recieves and pushes tasks properties 

        let task = {
            
            title: document.getElementById('task-title').value,
            priority: addTask.priority,
        }

        tasks.push(task);
        renderTasks(tasks); 
        
        addTask.priority = undefined; // resets the priority so it doesnt keep the old event listener value
    }

    function renderTasks(tasks) { //creates the div to hold a task 
        const taskContainer = document.querySelector('.list');
        
        taskContainer.innerHTML = ''; // so it doesnt make copies

        for(let i = 0; i < tasks.length; i++) {
            createList(i);  
        }
        
        function createList(i) {
            let newli = document.createElement('li');
            let newliTitle = document.createElement('span');
            let priority = tasks[i].priority;
            
            newli.classList.add('task-list');
            newliTitle.textContent = tasks[i].title;
            newliTitle.classList.add('task-list-title');

            newli.appendChild(newliTitle);
            taskContainer.appendChild(newli);
            
            if(priority == 'low') {
                newli.style.borderLeft = '7px solid rgb(89, 182, 89)'
            }
            
            if(priority == 'medium') {
                newli.style.borderLeft = '7px solid rgb(180, 180, 88)'
            }

            if(priority == 'high') {
                newli.style.borderLeft = '7px solid rgb(224, 58, 58)'
            }

            if(priority == undefined) {
                newli.style.borderLeft = '7px solid purple'
            }
            
            createListDeleteButton(newli, newliTitle); 
            showPriority(newli, priority);

            // createDate();
        }
      
        function createListDeleteButton(newli, newliTitle) {
            const deleteIcon = document.createElement('btn');
            deleteIcon.classList.add('delete-task');

            deleteIcon.addEventListener('click', () => { 

                for(let i = tasks.length - 1; i >= 0; i--) {
                    if(newliTitle.innerText == tasks[i].title) {
                        tasks.splice(i, 1); 
                        
                    }
                }
                newli.remove();
            })
            newli.appendChild(deleteIcon); 
        }
    } 
        function showPriority(newli, priority) {
            const priorityIcon = document.createElement('span');
            priorityIcon.classList.add('priority-icon');
            priorityIcon.innerText = priority;

            if (priorityIcon.innerText == 'low'){
                priorityIcon.style.background = 'rgb(89, 182, 89)';
            }

            if (priorityIcon.innerText == 'medium'){
                priorityIcon.style.background = 'rgb(180, 180, 88)';
            }

            if (priorityIcon.innerText == 'high'){
                priorityIcon.style.background = 'rgb(224, 58, 58)';
            }

            if (priorityIcon.innerText == 'undefined'){
                priorityIcon.style.background = 'purple';
            }

            newli.appendChild(priorityIcon);
        }

        
        
        function sortTaskListAlphaStart() { //sorts tasks array form lowest to highest title, then renders
            tasks.sort(function(a, b) {
                    if (a.title < b.title) {return -1};
                    if (a.title > b.title) {return 1};
                    return 0;
                })
                renderTasks(tasks);
        }

        function sortTaskListAlphaEnd() { //sorts tasks array form higest to lowest title, then renders
            tasks.sort(function(a, b) {
                    if (a.title > b.title) {return -1};
                    if (a.title < b.title) {return 1};
                    return 0;
                })
                renderTasks(tasks);  
        }

        function sortPriorityHigh() { //sorts tasks array from high priority to low/undefined, then renders
            let priorities = {
                undefined: 0,
                low: 1,
                medium: 2,
                high: 3,
            };

            tasks.sort(function(a, b) {
                return priorities[b.priority] - priorities[a.priority];
            })
            renderTasks(tasks); 
        }

        function sortPriorityLow() { //sorts tasks array from undefined/low to high priority, then renders
            let priorities = {
                undefined: 0,
                low: 1,
                medium: 2,
                high: 3,
            };

            tasks.sort(function(a, b) {
                return priorities[a.priority] - priorities[b.priority];
            })
            renderTasks(tasks); 
        };
}

    
export { createTask }