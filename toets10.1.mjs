import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let dag = await userInput .question('Welke dag zijn we?');

switch(dag){
    case 'zaterdag':
    case 'zondag':
    console.log ('Het is weekend.');
       break;
    case 'maandag':
    case 'dinsdag':
    case 'woensdag':
    case 'donderdag':
    case 'vrijdag':
        console.log ('We zijn een weekdag.');
        break;

    default:
        console.log ('Dit is geen dag!');
    }
        process.exit();

