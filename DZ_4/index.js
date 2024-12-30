const fs = require('fs');
const express = require('express');
const joi = require('joi');
const app = express();
app.use(express.json());

const userScheme = joi.object({
    firstName: joi.string().min(2).required(),
    secondName: joi.string().min(2).required(),
    age: joi.number().min(0).max(120).required(),
    city: joi.string().min(2)
});

let users = [];

try {
    users = JSON.parse(fs.readFileSync('./users.json', 'utf8')).users;
} catch (err) {
    console.error(err);
}

let usersId = users[users.length - 1].id;

app.get('/users', (req, res) => {
    res.send({ users });
});

app.get('/users/:id', (req, res) => {
    const userId = +req.params.id;
    const user = users.find(user => user.id === userId);
    if (user) {
        res.send({ user });
    } else {
        res.status(404);
        res.send({ user: null });
    }
});

app.post('/users', (req, res) => {
    const result = userScheme.validate(req.body);
    if (result.error) {
        return res.status(404).send({ error: result.error.details });
    }
    usersId += 1;
    users.push({
        id: usersId,
        ...req.body
    })
    res.send({ id: usersId });
    fs.writeFile('./users.json', JSON.stringify({ users }), (err) => {
        if (err) { console.error(err); }
    });
});

app.put('/users/:id', (req, res) => {
    const result = userScheme.validate(req.body);
    if (result.error){
        return res.status(404).send({error: result.error.details});
    }
    const userId = +req.params.id;
    const user = users.find(user => user.id === userId);
    if (user) {
        const { firstName, secondName, age, city } = req.body;
        user.firstName = firstName;
        user.secondName = secondName;
        user.age = age;
        user.city = city;
        res.send({ user });
        fs.writeFile('./users.json', JSON.stringify({ users }), (err) => {
            if (err) { console.error(err); }
        });
    } else {
        res.status(404);
        res.send({ user: null });
    }
});

app.delete('/users/:id', (req, res) => {
    const userId = +req.params.id;
    const user = users.find(user => user.id === userId);
    if (user) {
        const userIndex = users.indexOf(user);
        users.splice(userIndex, 1);
        res.send({ user });
        fs.writeFile('./users.json', JSON.stringify({ users }), (err) => {
            if (err) { console.error(err); }
        });
    } else {
        res.status(404);
        res.send({ user: null });
    }
});

app.listen(5000);





