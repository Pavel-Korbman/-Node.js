// HTTP-сервер наNode.js

const http = require('http'); // Импортируем встроенный модуль http
const { text } = require('stream/consumers');
// функция require() для импорта встроенных модулей возвращает объект этого модуля

const server = http.createServer((reg, res) => {
    console.log('Запрос получен');
    if (reg.url === '/') {  // для http://localhost:3000/
        res.writeHead(200, { 'content-type': 'text/html; charset=UTF-8' });
        res.end('<h1>Привет. Добро пожаловать на мой сервер!</h1>');
    } else if (reg.url === '/about') {  // для http://localhost:3000/about
        res.writeHead(200, { 'content-type': 'text/html; charset=UTF-8' });
        res.end('<h1>Страница с информацией обо мне!</h1>');
    } else {
        res.writeHead(404, { 'content-type': 'text/html; charset=UTF-8' });
        res.end('<h1>Страница не найдена</h1>');
    }

});
// Создаём сервер методом createServer(). Первый аргумент - кол-бэк функция - выполняется при приходе запроса на сервер.
// ● req — это объект запроса, сокращенно от request. В объекте можно получить заголовки запроса, url запроса и другие различные данные. 
// ● res — это объект ответа, сокращенно от response. У объекта есть методы, которые позволяют установить заголовки и завершить ответ.

// ● Метод res.writeHead() позволяет установить заголовки ответа — метаданные, которые передаются вместе с данными ответа и содержат информацию об их типе, размере, кодировке и других характеристиках. Метод res.writeHead() принимает два аргумента: ○ Код состояния (status code) — число, которое указывает на результат обработки запроса сервером. Например, код 200 означает успешный ответ, а код 404 —что запрашиваемый ресурс не найден. ○ Объект заголовков (headers) — объект, который содержит пары ключ-значение, где ключ — это имя заголовка, а значение — это значение заголовка. Например, {‘Content-Type’: ‘text/html’} означает, что тип данных ответа —этоHTML-текст.


const port = 3000; // Задаём порт

server.listen(port, () => {
    console.log(`Сервер запущен на порту ${port}`);
}); // резервируем (сервер слушает) за сервером порт



