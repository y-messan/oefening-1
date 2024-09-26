import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let C = parseFloat( await userInput .question('wat is de temperatuur in Celsius? '));
let F = ((C * 9 / 5) + 32);
console.log ('Het is '+F+ ' graden Fahrenheit.');
process.exit();