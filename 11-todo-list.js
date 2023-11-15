const todoList = [{
    name: 'make dinner',
    dueDate: '2023-12-22'
}, {
    name: 'wash dishes',
    dueDate: '2023-12-22'
}]

function renderTodoList() {
    let todoListHTML = ' ';

    todoList.forEach((todoObject, index) => {
        //const name = todoObject.name;
        //const dueDate = todoObject.dueDate;
        const { name, dueDate } = todoObject;
        const html = `
            <div>
            <input type="checkbox">
                ${name} 
            </div>
            <div>
                ${dueDate} 
            </div>
            <button class="delete-todo-button js-delete-button"> Delete </button>
            `;
        todoListHTML += html;  
    });

    document.querySelector('.js-todo-list').innerHTML = todoListHTML; 

    document.querySelectorAll('.js-delete-button')
        .forEach((deleteButton, index) => {
            deleteButton.addEventListener('click', () => {
                todoList.splice(index, 1);
                renderTodoList();
            })
        })
}

function addTodo() {
    const inputElement = document.querySelector('.js-name-input');
    const name = inputElement.value

    const dueDateElement = document.querySelector('.js-due-date-input');
    const dueDate = dueDateElement.value

    todoList.push({
        name: name,
        dueDate: dueDate
    });

    inputElement.value = ' ';
    
    renderTodoList();
}

document.querySelector('.js-add-todo-button')
    .addEventListener('click', () => {
        addTodo();
        renderTodoList();
});




document.body.addEventListener('keydown', (event) => {
    if(event.key === 'Enter') {
        addTodo();
        renderTodoList();
    }
});


