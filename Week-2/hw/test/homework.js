var lab = require('../your-code');
var expect = require('chai').expect;
require('mocha-sinon');
const sinon = require('sinon')

describe('homework iteratin lab', function() {

  beforeEach(function() {
    this.sinon.stub(console, 'log');
  });

  it('printEachElem function for Dr. Seus array prints each item', function() {
    lab.printEachElem();
    expect(console.log.callCount).to.equal(7);
    expect( console.log.calledWith("Cat in the Hat") ).to.be.true;
    expect( console.log.calledWith("Sam I am") ).to.be.true;
    expect( console.log.calledWith("Grinch") ).to.be.true;
    expect( console.log.calledWith("Thing One") ).to.be.true;
    expect( console.log.calledWith("Thing Two") ).to.be.true;
    expect( console.log.calledWith("Cindy Loo Who") ).to.be.true;
    expect( console.log.calledWith("JoJo McDodd") ).to.be.true;
  });
  it('printOdd function for Dr. Seus array prints odd index items', function() {
    lab.printOdd();
    expect(console.log.callCount).to.equal(4);
    expect( console.log.calledWith("Cat in the Hat") ).to.be.true;
    expect( console.log.calledWith("Grinch") ).to.be.true;
    expect( console.log.calledWith("Thing Two") ).to.be.true;
    expect( console.log.calledWith("JoJo McDodd") ).to.be.true;
  });
  it('Print out the odd-numbered index items in the array', () => {
    lab.printOdd();
    expect(console.log.callCount).to.equal(4);
    expect( console.log.calledWith("Cat in the Hat") ).to.be.true;
    expect( console.log.calledWith("Grinch") ).to.be.true;
    expect( console.log.calledWith("Thing Two") ).to.be.true;
    expect( console.log.calledWith("JoJo McDodd") ).to.be.true;
  })
  it('Print the index number and item of every odd-numbered item', () => {
    lab.printOddElemAndIndex();
    expect(console.log.callCount).to.equal(8);
    expect( console.log.calledWith(0) ).to.be.true;
    expect( console.log.calledWith("Cat in the Hat") ).to.be.true;
    expect( console.log.calledWith(2) ).to.be.true;
    expect( console.log.calledWith("Grinch") ).to.be.true;
    expect( console.log.calledWith(4) ).to.be.true;
    expect( console.log.calledWith("Thing Two") ).to.be.true;
    expect( console.log.calledWith(6) ).to.be.true;
    expect( console.log.calledWith("JoJo McDodd") ).to.be.true;
  })
  it('Print out the even-numbered items items in the array using a conditional statement', () => {
    lab.printOddElemAndIndex();
    expect(console.log.callCount).to.equal(8);
    expect( console.log.calledWith(0) ).to.be.true;
    expect( console.log.calledWith("Cat in the Hat") ).to.be.true;
    expect( console.log.calledWith(2) ).to.be.true;
    expect( console.log.calledWith("Grinch") ).to.be.true;
    expect( console.log.calledWith(4) ).to.be.true;
    expect( console.log.calledWith("Thing Two") ).to.be.true;
    expect( console.log.calledWith(6) ).to.be.true;
    expect( console.log.calledWith("JoJo McDodd") ).to.be.true;
  })
  // also test to see if it has a condition
  it('Print out the even-numbered items items in the array using a conditional statement', () => {
    lab.printEvenConditional();
    expect(console.log.callCount).to.equal(4);
    expect( console.log.calledWith("Bugs Bunny") ).to.be.true;
    expect( console.log.calledWith("Tweety") ).to.be.true;
    expect( console.log.calledWith("Elmer Fudd") ).to.be.true;
    expect( console.log.calledWith("Taz") ).to.be.true;
  })
  it('Print both the items in the array that is an even index and the item with the index of 3', () => {
    lab.printEvenAndIndex3Elems();
    expect(console.log.callCount).to.equal(5);
    expect( console.log.calledWith("Bugs Bunny") ).to.be.true;
    expect( console.log.calledWith("Tweety") ).to.be.true;
    expect( console.log.calledWith("Sylvester") ).to.be.true;
    expect( console.log.calledWith("Elmer Fudd") ).to.be.true;
    expect( console.log.calledWith("Taz") ).to.be.true;
  })
  it('Print the odd numbered indexed items in the Looney Toons array', () => {
    lab.printOddConditional();
    expect(console.log.callCount).to.equal(3);
    expect( console.log.calledWith("Daffy Duck") ).to.be.true;
    expect( console.log.calledWith("Sylvester") ).to.be.true;
    expect( console.log.calledWith("Porky Pig") ).to.be.true;
  })
});
