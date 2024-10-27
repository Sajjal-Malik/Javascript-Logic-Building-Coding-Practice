function calculateFactorial(inputNumber){
    if(inputNumber <= 0){
        throw new Error("inputNumber should be greater than zero");
    }

    // if(typeof inputNumber === "string"){
    //     throw new Error("inputNumber must be a string");
    // }

    if(inputNumber === 0 || inputNumber === 1){
        return 1;
    }

    let fact = 1;
    for(let i = 1; i <= inputNumber; i++){
        fact = fact * i;
    }
    return fact;
}


function calculateFactorialUsingRecursion(inputNumber){
    if(inputNumber <= 0){
        throw new Error("inputNumber should be greater than zero");
    }

    // if(typeof inputNumber === "string"){
    //     throw new Error("inputNumber must be a string");
    // }

    if(inputNumber === 0 || inputNumber === 1){
        return 1;
    }

    return inputNumber * calculateFactorialUsingRecursion(inputNumber - 1);
}

console.log(calculateFactorial(5));
// console.log(calculateFactorial(0));
// console.log(calculateFactorial("h"));

console.log(calculateFactorialUsingRecursion(5));
// console.log(calculateFactorialUsingRecursion(0));
// console.log(calculateFactorialUsingRecursion('S'));