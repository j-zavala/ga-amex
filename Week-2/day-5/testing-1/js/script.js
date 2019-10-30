mocha.setup("bdd"); //import mocha.setup method
const assert = chai.assert; //call assert from chai
const expect = chai.expect; //call expect from chai
/* ============ BEFORE YOU GET STARTED ============ */
/* here is a very short function that pops up an alert window that says 'Hello!' */
function hello() {
  alert("Hello!");
}
/* Here's the steps to test it:
- Open index.html in chrome.
- Type the keyboard shortcut `cmd + option + j`. Dev tools should open to the console.
- You should see the message saying 'starter.js is connected!'
- Underneath that, next to the blue arrow, type `hello()` to call the `hello` function
- You should get an alert window that says HELLO!
*/
/* ================= AS YOU COMPLETE EACH STEP ============= */
/* After each step, perform the following commands in the terminal:
1. git add .
2. git commit -m "add completed part PART-NUMBER-HERE"
This will help us track your progress and it will give you practice writing good commit messages!!
*/
/*REMINDER - ANY QUESTION THAT DOES NOT SPECIFICALLY TELL YOU TO ALERT OR PROMPT SHOULD BE LOGGED TO THE CONSOLE*/
/* ++++====+++==++++==+++++======++++===++++++=====+++==++++++++++===== */
/* ======================= WRITE YOUR ANSWERS HERE!!!!! =============== */
/* ++++====+++==++++==+++++======++++===++++++=====+++==++++++++++===== */
// Part -1
const sumIt = (num1, num2) => {
  return num1 + num2;
};

// PART 0: Just DO it!!
const justDoIt = name => {
  console.log(`${name}, JUST DO IT!`);
};
// PART 1: Big or Small String?
const bigOrSmallString = word => {
  if (word.length > 10) {
    console.log("This word is looooooong!");
  } else {
    console.log("This word is short 😬");
  }
};
// PART 2: Odd or Even String Length?
const oddOrEvenString = str => {
  let length = str.length;
  if (length % 2 === 0) {
    console.log("This string's length is odd..");
  } else {
    console.log("This string length is TOTALLY even!");
  }
};
// PART 3: Median
const medianOfArray = arr => {
  arr.sort((a, b) => a - b);
  console.log(arr);
  if (arr.length === 0) {
    console.log("The Array is empty!");
  } else if (arr.length % 2 === 1) {
    return arr[Math.floor(arr.length / 2)];
  } else {
    let ans = 0;
    ans = arr[Math.floor(arr.length / 2)] + arr[Math.floor(arr.length / 2 - 1)];
    // console.log(ans);
    console.log(arr[Math.floor(arr.length / 2)]);
    console.log(arr[Math.floor(arr.length / 2) - 1]);
    return ans / 2;
  }
};
console.log(medianOfArray([6, 5, 4, 3, 2, 1]));
// PART 4: Sum Array
const sumArray = arr => {
  let sum = 0;
  arr.forEach(number => {
    sum += number;
  });
  return sum;
};
// console.log(sumArray([5, 4, 3, 2, 1]));
// PART 5: Vowel Count
const vowelCount = str => {
  str = str.toLowercase();
  strArr = str.split("");
  let count = 0;
  strArr.forEach(letter => {
    if (
      letter === "a" ||
      letter === "e" ||
      letter === "i" ||
      letter === "o" ||
      letter === "u"
    ) {
      count++;
    }
  });
  return count;
};
// PART 6: Initials
const initials = name => {
  let nameInitials = "";
  nameArr = name.split(" ");
  nameArr.forEach(word => {
    nameInitials += word.split("")[0];
  });
  return nameInitials.toUpperCase();
};
// console.log(initials("Neil Patrick harris"));
// BONUS: Days of the week
const getDate = () => {
  // let date = prompt("What day of the week is it?");
  // date.toLowerCase();
  // date.charAt(0).toUpperCase();
  // console.log(date);
  // switch (date) {
  //     case "Monday":
  //         break;
  //     default:
  //         break;
  // }
};
getDate();
// BONUS: Let's take the Subway
// BONUS: Truth - y & False -y Checker
// BONUS: Double X Counter
/* connection checker console log */
console.log("starter.js is connected! Let's get to work! 💪");

describe("Function Suite Test", function() {
  //input hello world and output should be ello-hay orld-way
  it("Returns the Median of an even sized array", function() {
    expect(medianOfArray([6, 5, 4, 3, 2, 1])).to.equal(3.5);
  });
});

describe("sumIt", function() {
  it("Returns the sum of the two inputs", function() {
    expect(sumIt(2, 3)).to.equal(5);
  });
});

describe("sumIt", function() {
  it("Returns the sum of the two inputs", function() {
    assert.equal(5, 5);
  });
});

mocha.run();
