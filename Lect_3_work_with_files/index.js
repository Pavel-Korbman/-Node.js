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

// fs.readFile('./hello.txt', 'utf8', (err, data) => {
//     if (err) {
//         console.error(err);
//     } else { console.log(data); }
// });


// Запись в файл writeFile().
// Для записи в файл у модуля fs определена функция writeFile
// Файл полностью перезаписывается с новыми данными (старые удаляются)

// const newData = 'Это содержимое нового файла';

// fs.writeFile('./newfile.txt', newData, (err) => {
//     if (err) {
//         console.error(err);
//     } else { console.log('Файл записан'); }
// });

// Добавление в файл appendFile()
// Чтобы добавлять данные в файл, существует функция appendFile

// const newData1 = ' Это содержимое для добавления в файл';

// fs.appendFile('./newfile.txt', newData1, (err) => {
//     if (err) {
//         console.error(err);
//     } else { console.log('Файл дозаписан'); }
// });

// Синхронные и асинхронные методы 
// Синхронные методы - это аналоги асинхронных. 
// Они делают те же самые действия, но при этом блокируют поток выполнения скрипта

// const fileData = fs.readFileSync('./hello.txt', 'utf8');
// console.log(fileData); // Привет Павел Корбман

// fs.appendFileSync('./hello.txt', ' Как дела');
// const fileData1 = fs.readFileSync('./hello.txt', 'utf8');
// console.log(fileData1); // Привет Павел Корбман Как дела

// лучше не использовать на работающем сервере

// Пример обработки ошибки:
try {
    fs.appendFileSync('./hello.txt', ' Как дела');
    const fileData1 = fs.readFileSync('./hello.txt', 'utf8');
    console.log(fileData1); // Привет Павел Корбман Как дела Как дела
} catch (error) {
    console.error(error);
}