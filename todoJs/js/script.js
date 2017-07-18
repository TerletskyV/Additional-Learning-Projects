function getTodos() {
    var todos = new Array;
    var todosStr = localStorage.getItem('todo');
    if (todosStr !== null) {
        todos = JSON.parse(todosStr);
    }
    return todos;
}

function add() {
    var task = document.getElementById('task').value;
    if (task === '') {
        alert("You must write something!");
    } else {
        var todos = getTodos();
        todos.push(task);
        localStorage.setItem('todo', JSON.stringify(todos));

        show();
    }

    return false;
}

function remove() {
    var id = this.getAttribute('id');
    var todos = getTodos();
    todos.splice(id, 1);
    localStorage.setItem('todo', JSON.stringify(todos));

    show();

    return false;
}

function addEnter(ele) {
    if (event.keyCode == 13) {
        add();
    }
}


function show() {
    var todos = getTodos();

    var html = '<ul class="list-group">';
    for (var i = 0; i < todos.length; i++) {
        html += '<li class="list-group-item">' +  todos[i] + '<span class="btn btn-link remove" id="' + i + '"><i class="fa fa-times" aria-hidden="true"></i></span></li>';
    };
    html += '</ul>';

    document.getElementById('todos').innerHTML = html;

    var buttons = document.getElementsByClassName('remove');
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', remove);
    };
    var list = document.querySelector('ul');
    list.addEventListener('click', function(ev) {
        if (ev.target.tagName === 'LI') {
            ev.target.classList.toggle('checked');
        }
    }, false);
}


document.getElementById('add').addEventListener('click', add);
show();