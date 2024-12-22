function quadratic(a, b, c) {
    const d = b * b - 4 * a * c;
    if (d < 0) {
        return 'Уравнение не имеет решений.';
    } else if (d === 0) {
        return (-b) / (2 * a);
    } else {
        return [(-b + Math.sqrt(d)) / 2 * a, (-b - Math.sqrt(d)) / 2 * a];
    }
}

module.exports ={quadratic};