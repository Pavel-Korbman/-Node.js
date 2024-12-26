// Напишите HTTP сервер на express и реализуйте два обработчика “/” и “/about”, где:
// — На каждой странице реализован счетчик просмотров
// — Значение счетчика необходимо сохранять в файл каждый раз, когда обновляется страница
// — Также значение счетчика должно загружаться из файла, когда запускается обработчик страницы
// — Таким образом счетчик не должен обнуляться каждый раз, когда перезапускается сервер.



const express = require('express');
const app = express();

const counterHome = 0;
const counterAbout = 0;
app.get('/', (req, res) => {
    res.send(`<h1>Корневая страница</h1><p>Просмотров: ${counterHome}</p><a href="http://localhost:5000/about">Ссылка на страницу /about</a>`);   
});

app.get('/about', (req, res) => {
    res.send(`<h1>Страница about</h1><p>Просмотров: ${counterAbout}</p><a href="http://localhost:5000">Ссылка на страницу /</a>`);
});

const port = 5000;
app.listen(port, () => {
    console.log(`Сервер запущен на порту ${port}`);
});





