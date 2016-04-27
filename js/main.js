function get_lista() {
    var lista = new Array;
    var lista_str = localStorage.getItem('todo');
    if (lista_str !== null) {
        lista = JSON.parse(lista_str); 
    }
    return lista;
}

function add() {
    var tarea = document.getElementById('tarea').value;

    var lista = get_lista();
    lista.push(tarea);
    localStorage.setItem('todo', JSON.stringify(lista));
    document.getElementById('tarea').value="";
    show();

    return false;
}

function remove() {
    var id = this.getAttribute('id');
    var lista = get_lista();
    lista.splice(id, 1);
    localStorage.setItem('todo', JSON.stringify(lista));

    show();

    return false;
}

function show() {
    var lista = get_lista();

    var html = '<ul>';
    for(var i=0; i<lista.length; i++) {
        html += '<li>' + lista[i] + '<button class="remove" id="' + i  + '">x</button></li>';
    };
    html += '</ul>';

    document.getElementById('lista').innerHTML = html;

    var buttons = document.getElementsByClassName('remove');
    for (var i=0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', remove);
    };
}

document.getElementById('add').addEventListener('click', add);
show();