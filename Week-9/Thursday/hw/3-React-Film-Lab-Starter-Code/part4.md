# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) Film API

## Your Mission

You're almost finished! Now you need to:

- Show the details of each movie by getting this information from TMDB.
- Refactor your React app to make it as clean as possible.

![](assets/bladerunner.png)

### Task 1: Adding the API Call

API calls in React are handled using the [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) that's provided by modern browsers.

You already have the function where you want the API call to go (`handleDetailsClick()` — when a user clicks for details of a movie, you'll call the API to get those details), so your `fetch()` task will work inside that function. You've set up the rest of your app correctly.

#### Step 1: Set Up the API Key

This step seems complicated, but it isn't! Just take it one step at a time. Because TMDB isn't a public API, you'll need to get an API key to add to your `fetch()` call; then, you'll want to make sure to keep the key in a safe spot.

- To gain access to the TMDB API, you'll need to get an API key from [TMDB](https://www.themoviedb.org).
  - TMDB only gives API keys to users with accounts, so you'll have to sign up first (it's free). However, it will ask for a valid email address.
  - Then, request an API key on your profile page (check out further instructions [here](https://developers.themoviedb.org/3/getting-started)).
  - Once you have your API key, you need to include it in your app. Because you **never want to store app secrets in your repository**, you'll use the [`dotenv`](https://github.com/motdotla/dotenv) package to keep the API key in a local file.

- You'll need to install `dotenv`.
  - Run `npm install --save dotenv` on the command line to add the dependency to your `package.json` file.
  - Create a new file at the root of your project called `.env.local` (accept the system warning).
  - In your `.env.local` file, add the line `REACT_APP_TMDB_API_KEY=<Your TMDB API v3 KEY>`.

***Note**: The `.env.local` file is in your `.gitignore` by default when you create an app with `create-react-app`, so now your secret will never leak into your repository. Important note: Because this is a front-end application, the built JavaScript will contain the key, which means end users will be able to see it. However, that's fine for this practice app, as you'll only be running it locally.*

-You now have an API key saved in `dotenv`. Point your application to it! Add the following to the top of your `TMDB.js` file:

```js
import dotenv from 'dotenv';

dotenv.config();
```

- Replace `'<REPLACE_THIS_WITH_TMDB_API_KEY>'` with `process.env.REACT_APP_TMDB_API_KEY`.

Your secrets are now set up!

#### Step 2: Make a `const` Called `url` with the API's URL

Now that you have the API key to call for movie details, let's go back to making that call.

In your `App.js` `handleDetailsClick()` method, add the following `const` right above your `setState()`:

```JavaScript
const url = `https://api.themoviedb.org/3/movie/${film.id}?api_key=${TMDB.api_key}&append_to_response=videos,images&language=en`
```

This is the URL to which you'll send your request to get detailed information about each film. You're passing the `film.id` and the `TMDB.api_key` as query string parameters.

*Note: Using `${film.id}` is a slightly faster shorthand for embedding variables in strings.*
  - *For example, `const myString = "The " + film.id + " is great"` is the same as writing `const myString = "The ${film.id} is great"`.*


#### Step 3: Make the API Call


Now that you have the API key and URL set up, underneath the new URL variable, `fetch()` the API:

```JavaScript
const url = `https://api.themoviedb.org/3/movie/${film.id}?api_key=${TMDB.api_key}&append_to_response=videos,images&language=en`

fetch(url).then(response => {
  response.json().then(data => {
    console.log(data) // Take a look at what you get back!
  })
})
```

Try clicking a movie row in your browser. The data for it should appear in the console.

#### Step 4: Set the State When the API Call Completes

Let's set your `current` state to be the object you get back from TMDB. Move the `setState` call into the API call:

```JavaScript
response.json().then(data => {
  console.log(data)
  this.setState({current: data})
})
```

Now you have the API call to get information about your chosen movie.

### Task 2: Refactoring Our App

Before you continue to display the movie details to the user, let's clean up your application.

Refactor any components that only have a `render()` method into functional components. Functional components are simpler and will gain performance benefits in future versions of React. It's considered good practice to use them wherever possible.

#### Step 1: Refactor `FilmPoster.js`

1. Replace the `class`/`extends` definition with a function. Remember that your function should accept a `props` argument.
2. Remove the `render()` method, keeping only the `return` function.
3. Replace all instances of `this.props` with simple `props`.
4. Remove `{Component}` from the React `import` at the top, as you no longer use it (but still import `React`).

Check in your browser to make sure the functionality hasn't changed.

#### Step 2: Refactor `FilmRow`

Follow the same steps to refactor the `FilmRow` component.

Check in the browser to make sure the functionality hasn't changed.

#### Step 3: Refactor `FilmDetails`

You haven't written out the `FilmDetails` component yet, but it currently only renders UI. Therefore, you can also make it a functional component.

Follow the same steps as above, once again checking in the browser for functionality.


### Task 3: Adding Film Details

You're almost finished! Next, you'll render the film details you're receiving from the API (and currently logging to the console) in the browser window for the user.

#### Step 1: Add Image URLs for `FilmDetails`

Above `return`, add the following `const` definitions for fetching backdrop and posters:

```js
const backdropUrl = `https://image.tmdb.org/t/p/w1280/${props.film.backdrop_path}`
const posterUrl = `https://image.tmdb.org/t/p/w780/${props.film.poster_path}`
```

#### Step 2: Render the Empty Case for `FilmDetails`

When the app loads, there is no film selected to display in `FilmDetails`. When a user clicks on a film in the `FilmListing`, you want to `fetch()` and show its details. Thus, there are two scenarios for `FilmDetails`:

- The empty scenario (no film is selected).
- The populated scenario (a film is selected).

Start with the empty case. Add the following markup below the `.section-title`:

```html
<div className="film-detail">
    <Subscriptions />
    <span>No film selected!</span>
</div>
```

And don't forget to import your material-ui Subscriptions icon! Refer to the `Fave.js` file for an example of how we imported these previously.

#### Step 3: Conditionally Render the Current Film

To start, create a new variable to hold on to your DOM tree. You'll conditionally assign the value to this variable depending on whether or not there's a film object passed in through the props.

Add this below the two declared `const` variables:

```js
let details
```

Now, you need to determine whether or not there is a film to render.

To do this, you just need to check if there's an `id` property on the `current` prop passed in to `FilmDetail`.

- If not, you want to render the empty case you added in the last step.
- Otherwise, you have a film to show, so you want to present the film details markup (don't copy this over yet):

```html
<div className="film-detail is-hydrated">
  <figure className="film-backdrop">
    <img src={backdropUrl} alt="" />
    <h1 className="film-title">{props.film.title}</h1>
  </figure>

  <div className="film-meta">
    <h2 className="film-tagline">{props.film.tagline}</h2>
    <p className="film-detail-overview">
      <img src={posterUrl} className="film-detail-poster" alt={props.film.title} />
      {props.film.overview}
    </p>
  </div>
</div>
```

- Your task here is to conditionally assign the film details block of markup to the `details` variable if there is a current `id`.
  - If there is not a current `id`, instead render the JSX for the empty case.
- You still want to keep your `section-title`, which isn't part of this conditional.
  - Therefore, the `return` statement of your `FilmDetails` function should finally look like this:

```html
return (
  <div className="film-details">
    <h1 className="section-title">Details</h1>
    {details}
  </div>
)
```


## Taking It Further

Here are some optional things you can do to deepen your knowledge and take this app further:

- Refactor `Fave` into a functional component.
- Move the filters into a `FilmListingFilter` component.
- Implement client-side routing to show multiple pages of films.
- Go through the CSS and see how the app is styled (it uses both flexbox and CSS Grid).
- Add a text area for a review to each film detail and save that on the film object.
- Show an icon in `FilmListing` for all films with reviews.
- Show the `fave` state of a film on `FilmDetails`.
- Add any other features you can think of!
