---
title: React Calculator
type: Lab
duration: "1:30"
creator:
    name: Melissa Arliss (adapted from NYC-SEI)
---


# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) React Calculator Lab

You'll be building a calculator with React and only minimal instructions have been provided (so you can really think about what's happening).

At first, your calculator will just simply two numbers together when they are entered. For the bonus section, you might decide to get more creative.

------

## Instructions

### Set Up

As usual, use `create-react-app` to make a new project.

### Step 1

Start by creating a single component file in the `src` directory. Name it `Calculator.js`. Create your `Calculator` class in this file. Use the `App.js` as an example of how to create a basic component, and add the following JSX to your calculator's `render()` function:

```html
<div className="container">
  <h1>Add with React!</h1>

  <div className="add">
    <input type="text" />
    <span>+</span>
    <input type="text" />
    <span>=</span>
    <h3>Addition results go here!</h3>
  </div>
</div>
```

### Step 2

Set up the initial state of your component. What state attributes will you need to track? With what values should those state items start? Where is that state displayed in the browser?

> **Hint**: You will only need one state!

### Step 3

Bind the inputs to an event so you can trigger a function when their values change.

Consider: Should it be a click event? A submit event? Something else? It's up to you!

Here's a lot of documentation to help you choose what you want to do and how to do it:

* [React form documentation](https://facebook.github.io/react/docs/forms.html).
* [A list of events React supports](https://facebook.github.io/react/docs/events.html#supported-events).
* [How to handle events](https://facebook.github.io/react/docs/handling-events.html).

Notice that the "Handling Events" page has an example explaining how you must explicitly `bind` functions with `this` in order for `this` to remain the same inside that function. If you're having trouble calling functions off of `this`, such as `this.setState()`, take the time to consider why this is necessary; see if that leads you to figuring out how to do it (via the documentation).

```js
// This binding is necessary to make `this` work in the callback
this.handleClick = this.handleClick.bind(this)
```

<details>
<summary>Hint: Where should the event binding go?</summary>
In the same component where it's being used — in fact, right on the input.
</details>

### Step 5

Once you've chosen how to bind your inputs to an event, you'll need to create a method. The method should accept the triggered event, get the input values from your form, add them together, and set part of the state to the new `sum`.

<details>
<summary>Hint: Where should this method go?</summary>
In the same component where it's being used, between the constructor and the render.
</details>

> **Thought**: How will you handle inputs that aren't numbers?

### Step 6

Once the state of the `sum` has been set, React will rerender the whole component. Make sure you include a place in your JSX that displays the result!

### Bonus

Make the calculator work with any/all of the four basic arithmetic operations (+, -, \*, /). How will this change your `state` and your JSX?
