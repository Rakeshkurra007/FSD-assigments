// Generate an array from start to end, increasing by step each time
function generateArray(start, end, step) {
    let arr = [];
    while (start <= end) {
        arr.push(start);
        start += step;
    }
    console.log(sumArray(arr)); // Print the sum of the array
    return arr;
}

// Add up all the numbers in an array
function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

console.log(generateArray(1, 10, 2)); // Example: [1, 3, 5, 7, 9]



console.log("-----------------------------------------------------------------------------------------------------------------------------------------")

// Reverse an array
function reverseArray(k) {
    let reversed = [];
    for (let i = k.length - 1; i >= 0; i--) {
        reversed.push(k[i]);
    }
    return reversed;
}

console.log("Reverse Array");
console.log(reverseArray([1, 2, 3])); // Example: [3, 2, 1]

// Reverse an array in place (modifies the original array)
function reverseArrayInPlace(arr) {
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
        let temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
        left++;
        right--;
    }
}

console.log("Reverse Array In Place");
let arr = [23,46,89];
reverseArrayInPlace(arr);
console.log(arr);




console.log("---------------------------------------------------------------------------------------------------------------------------")


// Convert an array to a list (a series of objects)
function arrayToList(arr) {
    let list = null;
    for (let i = arr.length - 1; i >= 0; i--) {
        list = { value: arr[i], rest: list };
    }
    return list;
}

// Convert a list back to an array
function listToArray(list) {
    let arr = [];
    while (list !== null) {
        arr.push(list.value);
        list = list.rest;
    }
    return arr;
}

// Add a value to the start of a list
function prepend(value, list) {
    return { value: value, rest: list };
}

// Get the nth item in a list (0-based index)
function nth(list, n) {
    for (let i = 0; i < n; i++) {
        if (list === null) return undefined;
        list = list.rest;
    }
    return list ? list.value : undefined;
}

console.log("Array to List");
console.log(arrayToList([10, 20])); // Example: { value: 10, rest: { value: 20, rest: null } }

console.log("List to Array");
console.log(listToArray(arrayToList([10, 20, 30]))); // Example: [10, 20, 30]

console.log("Prepend");
console.log(prepend(10, prepend(20, null))); // Example: { value: 10, rest: { value: 20, rest: null } }

console.log("Find nth element");
console.log(nth(arrayToList([10, 20, 30]), 1)); // Example: 20 (1st index)

