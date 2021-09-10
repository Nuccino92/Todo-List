



function createProject() {
    
    const listContainer = document.querySelector('.projects-list-container');
    const projects = [];

    const addProject = (e) => {
        e.preventDefault();
        let project = {
            title: document.getElementById('project-title').value,
            discription: document.getElementById('project-description-input').value,
        }
        projects.push(project);
        document.querySelector('form').reset();  
        console.log(projects);
    }

    document.addEventListener('DOMContentLoaded', () => {
        document.getElementById('project-submit').addEventListener('click', addProject)
    })
}

export {createProject}
