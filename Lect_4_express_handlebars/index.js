// Handlebars и Express

const handlebars = require('handlebars');
const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();

app.get('/', (req, res) => {
    const pathToTemplate = path.joint(
        __dirname, './templates/home.handlebars');

    fs.readFile(pathToTemplate, 'utf8', (err, data) => {
        if (err) {
            res.status(500);
            res.send(err.message);
        } else {
            const template = handlebars.compile(data);
            res.send(template({articles}));
        }
    });
});

const port = 5000; // Задаём порт

app.listen(port, () => {
    console.log(`Сервер запущен на порту ${port}`);
});