const fs = require('fs');
const path = require('path');

const person = {
    'name': 'Ivan',
    'surname': 'Ivanov',
    'age': 30,
    'city': 'Moscow'
};

try {
  fs.writeFileSync(path.join(__dirname, 'person.json'), JSON.stringify(person));  
} catch (error) {
    console.error(error);
} 