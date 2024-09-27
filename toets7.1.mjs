import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let gebruikerTaal = await userInput .question('Welke taal spreek je? ');

if (gebruikerTaal == 'NL'){
    console.log ('Goeiedag! ');
}else if (gebruikerTaal == 'FR'){
    console.log ('Bonjour! ');
}else if (gebruikerTaal == 'EN'){
    console.log ('Hallo! ');
}else {
    console.log ('!taal is niet geldig!');
}
process.exit();
