function checkIfEvenOrOdd(number){
    const remainder = number % 2;

    if(remainder === 0){
        return "Even";
    }
    else{
        return "Odd";
    }
}

function checkIfEvenOrOdd2(number){
    // Ternary operator
    return number % 2 === 0 ? "Even" : "Odd";

}

console.log(checkIfEvenOrOdd(13));
console.log(checkIfEvenOrOdd(14));
console.log(checkIfEvenOrOdd(19));
console.log();

console.log(checkIfEvenOrOdd2(19));
console.log(checkIfEvenOrOdd2(30));
console.log(checkIfEvenOrOdd2(41));
