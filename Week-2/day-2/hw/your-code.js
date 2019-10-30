const drSeuss = [
  "Cat in the Hat",
  "Sam I am",
  "Grinch",
  "Thing One",
  "Thing Two",
  "Cindy Loo Who",
  "JoJo McDodd"
];

// console.log() all of the elements in the array.
// for (let i = 0; i < drSeuss.length; i++) {
//   console.log(drSeuss[i]);
// }
// console.log() the odd-numbered index items in the array.
// for (let i = 1; i < drSeuss.length; i += 2) {
//   console.log(drSeuss[i]);
// }
// console.log() the index number and the item of every odd-numbered index item (on separate lines).
// for (let i = 1; i < drSeuss.length; i += 2) {
//   console.log(`Index ${i} is ${drSeuss[i]}`);
// }

const looneyTunesChars = [
  "Bugs Bunny",
  "Daffy Duck",
  "Tweety",
  "Sylvester",
  "Elmer Fudd",
  "Porky Pig",
  "Taz"
];

// console.log() the even-numbered items in the array using a conditional statement.
// for (let i = 0; i < looneyTunesChars.length; i += 2) {
//   console.log(looneyTunesChars[i]);
// }
// console.log() the even-numbered items in the array and the item with the index of 3 using a conditional statement.
let i = 0;
while (i < looneyTunesChars.length) {
  if (i % 2 == 0) {
    console.log(`Index ${i} is ${looneyTunesChars[i]}`);
  } else if (i == 3) {
    console.log(`Index ${i} is ${looneyTunesChars[i]}`);
  }
  i++;
}

// console.log() the odd-numbered index items in the array using a conditional statement.
// for (let i = 1; i < looneyTunesChars.length; i += 2) {
//   console.log(`Index ${i} is ${looneyTunesChars[i]}`);
// }
