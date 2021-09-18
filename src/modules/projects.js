

function createProject() {

    const projects = [];

    const addProject = () => {
       
        let project = {
            title: document.getElementById('project-title').value,
            description: document.getElementById('project-description-input').value,
        }
        projects.push(project);
        renderProjects(projects);
        storeLocalProjects();
    }

    
    
    document.addEventListener('DOMContentLoaded', () => {
        document.getElementById('project-submit').addEventListener('click', () => {
            if(document.querySelector('.add-project-input').value == '') {
                return alert('The name field was empty');
            }
            addProject();
        }); 
        
        document.querySelector('.save-description-button').addEventListener('click', () => {  //save button even listener
            updateDescription();
        });

        document.querySelector('.exit-description-button').addEventListener('click', () => {  //exit from description even listener
            
            for(let i = 0; i < projects.length; i++) {
                if(document.querySelector('.project-description-container-title').textContent == projects[i].title) {
                    if(projects[i].description !== document.querySelector('.project-text-area').value) {   //checks if changes are made without saving                 
                        return confirmSetting();
                    }
                }
            }
            document.querySelector('.project-description-container').classList.remove('active');
        })

        document.querySelector('.delete-project-button').addEventListener('click', () => {
            let confirmA = confirm('Are you sure you wish to delete the project?');
            if (confirmA) {
                    document.querySelector('.project-description-container').classList.remove('active');
                    return deleteProject();
            } else {return}
        })

    });


    function updateDescription() {  // updates projects array 
        for(let i = 0; i < projects.length; i++) {
            if(document.querySelector('.project-description-container-title').textContent == projects[i].title) {
                return projects[i].description = document.querySelector('.project-text-area').value;
            }  
        }
    };

    function confirmSetting() {
        let confirmA = confirm('You did not save your changes do you still wish to exit?');
            if (confirmA) {
                    document.querySelector('.project-description-container').classList.remove('active');
            } else {return}
    }

    function deleteProject() {
        
        for(let i = 0; i < projects.length; i++) {
            if(document.querySelector('.project-description-container-title').textContent == projects[i].title) {
                projects.splice(i, 1);
                document.querySelector('.project-description-container').classList.remove('active');
                storeLocalProjects();
                return renderProjects(projects);
            }  
        }
    }

    function storeLocalProjects() {
        localStorage.setItem('projects', JSON.stringify(projects))
    }

    
    
    function renderProjects() {
        const container = document.querySelector('.projects-list-container');
        const descriptionContainer = document.querySelector('.project-description-container');

        container.innerHTML = '';

        for(let i = 0; i < projects.length; i++) {
            createList(i);  
        };

        function createList(i) {
            let title = projects[i].title;
            
            let smallList = document.createElement('li');
            smallList.textContent = title;
            smallList.classList.add('small-proj-list');
            container.appendChild(smallList);

            let projectText = document.createElement('div');
            projectText.classList.add('project-text');
            descriptionContainer.appendChild(projectText);


            smallList.addEventListener('click', () => { //for list of projects, shows the project and gives the title to the container
                projects[i].title
                projects.find(title => {
                    if(title = smallList.textContent) {
                        descriptionContainer.classList.add('active');
                        document.querySelector('.project-description-container-title').textContent = projects[i].title;
                    }
                }) 
                textArea(); 
            });

            function textArea() {
                document.querySelector('.project-text-area').value = projects[i].description;
            }
        }  
    };

    $(window).on('load', loadLocalStorage); //jQuery for multiple onload events
    
    
    function loadLocalStorage() {  //on startup gets the projects array and returns it, following this render it
        let myProjects_deserialized = JSON.parse(localStorage.getItem('projects'));
        
        if (myProjects_deserialized == null) { return };

        myProjects_deserialized.forEach(index => {
            projects.push(index);
        })
        
        renderProjects(projects)
    }
    
    
};

export { createProject }
