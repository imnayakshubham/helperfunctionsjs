# Helper Functions
---
An exhaustive library of programmer-friendly utility functions crafted to simplify your daily tasks and enhance productivity.

## Installation
```bash
npm install helperfunctions
# or
yarn add helperfunctions
```

In this demo, we will illustrate the usage of the `isValidNumber`, `isInRange`, and `generateRandomNumbersInRange` functions provided by the "helperfunctions" package.

## Importing the Package
```javascript
import {
  isValidNumber,
  isInRange,
  generateRandomNumbersInRange,
} from 'helperfunctions';
```

Here's how you can use it in your project:

### Example 1: isValidNumber
The `isValidNumber` function checks if a value is a valid number, and we'll demonstrate how to use it:
```javascript
const value = '42';
if (isValidNumber(value)) {
  console.log(`${value} is a valid number.`);
} else {
  console.log(`${value} is not a valid number.`);
}
```

### Example 2: isInRange
The `isInRange` function checks if a number falls within a specified range. Here's an example:

```javascript
const range = [10, 50];
const userInput = 25;
if (isInRange(range, userInput)) {
  console.log(`${userInput} is within the range [${range[0]}, ${range[1]}].`);
} else {
  console.log(`${userInput} is outside the range [${range[0]}, ${range[1]}].`);
}
```

### Example 3: generateRandomNumbersInRange
The `generateRandomNumbersInRange` function generates random numbers within a specified range. Here's how you can use it:
```javascript
const range = [1, 100];
const count = 5;
const randomNumbers = generateRandomNumbersInRange(range, count);
console.log(`Generated random numbers within the range [${range[0]}, ${range[1]}]:`);
console.log(randomNumbers);
```