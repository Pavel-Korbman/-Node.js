// 💡 Реализация API для управления статьями
/*
const express = require('express');
const Joi = require('joi');
const app = express();
app.use(express.json());

const articles = [];
let uniqueID = 0;

// Роут получения всех статей:
app.get('/articles', (req, res) => {
    res.send({ articles });
});

// Роут создания статьи:
app.post('/articles', (req, res) => {
    // Валидация запроса
    if (!req.body.title) {
        return res.status(400).send({error: 'Invalid title'});
    }
    if (!req.body.content) {
        return res.status(400).send({error: 'Invalid content'});
    }
    if (req.body.content.length <=5) {
        return res.status(400).send({error: 'Статья должна содержать больше 5 символов'});
    }
    
    
    uniqueID += 1;

    articles.push({
        id: uniqueID,
        ...req.body
    });

    res.send({ id: uniqueID, });
});

// Роут получения статьи по параметру ID:
app.get('/articles/:id', (req, res) => {
    const article = articles.find((article) => article.id === Number(req.params.id));

    if (article) {
        res.send({ article });
    } else {
        res.status(404);
        res.send({ article: null });
    }
});

// Роут обновления статьи:
app.put('/articles/:id', (req, res) => {
    const article = articles.find((article) => article.id === Number(req.params.id));

    if (article) {
        article.title = req.body.title;
        article.content = req.body.content;
        res.send({ article });
    } else {
        res.status(404);
        res.send({ article: null });
    }
});

// Роут удаления статьи:
app.delete('/articles/:id', (req, res) => {
    const article = articles.find((article) => article.id === Number(req.params.id));

    if (article) {
        const articleIndex = articles.indexOf(article);
        articles.splice(articleIndex, 1);
        res.send({ article });
    } else {
        res.status(404);
        res.send({ article: null });
    }
});

app.listen(3000);
*/

// Валидатор Joi

// const Joi = require('joi');

// const schema = Joi.object({
//     id: Joi.number().required(),
//     title: Joi.string().min(1).required(),
//     content: Joi.string().min(5).required()
// });

// const res = schema.validate({
//     id: 1,
//     title: 'Заголовок',
//     content: '22'
// });

// console.log(res.error.details);
// // [
// //     {
// //       message: '"content" length must be at least 5 characters long',
// //       path: [ 'content' ],
// //       type: 'string.min',
// //       context: {
// //         limit: 5,
// //         value: '22',
// //         encoding: undefined,
// //         label: 'content',
// //         key: 'content'
// //       }
// //     }
// //   ]


// Реализация API c валидацией Joi

/*
const express = require('express');
const Joi = require('joi');
const app = express();

app.use(express.json());

const idSchema = Joi.object({  // Схема валидации ID
    id: Joi.number().required()
});

const articleSchema = Joi.object({  // Схема валидации статьи
    title: Joi.string().required(),
    content: Joi.string().min(5).required(),
});

const articles = []; // храним статьи в массиве (правильно считывать его из файла)
let uniqueID = 0;

app.get('/articles', (req, res) => {
    res.send({ articles });
});

app.post('/articles', (req, res) => {
    
    const articleValidation = articleSchema.validate(req.body);
    if(articleValidation.error) {
        return res.status(400).send(articleValidation.error.details);
    }    
    
    uniqueID += 1;

    articles.push({
        id: uniqueID,
        ...req.body
    });

    res.send({ id: uniqueID, });
});

app.get('/articles/:id', (req, res) => {
    const idValidation = idSchema.validate(req.params);
    if(idValidation.error) {
        return res.status(400).send(idValidation.error.details);
    }

    const article = articles.find((article) => article.id === Number(req.params.id));

    if (article) {
        res.send({ article });
    } else {
        res.status(404);
        res.send({ article: null });
    }
});


app.put('/articles/:id', (req, res) => {
    const idValidation = idSchema.validate(req.params);
    if(idValidation.error) {
        return res.status(400).send(idValidation.error.details);
    }

    const articleValidation = articleSchema.validate(req.body);
    if(articleValidation.error) {
        return res.status(400).send(articleValidation.error.details);
    }
    
    const article = articles.find((article) => article.id === Number(req.params.id));

    if (article) {
        article.title = req.body.title;
        article.content = req.body.content;
        res.send({ article });
    } else {
        res.status(404);
        res.send({ article: null });
    }
});

app.delete('/articles/:id', (req, res) => {
    const idValidation = idSchema.validate(req.params);
    if(idValidation.error) {
        return res.status(400).send(idValidation.error.details);
    }
    
    const article = articles.find((article) => article.id === Number(req.params.id));

    if (article) {
        const articleIndex = articles.indexOf(article);
        articles.splice(articleIndex, 1);
        res.send({ article });
    } else {
        res.status(404);
        res.send({ article: null });
    }
});

app.listen(3000);
*/




// РЕФАКТОРИНГ КОДА Реализация API c валидацией Joi 

const express = require('express');

/**
 * Импортируем методы валидации :
 */
const { checkParams, checkBody } = require('./validation/validator');

/**
 * Импортируем схемы (для валидации ID и статьи) валидатора Joi :
 */
const { idSchema, articleSchema } = require('./validation/schema');

const app = express();

app.use(express.json());

const articles = []; // храним статьи в массиве (правильно считывать его из файла)
let uniqueID = 0; // для генерации ID новой статьи

/**
 * Роут получения всех статей:
 */
app.get('/articles', (req, res) => {
    res.send({ articles });
});

/**
 * Роут создания статьи:
 */
app.post('/articles', checkBody(articleSchema), (req, res) => {
    uniqueID += 1;

    articles.push({
        id: uniqueID,
        ...req.body
    });

    res.send({ id: uniqueID, });
});

/**
 * Роут получения статьи по ID:
 */
app.get('/articles/:id', checkParams(idSchema), (req, res) => {

    const article = articles.find((article) => article.id === Number(req.params.id));

    if (article) {
        res.send({ article });
    } else {
        res.status(404);
        res.send({ article: null });
    }
});

/**
 * Роут изменения статьи:
 */
app.put('/articles/:id', checkParams(idSchema), checkBody(articleSchema), (req, res) => {

    const article = articles.find((article) => article.id === Number(req.params.id));

    if (article) {
        article.title = req.body.title;
        article.content = req.body.content;
        res.send({ article });
    } else {
        res.status(404);
        res.send({ article: null });
    }
});

/**
 * Роут удаления статьи:
 */
app.delete('/articles/:id', checkParams(idSchema), (req, res) => {

    const article = articles.find((article) => article.id === Number(req.params.id));

    if (article) {
        const articleIndex = articles.indexOf(article);
        articles.splice(articleIndex, 1);
        res.send({ article });
    } else {
        res.status(404);
        res.send({ article: null });
    }
});

/**
 * Обработчик несуществующих URL:
 */
app.use((req, res) => {
    res.status(404).send({
        message: 'URL not found!'
    })
});

app.listen(3000);