const parantheses = {
    '{': '}',
    '(': ')',
    '[': ']'
}


console.log(parantheses['{']);
console.log(parantheses['(']);
console.log(parantheses['[']);

function isBalanced(inputString){
    // console.log(inputString);
    const paranthesisArray = [];
    for(let char of inputString){
        // console.log(char);
        if(parantheses[char]){
            paranthesisArray.push(char);
        }
        else if(char === ')' || char === ']' || char === '}'){
            const lastOpeningParanthesis = paranthesisArray.pop();
            if(parantheses[lastOpeningParanthesis] !== char) {
                return false;
            }
        }
    }
    // console.log(paranthesisArray);
    // console.log('paranthesisArray', paranthesisArray);
    return paranthesisArray.length === 0;

}

console.log('{[()]}', isBalanced('{[()]}'));

console.log('{[(])}', isBalanced('{[(])}'));

console.log('{[]', isBalanced('{[]'));