function get_todos() {
    var todos = new Array;
    var todos_str = localStorage.getItem('todo');
    if (todos_str !== null) {
        todos = JSON.parse(todos_str);
    }
    return todos;
}

function add() {
    var task = document.getElementById('task').value;
    if (task === '') {
        alert("You must write something!");
    } else {
        var todos = get_todos();
        todos.push(task);
        localStorage.setItem('todo', JSON.stringify(todos));

        show();
    }

    return false;
}

function remove() {
    var id = this.getAttribute('id');
    var todos = get_todos();
    todos.splice(id, 1);
    localStorage.setItem('todo', JSON.stringify(todos));

    show();

    return false;
}

function show() {
    var todos = get_todos();

    var html = '<ul class="list-group">';
    for (var i = 0; i < todos.length; i++) {
        html += '<li class="list-group-item">' + todos[i] + '<button class="btn btn-link remove" id="' + i + '"><i class="fa fa-times" aria-hidden="true"></i></button></li>';
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