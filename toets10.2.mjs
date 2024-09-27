import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});


let num1 = parseFloat(await userInput .question('jouw eerste nummer:'));
let num2 = parseFloat(await userInput .question('jouw tweede nummer:'));

if (num1==0 || num2==0){
    console.log('Eén van jouw getallen is nul.');
}else if (num1> 0 && num2> 0){
    console.log('Beide getallen zijn positief.');
}else if(num1> 0 && num2< 0){
    console.log('Het eerste getal is positief en het tweede getal is negatief.');
}else if (num1< 0 && num2> 0){
    console.log('Eerste getal is negatief en de tweede getal is positief.');
}else if(num1< 0 && num2< 0){
  console.log('Beide getallen zijn negatief.');   
}else {
    console.log('Er missen cijfers!');
}
process.exit();