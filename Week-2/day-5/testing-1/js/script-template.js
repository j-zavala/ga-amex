// black-box testing
mocha.setup("bdd"); // import mocha.setup method
const assert = chai.assert; // call assert from chai
const expect = chai.expect; // call expect from chai
function foo() {}
// describe function to run the test suite
describe("Function to Test", function() {
  // input hello world and output should be ello-hay orld-way
  it("Convert hello world to ello-hay orld-way", function() {
    // Testing function calls here
  });
});
// finally call run method so, we can run the test
