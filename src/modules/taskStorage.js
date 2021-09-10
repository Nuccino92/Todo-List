


function createTask() {
    
    const listContainer = document.querySelector('.list');
    const tasks = [];
    
    const addTask = (e) => {
        e.preventDefault();
        let task = {
            title: document.getElementById('task-title').value,
        }
        tasks.push(task);
        document.querySelector('form').reset();
        console.log(tasks);    
    }
    
    document.addEventListener('DOMContentLoaded', () => {
        document.getElementById('task-submit').addEventListener('click', addTask)
    })
}
export {createTask}