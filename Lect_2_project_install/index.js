const korbmanMath = require('korbman_project_1');
const quad = require('korbman-math-quad');
const res1 = korbmanMath.summ(5, 7);
const res2 = korbmanMath.dif(7,5);
// console.log(`5+7 =${res1}`);
// console.log(`7-5 =${res2}`);
// console.log(`7*5 =${korbmanMath.multiple(7,5)}`);
console.log(`x^2+2x+1=0 Решение:${quad.quadratic(1,2,0)}`);