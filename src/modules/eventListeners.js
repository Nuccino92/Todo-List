
function createTodoModal() {
    const addButton = document.getElementById('nav-add-tab');
    const taskSubmit = document.getElementById('task-submit');
    const taskCancel = document.getElementById('task-cancel');
    const projectSubmit = document.getElementById('project-submit');
    const projectCancel = document.getElementById('project-cancel');
    const taskButton = document.querySelector('.task-modal');
    const projectButton = document.querySelector('.project-modal');
    
    addButton.addEventListener('click', () => {
        modal();
    })
    
    function modal() {
        document.querySelector('.list-container').classList.add('active');
        document.querySelector('.todo-modal').classList.add('active');
        submitModal();
        cancelModal();
        taskSetup();
        projectSetup();
    }

    function submitModal() {
        taskSubmit.addEventListener('click', () => {
            document.querySelector('.list-container').classList.remove('active');
            document.querySelector('.todo-modal').classList.remove('active');
        });
        projectSubmit.addEventListener('click', () => {
            document.querySelector('.list-container').classList.remove('active');
            document.querySelector('.todo-modal').classList.remove('active'); 
        });
    }

    function cancelModal() {
        taskCancel.addEventListener('click', (e) => {
            document.querySelector('.list-container').classList.remove('active');
            document.querySelector('.todo-modal').classList.remove('active');
            e.preventDefault();
        });
        projectCancel.addEventListener('click', (e) => {
            document.querySelector('.list-container').classList.remove('active');
            document.querySelector('.todo-modal').classList.remove('active');
            e.preventDefault();
        });
    }

    function taskSetup() {
        taskButton.addEventListener('click', () => {
            document.querySelector('.task-container').classList.remove('active');
            document.querySelector('.project-container').classList.remove('active');
            document.querySelector('.task-modal').classList.remove('active');
            document.querySelector('.project-modal').classList.remove('active');
        })
    }

    function projectSetup() {
        projectButton.addEventListener('click', () => {
            document.querySelector('.task-container').classList.add('active');
            document.querySelector('.project-container').classList.add('active');
            document.querySelector('.project-modal').classList.add('active');
            document.querySelector('.task-modal').classList.add('active');
        })
    }
}

export {createTodoModal}