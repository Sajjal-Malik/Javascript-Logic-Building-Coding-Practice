function generatePyramid(inputNumber) {
    // validate the input number is a positive integer
    for (let i = 1; i <= inputNumber; i++) {

        let lineContent = "";

        for (let space = 1; space <= inputNumber - i; space++) {
            lineContent = lineContent + " ";
        }

        for (let count = 1; count <= i; count++) {
            lineContent = lineContent + count;
        }

        for (let reverseCount = i - 1; reverseCount >= 1; reverseCount--) {
            lineContent = lineContent + reverseCount;
        }

        console.log(lineContent);
    }

    // console.log(typeof lineContent);
}

generatePyramid(10);