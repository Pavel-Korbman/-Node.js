// 💡 Реализация API в Express
// Рассмотрим реализацию API, в которой форматом передачи данных будет JSON. 
// Это самый распространенный формат данных для межсервисного общения.

// HTTP методы в Express:

// const express = require('express');
// const app = express();
// app.use(express.json());

// app.get('/', (req, res) => {
//     res.send('Привет!');
// });
// app.post('/', (req, res) => {
//     res.send(req.body);
// });
// app.put('/', (req, res) => {
//     res.send(req.body);
// });
// app.delete('/', (req, res) => {
//     res.send(req.body);
// });
// app.listen(3000);


// Метод POST

// const express = require('express');
// const app = express();
// app.use(express.json());

// app.post('/', (req, res)=>{
// console.log(req.body);
// res.send('<h1>Это POST запрос!</h1>');
// });

// app.listen(3000);

// Метод PUT

// const express = require('express');
// const app = express();
// app.use(express.json());

// app.put('/', (req, res)=>{
// console.log(req.body);
// res.send('<h1>Это PUT запрос!</h1>');
// });

// app.listen(3000);

// Метод DELETE

const express = require('express');
const app = express();
app.use(express.json());

app.delete('/', (req, res)=>{
console.log(req.body);
res.send('<h1>Это DELETE запрос!</h1>');
});

app.listen(3000);