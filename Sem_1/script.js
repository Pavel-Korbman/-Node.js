// Задание №3* 
// Изменить тело функции counter() таким образом, чтобы код вывел максимальное количество цифр за одну секунду, при этом выполнение скрипта не должно завершаться переполнением стека, а должно завершиться сообщением “Скрипт успешно завершен!”.
// function counter(n) {
//     console.log(n);
//     counter(n + 1);
// }

// counter(0);

// setTimeout(() => {
//     console.log('Скрипт успешно завершен');
//     process.exit();
// }, 1000);




function counter(n) {
    console.log(n);
    setTimeout(() => counter(n + 1), 0);
}

counter(0);

setTimeout(() => {
    console.log('Скрипт успешно завершен');
    process.exit();
}, 1000);