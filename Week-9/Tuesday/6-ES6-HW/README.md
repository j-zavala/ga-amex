---
title: ES6 Review
type: Lab
duration: "1:00"
creator:
    name: Melissa Arliss
---

# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) ES6 Review Lab

In this lab, you'll practice writing functions that incorporate some special ES6 methods:
- [`.find()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find)
- [`.filter()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
- [`.map()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)

These methods are used to work with arrays, and we'll use them when we get into React. 

Need somewhere to start? Review the docs for each method that are linked above. Remember to use good ES6 syntax for your functions and variables!

-----

## `.find()` and `.filter()` Practice

1. Find ALL people with a last name of `'Kenobi'`:

```javascript
    const people = [
        {
            firstName: 'Ben',
            lastName: 'Kenobi'
        },
        {
            firstName: 'Tim',
            lastName: 'Cook'
        },
        {
            firstName: 'Etta',
            lastName: 'James'
        },
        {
            firstName: 'Jill',
            lastName: 'Kenobi'
        }
    ];
	
    const kenobis = //
```
	
2. Find `'Jill Kenobi'` in our array of people:

```javascript
    const morePeople = [
        {
            firstName: 'Ben',
            lastName: 'Kenobi'
        },
        {
            firstName: 'Tim',
            lastName: 'Cook'
        },
        {
            firstName: 'Etta',
            lastName: 'James'
        },
        {
            firstName: 'Jill',
            lastName: 'Kenobi'
        }
    ];
	
    const jillKenobi = //
```
	
3. Find ALL customers with an outstanding balance on their account:

```javascript
    const customers = [
        {
            name: 'Ben Kenobi',
            balance: 0.00
        },
        {
            name: 'Tim Cook',
            balance: 1221344.99
        },
        {
            name: 'Etta James',
            balance: 0.00
        },
        {
            name: 'Jill Kenobi',
            balance: 42.77
        }
    ];
 
    const customersWhoOweMeMoney = //
```
    
4. Find the book with an ID of `'1234ABCD'`:

```javascript
    const books = [
        {
            id: 'BADSFJ5332',
            title: 'Test Driven Development: By Example'
        },
        {
            id: '1234566',
            title: 'The Pragmatic Programmer'
        },
        {
            id: 'LASKJDG93893',
            title: 'Database Design for Mere Mortals'
        },
        {
            id: '1234ABCD',
            title: 'The Clean Coder'
        }
    ];

    const myFavoriteBook = //
```

5. Find ALL books written after 2010:

```javascript
    const moreBooks = [
        {
            id: 'BADSFJ5332',
            title: 'Test Driven Development: By Example',
            year: 2002
        },
        {
            id: '1234566',
            title: 'The Pragmatic Programmer',
            year: 1999
        },
        {
            id: 'LASKJDG93893',
            title: 'Database Design for Mere Mortals',
            year: 2013
        },
        {
            id: '1234ABCD',
            title: 'The Clean Coder',
            year: 2011
        }
    ];

    const recentBooks = //
```

-----

## `.map()` Practice    

1.  Uppercase each string in this array in a new array called `uppercaseLyrics`:
    
```javascript
    const lyrics = ['never', 'gonna', 'give', 'you', 'up'];

const uppercaseLyrics = //
```
    
2.  Return an array of names for each of these person objects:

```javascript
    const people = [
        {
            name: 'George Michael',
            age: 14,
            title: 'Mr. Manager'
        },
        {
            name: 'T-Bone',
            age: 34,
            title: 'Arsonist'
        },
        {
            name: 'George Oscar',
            age: 32,
            title: 'Illusionist'
        }
    ];

    const names = //
```
    
3.  Return the amount of tax to charge for each of these products, assuming a tax rate of 7%:
    
```javascript
    const products = [
        {
            name: 'iPad',
            price: 549.99
        },
        {
            name: 'iPhone',
            price: 799.99
        },
        {
            name: 'iPod',
            price: 2.99
        }
    ];

    const tax = //
``` 
    
4. If any string in this array is longer than 20 characters, return a 20-character string ending with `'...'` (e.g., `'Go to the Guggenheim Museum'` becomes `'Go to the Guggenh...'`: 
    
```javascript
    const trip = ["Visit my parents", "Eat at Murray's", "Washington Square Park", "Take the Staten Island Ferry", "Whitney Museum"];
    
    const shortenedTrip = //

```
    
5. For an array of numbers, check if any of the numbers are the character codes for lowercase vowels. If they are, change the array value to a string of that vowel. [This](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode) might help:

```javascript
    const possiblyVowels = [118,117,120,121,117,98,122,97,120,106,104,116,113,114,113,120,106];
    
    const definitelyVowels = //
```

    
