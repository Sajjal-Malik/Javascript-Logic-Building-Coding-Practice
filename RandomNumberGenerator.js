const maxNumber = 5;
console.log(Math.floor(Math.random() * maxNumber) + 1);  // random number between 0 and maxNumber

let i = 0;
while(i < 30){
    console.log(Math.floor(Math.random() * maxNumber) + 1);
    i++;   
}

const minimumNumber = 11;
const maximumNumber = 20;
console.log("Between ", minimumNumber, maximumNumber);
let j = 0;
while(j < 20){
    console.log(Math.floor(Math.random() * maximumNumber - minimumNumber) + minimumNumber);
    j++;   
}