const fs = require('fs');
const path = require('path');

const pathFile = path.resolve(__dirname, 'person.json');

const person = JSON.parse(fs.readFileSync(pathFile));
person.age -= 10;
person.city = 'Ekaterinburg';

fs.writeFileSync(pathFile, JSON.stringify(person, null, 2));