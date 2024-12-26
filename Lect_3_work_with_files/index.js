// Обзор встроенных модулей

// Модуль fs

// Модуль fs позволяет работать с файловой системой: 
// читать и записывать файлы

// Методfs.readFile() 
// Для чтения файлов существует метод fs.readFile(). 
// Он позволяет получить содержимое любого файла:

const fs = require('fs');

// fs.readFile(__filename, 'utf8', (err, data) => {
//     if (err) {
//         console.error(err)
//     } else { console.log(data); } // текст этого файла
// });

fs.readFile('./hello.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err)
    } else { console.log(data); }
});
