// 

// const createCounter = () => {
//     let counter = 0;
//     return () => {
//         return ++counter;
//     }
// }
// const counterHome = createCounter();
// const counterAbout = createCounter();

// const http = require('http');
// const server = http.createServer((reg, res) => {
//     if (reg.url === '/') {
//         res.writeHead(200, { 'content-type': 'text/html; charset=UTF-8' });
//         res.end(`<h1>Корневая страница</h1><p>Просмотров: ${counterHome()}</p><a href="http://localhost:4000/about">Ссылка на страницу /about</a>`);
//     } else if (reg.url === '/about') {
//         res.writeHead(200, { 'content-type': 'text/html; charset=UTF-8' });
//         res.end(`<h1>Страница about</h1><p>Просмотров: ${counterAbout()}</p><a href="http://localhost:4000">Ссылка на страницу /</a>`);
//     } else {
//         res.writeHead(404, { 'content-type': 'text/html; charset=UTF-8' });
//         res.end('<h1>404 Страница не найдена</h1>');
//     }
// });

const express = require('express');
const app = express();
app.get('/', (req, res) => {
    res.send('<h1>Привет. Добро пожаловать на мой сервер!</h1>');
});

app.get('/about', (req, res) => {
    res.send('<h1>Страница обо мне</h1>');
});

const port = 6000;
app.listen(port, () => {
    console.log(`Сервер запущен на порту ${port}`);
});





