// 


// const fs = require('fs');
const express = require('express');
const app = express();
app.use(express.json());
const users = [];
let usersId = 0;

app.get('/users', (req, res) => {
    res.send({ users });
});

app.get('/users/:id', (req, res) => {
    const userId = +req.params.id; // Number()
    const user = users.find(user => user.id === userId);
    if (user) {
        res.send({ user });
    } else {
        res.status(404);
        res.send({ user: null });
    }
});

app.post('/users', (req, res) => {
    usersId += 1;
    users.push({
        id: usersId,
        ...req.body
    })
    res.send({ id: usersId });
});

app.put('/users/:id', (req, res) => {
    const userId = +req.params.id; // Number()
    const user = users.find(user => user.id === userId);
    if (user) {
        const { firstName, secondName, age, city } = req.body;
        user.firstName = firstName;
        user.secondName = secondName;
        user.age = age;
        user.city = city;
        res.send({ user });
    } else {
        res.status(404);
        res.send({ user: null });
    }
});

app.delete('/users/:id', (req, res) => {
    const userId = +req.params.id; // Number()
    const user = users.find(user => user.id === userId);
    if (user) {
        const userIndex = users.indexOf(user);
        users.splice(userIndex, 1);

        res.send({ user });
    } else {
        res.status(404);
        res.send({ user: null });
    }
});

app.listen(5000);





