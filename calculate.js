// Function 1: Calculate the total of an array of numbers using a for loop
function calculateTotal(numbers) {
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }
    return total;
}

// Function 2: Determine if the total meets or exceeds the target (default 100)
function getStatus(total, target = 100) {
    if (total >= target) {
        return "Target Reached";
    } else {
        return "Target Not Reached";
    }
}

const numbers = [20, 35, 50];
const total = calculateTotal(numbers); // Returns 105
const status = getStatus(total);       // Returns "Target Reached"

console.log(total);  // 105
console.log(status); // "Target Reached"