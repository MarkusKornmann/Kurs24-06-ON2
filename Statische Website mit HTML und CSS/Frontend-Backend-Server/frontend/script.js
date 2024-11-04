document.getElementById('todo-form').addEventListener('submit', (event) => {
    event.preventDefault();
    const title = document.getElementById('todo-title').value;
    const newTodo = {
        userId: 1,
        id: Date.now(),
        title: title,
        completed: false
    };

    fetch('http://127.0.0.1:4000/todos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newTodo)
    })
    .then(response => response.json())
    .then(todo => {
        taskToHtml(todo);
        document.getElementById('todo-title').value = '';
    })
    .catch(error => console.error('Fehler beim Hinzufügen des Todos:', error));
});

const getTodos = () => {
    fetch('http://127.0.0.1:4000/todos')
        .then(response => response.json())
        .then(loadTodos)
        .catch(error => console.error('Fehler beim Laden der Todos:', error));
};

const loadTodos = (todos) => {
    console.log(todos);
    todos.forEach(taskToHtml);
};

const taskToHtml = (todo) => {
    console.log(todo);

    const listItem = document.createElement('li');
    listItem.id = todo.id;
    listItem.setAttribute('userId', todo.userId);

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = todo.completed;

    const taskText = document.createElement('span');
    taskText.textContent = `${todo.title} `;

    const delButton = document.createElement('button');
    delButton.textContent = "Delete Task";

    listItem.appendChild(checkbox);
    listItem.appendChild(taskText);
    listItem.appendChild(delButton);

    document.getElementById('task-list').appendChild(listItem);
};

getTodos();




/*document.getElementById('todo-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const title = document.getElementById('todo-title').value;
    const newTodo = {
        userId: 1, // oder eine andere Benutzer-ID
        id: Date.now(), // eine eindeutige ID generieren
        title: title,
        completed: false
    };

    fetch('http://127.0.0.1:4000/todos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newTodo)
    })
    .then(response => response.json())
    .then(todo => {
        taskToHtml(todo);
        document.getElementById('todo-title').value = ''; // Eingabefeld leeren
    })
    .catch(error => console.error('Fehler beim Hinzufügen des Todos:', error));
});

function getTodos() {
    fetch('http://127.0.0.1:4000/todos')
        .then(response => response.json())
        .then(json => loadTodos(json))
        .catch(error => console.error('Fehler beim Laden der Todos:', error));
}

function loadTodos(todos) {
    console.log(todos);

    for (let i = 0; i < todos.length; i++) {
        taskToHtml(todos[i]);
    }
}

function taskToHtml(todo) {
    console.log(todo);

    let taskCompleted = todo.completed;

    let listItem = document.createElement('li');
    listItem.id = todo.id;
    listItem.setAttribute('userId', todo.userId);

    let checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = taskCompleted;

    let taskText = document.createElement('span');
    taskText.textContent = todo.title + ' ';

    let delButton = document.createElement('button');
    delButton.textContent = "Delete Task";

    listItem.appendChild(checkbox);
    listItem.appendChild(taskText);
    listItem.appendChild(delButton);

    document.getElementById('task-list').appendChild(listItem);
}

getTodos(); */
