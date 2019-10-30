| Title | Type | Duration | Author |
| -- | -- | -- | -- |
| Reducers | Lesson | 3:55 | Kareem Grant |

# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) Reducers

### Learning Objectives

At the end of this lesson, students will be able to:
* Explain how reducers work.
* Use reducers to update state while avoiding mutations.
* Split reducers to create more readable code.

### Lesson Guide

| Time   | Activity | Topic |
| ---    | ---      | --- |
| 5 min  | Overview | Lesson Objectives |
| 15 min | Lecture  | What Are Reducers? |
| 20 min | Guided Practice | How Do Reducers Work? |
| 20 min | Guided Practice | Reducers in Action |
| 30 min | Guided Practice | The Spread Operator |
| 30 min | Guided Practice | Updating State Without Mutations
| 40 min | Guided Practice | Updating State in Our `todo` App |
| 40 min | Independent Practice | Add Update Functionality to Reducers |
| 30 min | Guided Practice | Splitting Reducers |
| 5 min  | Conclusion | Review/Recap |

## Overview (5 min)

In this lesson, we'll take a deeper look at reducers and the crucial part they play in the Redux ecosystem.

> **Knowledge Check**: Who can recap the definition of reducers we learned in the previous lesson?

------

## What Are Reducers? (15 min)

Let's bring up our old friend — the Redux diagram — again for this lesson.

![Redux diagram: reducers](../images/redux-diagram-reducers-updated.png)

A couple of quick facts on reducers:

* Reducers **specify how the application's state changes in response to actions sent to the store**.
* Reducers live in the Redux store.
* Reducers respond to actions sent to the store.
* Reducers **handle** the actions and produce a new state.
* Reducers are [pure functions](https://www.freecodecamp.org/news/what-is-a-pure-function-in-javascript-acb887375dfe/): functions with no side effects that always return the same output given the same input.

### Reducers and Immutability 

Redux reducers determine how the state of your application should change in response to actions.

Reducers are pure functions; in Redux, that means reducers facilitate updates to the state **without mutating (i.e., changing) the current state**.

> **Knowledge Check**: Just to make sure we're all on the same page, can someone shout out what mutable and immutable mean?

**Mutable** means changeable, while **immutable** means not able to be changed. So when we say that state in Redux is immutable, we mean that it can't or won't be changed.

Developers will usually find themselves updating either an object or an array when working with state.

-----

## How Do Reducers Work? (20 min)

Reducers in Redux take the current state of an application and the action **as parameters** (remember: reducers are just functions), perform that action, and return a new state:

```js
(previousState, action) => newState
```

We'll walk through the following code example together before you see everything in action during the exercise:

```js
// initial state
const initialState = {
  visibilityFilter: 'SHOW_ALL',
  todos: []
}

/*
  todoApp - pure function that takes two parameters:
   1. current state
   2. action
    
    example:

    {
      type: 'SET_VISIBILITY_FILTER',
      filter: 'SHOW_COMPLETED'
    }

   and returns a new state
*/

function todoApp(state = initialState, action) {
  switch(action.type) {
    case 'SET_VISIBILITY_FILTER':
      return { ...initialState, visibilityFilter: action.filter }
    
    default:
      return state
  }
}

export default todoApp
```

> **Knowledge Check**: What's going on here?

* Our `todoApp` accepts the current state and the action as parameters.
* Inside the `todoApp`, we use a `switch` statement to match the `action.type`. In our case, we only have one action type we're matching against: `SET_VISIBILITY_FILTER`.
* **State is NOT mutated**. In this case, we used the [ES6 spread operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax#Spread_in_object_literals) syntax to create a new state **free of any mutation** by merging a copy of the current state with the `visibilityFilter: action.filter` object.
* The previous state is returned in the default case; this occurs when the reducer receives an **unknown action**.

-----

## Reducers in Action (20 min)

On to the exercise! We'll update the `todo` application, add functionality to our reducer, and test it out in the console.

We'll **lightly** introduce actions in this exercise without going into too much detail, but rest assured these actions will be covered in more detail in the next lesson.

This exercise will not involve any UI — this is intentional so you can focus on how the different parts of Redux work in isolation. We'll incorporate UI in the "Incorporating React" lesson.

With that, update `src/js/reducers/index.js` to reflect the following code:

```js
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
  switch(action.type) {
    case 'SET_VISIBILITY_FILTER':
      return { ...initialState, visibilityFilter: action.filter }
    
    default:
      return state
  }
}

export default todoApp
```

Then, run the app in development mode:

```
$ npm start
```

Next, open up the console of your browser's Developer Tools. In the browser, we'll call `store.dispatch()`, which will dispatch an action to the store. (Dispatching an action is just another way of saying, "Send an action to the Redux store.")

We'll discuss actions in more detail in the next lesson, but for now, think of actions as simple objects describing an event within our application that can potentially update our application's state.

In the console, do the following:

1. Run this command to get the current state:

    `store.getState()`

2. Run this command to send an action to our Redux store:

    `store.dispatch({type: 'SET_VISIBILITY_FILTER', filter: 'SHOW_COMPLETED'})`

    This command will **dispatch** an action to our store. Once received, our reducer will check if the `type` matches one of the action types listed in the `switch` statement. Remember: Actions are just JavaScript objects.
    
    Here, we're dispatching an action that looks like the following:

    ```js
    {
      type: 'SET_VISIBILITY_FILTER',
      filter: 'SHOW_COMPLETED'
    }
    ```

3. Get the updated state:

    `store.getState()`

    Observe that the state has now been updated: The `visibilityFilter` property in our `state` object has been successfully changed from `SHOW_ALL` to `SHOW_COMPLETED`.

![store.dispatch](../images/console-dispatch-example.png)

------

## The Spread Operator (30 min)

Redux requires that all updates to state are done without directly modifying the existing state (i.e., state is **immutable**).

While there are multiple ways to accomplish this, we'll make use of the spread operator introduced in ES6. Among other things, the spread operator can be used to:
  * Copy objects and arrays.
  * Merge objects and arrays.

The spread operator is a great option for our reducers because they are meant to be **pure functions**.

> **Knowledge Check**: Can someone recap the definition of a pure function?

### Copying Arrays and Objects

The spread operator allows us to easily copy objects and arrays using the `...` syntax. 

Here's an example of using the spread operator to **copy an array**:

```js
const myArray = ['a', 'b', 'c']
const copiedArray = [...myArray] // Use spread operator to copy myArray.

console.log(copiedArray) // => ['a', 'b', 'c']

myArray === copiedArray // => false
```

In the example above, we're using the spread operator to copy `myArray`. Also, note that, even though `copiedArray` contains exactly the same data as `myArray`, they are **different arrays**.

The spread operator can also be used to **copy an object**:

```js
const myObj = { a: 1, b: 2, c: { x: 1 } }
const copiedObj = { ...myObj } // Use spread operator to copy myObj.

console.log(copiedObj) // => { a: 1, b: 2, c: { x: 1 } }

myObj === copiedObj // => false
```

The same pattern from our array example applies to objects.

#### Important Note

The object spread operator only creates a shallow clone of objects and will not clone nested objects (with a depth greater than one). The object spread operator should not be used for deep cloning objects.

In this example, `myObj` was updated by **reference** when `copiedObj` was updated due to the shallow copy restriction.

```js
const myObj = { a: 1, b: 2, c: { x: 1 } }
const copiedObj = { ...myObj } // Use spread operator to copy myObj.
console.log(copiedObj) // => { a: 1, b: 2, c: { x: 1 } }

// Update nested object.
copiedObj.c.x = 100  // => { a: 1, b: 2, c: { x: 1 } }
console.log(copiedObj) // => { a: 1, b: 2, c: { x: 100 } }

// Now print the original object (myObj).
console.log(myObj) // => { a: 1, b: 2, c: { x: 100 } }
// The value of myObj was updated too ^
```

### Merging Arrays and Objects

The spread operator can also be used to merge arrays and objects. 

Here's an example of how you can use the spread operator to add a new element to an array **without modifying the original array**:

```js
const myArray = ['a', 'b', 'c']
const newElement = 'd'

const mergedArray = [...myArray, newElement] // => ['a', 'b', 'c', 'd']
```

A similar approach can be used to **merge objects**:

```js
const myObj = { a: 1, b: 2, c: { x: 1 } }
const newObj = { d: 3 }

const mergedObj = { ...myObj, ...newObj }

console.log(mergedObj) // => { a: 1, b: 2, c: { x: 1 }, d: 3 }
```

You can also directly reference the new object instead of representing it as a variable. The following code snippet returns the same result as the example above:

```js
const myObj = { a: 1, b: 2, c: { x: 1 } }

// Direct reference to { d: 3 }.
// Notice: this approach has no curly braces or preceding ...
const mergedObj = { ...myObj, d: 3 }

console.log(mergedObj) // => { a: 1, b: 2, c: { x: 1 }, d: 3 }
```

-------

## Updating State Without Mutations (30 min)

Next, we'll take a look at how we can use the spread operator to update arrays and objects within our Redux state **without mutating state**.

For this example, we'll add an `action.type` named `'ADD_TODO'` that our `todoApp` reducer will match against. If our reducer is sent an `ADD_TODO` action, it expects there to be an `action.newTodo` object that represents a new to-do item. The desired outcome is to add the new to-do items to our `todos` array that is part of our `state`:

```js
const initialState = {
  visibilityFilter: 'SHOW_ALL',
  todos: [] // <-- will contain a list of our to-do items.
}
```

This means we need to update a slice of our `state` that represents an array without mutating our current (previous) state. But how?

This can get tricky. Is your brain beginning to bend yet?

Let's try a few methods of achieving this.

#### Attempt No. 1

```js
const initialState = {
  visibilityFilter: 'SHOW_ALL',
  todos: []
}

function todoApp(state = initialState, action) {
  switch(action.type) {
    case 'ADD_TODO':
      state.todos.push(action.newTodo)
      return { ...state, todos: state.todos }
    
    default:
      return state
  }
}
```

> **Knowledge Check**: There's an issue with our initial implementation. Who can spot it?

This line **violates the Redux rule of avoiding mutations**: `state.todos.push(action.newTodo)`. 

> **Knowledge Check**: Where's the violation?

The `Array.push()` method **mutates** the array, which violates the Redux rule of not mutating previous state.

Let's try again.

#### Attempt No. 2

```js
const initialState = {
  visibilityFilter: 'SHOW_ALL',
  todos: []
}

function todoApp(state = initialState, action) {
  switch(action.type) {
    case 'ADD_TODO':
      return { ...state,
        todos: [
          ...state.todos,
          action.newTodo
        ]
      }
    
    default:
      return state
  }
}
```

> **Knowledge Check**: That's better. But what's the improvement?

Let's focus on this specific portion of the code:

```js
  { ...state,
    todos: [
      ...state.todos,
      action.newTodo
    ]
  }
```

Notice that we use the spread operator to do the following:
  * Clone the previous state (`...state`).
  * Merge the new `todos` array into `state` (`{ ...state, todos: [] }`).
  * Clone the `todos` array (`...state.todos`).
  * Add a new item to the end of our copied array (`[..state.todos, action.newTodo]`).

The end result is that we've updated our state **without any mutations**. Nice!

------

## Updating State in Our `todo` App (40 min)

Let's put some of this new knowledge into practice and continue to build on our `todo` app.

In this exercise, we'll update the reducer to support the following functionality:
  * Adding a new to-do item.
  * Toggling a to-do item from completed to not completed and vice versa.

### Adding a New To-Do Item

Update `src/js/reducers/index.js` to reflect the following code:

```js
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
  switch(action.type) {
    case 'SET_VISIBILITY_FILTER':
      return { ...initialState, visibilityFilter: action.filter }

    case 'ADD_TODO':
      return { ...state,
        todos: [
          ...state.todos,
          action.newTodo
        ]
      }
    
    default:
      return state
  }
}

export default todoApp
```

**What's going on here?**

In the code above, we've added another `case` statement that matches the `'ADD_TODO'` action we saw in the previous example. As noted earlier, we're using the spread operator to return a new state without modifying the current or previous state.

Let's test this out in our Chrome Developer Tools. Open your browser's Developer console and do the following:

1. Run this command to get the current state:

    `store.getState()`

2. Run this command to send an action to our Redux store:

    `store.dispatch({type: 'ADD_TODO', newTodo: {text: "do laundry", completed: false}})`

    In this step, we're **dispatching** an `'ADD_TODO'` action to our Redux store to indicate that we want to add another to-do item to our list. Remember that actions are just JavaScript objects.
    
    Here's what the action we just dispatched looks like:

    ```js
    {
      type: 'ADD_TODO',
      newTodo: {
        text: "do laundry",
        completed: false
      }
    }
    ```

3. Get the updated state:

    `store.getState()`

    Observe that the state has now been updated: There are three to-do items in our `todos` list, and the last one reflects the new to-do item that was sent. Success!

![store.dispatch: addTodo](../images/console-dispatch-addtodo-example-updated.png)

### Toggling a To-Do Item

Next, we'll update our reducer to allow us to change the completed status of an existing to-do item.

Below shows what our state looks like now. Each to-do item has two properties: `text` (string) and `completed` (Boolean).

```js
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
```

Update `src/js/reducers/index.js` to reflect the following code:

```js
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
  switch(action.type) {
    case 'SET_VISIBILITY_FILTER':
      return { ...initialState, visibilityFilter: action.filter }

    case 'ADD_TODO':
      return { ...state,
        todos: [
          ...state.todos,
          action.newTodo
        ]
      }

    case 'TOGGLE_TODO':
      return {
        ...state,
        todos: state.todos.map((todo, index) => {
          if(index === action.index) {
            return { ...todo, completed: !todo.completed }
          }

          return todo
        })
      }
    
    default:
      return state
  }
}

export default todoApp
```

In the code above, we've added another `case` statement that matches the `'TOGGLE_TODO'` action.

Let's focus on this specific portion of the code:

```js
  { ...state,
    todos: state.todos.map((todo, index) => {
      if(index === action.index) {
        return { ...todo, completed: !todo.completed }
      }

      return todo
    })
  }
```

Here's an overview of the code that was added:

  * Clone the previous state (`...state`) using the spread operator.
  * Use the spread operator to merge the new `todos` array into `state` (`{ ...state, todos: state.todos.map() }`). (Remember that `Array.map()` returns a **new array**.)
  * Map through the array of to-do items (`state.todos`) and use an `if` condition to find the to-do item with an index that matches `action.index`:

  ```js
        if(index === action.index) {
          return { ...todo, completed: !todo.completed }
        }
  ```

  * If there is a match, we use the spread operator to copy the matched to-do item and update its `completed` status **without modifying the original to-do item**, then return the new to-do item (`return { ...todo, completed: !todo.completed }`).
  * If the index of a to-do item does not match the `action.index`, we simply return that to-do item:

  ```js
        state.todos.map((todo, index) => {
          if (index === action.index) {
            return { ...todo, completed: !todo.completed }
          }

          return todo // Return to-do item if its index does not match action.index.
        })
  ```

Open your browser's Developer console and do the following:

1. Run this command to get the current state:

    `store.getState()`

2. Run this command to send an action to our Redux store:

    `store.dispatch({type: 'TOGGLE_TODO', index: 1})`

    Here, we're **dispatching** a `'TOGGLE_TODO'` action to our Redux store to update the `completed` status of the to-do item that sits at index `1` (i.e., the second to-do item on our to-do list).

    > **Note**: In a production application, we would use the ID of the to-do items instead of the index.

    Here's what the action we just dispatched looks like:

    ```js
    {
      type: 'TOGGLE_TODO',
      index: 1
    }
    ```

3. Get the updated state:

    `store.getState()`

    Observe that the state has now been updated and the `completed` status of our second to-do item (`text: "workout"`) has been changed from `false` to `true`.

![store.dispatch - toggleTodo](../images/console-dispatch-toggletodo-example.png)

------

## Add Update Functionality to Reducers (40 min)

In this exercise, you'll work in pairs to add functionality to the `todo` app.

Your goal is to **update the reducer** to support the ability to **update the text of a to-do item**.

Here's what the action should look like:

```js
      {
        type: 'UPDATE_TODO',
        updatedTodo: { text: 'new text', index: 1 }
      }
```

Test your implementation using your browser's Developer console, similar to the way we've been testing our reducers in the earlier exercises.

<details>
  <summary>Solution code</summary>

**`src/js/reducers/index.js`**

```js
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
      switch(action.type) {
        case 'SET_VISIBILITY_FILTER':
          return { ...initialState, visibilityFilter: action.filter }

        case 'ADD_TODO':
          return { ...state,
            todos: [
              ...state.todos,
              action.newTodo
            ]
          }

        case 'TOGGLE_TODO':
          return {
            ...state,
            todos: state.todos.map((todo, index) => {
              if(index === action.index) {
                return { ...todo, completed: !todo.completed }
              }

              return todo
            })
          }

        case 'UPDATE_TODO':
          return {
            ...state,
            todos: state.todos.map((todo, index) => {
              if(index === action.updatedTodo.index) {
                return { ...todo, text: action.updatedTodo.text }
              }

              return todo
            })
          }
        
        default:
          return state
      }
    }

    export default todoApp
```
</details>

Use your browser's console to dispatch an action like the following ...

   `store.dispatch({type: 'UPDATE_TODO', updatedTodo: { index: 1, text: "Run 3 miles" }})`

...and confirm that the text for to-do item at index `1` was successfully updated.

------

## Splitting Reducers (30 min)

For simple applications, a single reducer function will suffice, but when the code starts to grow in complexity, it's useful to split the reducer into multiple reducer functions.

The process of separating a reducer into multiple reducer functions is referred to as **splitting reducers**. Each reducer only cares about actions that affect the part of the state they maintain, returning their current state for all other actions.

Here's what our current reducer looks like in `src/reducers/index.js`:

```js
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
  switch(action.type) {
    case 'SET_VISIBILITY_FILTER':
      return { ...initialState, visibilityFilter: action.filter }

    case 'ADD_TODO':
      return { ...state,
        todos: [
          ...state.todos,
          action.newTodo
        ]
      }

    case 'TOGGLE_TODO':
      return {
        ...state,
        todos: state.todos.map((todo, index) => {
          if(index === action.index) {
            return { ...todo, completed: !todo.completed }
          }

          return todo
        })
      }

    case 'UPDATE_TODO':
      return {
        ...state,
        todos: state.todos.map((todo, index) => {
          if(index === action.updatedTodo.index) {
            return { ...todo, text: action.updatedTodo.text }
          }

          return todo
        })
      }
    
    default:
      return state
  }
}

export default todoApp
```

In our reducer, `visibilityFilter` and `todos` are updated separately, which makes them great candidates for splitting into separate reducers. Let's see how we'd do that.

Update `src/js/reducers/index.js` to reflect the following:

```js
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

function todosReducer(state = [], action) {
  switch(action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        action.newTodo
      ]

    case 'TOGGLE_TODO':
      return state.map((todo, index) => {
        if(index === action.index) {
          return { ...todo, completed: !todo.completed }
        }

        return todo
      })

    case 'UPDATE_TODO':
      return state.map((todo, index) => {
        if(index === action.updatedTodo.index) {
          return { ...todo, text: action.updatedTodo.text }
        }

        return todo
      })
    
    default:
      return state
  }
}

function visibilityFilterReducer(state = 'SHOW_ALL', action) {
  switch(action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter

    default:
      return state
  }
}

function todoApp(state = initialState, action) {
  return {
    visibilityFilter: visibilityFilterReducer(state.visibilityFilter, action),
    todos: todosReducer(state.todos, action)
  }
}

export default todoApp
```

After rewriting the reducer, we can see that we've **split** it into two separate ones: `todosReducer()` and `visibilityFilterReducer()`. Each reducer will now be **responsible for managing its own slice of the state**.

Let's take a closer look at what that means by inspecting the parameters of `todosReducer()`:

```js
function todosReducer(state = [], action) {
  // Removed for the purpose of this example.
}
```

`todosReducer()` accepts `state`, but that `state` is an array and NOT an object. Why?

This is due to the fact that our `todosReducer()` is only going to manage the slice of state that handles our list of to-do items — and that list happens to be an array.

```js
const initialState = {
  visibilityFilter: 'SHOW_ALL',
  todos: [ // <-- Our todosReducer() will only manage this slice.
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
```

This pattern is called **reducer composition**, and it's the fundamental pattern of building Redux apps.

Splitting the reducer resulted in a change within our reducers regarding how we used the spread operator to make changes to state without mutations. Let's take a look at a **before** and **after** example.

#### Before Splitting the Reducers

```js
  case 'ADD_TODO':
    return { ...state,
      todos: [
        ...state.todos,
        action.newtodo
      ]
    }
```

#### After Splitting the Reducers

```js
  case 'ADD_TODO':
    return [
      ...state,
      action.newTodo
    ]
```

This change is a byproduct of our `todosReducer()` **only managing the `todos` array** within our state. Because of this, our spread operator logic becomes less complex.

Now, let's focus on the `todoApp()` function:

```js
function todoApp(state = {}, action) {
  return {
    visibilityFilter: visibilityFilterReducer(state.visibilityFilter, action),
    todos: todosReducer(state.todos, action)
  }
}

export default todoApp
```

Remember that splitting reducers is meant to help keep our code maintainable. But Redux requires that we create a store with a **single reducer**. (We'll learn more about the `createStore()` function in a later lesson.)

To meet this requirement, we repurposed our `todoApp()` function and turned it into a **root reducer**, which is composed of multiple reducers (in our case, the `visibilityFilterReducer()` and `todosReducer()`). This process of combining multiple reducers into a single root reducer is called **reducer composition**.

Test the refactored reducers by using your browser's Developer console to dispatch actions (as we've done many times in the last two lessons) and confirm that everything continues to work as before.

------

## Conclusion (5 min)

Here's what we covered about reducers:

- Redux reducers determine how the state of your application should change in response to actions.
- Reducers are pure functions; in Redux, that means reducers facilitate updates to the state **without mutating (i.e., changing) the current state**.
- The spread operator was introduced in ES6 and is commonly used in Redux to update state without modifying the previous state.
- The process of separating a reducer into multiple reducer functions is referred to as splitting reducers.

In the next lesson, we'll cover actions and action creators in more detail.

#### Additional Resources

- [Redux Reducers Documentation](https://redux.js.org/basics/reducers)
- [MDN Web Docs: Spread Syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)
- [Splitting Up Reducer Logic](https://redux.js.org/recipes/structuring-reducers/splitting-reducer-logic)
- [What Is a Pure Function in JavaScript?](https://www.freecodecamp.org/news/what-is-a-pure-function-in-javascript-acb887375dfe)
- [How to Deep Clone a JavaScript Object](https://flaviocopes.com/how-to-clone-javascript-object/)
- [Spread Operator Does Not Deep Copy Properties](https://bambielli.com/til/2017-01-29-spread-operator-deep-copy/)
