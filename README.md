# Helper Functions
---
An exhaustive library of programmer-friendly utility functions crafted to simplify your daily tasks and enhance productivity.

## Installation
```bash
npm install helperfunctionsjs
# or
yarn add helperfunctionsjs
```

In this demo, we will illustrate the usage of the `isValidNumber`, `isInRange`, and `generateRandomNumbersInRange` functions provided by the "helperfunctionsjs" package.

## Importing the Package
```javascript
import {
  isValidNumber,
  isInRange,
  generateRandomNumbersInRange,
} from 'helperfunctionsjs';
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


### Example 3: findNthMax
The `findNthMax` function is a JavaScript utility function that allows you to find the nth maximum element in an array of numbers. It uses the QuickSelect algorithm to efficiently find the nth maximum element.

```javascript
const numbers: number[] = [1,2,3,4,5,6];
// Find the nth maximum element (optional, defaults to the largest element)
const nthMax: number | undefined = 3;
// Call the findNthMax function, which returns a number or a string in case of an error
const result: number | string = findNthMax(numbers, nthMax);
console.log(`The ${nthMax}th maximum element is: ${result}`);
```