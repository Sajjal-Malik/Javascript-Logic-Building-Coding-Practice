function smallestOfThree(a, b, c){
    if(a < b && a < c) return a;
    else if(b < a && b < c) return b;
    else if(c < a && c < b) return c;
}

function smallestOfThree2(a, b, c) {
    let smallestNumber = a;
    if(b < smallestNumber){smallestNumber = b;}
    if(c < smallestNumber){smallestNumber = c;}

    return smallestNumber;

}

console.log(smallestOfThree(-1, 0, 5));
console.log(smallestOfThree(3, 6, 9));
console.log(smallestOfThree(8, 4, 0));
console.log();

console.log(smallestOfThree2(-1, 0, 5));
console.log(smallestOfThree2(3, 6, 9));
console.log(smallestOfThree2(8, 4, 0));