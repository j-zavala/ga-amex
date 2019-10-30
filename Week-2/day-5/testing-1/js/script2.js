mocha.setup("bdd"); // import mocha.setup method
const assert = chai.assert; // call assert from chai
const expect = chai.expect; // call expect from chai
// describe function to run the test suite
describe("My first Test Suite", function() {
  // first function to test
  it("introduces a test suite", function() {
    // we have true as our default value, and we expect true as
    // the input so the test can pass.
    expect(false).to.equal(true);
  });
  // second function to test
  it("introduces a fail suite", function() {
    // we have true as our default value, and we given false as
    // the input so the test can fail.
    expect(true).to.equal(false);
  });
});
// finally call run method so, we can run the test
mocha.run();
