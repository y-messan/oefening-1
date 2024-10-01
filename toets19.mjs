import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const userInput = readline.createInterface({ input, output });

function tvSerieLocatie (tvSerie){
    switch (tvSerie){
        case ('The Simpsons'):
            return 'Springfield';
            break; 
        case ('Batman'):
            return 'Gotham';
            break;
        case ('Spiderman'):
            return 'New York';
            break;
        default:
           return (console.log('Sorry, ik weet niet waar de serie '+ tvSerie+ ' zich afspeelt') 
       ( process.exit()));
}
}
let tvSerie = await userInput .question ('Wat is jouw tv serie? ');
let plaats = tvSerieLocatie(tvSerie);
console.log(plaats);
process.exit();