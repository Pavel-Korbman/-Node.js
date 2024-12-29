// Handlebars и Express

// const handlebars = require('handlebars');
// const express = require('express');
// const fs = require('fs');
// const path = require('path');
// const app = express();

// const articles = [
//     { title: 'Заголовок статьи 1', description: 'Текстовое наполнение первой статьи' },
//     { title: 'Заголовок статьи 2', description: 'Текстовое наполнение второй статьи' },
//     { title: 'Заголовок статьи 3', description: 'Текстовое наполнение третьей статьи' }    
// ];

// app.get('/', (req, res) => {
//     const pathToTemplate = path.join(
//         __dirname, '/templates/home.handlebars');

//     fs.readFile(pathToTemplate, 'utf8', (err, data) => {
//         if (err) {
//             res.status(500);
//             res.send(err.message);
//         } else {
//             const template = handlebars.compile(data);
//             res.send(template({articles}));
//         }
//     });
// });

// app.listen(3000);

// Библиотека express-handlebars
// установка модуля: npm install express-handlebars

const express = require('express');
const { engine } = require('express-handlebars');

const app = express();

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

const articles = [
    { title: 'Заголовок статьи 1', description: 'Текстовое наполнение первой статьи' },
    { title: 'Заголовок статьи 2', description: 'Текстовое наполнение второй статьи' },
    { title: 'Заголовок статьи 3', description: 'Текстовое наполнение третьей статьи' }    
];

app.get('/', (req, res) => {    
res.render('home', {layout: 'index', title: 'Home', articles});
});

app.listen(3000);