
function addModal() {
    
    const addButton = document.getElementById('nav-add-tab');
    const taskSubmit = document.getElementById('task-submit');
    const taskCancel = document.getElementById('task-cancel');
    const projectSubmit = document.getElementById('project-submit');
    const projectCancel = document.getElementById('project-cancel');
    const taskButton = document.querySelector('.task-modal');
    const projectButton = document.querySelector('.project-modal');
    
    addButton.addEventListener('click', () => {
       return modal();
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
            removeModal();
            document.querySelector('form').reset();  
        });
        projectSubmit.addEventListener('click', () => {
            removeModal();
        });
    }

    function cancelModal() {
        taskCancel.addEventListener('click', () => {
            removeModal();
            document.querySelector('form').reset(); 
        });
        projectCancel.addEventListener('click', () => {
            removeModal();
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
    
    function removeModal() {
        document.querySelector('.list-container').classList.remove('active');
        document.querySelector('.todo-modal').classList.remove('active');  
    }
    
}



export { addModal }