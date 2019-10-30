---
title: React Life Cycle Stopwatch
type: Lab
duration: "1:30"
creator:
    name: Rachel Moskowitz (adapted from SEI-DC)
---

# React Stopwatch Lab

Recreate a stopwatch in React. Your final product should function similarly to [this deployed version](http://scary-religion.surge.sh/) of the component.

## Getting Started

- Fork and clone this repo.
- Once you have the app locally, install necessary dependencies with `$ npm install`.
- Start the development server locally with `$ npm start`, then visit `localhost:3000` in the browser to view the app.

## Instructions

Take the existing markup rendered from the `Stopwatch` component in `src/Stopwatch.js` and change it into a fully functioning component. This means that you only have to add functionality (not markup or styling) to the existing code!

## Steps to Take

1. Add a `constructor()` method and initialize state with a `counter` property to track the incrementing time (you may need additional state properties later on).

2. Create a `handleStart()` method that calls `setInterval()` and updates `counter` every second (make sure to use `setState()` to update).

3. Include an `onClick` attribute on the start button that calls `handleStart()`.

4. Replace the `0` in the `h1` heading with your `counter`.

5. Next, you will need to create `onClick` event attributes for reset and pause (and the associated methods for each).

**Hints** *(Shhhhhh!)*
> You will also most likely need to include an additional attribute in your `constructor()` method that keeps track of your current interval. If you have an active interval, then don't let the start button fire again!
>
> You can use `clearInterval()` to stop the current interval!

### Bonus!

* When the stopwatch is at `0`, the display time should be a different style.
* When the user first visits the page, the only button that should be active is "Start."
  * The other buttons should be unlocked only after the user clicks "Start."
* Have multiple stopwatch components rendered on the page so the user can set off multiple timers.
