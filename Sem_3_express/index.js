// Задание №4 
// 1. Инициализируйте проект NPM. 
// 2. Установите библиотеку express. 
// 3. Создайте файл index.js. 
// 4. В файле напишите код который реализует два обработчика по URL “/” и URL “/about”. 
// 5. В каждом обработчике верните HTML код, в котором есть заголовок и ссылка на соседнюю страницу.

const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('<h1>Главная страница</h1><a href="/about">Ссылка на страницу про меня /about</a>');
});

app.get('/about', (req, res) => {
    res.send('<h1>Про меня</h1><a href="/">Ссылка на главную страницу /about</a>');
});

const port = 3000;
app.listen(port, () => {
    console.log(`Сервер запущен на порту ${port}`);
});