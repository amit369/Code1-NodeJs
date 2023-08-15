const getNotes = require ('./notes');
const validator = require('validator');
const chalk = require('chalk');
const msg = getNotes();

console.log(msg);
console.log(validator.isEmail('abc@example.com'));
console.log(chalk.blue('hello world'));
console.log(chalk.red('hello world'));
console.log(chalk.green('hello world'));
// const add = require('./utils');

// const sum = add(4,-2);

// console.log(sum);