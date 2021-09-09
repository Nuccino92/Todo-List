// import { createButtonListeners } from "./modules/eventListeners";

// createButtonListeners()
window.addEventListener('DOMContentLoaded', (event) => {
    console.log('chicken')
})

const addButton = document.querySelector('#poop');

function createButtonListeners() {
    
    addButton.forEach(button => button.addEventListener('click', () => {
        console.log('chicken')
    }));
    
        
    
    }
  createButtonListeners();