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
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }
});

const filterTodos = (term) => {

    Array.from(list.children) //turns the list of children elements into an array
        .filter((todo) => !todo.textContent.includes(term)) //the previous array is filtered by todo items. If the text content contains the input then we continue
        .forEach(() => todo.classlist.add('filtered')); //for each of the ones that did not contained the text, were going to add a class to it

    Array.from(list.children) 
        .filter((todo) => todo.textContent.includes(term)) 
        .forEach(() => todo.classlist.remove('filtered'));  //set the behavior for the ones that DO match
    
};

//keyup event / every time a key is pressed the callback is ran and the term is set to the current value in the input
search.addEventListener('keyup', () => {
    const term = search.value.trim();
    filterTodos(term);
});







