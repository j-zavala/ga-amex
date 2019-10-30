---
title: React Film Lab
type: Lab
duration: "5:00"
creator:
    name: Rachel Moskowitz (adapted from NYC-SEI)
---

# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) Starting a Film Project Lab

This project was created with `create-react-app`. Once you have the app forked and cloned, you should run `npm install`. You can then run it with `npm run start`.

## Your Mission

Today, the plan is to identify the app components, create the overall structure, and split that structure into individual components. You'll pass films as props to each component and ultimately use iteration to render one component for each film. At the end of all four parts of this exercise, you'll have this app:

![bladerunner](bladerunner.png)

### Tasks

**Important**: After each step, check your application to see how it looks before moving on. It's good practice to make sure your app is working correctly before adding new functionality.

<details>
  <summary>Hint</summary>
  Don't forget any <code>import</code> statements as you add more files.
</details>

#### Step 1: Create Baseline Layout

First, create the layout. You'll have a `FILMS` column and a `DETAILS` column.

Have the provided `App` component render the following code:

```html
<div className="film-library">
  <div className="film-list">
    <h1 className="section-title">FILMS</h1>
  </div>

  <div className="film-details">
    <h1 className="section-title">DETAILS</h1>
  </div>
</div>
```

#### Step 2: Create New Components

Move `film-list` and `film-details` into their own separate components (in separate files): `FilmListing` and `FilmDetails`, respectively.

Make sure you now call these components in `App.js`. Check your app in the browser. If you've done it correctly, nothing will have changed and the application will look the same.

#### Step 3: Pass Props to New Components

Import the `TMDB` to your `App.js`.

Pass the films (stored in `TMDB.films`) to each of your new components as props.

If you check your file, it still shouldn't look any different. We're sending the props to the components, but we're not using them yet.

<details>
  <summary>Hint</summary>
  For now, this step is just changing the <code>App.js</code> file to make sure it imports the film file and passes props.
</details>

#### Step 4: Render a Film

In the `FilmListing` component, render the title of just one film as an `<h1>` below the `section-title`.

Does "It" appear on the left side of your browser?

<details>
  <summary>Hint</summary>
  The film's prop is an array, and you just want the title from the first one.
</details>


#### Step 5: Create and Render an Array of Film Title Elements

Inside the `render()` method, right above the `return`, create a variable called `allFilms`.

Inside of `allFilms`, use `.map()` to iterate over the collection of films and create an element for each one that holds the film title. (Here's the [map documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map).

Then, render the `allFilms` variable below the `section-title` (you can delete the `<h1>` you created in Step 4).

You should have a list of all of the films appear in the left column.

<details>
  <summary>Hint: Need help on <code>map</code>?</summary>
  This step will look like this in your <code>render()</code> method (above the <code>return</code>):
  <code> let allFilms = this.props.films.map( film => ( your-jsx-per-film-here ))</code>
    Then, you'll just need to call <code>{allFilms}</code> in your JSX where you want the titles to appear.
</details>



#### Step 6: Move the Film Rows to Their Own Components

For each film row, create a new component called `FilmRow.js`. Have `.map()` render your `FilmRow` component. When creating this, don't forget to pass the individual `film` prop to the component!

Additionally, remember to import your `FilmRow` component to `FilmList`.

Once you have this working, pass `film.id` as a `key` prop to `FilmRow` (although you won't use it yet).

#### Step 7: Flesh Out Each Film Row

Make each film row in the film list look like the main finished image using the following markup (replace `TITLE` and `YEAR` with the actual title and year of the film):

```
<div className="film-row">
  <img src={posterUrl} alt="" />

  <div className="film-summary">
    <h1>TITLE</h1>
    <p>YEAR</p>
  </div>
</div>
```

- You'll have to create the `posterUrl` for each film by combining the `https://image.tmdb.org/t/p/w780/` prefix with each film's `poster_path` property.

- You'll also have to extract the year from the `release_date` property. To do this, you'll need to figure out how to use the [`getFullYear()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getFullYear) JS method.

<details>
  <summary>A hint on <code>getFullYear().</code></summary>
  code>getFullYear()</code> will be a single line of new code, and you'll use the keywords <code>new</code> and <code>Date</code>.
</details>


#### Step 8: Move Film Posters to Their Own Component

Because the poster requires you to create the URL first, move those elements to their own component (this could be reusable later). Don't forget to pass the film as a prop to the new `FilmPoster` component.


# Continue to [Part 2](./part2.md)
