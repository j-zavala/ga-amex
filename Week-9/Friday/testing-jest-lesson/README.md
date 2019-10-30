---
title: Testing React with Jest and Enzyme
type: lesson
duration: "3:00"
creator:
    name: Alex Wasson
---
****Insert duration****

# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) Testing React with Jest and Enzyme

## LEARNING OBJECTIVES

*After this lesson, you will be able to:*
- define unit testing, integration testing, and test driven development
- describe different types of testing libraries and recognize several prominent JavaScript testing libraries
- write unit tests for simple statements
- write unit tests for independent React components
- mock services and test functions and React components with dependencies
- generate and understand a coverage report

## LESSON GUIDE

| TIMING  | TYPE  | TOPIC  |
|:-:|---|---|
| 5 min  | Opening | What is testing? |
| 10 min | Lecture | Testing Review |
| 15 min | Lecture | Testing Libraries and their Functions |
| 45 min | Guided Practice | Testing Pure Functions with Jest |
| 30 min | Guided Practice | Testing Simple React Components with Enzyme |
| 45 min | Guided Practice | Mocking External Services |
| 20 min | Independent Practice | Test Driven Development |
| 5 min  | Conclusion  | Review / Recap |

## Opening (5 mins)

As software becomes more complex, it becomes increasingly difficult to be sure that any individual change does not break some small, distant part of the application. We can address this by writing automated tests that check our applications' functions and alert us if any results break or change unexpectedly.

In this lesson, we will learn about software testing, how it is done in JavaScript and React, how to be sure that our tests thoroughly cover our application, and about test driven development, a development paradigm in which tests are written before the application and are used to define and guide its functionality.

-----

## Let's Review: Automated Software Testing (10 min)

We've done a bunch of testing already in the course, but as you'll learn soon enough, there's no such thing as *too little* testing (or too little learning about testing). So let's review some key testing concepts - most of which should look pretty familiar.

**Automated testing** is the use of software tools to define and run tests on an application, to determine that the application is functioning as expected and to track changes in its operation over time. Most testing will be written with the assistance of an external library designed to assist and automate the testing process; these applications provide a framework for building tests, but just as each application is unique, so the series of tests run against them must also be unique.

Testing, at a high conceptual level, can be broken down into three levels:
- **Unit Testing**, which is testing individual functions within the code
- **Integration Testing**, which involves interactions between discrete functions and modules within the application
- **System Testing**, which checks that the entire application works as expected

Each level is important and supports the level above it. If a system test fails, it will not provide useful insight into how to fix the application unless the unit and integration tests supporting it are well written. If a system test is failing, tests under it should be failing, too. Testing software will provide tools to help you accomplish this, but will not do it for you: **writing good tests is up to the developer**. The 'automated' in automated testing only refers to how the tests are run.

### Unit Testing

Unit tests are the most basic level of automated tests. For thorough test coverage, each function within an application should have a test that describes and tests it. Though it is important to be thorough in testing, it is also important to write enough tests to achieve **coverage** (a measure of how much of an application's code is being tested) and then, assuming those tests are well written, stopping. It is possible to write a test to check the functionality of every JavaScript and React function, but it is not a good use of time: write tests to cover the functions written for your application and move on.

Unit tests should test their function in isolation: if a test fails, the developer should know exactly what section of code to look at. Because code is rarely written with fully isolated functions (one function might be called by another and depend on a third for its operation), testing libraries provde us with methods for mocking external dependencies, allowing a function to work fully independently. Although unit tests ideally test functions in isolation, in reality functions are often quite dependent on each other, to the extent that writing mocks to fully isolate each unit is impractical. Because of this, the line between unit testing and integration testing can occasionally be blurry.

> Check: Can someone throw out an example of what a unit test for a React app might test?

### Integration Testing

Integration tests are tests of processes composed of groups of functions and methods. They are the tests that prove the discrete subsystems in an application work together correctly, and should be primarily focused on the way different methods communicate with each other.

> Check: Can someone throw out an example of what integration testing for a React app might entail?

### System Testing

Though each level of testing is important, they are not the same. System tests are often best when they are black box tests: they treat the application as a black box that accomplishes certain tasks in ways that the tests do not understand and do not need to understand. A system test might check that after a user inputs valid login information and clicks Log In, the application navigates to the user's home page. The test is only interested in verifying that top level workflow, with no insight into the applications' internal functioning.

Because system testing does not require an awareness of the underlying code, system tests can be written by someone who is not part of the main development process of an application. Application developers certainly can write system tests, but, because the process is slightly decoupled from the development process, we won't cover it further in this lesson.

-----

## Testing Libraries and their Functions (15 mins)

Let's get further into the details of how unit and integration tests are actually written and run. First, let's look at a broad description of some of the most essential types of testing tools.

- **A test runner**: this will find your test files, run the tests in them, and then produce documentation on how many tests passed, how many failed, and, optionally, how much of your application code was accessed in the testing process (test coverage)
- **An assertion library**: this will provide the functional structure you use to write each test, allowing you to describe the test in a string and to write the actual logic that will determine if your test should pass or not
- **Mocking/spying tool**: this will allow you to redefine and fake dependencies, data, and external calls so that you can be sure that your test is only testing what you want it to, and not whether an external process is working correctly

Depending on the environment you're testing in (what language, with what libraries, for what purpose, etc.) you might select a different library for each tool or you might find a framework that provides everything. 

In this lesson, all of these functions will be provided by Jest, a general purpose testing suite written by the React team. Ironically, though Jest was written to work with React, it does not do a great job of simulating React components and their interactions: to accomplish that we'll also use Enzyme, a testing tool created specifically for that purpose.

### Test Runner

As our test runner, Jest will open a process in the terminal, seek out the tests in our application (they can be in any file ending with test.js), run them, provide us with the results, and then wait. Just like our npm server, it will rerun the tests whenever the application is updated.

### Assertion Library

As our assertion library, Jest will check each test file it has found for any calls to the function `test`. `test` is the official Jest testing function call. Since testing assertion functions are supposed to read easily, and since it is so common to run a series of test on one object, class, or component, `it` is also used as a synonym for test, and is usually used when writing tests about an object. We'll go into that more later.

Let's look at the general structure and then a specific example of an assertion in Jest.

#### A Sample Assertion

Like the testing function from most asssertion libraries, Jest's function takes two arguments:
1. the first will be a string describing the test that will be run
2. the second will be a callback function providing the testing logic and including at least one instance of Jest's other essential testing function, `assert`, which takes a value and then makes a comparison using one of its custom methods

Here's the general structure:

```js
it('a string representing the test should go here', () => {
	// we can use the space before our assert statement to construct data, call functions,
	// mock services, or whatever we need
	assert('a value or something that returns a value goes here and will be checked by').toBeDefined();
})
```

And here's an example of a function and its test:

```js
const add = (a, b) => a + b;

it('returns 4 when given 2 and 2', () => {
	assert(add(2,2)).toBe(4);
})
```

We'll go much deeper into `assert` and its various matching methods, including `toBe` and `toBeDefined`, later in the lesson.

> Note that tests and their functions should usually be defined in separate files.

### Mocking and Spying

***Mocking*** is creating a dummy version of some function or data that isn't directly part of the function that is being tested, but which is essential for that function's operation.

Mocking external values is important: a test is supposed to be very limited in scope, and that scope should not include external data sources you have no control over. If a test fails, you need to be sure that it's failing because of an issue in your code.

For most use cases, especially with data, you can write mocks right in your tests without any external tools. Sometimes, however, an external mocking tool can help. Later on in the lesson, we'll use Jest to write a mock to overwrite `fetch`, so that when our component tries to call an API, we can be sure that it will receive a response and we can define the data in that response.

***Spying*** is manipulating a function so that, for example, you can track how many times it has been called. Spying is especially useful for checking that functions that should be called indirectly are: we could, for example, use a spy to check whether componentDidMount is called in a component.

------

## Testing Simple Functions with Jest (45 min)

Though we'll start off testing simple, independent functions, we'll be building out our testing suite (a suite is just a collection of related tests) in a React application, so that we can easily move to testing React components when we're ready.

Download the attached project, [testing-project](./testing-project), `cd` into it, and `npm install`. Create a new file with `touch src/practice.test.js`. The `.test.js` extension is what Jest will look for when it automatically searches your project for testing suites. 

Technically, the test could go anywhere in your application; for larger projects, many developers create a top level `test` folder and copy the structure of their `src` folder inside it. Since we won't be getting too complex, we'll keep our structure simple.

### Your First Jest Test and `expect().toBe()`

Open `src/practice.test.js`, and paste in:

```js
test('two plus two is four', () => {
  expect(2 + 2).toBe(4);
})
```

Let's look at that! We're using Jest's basic test definition function, `test` (we could use `it` instead, if we wanted), and passing in a string describing the test and a function that calls `expect`, to define the structure of the test.

The string is basically just the test's title: it should be descriptive so that if the test fails, we get useful feedback.

The `expect` call isn't very useful by itself: it needs to be followed by a matching function, like the `.toBe()` we used. `.toBe()` is used to assert equality: think of it as the same as `===`. There are many other `expect` matching functions, and we'll be practicing with several of them.

#### Run That Test!

We're ready to run our test. In your terminal run `npx jest`. `npx`, the node package runner, will grab Jest and start it with the default configurations. Jest should take a moment to run, then populate your screen with its results. If everything worked as expected, near the end of the output, there should be a line indicating that 1 suite failed and 1 suite passed. 

Wait, what? Where'd that second test suite come from? Why did it fail?

First, where it came from: by default, `create-react-app` creates not just App.js and App.css, but App.test.js as well. The default `App.test.js` has a simple test to check that the App component mounts. Unfortunately, it didn't work.

<details>
	<summary>Why might the default `App.test.js` function have failed in our test?</summary>

Although `npx jest` is the easiest way to run Jest, and is useful in some circumstances, running Jest without any configuration can cause problems. The specific problem we ran into was that `create-react-app` uses ES6 modules. node doesn't support ES6 modules natively, and Jest doesn't use Babel or any other transpiler without configuration, so Jest couldn't import `App.js` and didn't know what to do when `App` was referenced.

You are welcome to look into the [Jest configuration documentation](https://jestjs.io/docs/en/configuration), but `create-react-app` and `react-scripts` give us a pre-configured command to use: `npm test`.

</details>

Let's run our tests again, this time using `create-react-app`'s call to Jest, `npm test`.

`npm test` gives us two nice features: it configures Jest to use Babel, so we can use ES6 modules and other advanced JavaScript features, and it opens Jest up in watch mode, so that we can leave Jest running and it will continually test our application as we make updates. Something to notice, however: while default Jest will run any test in the program folder, `npm test` will only find tests in the `src` folder and its subdirectories.

### Failed Tests and `expect().not`

What does it look like when a test fails? Let's find out. In your test file, `src/practice.test.js`, write the following:

```js
test('two plus two is five', () => {
  expect(2 + 2).toBe(5);
})
```

If your Jest process isn't still running, or if Jest doesn't automatically pick up the new test, run Jest with `npm test`.

Ok, Jest tells us that we had a failure in `practice.test.js`, gives us the string title of the failing test, gives us what value it expected to find and what it actually found, and even publishes a section of our code indicating the line number and even the exact method where it found the failure. This is a great feature, and will be very helpful, both in debugging tests as you write them and, even moreso, in understanding and using tests when they fail and you come back to them in the future.

Let's fix that test. We'll keep our values (`2 + 2` and `5`) and try to change the test structure so that it accepts them. `expect()` doesn't return a boolean; it returns an object of available matching methods &mdash; you can `console.log()` it to see a list of options, or just look at the [Jest docs](https://jestjs.io/docs/en/expect.html) &mdash; so if you need a negative version of, for instance, `toBe`, you can't just use  `!`. That's where `not` comes in: it reverses the expected value that is fed into the following matching function. Replace or update your failing test so it matches this:

```js
test('two plus two is not five', () => {
  expect(2 + 2).not.toBe(5);
})
```

Your test suite should now be passing. Note that `not` goes between the `expect` function and whatever matching method you're using.

### Object Equality, Multiple Expect Statements, and `expect().toEqual`

So far we've only used the `toBe` matching function, which we've said is similar to `===`. What if we need to compare objects?

As a reminder, `===` compares objects by reference rather than by value, so even if you have two objects with identical keys and values, they won't be equal. Let's prove that to ourselves with a test. Put this in your test file:

```js
test('JS objects are compared by reference', () => {
  const obj1 = { a: 1, b: 2 };
  const otherObj = { a: 1, b: 2 };

  expect(obj1).not.toBe(otherObj);
})
```

In our `test` function, we define two sample objects and check their equality with an `expect` statement. Simple enough.

<details>
	<summary>Does our test prove the statement we defined it with, that 'JS objects are compared by reference'?</summary>

No, it only proves that they aren't compared by value. We'll need more checks to prove that they're compared by reference.
	
</details>

A `test` function in Jest, or in most assertion libraries, can take any number of assertions (`expect` statements). Let's change our test to prove not only that objects aren't compared by value, but that they **are** compared by reference.

Try updating the test on your own to prove that objects are compared by reference, and, once you've written your test, run it to see that it passes. Once you've done that, compare with the sample code below.

<details>
	<summary>Sample code:</summary>

```js
	test('JS objects are compared by reference', () => {
		const obj1 = { a: 1, b: 2 };
		const otherObj = { a: 1, b: 2 };

		const obj2 = obj1;


		expect(obj1).not.toBe(otherObj);
		expect(obj2).toBe(obj1);
	})
```
	
</details>

Great, we set another variable equal to our initial object, checked its equality, and our test passed. So far, though, we've only proven some JavaScript fundamentals. We haven't figure out how to use Jest to compare objects in the way we will likely need to in real tests. What we need is an object equality check.

Object equality checks exist in a lot of programming contexts, and come in two types: shallow equality, which compares the top levels of objects for equality, and deep equality, which loops through all the nested properties of the objects and determines if they have exactly the same values. Deep equality checks can be performance intensive to run, which may be why JavaScript has no built-in deep equality checker, but performance doesn't matter much in a test suite, since users should never interact with it.

Jest happens to have a deep equality check: `toEqual`. Let's use it to prove that, even `obj1` and `otherObj` are equal, even if they aren't, according to JavaScript, the same:

```js
test('JS objects are compared by reference', () => {
  const obj1 = { a: 1, b: 2 };
  const otherObj = { a: 1, b: 2 };

  const obj2 = obj1;


  expect(obj1).not.toBe(otherObj);
  expect(obj2).toBe(obj1);

  expect(obj1).toEqual(otherObj);
  expect(obj2).toEqual(otherObj);
})
```

### Checking `undefined`, `null`, `NaN`, falsy, and truthy

Jest offers a variety of methods for checking for common falsy states: `toBeUndefined`, `toBeNull`, `toBeNaN`, or, if precision isn't important, `toBeFalsy` and its opposite, `toBeTruthy`.

`toBeFalsy` is broad but obviously useful; `toBeUndefined`, `toBeNull`, and `toBeNaN` don't really differ from their `toBe` equivalents (`toBe(undefined)`, `toBe(null)`, `toBe(NaN)`), though the documentation says that they provide better error messaging, so you can certainly use them if you'd like.

There are no native methods for checking for `false` or `true`. Just use `toBe`.

> A note on `undefined`: Remember that `toBe` and `toBeUndefined` are equality checks, which means that they compare the **value** of a variable to another value (`undefined` in this case). They are **not** for checking whether a variable has been declared: referencing an undeclared variable will throw an error.

Let's add a test to our suite to demonstrates that the various falsy values are different:

```js
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
```

### Decimal Imprecision in JavaScript and `toBeCloseTo`

The last native Jest method we'll look at is used to deal with a strange JavaScript edge case that, hopefully, you haven't run into yet. When adding certain decimals, JavaScript's addition sometimes does some funky things. To demonstrate this, open up a JavaScript console, either in a browser or with node, and try the following four operations, line by line:

```js
2 + 2
// should return 4 and does

1 + 2
// should return 3 and does

.2 + .2
// should return .4 and does


.1 + .2
// should return .3, but life is sometimes difficult
```

If you followed along, you probably got .30000000000000004 as your result for the final sum. That is obviously incorrect, but it's an unfortunate fact of how JavaScript works (you can read further [here](http://adripofjavascript.com/blog/drips/avoiding-problems-with-decimal-math-in-javascript.html)). To deal with this, Jest provides the method `toBeCloseTo`, which checks that a decimal is close to the value it's being compared to. Let's add another test to our suite:

```js
test('JS decimals can have some frustrating precision issues', () => {
  expect(.2 + .2).toBe(.4);
  expect(.1 + .2).not.toBe(.3);
  expect(.1 + .2).toBeCloseTo(.3);
})
```

### Testing Independent Functions in Jest

Importing functions and calling external functions in test suites works exactly like you probably expect it to, but let's go through an example just to be sure. There's a function, `greet`, defined in `src/practice.js`. Import it at the top of `src/practice.test.js`.

```js
import greet from './practice.js';
```

At the bottom of our testing file, let's add a simple test to check that `greet` works like we'd expect:

```js
it('greets the argument', () => {
  expect(greet('World')).toBe('Hello World!');
});
```

This shouldn't be too surprising, but let's be sure to notice two things before we move on:
- We called `greet` in our `expect` function, providing an argument, just like we would if we were using that function anywhere else. We want our tests of functions to be as close to real use as we can make them.
- Rather than `test`, we started our test with `it`. Those are different names for the same function; I chose to use `it` here because 'it greets...' reads better than 'test greets...', but you can use whichever you prefer.

----

## Test Coverage and Testing Independent React Components with Enzyme (30 min)

Next, we'll learn to apply what we've learned about testing to React projects. Open up `src/App.test.js`.

### Coverage Reports

It currently only contains the single basic test that `create-react-app` builds automatically. If we open up `src/App.js`, however, we'll find that the application is significantly more complicated than the default app. Before we start writing tests, we can check how thorough our current tests are with a **coverage report**. A **coverage report**, which is a feature provided automatically with many test runners (including Jest) and available to most others through plugins, will, as our tests run, record the process of the tests stepping through our code and report what percentage of lines were processed and what percentage weren't, reporting at both the application and file level, and should give us a file by file report of what lines aren't covered, so we can add tests to address the issue.

To generate a coverage report in Jest, stop your running test process with ctrl-c, and then start it again with `npm test --coverage`. If you receive a message about no changes since the last test, follow the instructions and press `a` to rerun the tests anyway. If, after the tests run, the coverage report is still empty, try making a minor update to `App.js`, like adding a new line.

The report tells us, among a lot of other things, that we have 80% line coverage in `App.js`. If you look at the existing test, and read carefully through `App.js`, you'll see that that's not quite true &mdash; there are clearly sections of JSX that our test should not have reached by just rendering the component, but none of the lines in the reports uncovered line section come from the JSX. Jest doesn't read JSX as well as it does normal JavaScript, and so, unfortunately, we shouldn't rely on Jest coverage reports to tell us how well we're testing JSX.

The report also tells us that `App.js` has an uncovered line number: line 15, if you didn't add a new line. Line 15 is from the internal block of the `updateSelectedFeature` method, and it isn't being tested because, in our test suite, that function isn't being called. To call it, we will need to mount the App component and have access to some of its features. To do that, we are going to use **Enzyme**.

### Basic Enzyme Methods: `shallow`, `instance`, and `state`

**Enzyme** is a testing library that exclusively mounts React components in a testing environment and provides a variety of methods for manipulating those components. We'll start with one of it's most basic functions, `shallow`, which renders (in the test environment &mdash; we won't see anything) a component without any of its children.

To access `shallow`:
1. run `npm install --save-dev enzyme enzyme-adapter-react-16`
2. near the top of `App.test.js`, add `import Enzyme, { shallow } from Enzyme;`, which gives us access to both Enzyme and its `shallow` method
3. also add `import Adapter from 'enzyme-adapter-react-16';`, which we'll use in the next step
3. under your imports but before your tests, add `Enzyme.configure({ adapter: new Adapter() });`, which is a configuration step that Enzyme requires before you can use any of its methods

In `App.test.js`, create a new, empty test with an appropriate label, like

```js
it('updates state when updateSelectedFeature is called', () => {
});
```

First, we'll use `shallow` to create a ShallowWrapper, which is an object Enzyme creates that we can use to test our component. In the first line of your test, add:

```js
const wrapper = shallow(<App />);
```

We're trying to test that `updateSelectedFeature` will update our component's state, so we need to call updateSelectedFeature. `wrapper` doesn't give us direct access to `App`'s methods: to get to those we need to call `wrapper`'s instance method. In the next line, add:

```js
wrapper.instance().updateSelectedFeature();
```

If you run your test now, you'll get an error because `updateSelectedFeature` expects to be passed an `event` object. An `event` is complex and comes with a lot of data, but `updateSelectedFeature` only uses `e.currentTarget.value`, and doesn't care about anything else `event` offers. This means we can mock `event` with a simple object that only provides exactly what we need:

```js
{
	currentTarget: {
		value: 'dog-pics',
	},
}
```

I used the value 'dog-pics' because it's an option that may actually be passed to `updateSelectedFeature`, but it doesn't really matter what value you choose, so long as it matches what `updateSelectedFeature` expects, which is any string.

Be sure to update your code so that our new event object is passed into `updateSelectedFeature`, something like...

```js
wrapper.instance().updateSelectedFeature({ currentTarget: { value: 'dog-pics' }});
```

Check to verify that your tests are passing now.

We've mocked both `App` and an `event` that we can pass, and we've used `instance` to call `updateSelectedFeature` with that `event`. 

<details>
	<summary>What step do we have left to make this a useful test?</summary>

We need to use an `expect` statement to confirm that the component's state was actually updated.

</details>

To access a ShallowWrapper's state, we call the `state` method on it. We're specifically interested in the `selectedFeature` value of the state, and we expect it to be whatever string we chose to pass in in our event. The last line of our test should be:

```js
expect(wrapper.state().selectedFeature).toBe('dog-pics');
```

and so our whole test should be:

```js
it('updates state when updateSelectedFeature is called', () => {
  const wrapper = shallow(<App />);
	wrapper.instance().updateSelectedFeature({ currentTarget: { value: 'dog-pics' }});
  expect(wrapper.state().selectedFeature).toBe('dog-pics');
});
```

Confirm that your test suite is still passing. Change one of the string values to be sure that the test would fail if you gave it bad data. Once you've done that, you can change it back and move on to the next test.

### Manipulating the DOM? Basic node retrieval and events in Enzyme with `find` and `simulate`

If we run a coverage report now, we should be covering 100% of our lines, which is great. We aren't, however, testing as well as we could be. Our last test directly called the `updateSelectedFeature` method, which is definitely the easiest means to test it, but doesn't necessarily accurately simulate its real use in our program. Rather than calling `updateSelectedFeature`, we should see if it will run correctly when we change the value of the app's select element. If our previous test was a unit test, testing `updateSelectedFeature` in a fairly isolated manner, our next test will move a bit closer towards an integration test, checking that user actions in the rendered part of the component activate our method which then interprets those actions and passes on data to component state.

To start off, create a test scaffold:

```js
it('updates state when the select element changes', () => {
});
```

From our last test, we know how to get a ShallowWrapper of `App`, but we need to access the select element deep in `App`'s html structure. ShallowWrapper **is not** a node list or an html collection, the JavaScript based html structures we're used to manipulating in browsers, so you can't just use the DOM API methods (like `querySelector`) that you might want to try first. Fortunately, Jest provides us an alternative: `find`. `find` works similarly to `querySelector`: it takes a string CSS selector and returns the element it finds that matches that selector. Unlike `querySelector`, if `find` finds multiple matching elements, rather than returning the first automatically, it will return them all. We'll see how to address that later.

<details>
	<summary>Look over the JSX in `App.js`. Which string CSS selector will you use to `find` the select element?</summary>

Because `App.js` isn't very complicated and only features one select element, we can safely `find` select with its tag name, 'select'. If we had to deal with multiple select elements, we might need a more complex strategy, and might even need to update our JSX to include new ids or classes.

</details>

To create a wrapper and then `find` its select element, add:

```js
const wrapper = shallow(<App />);
const select = wrapper.find('select');
```

Now that we have access to select, we need to change its value in order to activate its `onChange` method, `updateSelectedFeature`. We can use Jest's `simulate` method, which simulates an event and takes two arguments: a string indicating the event type and a mocked `event` object. We need a 'change' event and can use the same mock `event` we created for our last test, giving us

```js
select.simulate('change', { currentTarget: { value: 'dog-pics' } });
```

Finally, just as in the last test, we want to check that the action we took created the result we expected, so we need to check `App`'s state:

```js
expect(wrapper.state().selectedFeature).toBe('dog-pics');
```

Giving us, all together, this:

```js
it('updates state when the select element changes', () => {
  const wrapper = shallow(<App />);
  const select = wrapper.find('select');
  select.simulate('change', { currentTarget: { value: 'dog-pics' } });
  expect(wrapper.state().selectedFeature).toBe('dog-pics');
});
```

Make sure that your test is composed correctly and that your test suite is passing.

-----

## Mocking Complex Functions and Services with Jest (45 min)

Now we'll build out a test suite for a more complex React component: the DogPics app we built to interact with APIs.

In `DogPics.js` you'll find a version of the DogPics app. Create a test file for it, `DogPics.test.js`, and open it up.

In `App.test.js`, the first test uses ReactDOM to render `App`, but we'll use Enzyme for all of the rendering in this test, so we don't need to import ReactDOM. Enzyme takes JSX as arguments to its render functions (like `shallow`), and, even if it's not being called by name, React is necessary for JSX, so we do need to import React. We'll also need Enzyme, the Enzyme adapter, and, of course, DogPics itself. Putting it all together, we can start our file with

```js
import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import DogPics from './DogPics';
```

To use Enzyme, we have to configure it to use an adapter, so, just like in `App.test.js`, add

```js
Enzyme.configure({ adapter: new Adapter() });
```

### Dividing Tests into Sections with `describe`

Since we're testing a large, self-contained component, this is a good opportunity to use `describe`. `describe` creates a functional block to group tests together. It is not necessary &mdash; the tests can be written on their own, like we've been doing &mdash; but it allows us to group and describe our tests more thoroughly. `describe`, like `expect`, is a function that takes two arguments: a string used as a label and a function that contains its operations. You can write tests inside the function block.

The string passed to `describe` doesn't need to describe function, it just needs to identify what code block that particular `describe` function is describing. In the file we're working on, we're testing the DogPics component, so add the following block to the bottom of `DogPics.test.js`:

```js
describe('DogPics component', () => {
	// our tests will go here, and don't need to be written in any specific way
});
```

The rest of the code for this exercise will go in that `describe` block.

### Assessing Necessary Tests and Factoring Out Common Setup for Tests

Let's start with some simple tests. Our first one will be equivalent to the test that `create-react-app` provides for `App.js`: it will just test that the function renders without crashing. All we need to do is use `shallow` to create a ShallowWrapper of our component and then `expect` that ShallowWrapper exists:

```js
it('renders without crashing', () => {
  const wrapper = shallow(<DogPics />);
  expect(wrapper).toBeDefined();
});
```

Cool. Let's do a slightly more complicated test. Using `find` and `text`, a new method that can be called to determine a node's text content, test that the component has a title that says 'Dog Pics!'. Try not to check below until you have a passing test.

<details>
	<summary>You should have something like...</summary>

```js
  it('has a title', () => {
  	const wrapper = shallow(<DogPics />);
    expect(wrapper.find('h1').text()).toBe('Dog Pics!');
  });
```

</details>

Great, we have two tests. These tests, however, mostly just check that our component exists: they don't do any checks of its functionality. Take a moment now to review `DogPics.js` and try to come up with a list of tests you should write, both to get full test coverage and to be sure that everything is interacting appropriately.

<details>
	<summary>Once you have a list, compare it with the one below.</summary>

`DogPics` should:
	- retrieve data and setState when it mounts
	- once it has that data, it should render a button for each breed in the data
	- when a button is pressed, it should retrieve a URL that should be written to the img tag's src attribute

There are many more discrete parts of the `DogPics` app that could be tested, but these three are the core functionality of `DogPics`, and if something more basic breaks, at least one of these tests should fail. Being thorough is important, but try to only be as thorough as necessary to achieve full coverage.

</details>

Looking at the two tests we have and the three we plan to write, you might have realized that we will need a ShallowWrapper of `<DogPics />` in every test. Rather than repeat the same line in every test, we can keep things DRY by factoring out our wrapper constant to the `describe` level, as below:

```js
describe('DogPics component', () => {
 	const wrapper = shallow(<DogPics />);

	it('renders without crashing', () => {
		expect(wrapper).toBeDefined();
	});

  it('has a title', () => {
    expect(wrapper.find('h1').text()).toBe('Dog Pics!');
  });
});
```

> Because we are just using the same instance of the component again and again, we only need to define it once. If we needed it to be instantiated with different props in different tests, or we needed to check different paths in `componentDidMount`, or we needed distinct component instances for each test for any other reason, we would need to leave the declaration inside each test block. If you find that you are writing tests that have a lot of shared setup but that each need an independent instance of whatever you're setting up, you can use [Jest's `beforeEach` function](https://jestjs.io/docs/en/api#beforeeachfn-timeout), which provides a block where you can do setup and define variables that will run before and be accessible to each test. If `beforeEach` is used inside a `describe`, it only runs before each test in that `describe`. There is also a similar function, [`afterEach`](https://jestjs.io/docs/en/api#aftereachfn-timeout), that can be used for teardown after each test. Both of these functions can be very useful, but are beyond the scope of this lesson.

### Mocking Global Functions and External Data

First on our list of tests is `DogPics` should 'retrieve data and setState when it mounts'. Let's create our test function:

```js
it('retrieves data and calls setState when it mounts', () => {
});
```

#### Mocking `fetch`: `spyOn` and `mockImplementation`

`componentDidMount` retrieves data with a `fetch` call. When we write tests, we want to be as sure as possible that we are only testing our code &mdash; `fetch` calls can fail, and we don't want our test to fail unless it's because of our code. To deal with this, we need to mock `fetch`, that is, we need to create a dummy function that `componentDidMount` can call instead of the real `fetch` function. To fulfill the requirements of our test, this mock function needs to behave exactly like `fetch`, at least as far as `componentDidMount` is concerned. This, unfortunately, will be a bit complicated.

Consider the functionality of a `fetch` call: 
	1. `fetch` is called with a URL as an argument and it immediately returns a promise
	2. when that promise resolves successfully, it returns an object with, among other things, a `json` method that also returns a promise
	3. when that promise resolves successfully, it returns the data that the call was made to retrieve

To mock `fetch`, let's work through its functionality backwards, starting with the data.

The data we expect is what we would get from going to [https://dog.ceo/api/breeds/list/random/3](https://dog.ceo/api/breeds/list/random/3), so go there in a browser, get some data, and assign it to a constant (let's say `mockSuccessResponse`). Because we'll use `fetch` in several tests, let's place this at the `define` level, above the existing definition for `wrapper`:

```js
const mockSuccessResponse = {"message":["maltese","retriever","terrier"],"status":"success"};
```

> We could clean up the extra quotation marks that the JSON left us, but it's not necessary for our purposes.

This data should only be available as the result of a promise returned by the method `json`, so let's embed it in a `Promise.resolve` method titled `mockJsonPromise`:

```js
const mockJsonPromise = Promise.resolve(mockSuccessResponse);
```

`mockJsonPromise` should be returned by a method, `json`, that is attached to an object that is returned by the resolution of the initial promise `fetch` returns. Let's define all that in a constant titled `mockFetchResponse`,

```js
const mockFetchPromise = Promise.resolve({
	json: () => mockJsonPromise,
});
```

Now all we need to do is mock `fetch` so that, rather than it's native version, it is a function that returns our `mockFetchPromise`. JavaScript allows us to overwrite native functions, so we could just write `fetch = whatever`, but we will probably quickly find that that causes us a variety of headaches, and this sort of thing is what libraries are for. Jest, thankfully, provides us with a mocking functionality that will provide some other features as well. In your test file, insert

```js
jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise);
```

Let's walk through what's happening.

- First, we access the `jest` object. Notice that we didn't import it from anywhere: we have access to it because Jest, as the test runner, provides it. If we referenced a test file from a regular JavaScript file, we would probably get an undefined error.
- Next, we access `jest`'s `spyOn` method. `spyOn` watches functions and stores data about them, and takes two arguments: the first is the scope or object containing the function it should look for, and the second is the function's name. We'll go into one of the benefits `spyOn` provides later on; for now, it's key feature now is that it has selected a function and returned it in such a way that we can call `mockImplementation`
- `mockImplementation` is a method that takes a function as an argument. That function will replace whatever function `mockImplementation` was called on
- We pass `mockImplementation` `() => mockFetchPromise`, a function that just returns the promise we defined earlier

Putting everything together gives us

```js
const mockSuccessResponse = {"message":["maltese","retriever","terrier"],"status":"success"};
const mockJsonPromise = Promise.resolve(mockSuccessResponse);
const mockFetchPromise = Promise.resolve({
	json: () => mockJsonPromise,
});
jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise);
```

We can use this in any test where we need to mock `fetch`, and the only thing we should need to change is the data in `mockSuccessResponse`, though our structure does require us to reimplement all of our other pieces.

Congratulations! You have mocked `fetch`. This was rather complex, and it's understandable if you didn't follow it perfectly. Read through it again if you need to, and remember that you don't have to perfectly know how to use every feature of every tool you use as a developer, you just need to know where to go to refresh and improve your understanding. Google is your friend.

#### Testing `componentDidMount`: `toHaveBeenCalledTimes`, `toHaveBeenCalledWith`, and `mockClear`

Let's start working in the empty test we created earlier. When we defined our `wrapper`, the component mounted, so `componentDidMount` was called, which called `fetch`. We'll first create a simple `expect` statement to check if that was true. In this test, we are trying to find out if calls have already been made. We wouldn't be able to do this except that before our component was mounted we called `spyOn` on fetch. `spyOn` logs every time a function is called and exposes that log through specific `expect` matching methods. We can use one now. In the empty test, add the line

```js
    expect(global.fetch).toHaveBeenCalledTimes(1);
```

Before we go into this, check that your tests are passing. If they aren't, be sure that you define `wrapper` after you call `jest.spyOn`, and also check that `wrapper` was factored out of the other tests and is only defined once in the test file.

So what's being tested? `expect` is looking at `fetch`, which `spyOn` associated with the `global` object, and checking that it has been called exactly one time. This test should pass because, when we called `shallow` on `DogPics`, the component mounted and `componentDidMount` fired and called `fetch`.

Simple enough. Let's call another matching method that uses the `spyOn` log:

```js
expect(global.fetch).toHaveBeenCalledWith('https://dog.ceo/api/breeds/list/random/3');
```

`toHaveBeenCalledWith` checks the argument that a function was called with. `fetch` was called with the dog API's random route, so that's what we expect to find here.

Now we need to check that data was retrieved and set to state. If we wanted, we could `spyOn` `setState`, to determine whether it was called and what data it was called with, but we should be able to trust `setState` and let the React team test it; we only really need to know that our data is being passed on to the component's state.

We've encountered all the methods we need to access state, so see if you can write a test confirming that you've written the data to state correctly.

<details>
	<summary>You should have something like...</summary>

```js
	expect(wrapper.state().initialBreeds.length).toBe(3);
```

... though the equality could be checked in a number of ways.

</details>

We then need to do a bit of clean up to finish our test. For the final line, add

```js
global.fetch.mockClear(); 
```

This cleans out the `spyOn` log, so that if we need to check it later we can look at it fresh.

Putting everything together, you should have

```js
it('retrieves data and calls setState when it mounts', () => {
	expect(global.fetch).toHaveBeenCalledTimes(1);
	expect(global.fetch).toHaveBeenCalledWith('https://dog.ceo/api/breeds/list/random/3');
	expect(wrapper.state().initialBreeds.length).toBe(3);
	global.fetch.mockClear(); 
});
```

#### Testing that the Buttons Render

Write a test that checks that, when passed data with three breeds, the `DogPics` component renders three buttons.

<details>
	<summary>Did you get something similar to this?</summary>

```js
  it('populates itself with buttons', () => {
    expect(wrapper.find('button').length).toBe(3);
  })
```

Are your tests passing?

</details>

#### Testing the onClick Functionality

For our final test, we want to check that, when a button is pressed, it retrieves a URL and that URL is pushed to the img element. Our onClick function, `retrieveDogPic`, fires a `fetch` call. `fetch` is still mocked from before, but we need it to return different data. Unfortunately, to do this, we need to recreate our entire `fetch` mock inside the onClick test. First we'll assign the new data to `mockSuccessResponse`, then we'll recreate everything else. By putting it in our test, we're letting the definitions in the local scope override the old, `describe` level definitions. Our test so far should look like

```js
it('loads an image when a button is clicked', () => {
	const mockSuccessResponse = { message: "https://images.dog.ceo/breeds/cairn/n02096177_5206.jpg", status: "success" };
	const mockJsonPromise = Promise.resolve(mockSuccessResponse);
	const mockFetchPromise = Promise.resolve({
		json: () => mockJsonPromise,
	});
	jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise);
})
```

If we called `fetch` three times, or did so in another file, we would definitely want to factor this chunk of code out into its own function. Even with only two instance of the code, it wouldn't be a bad idea to refactor it. If you attempt it as an exercise, I recommend calling `global.fetch.mockClear()` at the beginning of your function. 

Next we need to `find` a button and `simulate` a click. There are multiple button elements in the component, so we'll also need to use `find`'s `first` method to return the first of the group:

```js
    wrapper.find('button').first().simulate('click');
```

> Note: when we used `simulate` before, the event listener we were trying to trigger needed an `event` argument. Look closely at the `DogPics` component: although `retrieveDogPic` takes an argument, it's not actually the function our event listener calls. The listener, defined on line 36, calls an anonymous function that doesn't take an argument, and that function calls `retrieveDogPic`. Because of this, we don't need to pass a second argument to `simulate`.

Now that we've clicked the button, we expect that the component's state should update with the retrieved data. However, if we insert

```js
expect(wrapper.state().dogPicURL).toBe( "https://images.dog.ceo/breeds/cairn/n02096177_5206.jpg");
```

and run our tests, this one will fail. The button exists, and we've clicked it, but we haven't actually given time for the promises in our mock `fetch` to resolve. We have been taking advantage of one of Jest's features without mentioning it: because we mounted our component outside of any of our test declarations, Jest is allowing the asynchronous functions in `componentDidMount` to complete before checking on the component in the test functions. Unfortunately, we can't use that trick for this test. We need some way to force our test to wait until the `fetch` call initiated by the button click resolves. Jest has a variety of ways to deal with async calls, but, for this application, we can use something a bit more basic: node's `process.nextTick`.

> `process` is an API exposed by node, and is only accessible in node applications, not in browsers. Because your tests are run on your machine and not published for use in browsers, it's safe to use.

`process.nextTick` can be discussed with a great deal of precision and complexity, and you can look into that [here](https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/) if you'd like, but, to keep things simple: think of every JavaScript function that node has to process as being sorted into a long line, where the first function called goes first and the last goes last. If a promise is resolved before the last function is processed, it's callback is put in the back of the line. The time it takes node to process through the line is called a tick; once one tick is over, the next begins, and node lines all the relevant functions up and processes them again. Although the promises we defined in our mock `fetch` resolve instantly, they are still promises, so their callbacks won't run until the end of the tick. `process.nextTick` lets us define some functionality to run at the beginning of the next tick, once those promises have run.

We can try our test again, this time wrapped in the callback we pass to `process.nextTick`:

```js
process.nextTick(() => {
	expect(wrapper.state().dogPicURL).toBe( "https://images.dog.ceo/breeds/cairn/n02096177_5206.jpg");
})
```

That should pass.

Finally, we need to check if the updated part of state has propagated down to the src attribute of the img element. Once you've used `find` to select an element, you can check that element's attributes with the `prop` method. Because this test is also testing something that comes after the `fetch` call, it also needs to be in the `process.nextTick` block.

Write a test to see if the img element's src prop has updated.

<details>
	<summary>It could look like...</summary>

```js
  expect(wrapper.find('img').prop('src')).toBeDefined();
```

	or

```js
  expect(wrapper.find('img').prop('src')).toBe( "https://images.dog.ceo/breeds/cairn/n02096177_5206.jpg");
```

</details>

Finally, it's a good idea to call

```js
global.fetch.mockClear(); 
```

Once we put it all together, we should have

```js
it('loads an image when a button is clicked', () => {
	const mockSuccessResponse = { message: "https://images.dog.ceo/breeds/cairn/n02096177_5206.jpg", status: "success" };
	const mockJsonPromise = Promise.resolve(mockSuccessResponse);
	const mockFetchPromise = Promise.resolve({
		json: () => mockJsonPromise,
	});
	jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise);
	wrapper.find('button').first().simulate('click');

	process.nextTick(() => {
		expect(wrapper.state().dogPicURL).toBe( "https://images.dog.ceo/breeds/cairn/n02096177_5206.jpg");
		expect(wrapper.find('img').prop('src')).toBeDefined();
	})

	global.fetch.mockClear(); 
})
```

------

## Practicing Test Driven Development (30 min)

So far, all of our tests have responded to parts of an application that already exist. However, testing tools create the opportunity for an entirely new paradigm for creating applications: **test driven development** (TDD). 

> Check: Can someone recap on the definition of test-driven development?

### You do: Test Driven Development

For the last exercise in this lesson, you will add a component to the `testing-project` app using test driven development. You will be provided with a description of the component's functionality, and then you will write a series of tests meant to check for that functionality, and only then, once your tests are written, will you write the component itself.

Your component will:
	- only render an img element to the screen
	- pass the URL of an image of a random dog from the DogPics API to the img when the component loads
	- load and pass the URL of another random dog to the img element whenever a user clicks on the img element

Good luck!

-----

## Conclusion (5 mins)

- What is a test runner and what functionality does it provide?
- What is mocking and why do we need to do it when writing tests?
- What is a coverage report, and how does one help us assess our tests?
- What is test driven development?

