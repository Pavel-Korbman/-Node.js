// Возврат html файлов 

// Писать HTML в JavaScript строке не очень удобно. Для удобства в express существует возможность отдавать в качестве ответа html файл с помощью метода res.sendFile()

// const express = require('express');
// const path = require('path');

// const app = express();

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'static/index.html'));
// });

// const port = 5500;
// app.listen(port, () => {
//     console.log(`Сервер запущен на порту ${port}`);
// });

// Статичные файлы 
// - это файлы, 
// которые хранятся на сервере и доступны 
// для загрузки и просмотра из браузера 

// Для того, чтобы определить директорию хранения статичных файлов, необходимо использовать промежуточный обработчик express.static()

const express = require('express');

const app = express();

app.use(express.static('static'));

app.get('/', (req, res) => {
    res.sendFile('static/index.html');
});

const port = 5500;
app.listen(port, () => {
    console.log(`Сервер запущен на порту ${port}`);
});

// Теперь можно из браузера запустить все страницы напр. http://localhost:5500/about.html
// Также можно разместить в static папке и подключить к html страницам css и js файлы 