//function to generate array
function generateRandomArray() {
    let arr = [];
    for (let i = 0; i < 10; i++) {
        arr.push(Math.floor(Math.random() * 900) + 100); // Generates numbers between 100 and 999
    }
    return arr;
}
//function to find largest and smallest
function findSecondLargestAndSmallest(arr) {

    //sort array
    arr.sort((a, b) => a - b);

    let secondSmallest = arr[1];
    let secondLargest = arr[arr.length - 2];

    return { secondLargest, secondSmallest };
}

let numbers = generateRandomArray();
let result = findSecondLargestAndSmallest(numbers);
console.log(result);
