import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let tvSerie = await userInput .question('wat is jouw TV-Serie?');
let plaats 

switch(tvSerie){
    case 'The simpsons':
        plaats = 'Springfield';
        break;
    case 'Batman':
        plaats = 'Gotham';
        break;
    case 'Sponge Bob':
        plaats ='Bikini bottom';
        break;
    default:
        console.log ('Sorry, ik weet niet waar '+ tvSerie+ ' zich afspeelt.'); 
}
console.log (tvSerie+' vindt plaats in '+ plaats);
process.exit();


