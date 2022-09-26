const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');

//create a function that will add html content to browser

const generateTemplate = todo => {
    const html = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${todo}</span>
        <i class="far fa-trash-alt delete"></i>
    </li>
    `;

    list.innerHTML += html;
};

addForm.addEventListener('submit', e => {

    e.preventDefault();
    const todo = addForm.add.value.trim(); //trim removes any white spaces
    
    generateTemplate(todo);
})

