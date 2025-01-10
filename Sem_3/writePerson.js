const fs = require('fs/promises');
// const fs = require('fs');
const path = require('path');

const person = {
    'name': 'Ivan',
    'surname': 'Ivanov',
    'age': 30,
    'city': 'Moscow'
};

// try {
//   fs.writeFileSync(path.resolve(__dirname, 'person.json'), JSON.stringify(person, null, 2));  
// } catch (error) {
//     console.error(error);
// } 

fs.writeFile(path.resolve(__dirname, 'person.json'), JSON.stringify(person,null, 2));