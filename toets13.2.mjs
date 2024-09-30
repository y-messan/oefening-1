import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let som = 0;

for(let getal; som <= 100; ){
   getal = parseFloat(await userInput.question('Geef een getal in: '));
   som += getal;
}
process.exit();