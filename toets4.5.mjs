import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let som = 0;
som += parseFloat( await userInput .question('Getal 1: '));
som += parseFloat( await userInput .question('Getal 2: '));
som += parseFloat( await userInput .question('Getal 3: '));
som += parseFloat( await userInput .question('Getal 4: '));
let gemiddelde = som/4;
console.log ('Gemiddelde van jouw getallen is '+gemiddelde+ '.');
process.exit();