# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) Lifting State


## Your Mission

You're almost finished! Now you need to:

- Add films to a user's faves.
- Filter the films the user is looking at.

To do this, you'll need to move your state up to the top of the component tree so that all of the data is more easily shared across components. Remember unidirectional flow: Data is going to go down the component tree, so you'll want your states to be as high up as possible.

![](http://bitmakerhq.s3.amazonaws.com/resources/react-film-library-component-hierarchy.png)

### Task 1: Add State to the `App` Component

Your `App` component will be the main place where states are set. From here, these states can be passed as props down to the other components.

#### Step 1: Add a Constructor to `App.js`

In `App.js`, start by creating a constructor. Your constructor should accept a `props` argument and should call `super(props)`.

#### Step 2: Initialize the State Object

Set three states:

1. `films`: Initialize this key to hold a reference to `TMDB.films`.
2. `faves`: This key should simply start off as an empty array.
3. `current`: This key should start off as an empty object.

#### Step 3: Pass State Values to `FilmListing` and `FilmDetails` as Props

Now that you have state stored on the `App` component, you want to pass those as props to your child components. Just change `App.js` for now:

- `FilmListing` should receive a `films` prop that now references your state's `films` property and a `faves` prop that should reference your state's `faves` property.

- `FilmDetails` should receive a `films` prop that references your state's `current` property.

Because you aren't doing anything with these props yet, nothing should change.

### Task 2: Move the `Fave` Event Handler Up the Component Tree

When a user favorites a film, that information needs to be shared with the rest of your components. For example, `FilmListing` needs to know which films are favorites to enable the filter.

This isn't possible right now, because you're currently handling the favorite-toggling of a film on the `Fave` component. The `Fave` component is located at the bottom of the component hierarchy, and props and state only flow downward. Additionally, the `Fave` component doesn't even know which film is being favorited, so this isn't a great place to store a state for whether or not a film is a favorite.

Let's fix this:

#### Step 1: Remove the State Setter in the `Fave` Constructor

Take the `isFave` state out of the `Fave` constructor.

#### Step 2: Replace `setState()` in the `handleFaveClick()` Handler

Because you're no longer holding the state in the `Fave` component, you don't want to set the `isFave` state in the `handleClick()` event handler anymore.

Instead, assume that the parent component will pass a handler called `onFaveToggle()` to you through the `props` object.

Change `handleClick()` as follows:

```js
# /src/Fave.js

handleClick(e) {
  e.stopPropagation()
  console.log('Handling Fave click!')

  // Add this line. You'll call the function passed through props.
  this.props.onFaveToggle()

  // Delete the setState() line. You no longer track state here.
  // this.setState({isFave: !this.state.isFave})
}
```

This way, when a user clicks, `onFaveToggle()` will be called at a higher component level.

#### Step 3: Change `isFave` to a Prop Rather Than a State

You've taken the `isFave` state out of `Fave` and will be passing a prop called `isFave` instead. In the `Fave` component, replace `this.state.isFave` with `this.props.isFave`. You'll send that information down from a parent component that knows this info.

This is all you need to change in `Fave.js`! It will still check to see if the user has clicked the `Fave` toggle button. The difference is that, once the user clicks, instead of changing the `faves` array directly, the `handleClick()` function will instead call `onFaveToggle()` to do it instead.

You'll define `onFaveToggle()` in a higher component.

#### Step 4: Define `handleFaveToggle()` on the `App` Component

The `Fave` component is expecting a prop, but one doesn't exist yet. Let's change that.

You'll move the favorite toggle functionality all the way up to the `App` component, where the state for `films` and `faves` is stored.

In the `App` component, create a `handleFaveToggle()` function. It doesn't need to do anything yet, but soon you'll update the `faves` array when a film is favorited or unfavorited. The `handleFaveToggle()` function should accept a film object as an argument (this will be the film that the user is toggling on).

#### Step 5: Bind the Handler to the Component

As you saw previously, you need to bind your custom component methods to ensure `this` refers to the component within the body of the method.

Add the following to the `App` component's constructor:

```js
this.handleFaveToggle = this.handleFaveToggle.bind(this)
```

#### Step 6: Clone the `faves` State

To recap, the `faves` state is going to hold the user's favorite films. Your goal: When the user clicks the icon to favorite or unfavorite a film, either add or remove the given film from the `faves` array.

To do this, you need to call `setState()` and give it the updated array (you can't just update it directly; otherwise React won't know to re-render the components to reflect the changes). To accomplish this, you'll make a copy of the existing faves array, update it, and then pass the copy to `setState()`.

First, just make a copy. Inside `handleFaveToggle()`, use the JavaScript [`Array.prototype.slice()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice) method to make a copy and store it in a variable called `faves`.

#### Step 7: Find the Index of the Passed Film in the `faves` Array

Underneath the slice, use the JavaScript [`Array.prototype.indexOf()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf) method to store the position of the film in the array in a `const` variable called `filmIndex`.

Now, `filmIndex` will be an index value starting at `0`.

#### Step 8: Set Up a Conditional for Adding or Removing Film From the `faves` Array

If the film is found in the array, `indexOf()` will return an index value starting at `0`. Conversely, `indexOf()` will return `-1` if the element isn't found (if the film it's looking for isn't currently in the `faves` array).

Because this `handleFaveToggle()` function is designed to change the array of the user's favorite films, there are two options:
- If the film is already in their favorites, then when the user clicks the button, they want to remove it from their favorites. You need to take it out of the `faves` array.
- If the film is not in their favorites, then when the user clicks the button, they want to add it to their favorites. You need to add it to the `faves` array.

Write a conditional statement with the two cases. When adding a film to `faves`, log out `Adding [FILM NAME] to faves...`; when removing a film from `faves`, log out `Removing [FILM NAME] from faves...`.

#### Step 9: Change Whether or Not the Film is in `faves`

To remove a film that's already in the `faves` array, use the [`Array.prototype.splice()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) method.

To add a new film to the `faves` array, just [push()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push) it on to the end of the array.

#### Step 10: Use `setState()` to Update the State of `faves`

Now that you have updated the `faves` array, you need to call `setState()` so React will re-render the appropriate components in the tree. You can make this very succinct by using object literal shorthand. It should look like this:

```js
this.setState({faves})

// The above is exactly the same as this.setState({faves: faves}).
```

#### Step 11: Pass the `handleFaveToggle()` Function to `FilmListing` Through Props

Now that the `handleFaveToggle()` method lives on the `App` component, you'll want to pass it all the way down the tree so that you can call it when the `Fave` button is clicked.

In the `App` component's `render()` method, add a new prop to the `FilmListing` component called `onFaveToggle`. Its value should be a reference to the `handleFaveToggle()` method you just finished writing.

#### Step 12: Pass the `onFaveToggle()` Function to `FilmRow` Through Props

In the `FilmListing` component, you render one `FilmRow` component for each film in the `films` prop. You need to pass the `onFaveToggle()` function down to each `FilmRow` (with the ultimate goal being that you call it in the `Fave` component), but you want to ensure that it passes the current film up to the `handleFaveToggle()` method in the `App` component when called.

To make this happen, you won't simply pass the function down to `FilmRow` as a prop as-is; you'll wrap it in another function that simply calls the `onFaveToggle()` function passed down from `App` through props (remember, `onFaveToggle()` in `FilmListing` is just a reference to `handleFaveToggle()` in the `App` component).

In the `FilmListing` component's `render()` method, add the `onFaveToggle` variable. Replace your existing `.map()` function with this:

```js
const allFilms = this.props.films.map((film) => {
  return (
  <FilmRow
  film={film}
  key={film.id}
  onFaveToggle={() => this.props.onFaveToggle(film)}
  />
)
})
```


#### Step 14: Pass the `onFaveToggle()` Function to `Fave` Through Props

Now, the `FilmRow` component is receiving the `onFaveToggle`() function as a prop. However, the `FilmRow` component doesn't need the function; the `Fave` component does. You'll pass it along as a prop to `Fave`.

In `FilmRow`'s `render()` function, where you call the `Fave` component, add a prop called `onFaveToggle` and pass it the `onFaveToggle` prop that `FilmRow` received.

Great! The `onFaveToggle()` function is now being passed from the `App` component where it's defined, down to the `FilmListing` component, down to the `FilmRow` component, down to the `Fave` component.

#### Step 15: Pass `isFave` Down From `FilmListing` Through `FilmRow`

The `Fave` component is also expecting to receive a prop called `isFave`, so you need to pass `isFave` to the `Fave` component from `FilmRow`.

`FilmRow` doesn't know about the `faves` array, but its parent, `FilmListing`, does.

The `isFave` prop should be `true` or `false` depending on whether the film is in the `faves` array.

In `FilmListing`, when creating each `FilmRow`, pass a prop called `isFave` whose value uses the [`Array.prototype.includes()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes) method to determine if the film is in the `faves` array or not.

Now `FilmRow` is getting the `isFave` prop, but it doesn't need it. It only needs to pass it along. In `FilmRow`, pass that prop through to `Fave`.

`Fave` is now getting the `true` or `false` Boolean of whether or not a film is a favorite (`isFave`), as well as being passed the favorite toggle function (`onFaveToggle()`).

`Fave` has everything it needs!

Look in your browser to see this working: The JavaScript console will log if something is added or removed from the user's favorites.

#### Step 16: Update `Faves` Counter

Currently in the browser, the `faves` counter the user sees is always `0`. You'll update the counter in the `FilmListing` to accurately show the number of faves in the array.

If you look at what's rendered in the `FilmListing` component, right now the `faves` counter is hard-coded to `0`. Replace that with the length of the `faves` array that is received through the props.

Now you have favorites properly stored and available to all components, and you have a counter that accurately reflects that to the user.

Great job! Check it out in your browser.

### Task 3: Move the Details Event Handler Up Component Tree From `FilmRow`

In `FilmRow`, there's still the function to handle when a user clicks a row for more details.

Following the same steps as you did for the `Fave` event handler, move the `handleDetailsClick()` definition to the `App` component.

For `handleDetailsClick()` in the `App` component, just log to the console and set the `current` state to the passed film for now. You'll handle looking up film details later. Make sure you pass the `current` state as a `film` prop to the `FilmDetails` component.

### Task 4: Make the Filter Work on `FilmListing`

You have the `filter` state on `FilmListing`, but you still need to make it actually change the UI. You're not going to move the `filter` state, because this filter only affects the `FilmListing`, not any other parts of the app.

Add a conditional in `FilmListing` so that, if the `filter` state is set to `filter`, the listing only shows films in the `faves` array. Otherwise, it shows all films.

Try it out! You should be able to add films to your favorites and view just your favorites list by clicking that tab.


# Bonus: Continue to [Part 4](./part4.md)
