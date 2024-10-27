function reverseAString(inputString){

    if (typeof inputString !== 'string'){
        throw new Error("Only strings are supported");
    }

    let result = "";
    for(let i = inputString.length - 1; i >= 0; i--){
        result += inputString[i];
    }
    return result;
}


function reverseAString2(inputString){
    const splittedInput = inputString.split('');  // change string to array
    const reversedArray = splittedInput.reverse();
    const result = reversedArray.join('');
    return result;
}

console.log(reverseAString("Malik"));
console.log(reverseAString2("Malik"));