// 💡 Реализация API в Express
// Рассмотрим реализацию API, в которой форматом передачи данных будет JSON. 
// Это самый распространенный формат данных для межсервисного общения.

// Метод POST

const express = require('express');
const app = express();
app.use(express.json());

app.post('/', (req, res)=>{
console.log(req.body);
res.send('<h1>Это POST запрос!</h1>');
});

app.listen(3000);

