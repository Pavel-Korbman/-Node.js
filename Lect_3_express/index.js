// Express - это быстрый, гибкий и минималистичный фреймворк для создания веб-приложений на Node.js

// Простейший сервер на Express

const express = require('express');
const app = express();
app.get('/', (req, res) => {
    res.send('<h1>Привет. Добро пожаловать на мой сервер!</h1>');
});

const port = 5000; // Задаём порт

server.listen(port, () => {
    console.log(`Сервер запущен на порту ${port}`);
});




