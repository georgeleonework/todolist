const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');
const search = document.querySelector('.search input');

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

    if (todo.length){
        generateTemplate(todo);
        addForm.reset();
    }
});

//delete todos

list.addEventListener('click', e => {
    if (e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }
});

const filterTodos = (term) => {
    
}

//keyup event / every time a key is pressed the callback is ran and the term is set to the current value in the input
search.addEventListener('keyup', () => {
    const term = search.value.trim();
    filterTodos(term);
})







