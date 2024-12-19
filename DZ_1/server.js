// 

const http = require('http');

const server = http.createServer((reg, res) => {
    console.log('Запрос получен');
    if (reg.url === '/') {
        res.writeHead(200, { 'content-type': 'text/html; charset=UTF-8' });
        res.end('<h1>Привет. Добро пожаловать на мой сервер!</h1>');
    } else if (reg.url === '/about') {
        res.writeHead(200, { 'content-type': 'text/html; charset=UTF-8' });
        res.end('<h1>Страница с информацией обо мне!</h1>');
    } else {
        res.writeHead(404, { 'content-type': 'text/html; charset=UTF-8' });
        res.end('<h1>Страница не найдена</h1>');
    }

});

const port = 4000;

server.listen(port, () => {
    console.log(`Сервер запущен на порту ${port}`);
});



