const justDoIt = function(str) {
  console.log(`${str}, JUST DO IT!`);
};
//example usage
justDoIt("Zack");
// => "Zack, JUST DO IT!";
/* First question -
 * Check to see length of a string, and if it is longer than 10 characters
 * @param String : str
 * @return String
 **/
const bigOrSmallString = function(str) {
  if (str.length > 10) return "This word is loooooong!";
  else return "This word is short 😬";
};
// bigOrSmallString("test")
// bigOrSmallString("this is a test")
/* Second question - Check the length of a string 
to see if it is even or odd.
* @param String : str
* @return String
**/
const oddOrEvenString = function(str) {
  if (str.length % 2 == 1) {
    return "The word's length is odd...";
  }
  return "This string length is TOTALLY even!";
  // return str.length%2==1?"This is odd":"This is even";
  // let answer = conditional ? <true> : <false>;
};
// oddOrEvenString("odd")
// oddOrEvenString("odd!")
const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 6, 2, 3, 5];
/* Third question - Return the median of the array of numbers
 * @param Array of numerics
 * @return Integer: value of number, -1 if array is empty or does not exist
 **/
const medianOfArray = arr => {
  const sortedArr = arr.sort((a, b) => a - b);
  if (arr.length % 2 === 0) {
    return 0.5 * (arr[arr.length / 2 - 1] + arr[arr.length / 2]);
  } else {
    return arr[(arr.length - 1) / 2];
  }
};
// medianOfArray(myArray);
// medianOfArray([1]);
// medianOfArray([]);
/* Fourth question - Return the sum of the array of numbers
 * @param Array of numerics
 * @return Integer: sum of the numbers, 0 if array is empty or does not exist
 **/
const sumArray = function(arr) {
  if (arr == undefined || arr.length < 1) return 0;
  let sum = 0;
  for (let i in arr) {
    sum += arr[i];
  }
  return sum;
};
// sumArray(myArray);
// sumArray([1]);
// sumArray([]);
/* Fifth question - Return the number 
of vowels in the string
* @param String: str
* @return Integer: number of vowels, -1 if undefined
**/
const vowels = function(str) {
  if (str == undefined) return -1;
  let vowels = 0;
  for (let ch of str) {
    if (ch == "a" || ch == "e" || ch == "i" || ch == "o" || ch == "u") {
      vowels++;
    }
  }
  return vowels;
};
// vowels("dea")
// vowels("")
// vowels("Javascript is the best!!!")
/* Sixth question - Return the initials of 
every word in a person's name
* @param String : str
* @return String: Initials of person's name
**/
const initials = function(str) {
  if (str == undefined) return "ERR: Enter a valid input";
  let nameArray = str.split(" ");
  let result = "";
  for (let i = 0; i < nameArray.length; i++) {
    let firstChar = nameArray[i].charAt(0);
    result += firstChar.toUpperCase();
  }
};
// John-Smith - > J
// initials("Javascript sucks");
// initials("Barack Obama");
// initials("Hungry Hippo");
/*****************************BONUS QUESTIONS********************************/
/* First Bonus question - Prompt user for the day, alerts user with a message.
 * @param String : day - Day of the week
 * @return String: Message is displayed via browser alert.
 **/
const dayOfTheWeek = function(day = "monday") {
  switch (day.toLowerCase()) {
    case "monday":
      alert("Energize!");
      break;
    case "tuesday":
      alert("Just getting started!");
      break;
    case "wednesday":
      alert("Hump hump!");
      break;
    case "thursday":
      alert("Almost there!");
      break;
    case "friday":
      alert("Weeeeeeee!");
      break;
    case "saturday":
      alert("Weeeeeeee!");
      break;
    case "sunday":
      alert("Where did my weekend go?");
      break;
    default:
      alert("Huh? Sorry, didn't get that...");
  }
};
/* Second Bonus question - Script that displays trains a user can take and
 * their destinations.
 *
 *
 **/
const MassTransitAwfulness = function() {
  let input = prompt(
    "You see an (L) train, (N) train, the (S)ix train. Which do you take?"
  );
  switch (input.toUpperCase()) {
    case "L":
      alert(
        "You take the L train. Upcoming stops:\n8th Ave\n6th Ave\nUnion Square\n3rd Ave\n1st Ave\nBedford Ave"
      );
      break;
    case "N":
      alert(
        "You take the N train. Upcoming stops:\nTimes Square\nHerald Square\n28th St\n23rd St - DAPS Nexus\nUnion Square\n8th St"
      );
      break;
    case "S":
      alert(
        "You take the S train. Upcoming stops:\nGrand Central\n33rd St\n28th St\n23rd St\nUnion Square\nAstor Place"
      );
      break;
    default:
      alert(
        `You take the ${input} train and it breaks down. You are late for work, the coffee you were drinking spills onto your clothes, and you find out you were adopted.`
      );
  }
  alert("Thank you!");
};
/* Third Bonus question - Function to check if an object in an array is truthy or falsey
 * @param Array of Object
 * @return Array: Returns an array of Booleans - True if truthy, false is falsey.
 */
const truthyFalsey = function(arr) {
  let resultArray = [];
  for (let object of arr) {
    if (object) resultArray.push(true);
    else resultArray.push(false);
  }
  return resultArray;
};
// truthyFalsey([1,0, [], "", undefined, NaN, false, "truthy!", null, "not truthy!"]);
// Note: There are 6 types of falsey-ness. https://j11y.io/javascript/truthy-falsey/
/* Fourth Bonus question - Function to check 2 sequential x's in a string.
 * @param String
 * @return Integer: Number of the double x's in the string.
 */
const countXx = function(str) {
  if (str.length < 1) return -1;
  let count = 0;
  for (let i = 0; i < str.length - 1; i++) {
    if (str.charAt(i) == "x" && str.charAt(i + 1) == "x") {
      count++;
    }
  }
  return count;
};
// countXx("xx")
// countXx("xxaxbxcxx")
// Bonus-bonus: how would you make this case INsensitive?
