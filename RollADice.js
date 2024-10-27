const prompt = require('prompt-sync')();  // for user input

function rollADice(sidesInADice){
    return (Math.floor(Math.random() * sidesInADice) + 1);
}

function rollMultipleDices(numberOfDices, sidesInADice){
    let counter = 0;
    let result = [];
    while(counter < numberOfDices){
        const rollDiceResult = rollADice(sidesInADice);
        result.push(rollDiceResult);
        counter++;
    }

    return result;
    
}


const numberOfDices = prompt('Please define the number of Dices: ');
const sidesInADice = prompt("Please define the sides of the Dices: ");

console.log(rollMultipleDices(numberOfDices, sidesInADice));