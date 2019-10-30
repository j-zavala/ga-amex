mocha.setup("bdd"); // import mocha.setup method
const assert = chai.assert; // call assert from chai
const expect = chai.expect; // call expect from chai
/**
 *
 * @param phrase
 * @returns {string}
 */
function pigLatin(phrase) {
  const pigLatinWords = [];
  phrase.split(" ").forEach(word => {
    const firstLetter = word.substring(0, 1);
    word = word.substr(1);
    pigLatinWords.push(`${word}-${firstLetter}ay`);
  });
  return pigLatinWords.join(" ");
}
console.log(pigLatin("hello world"));
// describe function to run the test suite
describe("My first Test Suite", function() {
  // input hello world & output should be ello-hay orld-way
  it("Convert hello world to ello-hay orld-way", function() {
    expect(pigLatin("hello world")).to.equal("ello-hay orld-way");
  });
});
// finally call run method so, we can run the test
mocha.run();
