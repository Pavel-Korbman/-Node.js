// Напишите HTTP сервер на express и реализуйте два обработчика “/” и “/about”, где:
// — На каждой странице реализован счетчик просмотров
// — Значение счетчика необходимо сохранять в файл каждый раз, когда обновляется страница
// — Также значение счетчика должно загружаться из файла, когда запускается обработчик страницы
// — Таким образом счетчик не должен обнуляться каждый раз, когда перезапускается сервер.


const fs = require('fs');
const express = require('express');
const app = express();
let counter;
try {
    counter = JSON.parse(fs.readFileSync('./counter.json', 'utf8'));
} catch (err) {
    console.error(err);
}

function countPlus(req, res, next) {
    if (req.url === '/') {
        counter.home++;
    } else if (req.url === '/about') {
        counter.about++;
    }
    next();
}

function writeCount(req, res, next) {
    fs.writeFile('./counter.json', JSON.stringify(counter), (err) => {
        if (err) { console.error(err); }
    });
    next();
}

app.get('/', countPlus, writeCount, (req, res) => {
    res.send(`<h1>Корневая страница</h1><p>Просмотров: ${counter.home}</p><a href="http://localhost:5000/about">Ссылка на страницу /about</a>`);
});

app.get('/about', countPlus, writeCount, (req, res) => {
    res.send(`<h1>Страница about</h1><p>Просмотров: ${counter.about}</p><a href="http://localhost:5000">Ссылка на страницу /</a>`);
});

const port = 5000;
app.listen(port, () => {
    console.log(`Сервер запущен на порту ${port}`);
});





