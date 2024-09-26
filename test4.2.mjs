import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let koffieperdag = parseFloat( await userInput .question('Hoeveel koffie per dag drink je? ' ) );
console.log ('Je drinkt '+koffieperdag * 365+ ' koppen koffie per jaar.');
process.exit();