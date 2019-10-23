// 1. Find ALL people with a last name of `'Kenobi'`:
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
const kenobis = people.filter(({ lastName }) => lastName === 'Kenobi');
console.log(kenobis);

// 2. Find `'Jill Kenobi'` in our array of people:
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
const jillKenobi = morePeople.find(({ firstName, lastName }) => firstName === 'Jill' && lastName === "Kenobi");
console.log(jillKenobi);

// 3. Find ALL customers with an outstanding balance on their account:
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
const customersWhoOweMeMoney = customers.filter(function (customers) {
    return customers.balance > 0;
});
console.log(customersWhoOweMeMoney);

// 4. Find the book with an ID of `'1234ABCD'`:
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
const myFavoriteBook = books.find(({ id }) => id === '1234ABCD');
console.log(myFavoriteBook);
// 5. Find ALL books written after 2010:
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
const recentBooks = moreBooks.filter(moreBooks => moreBooks.year > 2010);
console.log(recentBooks);

//.map() Practice

// 1. Uppercase each string in this array in a new array called uppercaseLyrics:
const lyrics = ['never', 'gonna', 'give', 'you', 'up'];

const uppercaseLyrics = lyrics.map((word) => word.toUpperCase());
console.log(uppercaseLyrics);

// 2. Return an array of names for each of these person objects:

const individuals = [
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

const names = individuals.map((obj) => {
    let newObj = {};
    newObj[obj.name] = obj.value;
    return newObj;
});
console.log(names);

// 3. Return the amount of tax to charge for each of these products, assuming a tax rate of 7%:
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

const tax = products.map(product => {
    return (product.price * .07).toFixed(2);
});
console.log(tax);

// 4. If any string in this array is longer than 20 characters, return a 20-character string ending with '...' (e.g., 'Go to the Guggenheim Museum' becomes 'Go to the Guggenh...':

const trip = ["Visit my parents", "Eat at Murray's", "Washington Square Park", "Take the Staten Island Ferry", "Whitney Museum"];

const shortenedTrip = trip.map(phrase => {
    return phrase.length > 20 ? `${phrase.substring(0, 20)}...` : { phrase };
});
console.log(shortenedTrip);

// 5. For an array of numbers, check if any of the numbers are the character codes for lowercase vowels. If they are, change the array value to a string of that vowel. This might help:

const possiblyVowels = [118, 117, 120, 121, 117, 98, 122, 97, 120, 106, 104, 116, 113, 114, 113, 120, 106];

const definitelyVowels = possiblyVowels.map(num => {
    return (String.fromCharCode(num) === "a" || String.fromCharCode(num) === "e" || String.fromCharCode(num) === "i" || String.fromCharCode(num) === "o" || String.fromCharCode(num) === "u") ? String.fromCharCode(num) : num;
})

console.log(definitelyVowels);

