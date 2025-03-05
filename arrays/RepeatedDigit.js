//method to find repeated digit
function findRepeatedDigitNumbers(start, end){
    let repeatedNumbers = [];

    for (let i = start; i <= end; i++) {
        let tens = Math.floor(i / 10);
        let ones = i % 10;
        if (tens === ones) {
            repeatedNumbers.push(i);
        }
    }

    return repeatedNumbers;
}
let result = findRepeatedDigitNumbers(1, 99);
console.log(result);
