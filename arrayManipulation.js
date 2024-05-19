// arrayManipulation.js

function processArray(numbers) {
    return numbers.map(number => {
        if (number % 2 === 0) {
            return number ** 2; // Square even numbers
        } else {
            return number * 3; // Triple odd numbers
        }
    });
}

// Export the function for use in other files
module.exports = { processArray };
// arrayManipulation.js

function processArray(numbers) {
    return numbers.map(number => {
        if (number % 2 === 0) {
            return number ** 2; // Square even numbers
        } else {
            return number * 3; // Triple odd numbers
        }
    });
}

function formatArrayStrings(strings, numbers) {
    return strings.map((str, index) => {
        if (numbers[index] % 2 === 0) {
            return str.toUpperCase(); // Capitalize if the number is even
        } else {
            return str.toLowerCase(); // Convert to lowercase if the number is odd
        }
    });
}

// Export the functions for use in other files
module.exports = { processArray, formatArrayStrings };
