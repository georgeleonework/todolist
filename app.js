const addForm = document.querySelector('.add');

//create a function that will add html content to browser

const generateTemplate = todo => {
    const html = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${todo}</span>
        <i class="far fa-trash-alt delete"></i>
    </li>
    `
};

addForm.addEventListener('submit', e => {

    e.preventDefault();
    const todo = addForm.add.value.trim(); //trim removes any white spaces
    
    generateTemplate(todo);
})

