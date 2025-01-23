// Задание №1
// Для реализации сервера, который позволяет получать, создавать, обновлять и удалять пользователей, необходимо определить, какие роуты будут у сервера. Нужно написать список роутов и их методов, которые позволят работать с пользователями, а также написать небольшой комментарий с пояснением того, для чего роут нужен. 
// Пример: GET /objects/:id - позволяет получить что-то
/*
GET /users - получение всех пользователей
GET /users/:id - получение конкретного пользователя
POST /users - добавление нового пользователя
PUT /users/:id - изменение пользователя
DELETE /users/:id - удаление пользователя
*/

// Задание №2
// Инициализируйте проект NPM-Установите express-Создайте файл сервера index.js-В файле создайте обработчик получения всех пользователей

// Задание №3 
// Необходимо реализовать роут создания пользователя. Поля объекта пользователя - это firstName, secondName, age, city.
// 💡 Подсказка: 
// - Не забудьте реализовать генерацию уникального идентификатора пользователя и добавить такой идентификатор в объект пользователя во время создания

// Задание №4 
// Необходимо реализовать роут обновления пользователя.
// 💡Подсказка: 
// -Помните, что если пользователь не найден, то необходимо вернуть соответствующий ответ клиенту

const express = require('express');
const {idSchema, bodySchema} = require('./validation/schema');
const { checkParams, checkBody }= require('./validation/validator');

const app = express();
app.use(express.json());

const users = [];
let userID = 0;

app.get('/users', (req, res) => {
    res.send(users);
});

app.get('/users/:id', checkParams(idSchema), (req, res) => {
    const user = users.find(user => user.id === Number(req.params.id));
    if (user) {
        res.send(user);
    } else {
        res.status(404);
        res.send({ user: null });
    }
});

app.post('/users', checkBody(bodySchema), (req, res) => {
    userID += 1;
    users.push({
        id: userID,
        ...req.body
    })
    res.send({ id: userID, });
});

app.put('/users/:id', checkParams(idSchema), checkBody(bodySchema), (req, res) => {
    const user = users.find(user => user.id === Number(req.params.id));
    if (user) {
        user.firstName = req.body.firstName;
        user.secondName = req.body.secondName;
        user.age = req.body.age;
        user.city = req.body.city;
        res.send(user);
    } else {
        res.status(404);
        res.send({ user: null });
    }
});

app.delete('/users/:id', checkParams(idSchema), (req, res) => {
    const user = users.find(user => user.id === Number(req.params.id));
    if (user) {
        const index = users.indexOf(user);
        users.splice(index, 1);
        res.send(`Пользователь ID:${user.id} - удалён`);
    } else {
        res.status(404);
        res.send({ user: null });
    }
});

app.use((req, res) => {
    res.status(404).send({
        message: 'URL not found!'
    })
});

app.listen(4000);