// Запуск .js файла с с помощью Node.js

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const summArray = (arr) => {
    return arr.reduce((res, val) => res += val, 0);
}

console.log('Сумма элементов массива: ', summArray(arr));
