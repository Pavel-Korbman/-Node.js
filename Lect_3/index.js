// Модули
// 💡 Модуль–это файл,код которого можно использовать в других модулях.

// Экспорт должен происходить незамедлительно!
// Нельзя использовать module.exports в асинхронных функциях.
// Нельзя экспортировать данные из функции.
// 💡 Хорошим способом экспортировать данные из модуля будет определение module.exports в конце скрипта.

// Модуль может быть без экспорта

const test1 = require('./module-hallo');

console.log(test1); // {} пустой объект

// Импорт модулей

// Функция require() работает следующим образом: 
// 1. Функция require() сначала ищет встроенные модули по переданному имени модуля. 
// 2. Если глобального модуля с указанным именем нет, то require() ищет установленные модули с помощьюNPM. 
// 3. И наконец, если нет ни глобального, ни NPM модулей, или указан путь к модулю, то ищет среди пользовательских модулей.

// Если при импорте указать имя директории то оттуда экспортируется модуль index.js
const string = require('./dir');
console.log(string);

// Импорт по цепочке 
// Импортируемые модули также могут импортировать другие модули
const foo = require('./dir/foo/foo');
console.log(foo);

// Объект global 
// Данный объект содержит в себе набор свойств и функций, которые доступны глобально

console.log(Math.floor(15.5)); 
console.log(global.Math.floor(15.5)); 


// Объект process 
// Объект process содержит в себе набор свойств и функций для работы с ОС и окружением

console.log(process.version); // v22.12.0 // версия node js
console.log(process.arch); // x64 // арх процессора
console.log(process.pid); // 10588 // id текущего процесса
console.log(process.cwd()); // D:\FRONTEND\Основы_Node.js\Code\Lect_3 // откуда запущен процесс

// Свойства __dirname и __filename 
// __dirname хранит в себе путь к директории в которой хранится текущий скрипт. __filename хранит в себе путь к текущему скрипту
 
console.log(__dirname); // D:\FRONTEND\Основы_Node.js\Code\Lect_3> 
console.log(__filename); // D:\FRONTEND\Основы_Node.js\Code\Lect_3\index.js

