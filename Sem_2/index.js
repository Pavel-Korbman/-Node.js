// Задание №1 
function calculateResultSumm(purchases, discount) {
    let total = purchases.reduce((acc, purchases) => acc += purchases, 0);
    total = total*discount;
    return total;
}

const total = calculateResultSumm([12.1, 32.2, 43.1], 0.9);
console.log(`Общая стоимость покупок: ${total} рублей.`);