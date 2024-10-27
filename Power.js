function calculatePower(base, exponent) {
    // Check if base and exponent and positive integers
    let result = 1;
    for(let i = 1; i <= exponent; i++) {
        result = result * base;
        console.log(result);
    }

    return result;
}

function calculatePower2(base, exponent){
    let calculations = base ** exponent;
    return calculations;
}

console.log("calculatePower(2, 3)", calculatePower(2, 3));
console.log("calculatePower(5, 4)", calculatePower(5, 4));

console.log("calculatePower2(2, 3)", calculatePower2(2, 3));
console.log("calculatePower2(5, 4)", calculatePower2(5, 4));