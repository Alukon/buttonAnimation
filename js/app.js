    var div = document.getElementById('myLink');
    var e    = document.createElement('a');
    e.href = 'http://google.ru';
    e.title = 'это ссылка';
    e.appendChild(document.createTextNode('0'));
    div.appendChild(e);
