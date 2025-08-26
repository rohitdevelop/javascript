// 1. Find the second largest number in an array
const numbers = [10, 5, 20, 8, 20, 15];
const sortedNumbers = numbers.slice().sort((a, b) => b - a);

let secondLargest = null;
for (let i = 1; i < sortedNumbers.length; i++) {
    if (sortedNumbers[i] < sortedNumbers[0]) {
        secondLargest = sortedNumbers[i];
        break;
    }
}

console.log("Second largest number:", secondLargest); 
 