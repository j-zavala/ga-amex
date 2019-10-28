---
title: Testing With Jest
type: Lab
duration: "1:30"
creator:
    name: Rachel Moskowitz (adapted from NYC-SEI)
---

# Jest Testing Lab

### First, set up an `npm` package with Jest:
```
npm init
<press enter through all options>

npm install --save-dev jest
```

### Add Jest to test scripts:
```javascript
// in package.json

{
  "name": "lab01",
  "version": "1.0.0",
  "description": "### First, set up an npm package with Jest ``` npm init npm install --save-dev jest ```",
  "main": "index.js",
  "scripts": {
    "test": "jest"
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "jest": "^21.2.1"
  }
}
```

- Verify that `npm test` runs successfully and outputs:

```shell

npm test

> lab01@1.0.0 test /Users/wagnerizing/ga_stuff/test_lecture/lab01
> jest

No tests found
In /Users/wagnerizing/ga_stuff/test_lecture/lab01
  2 files checked.
  testMatch: **/__tests__/**/*.js?(x),**/?(*.)(spec|test).js?(x) - 0 matches
  testPathIgnorePatterns: /node_modules/ - 2 matches
Pattern:  - 0 matches
```

### Create test and `src` files:

```bash
touch mult.js mult.test.js
```

### Create a function in `mult` that multiplies two numbers together:

```javascript
// in mult.js

function mult(a, b) {
  return a * b;
}

module.exports = mult;
```

### Write a test with two numbers for `mult`:

```js
// in mult.test.js

const mult = require('./mult');

test('it should multiply 2 and 3', () => {
  expect(mult(2, 3)).toBe(6);
});
```

### Don't forget to run the test:

Run `npm test` and watch the test pass or fail. Try altering the source file to either break or fix the test.

### Add more tests:

In the same file, below the first test, try adding at least three more tests with different numbers (e.g., `5` and `20`).

```js
test('it should multiply 2 and 3', () => {
  expect(mult(5, 20)).toBe(100);
});
```

## Now, try doing the same for a new function:

- Create two new files: `pow.js` and `pow.test.js`.

- Write a function called `pow()` that takes two numbers and raises the first number to the power of the second. For example, `pow(3, 2)` would return the square of `3`: `9`. `pow(4, 3)` would return the cube of `4`: `64`.

- In `pow.test.js`, require `pow` and write at least three tests for `pow` in the same fashion as above.

## OK! Now let's play with some arrays:

- Create two new files: `arrayItem.js` and `arrayItem.test.js`.

- Write a function called `removeLastItem()` that takes an array and removes the last item. For example, `removeLastItem(['chicken', 'potatoes', 'oj', 'milk'])` would return `['chicken', 'potatoes', 'oj']`.

- In `removeLastItem.test.js`, require `removeLastItem()` and write a test for `removeLastItem()` in the same fashion as above.

## One more: A string!

- Create two files: `reverse.js` and `reverse.test.js`.

- Write a function that takes in a string and returns it reversed.

- In `reverse.test.js`, require `reverse()` and write a test for `reverse()` in the same fashion as above.

## Bonus: Edge cases

- For all the files, write tests that pass invalid input (e.g., `"1"`, `"a string"`, or `null`) depending on the function.

- Run `npm test` and watch the test fail.

- Add some code to the relevant function to handle the edge case.
