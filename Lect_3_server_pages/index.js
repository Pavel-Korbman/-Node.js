// Возврат html файлов 

// Писать HTML в JavaScript строке не очень удобно. Для удобства в express существует возможность отдавать в качестве ответа html файл с помощью метода res.sendFile()

const express = require('express');
const path = require('path');

const app = express();

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'static/index.html'));
});

const port = 5500;
app.listen(port, () => {
    console.log(`Сервер запущен на порту ${port}`);
});

