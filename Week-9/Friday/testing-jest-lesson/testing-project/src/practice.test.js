import { greet } from './practice.js';

it('greets the argument', () => {
    expect(greet('World')).toBe('Hello World!');
})

test('two plus two is four', () => {
    expect(2 + 2).toBe(4);
})

test('two plus two is not five', () => {
    expect(2 + 2).not.toBe(5);
})

test('JS objects are compared by reference', () => {
    const obj1 = { a: 1, b: 2 };
    const otherObj = { a: 1, b: 2 };

    const obj2 = obj1;

    expect(obj1).not.toBe(otherObj);
    expect(obj2).toBe(obj1);

    expect(obj1).toEqual(otherObj);
    expect(obj2).toEqual(otherObj);
})

test('undefined !== false', () => {
  let variable;

  expect(variable).toBeUndefined();
  expect(variable).toBe(undefined);
  expect(variable).not.toBeNull();
  expect(variable).not.toBe(null);
  expect(variable).not.toBeNaN();
  expect(variable).not.toBe(NaN);
  expect(variable).not.toBe(false);
  expect(variable).toBeFalsy();
  expect(variable).not.toBeTruthy();
})

test('JS decimals can have some frustrating precision issues', () => {
  expect(.2 + .2).toBe(.4);
  expect(.1 + .2).not.toBe(.3);
  expect(.1 + .2).toBeCloseTo(.3);
})
