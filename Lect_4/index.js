// Шаблонизация и API с применением подхода REST

// Генерация HTML“налету”

// const express = require('express');
// const app = express();

// const articles = [
// { title: 'Заголовок 1', description: 'Содержание статьи 1' },
// { title: 'Заголовок 2', description: 'Содержание статьи 2' },
// { title: 'Заголовок 3', description: 'Содержание статьи 3' },
// ];

// app.get('/', (req, res)=>{
// let html = '<h1>Article List</h1>';
// for (const data of articles) {
//     html += `<h2>${data.title}</h2>`;
//     html += `<p>${data.description}</p>`;
// }

// res.send(html);
// });

// app.listen(3000);



// Шаблонизатор Handlebars

// - установить с помощью команды npm install handlebars.

const handlebars = require('handlebars');

// шаблоны
// const template = handlebars.compile('<p>{{someVar}}</p>');
const template = handlebars.compile('<p>{{Var1}} {{Var2}}</p>');

// const result = template({someVar: 'Привет Павел!'});
const result = template({ Var1: 'Привет', Var2: 'Павел!' });
// <p>Привет Павел !</p>

console.log(result);
console.log('');

// Условная конструкция
// {{# if value}} <p></p> {{else}} <b></b> {{/if}};

const template1 = handlebars.compile(
    '{{# if bold}} <b>Hello!</b> {{else}} <p>Hello!</p> {{/if}}'
);

console.log(template1({ bold: true }));
console.log(template1({ bold: false }));

// Перебор массива в цикле

const items = [
    { name: 'first item', number: 3 },
    { name: 'second item', number: 5 }
];

const template2 = handlebars.compile(
    '{{#each items}} <p>{{this.name}} {{this.number}} </p> {{/each}}'
);

console.log(template2({ items }));
