| Title | Type | Duration | Author |
| -- | -- | -- | -- |
| Intro to Redux and Flux Architecture| Lesson | 3:30 | Kareem Grant |

# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) Intro to Redux and Flux Architecture

### Learning Objectives

At the end of this lesson, students will be able to:
- Explain the problems that Flux architecture and Redux solve.
- Differentiate between Flux and Redux.
- Add Redux to an existing React application.

### Lesson Guide

| Time   | Activity | Topic |
| ---    | --- | --- |
| 5 min  | Introduction   | Lesson Objectives |
| 20 min | Lecture | State Revisited | 
| 30 min | Lecture | What Is Flux?   | 
| 45 min | Lecture | What Is Redux?  |
| 30 min | Discussion      | When to Use Redux |
| 30 min | Guided Practice | Functional Programming and Redux |
| 45 min | Guided Practice | Setting Up Redux  |
| 5 min  | Conclusion      | Review/Recap |

## Introduction (5 min)

In this lesson, we'll get to know Redux and how it helps developers write robust, predictable, and maintainable applications.

But, to understand Redux, you must first understand state — which you already do.

----

## State Revisited (20 min)

Because you're all brilliant React developers, you may already know this, but humor us for a minute and come along for a quick revisit of state.

**State** is a fundamental concept in Redux. In a general sense, state represents data that an application keeps track of so it can provide some functionality.

In the context of React, `state` and `props` are plain JavaScript objects that hold information that influences what a component renders. However, there are some important differences between `props` and `state`. 

> **Knowledge Check**: Who can share some of those differences?

<details>
<summary>Answers</summary>

* `props` get passed down to the component (similar to function parameters) and are **immutable** (i.e., cannot be changed) throughout the component's lifetime.
* `state` is managed within the component (similar to variables declared within a function) and **mutable** (or changeable attributes).

</details>

### A Stateful React Component Example

Let's check out a simple example of a React component that holds state to reinforce the concept of `state`. The `<App>` component is an example of a **stateful** React component using an ES6 class:

```js
class App extends Component {
  constructor (props) {
    super(props)
    
    this.state = {
      count: 0
    }

    this.increment = this.increment.bind(this)
    this.decrement = this.decrement.bind(this)
  }

  increment () {
    this.setState((state) => ({
      count: state.count + 1
    }))
  }

  decrement () {
    this.setState((state) => ({
      count: state.count - 1
    }))
  }

  render () {
    const { count } = this.state

    return (
      <div>
        <h1> { count } </h1>
        <button onClick={this.increment}> + Increment </button>
        <button onClick={this.decrement}> - Decrement </button>
      </div>
    )
  }
}
```

> **Knowledge Check**: What makes this stateful?

`<App>` is managing its own `state` — `count` — that's responsible for keeping track of the current count. State managed by a component is considered **local** to that component.

In a React component, the state holds data and the component might render such data to the user.

Changes to a component's state usually occur in response to actions and events. This is what's happening in our example, as `increment()` and `decrement()` are functions called when the user clicks on either of the buttons.

Both of these handler functions update local `state` using our old friend `setState()` ([see docs](https://reactjs.org/docs/react-component.html#setstate)). `setState()` triggers a component re-render, which results in the updated `this.state.count` being displayed.  

All of that is just to say: State influences what a component ultimately renders.

-----

## What Is Flux? (30 min)

Handling state locally works fine in smaller applications, but as these applications start to grow in size and complexity, local management becomes increasingly difficult and cumbersome.

To address this problem, Facebook introduced the **Flux design pattern** for handling the state management challenges of non-trivial React applications.

> **Knowledge Check**: What's a design pattern? What other design patterns have we encountered throughout this course?

This Flux diagram should help you visualize the concept of unidirectional data flow as we introduce each of the four parts of Flux architecture. This might look a bit confusing right now, but the diagram is just a means of **imagining** Flux architecture, like when we visualized MVC architecture before actually getting our hands dirty with code. You'll get a chance to see all of these concepts in action in the upcoming exercises.

![Flux diagram](../images/flux-diagram.png)

Flux is a pattern for managing data flow in your application. One of the most important concepts to grasp Flux is **unidirectional data flow** (i.e., data flows in only one direction). You also already know about this concept.

> **Knowledge Check**: Who can share some benefits of unidirectional data flow?

<details>
<summary>Answers</summary>  

- It makes the logic of your app more predictable and easier to understand.
- It encourages data normalization, which avoids having to maintain multiple, independent copies of the same data throughout your application.

</details>

### Parts of Flux

Flux architecture has four parts:
- Dispatcher
- Store
- Actions
- Views (Component)

Let's explore what each of them does.

**Dispatcher**

  * Is responsible for receiving actions and **dispatching** them to the store.
  * There should be only one singleton dispatcher in each application.

**Store**

  * Holds the data of an application.
  * Represents **shared** state that's centrally managed.
  * Data in a store must only be mutated by responding to an action.
  * Every time a store's data changes, it must emit a **change** event.
    * This makes the views (components) aware of the change so they can re-render if they were dependent on the part of state that changed.
  * An application can have more than one store.

**Actions**

  * Events represented by JavaScript objects that describe an interaction within your application.
  * All actions have a `type` field that describes the action. For example:

    ```js
      {
        type: 'addTodo',
        name: 'pay rent'
      }
    ```

  * All stores will receive the action and handle it accordingly.

**Views (Components)**

  * Views display data from stores.
  * Views must **subscribe** to change events from a store in order to be made aware of any changes.
  * In React, views are represented as components.
    * Components will re-render after receiving new data from a store.

------

## What Is Redux? (45 min)

Flux is cool and all, but we're here to talk about Redux. So how does it tie in?

Redux is a **state management library** based on the Flux design pattern.

While Redux is commonly used with React applications, it's actually framework-agnostic, which means it can also be used with other JavaScript frameworks like Vue.js and AngularJS.

### Principles of Redux

Here are three things you need to remember about Redux:

  * State is the single source of truth.
  * State is read-only.
  * Changes to state are made with pure functions.

These principles are meaningless without any explanation, so let's review each of them.

**State is the source of truth.**

  * State in a Redux application is stored in a single object tree.
  * This makes it easier to debug and inspect the application.

**State is read-only.**

  * State can only be changed via an action and should not be directly modified by any other means.
  * Changes to state are centralized, which helps avoid race conditions and makes the application easier to test and debug.

**Changes to state are made with [pure functions](https://www.freecodecamp.org/news/what-is-a-pure-function-in-javascript-acb887375dfe/).**

  * Reducers are pure functions (i.e., functions with no side effects) that take the previous state and an action and return the next state.

### Anatomy of a Redux Application

This diagram will help you visualize the various parts of a Redux application. It shows some concepts we've already looked at and some we haven't yet met.

Let's break it down into four major parts: store, reducers, actions, and views.

![Redux diagram](../images/redux-diagram-updated.png)

**Store**

  * The Redux store holds the application's state.
  * There is only one store in any Redux application.

**Reducers**

  * Reducers are pure functions that take the current state of an application, perform an action, and return a new state.
  * Reducers specify how the state of an application changes in response to an action sent to the store.

**Actions**

  * Actions are events.
  * Actions are the only way you can send data from your application to your Redux store.
  * This data can be from user interactions (e.g., links, button clicks, typing in input), API calls, or even form submissions.
  * Actions are created via an action creator.

**Views (Components)**

  * Components subscribe to changes in the Redux store.
  * Changes to global state in the Redux store trigger all subscribed components to re-render.
  * Components send actions using `store.dispatch()`.

### Redux vs. Flux

So, we've got Redux and we've got Flux. What's the connection?

With a partner, spend a few minutes reviewing what we've already discussed and listing out some key **similarities and differences between Flux and Redux**. Then, we'll debrief as a class.

#### Answers

Here are a few similarities based on what we've covered so far:
- Store holds the data of an application.
- Views must **subscribe** to change events from a store.
- Actions are events that interact with your application.

And a few differences:
- Redux is a library and Flux is a design pattern.
- Unlike Flux, Redux doesn't have the concept of a dispatcher but instead relies on pure functions (i.e., reducers) to trigger changes to the store.
- Unlike Flux, Redux **assumes that you never mutate your data**.

  * Mutating data inside reducers is **strongly discouraged**.
  * Instead of mutating data, you're encouraged to update copies of objects and arrays and store them as new representations of state.
  * The end result of this approach is that we get a history of the application's states over the course of its usage. This is a great resource for developers debugging a complex user interface, for example. A developer using Redux in this way could see the exact series of user actions that produces the bug. It's like the principles of Git applied to application state rather than file state.

- Flux advocates an application have one or more stores, while Redux recommends storing the state of your entire application in an object **within a single store**.

We'll be looking at store in a lot more detail soon, but to start, here's a simple approximation of a store:

```js
class Store {
  constructor() {
    this.subscriptions = []
    this.state = null
  }

  getState() {
    return this.state
  }

  // The ONE FUNCTION that handles any and all updates to our application state:
  reducer(action, state) {
    // decides the type of state change
    switch(action.type) {
      case 'ADD_TODO':
        return {
          id: action.id,
          text: action.text,
          completed: false
        }
      case "TOGGLE_TODO_COMPLETED":
        return {
          ...state, // object spread operator
          completed: !state.completed
        }
      default:
        return state
    }
  }

  // Called anytime the reducer applies an action to a state:
  subscribe(subscription) {
    this.subscriptions.push(subscription)
  }
}
```

> **Knowledge Check**: What do you notice about what's going on here? Does anything jump out at you?

------

## When to Use Redux (30 min)

As you've probably noticed about software development so far, there are lots of reasons for and against using any given technology. There's no such thing as a silver bullet, and even technologies that are great in a lot of instances aren't right across the board. The same holds true for Redux.

### Benefits of Redux

1. Redux makes the state **predictable**.

    * Changes to state are made via pure functions (reducers), which means that if the same state and action are passed to a reducer, the same result is always produced.
    * The state is also immutable and is never changed. This makes it possible to implement arduous tasks like infinite undo and redo.
    * It's also possible to implement time travel: the ability to move back and forth among the previous states and view the results in real time.

2. Redux applications are highly **maintainable**.

    * Redux is strict about how code should be organized, so it makes it easier for someone with knowledge of Redux to understand the structure of any Redux application.

3. Redux applications are **easy to debug**.

    * By logging actions and state, it's easy to understand coding errors, network errors, and other forms of bugs that might come up during production.

4. Redux provides for **easy testing**.

    * It's easy to test Redux apps because the functions used to change the state are pure functions.

### On the Flip Side

Redux isn't always the best tool for the job. Even Dan Abramov, the creator of Redux, thinks so.

Take a few minutes on your own to read through his blog post, ["You Might Not Need Redux."](https://medium.com/@dan_abramov/you-might-not-need-redux-be46360cf367#.47e1bpmhj)

When you're done reading, partner up and discuss the article. Focus specifically on the trade-offs Abramov mentioned:

  > "Redux offers a trade-off. It asks you to:
  >  * Describe application state as plain objects and arrays.
  >  * Describe changes in the system as plain objects.
  >  * Describe the logic for handling changes as pure functions."

We'll debrief the article as a class, focusing on the trade-offs or drawbacks of Redux and the specific use cases for which it works best.

#### Answers

Despite its benefits, Redux is not necessary for every app. The blog post lists use cases for Redux, features that Redux provides to the application developer, and the implementation limitations that Redux imposes. As Dan puts it:

  > "However, if you’re just learning React, don’t make Redux your first choice. Instead, learn to think in React. Come back to Redux if you find a real need for it, or if you want to try something new. But approach it with caution, just like you do with any highly opinionated tool."

For this lesson, we're throwing caution (or a regard for our own sanity) to the wind. There's a formidable learning curve with Redux, but the exposure is valuable for a few reasons:

- It's being increasingly adopted by React developers, especially by teams working on large applications.
- Working with Redux exposes us to elegant applications of functional programming and conveys its power and potential. Functional programming presents us with the challenge of having to think in new ways about how our programs are composed and pass data.
- Its limitations force the developer to carefully consider the structure of their application.

----

## Functional Programming and Redux (30 min)

You may hear developers talking about how **functional programming** is revolutionizing JavaScript and wonder how this is so. Well, it's your lucky day: We're about to tell you what the big deal is!

Let's revisit the concept of pure functions, which are a big part of Redux.

> Given any input, a pure function will **return the exact same output**. It will also have **no side effects**.

No side effects means that the function doesn't modify anything outside its own scope. This also means that the pure function is only concerned with returning some output that's a function of its input.

**Impure functions** include:
- `Math.random()`
- `new Date().getTime()`
- `$.ajax()`
- `[].push()`

**Pure functions** include:
- `[].map()`
- `[].reduce()`
- `Object.assign()`

Part of the power of React is this idea applied to views. We pass in `props` to a component and we get the same predictable component every time.

In short, applying concepts of functional programming to a front-end library ensures a high degree of predictability. It also creates a modular architecture that allows a library like Redux to intervene in how React manages state.

Redux will use functional programming's approach to function composition: reusing certain functions in the construction of other functions. Ultimately, these aggregated functions provide the functionality of Redux.

### Avoiding the Mutation of State

A handy application of functional programming in Redux is to help us deal with immutable data. ES6 has a few features to help us do this.

#### `Object.assign()`

This gives us a powerful way of **copying objects**. For example:

```js
let cat = {
  name: "Meowy Mandel",
  meowy: true
}

let copiedCat = Object.assign({}, cat)
```

Note that this only works for shallow copies. It doesn't do a proper deep copy (properties more than one level nested are still referenced to the old object). Here's an example of shallow copy:

```js
let cat = {
  name: "Meowy Mandel",
  meowy: true,
  friends: {
    sparkles: true,
    rufus: false
  }
}

let newCat = Object.assign({}, cat)

newCat.friends.sparkles = false;
cat.meowy = false;

console.log(cat);
console.log(newCat);
```

#### The `...` spread operator

This gives us a nice way of **combining arrays**. It exposes, or "unwraps," the values in an array. For example, if we have...

```js
let fruits = ["Tomato", "Cucumber", "Pumpkin"]
let updatedFruits = [...fruits, "Avocado"]
console.log(updatedFruits); // ["Tomato", "Cucumber", "Pumpkin", "Avocado"]
```

...this code is equivalent to:

```js
let fruits = ["Tomato", "Cucumber", "Pumpkin"]
let updatedFruits = fruits.concat("Avocado")
```

#### `.slice()` and `.map()`

For arrays of primitives, we have the reliable `.slice()` (first implemented in ES3) for copying arrays and spread operators for combining arrays or parts of arrays.

> **Remember**: It's `.slice()` and not `.splice()`. `.splice()` is a mutator method, meaning it modifies whatever it's called on. `.slice()` is not a mutator method, so use it for copying all or part of an array.

For arrays of objects, you can use `.map()` in combination with `Object.assign()`. For example:

```js
let todos = [
    {todo: "learn to thrash"},
    {todo: "learn redux"},
    {todo: "hang tight"},
    {todo: "stay loose"}
]

let todosCopy = todos.map(obj => Object.assign({}, obj))
```

----

## Setting Up Redux (45 min)

Let's walk through the initial steps of adding Redux to an application. We'll build upon this application in the coming lessons.

The first step is to install Redux via `npm`:

```
$ npm install redux --save-dev
```

Then, fork and clone the starter code in this repository and follow the installation instructions in the `readme` file.

Now we can get started building the app. We'll create our store, which will be used to help us manage our central state. Create a directory for the store:

```
mkdir src/store && touch src/store/index.js
```

```js
// src/js/store/index.js

import { createStore } from 'redux'
import todoApp from '../reducers/index'
const store = createStore(todoApp)

export default store
```

`store` is the result of `createStore()`, which in turn is a function from the Redux library. `createStore()` takes a reducer as the first argument — in our case, we passed in `todoApp`.

The most important concept here is that state in Redux comes from reducers. We'll go into more detail about reducers during the next lesson, but for now, think of a reducer as simply a JavaScript function that takes two parameters — the current state and an action (more about actions in an upcoming lesson) — and returns a new state.

**The short version**: Reducers produce the state of your application.

In our example, we’ll be creating a simple reducer taking the initial state as the first parameter. As a second parameter, we’ll provide an action.

For now, the reducer will do nothing other than return the initial state:

```
$ mkdir src/reducers && touch src/reducers/index.js
```

```js
// src/js/reducers/index.js

const initialState = {
  visibilityFilter: 'SHOW_ALL',
  todos: [
    {
      text: 'grocery shopping',
      completed: true
    },
    {
      text: 'workout',
      completed: false
    }
  ]
}

function todoApp(state = initialState, action) {
  return state
}

export default todoApp
```

Our first reducer is a simple one: It returns the initial state without doing anything else. Notice how the initial state is passed as a default parameter.

Let's confirm that the initial setup works. To do so, we'll export the `store` as a global variable. Update **`src/index.js`** to add the following lines:

```js
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import store from './store/index' // <- add this

window.store = store // <- add this

ReactDOM.render(<App />, document.getElementById('root'))
```

Then, run the app in development mode:

```
$ npm start
```

Next, open up the **console** section of your browser's Developer Tools. In the browser, we'll call `store.getState()` and it should return the current state of our application (located in the store).

![store.getState](../images/console-getstore-example.png)

----

## Conclusion (5 min)

In the next lesson, we'll cover reducers in more detail. But before we move on, let's recap some key things we learned in this lesson (and we learned a lot):

- In React, state influences what components ultimately render.
- Redux is a library, while Flux is a design pattern.
- Both Flux and Redux adhere to the concept of unidirectional data flow, which results in our applications being more predictable and easier to understand.
- Redux makes state changes predictable.

#### Additional Resources

* [ReactJS: Props vs. State](http://lucybain.com/blog/2016/react-state-vs-pros/)
* [Understanding ReactJS `setState()`](https://medium.com/@baphemot/understanding-reactjs-setstate-a4640451865b)
* [React FAQs on Component State](https://reactjs.org/docs/faq-state.html)
* [Flux Concepts](https://github.com/facebook/flux/tree/master/examples/flux-concepts)
* [Differences Between Redux and Flux](https://redux.js.org/introduction/prior-art)
