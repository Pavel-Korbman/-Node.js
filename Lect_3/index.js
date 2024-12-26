// import { v4 as uuidv4 } from 'uuid';
// uuidv4();

// const { v4: uuidv4 } = require('uuid');
// uuidv4();

const uuid = require('uuid');
const id = uuid.v4();
const sayHi = require('./hello');
sayHi.hi('Павел Корбман');
console.log(id);

