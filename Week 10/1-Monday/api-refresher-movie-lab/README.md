
| Title | Type | Duration | Author |
| -- | -- | -- | -- |
| API Refresher | Lab | 1:00 | Rachel Moskowitz (adapted from SEI) |

# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) APIs: A Refresher Lab

## Intro

It's time for a little refresher on making AJAX calls to a popular API: [OMDb](http://www.omdbapi.com/).

<img src="https://i.imgur.com/XIbnaV8.jpg">

## Set Up

Browse [here](http://www.omdbapi.com/apikey.aspx) to obtain an API key to access the OMDb API. Be sure to select the "FREE" account type, which includes 1,000 daily calls to the API.

The end point you're hitting is:

`http://www.omdbapi.com/?s=<SEARCH_TERM_HERE>&apikey=<API_KEY_HERE>`

## Requirements

**All layout and styling for this lab is up to you.**

The overall requirement of this lab is to create a single-page app (SPA) that uses `fetch` or `axios` to consume the OMDb API and display the results.

Implement the following:

- A form to search for a movie based on its title.

- When the form is submitted, the user should see a list of movies matching the search.

- For each movie in the search results list, the user should see its **title** and **release year**.

## Bonus

- If no movies match the search, the user should see a `No movies match the title of: <insert search title here>` message.

- Make the SPA look cool.

## Hint

- Consider using `async`/`await` to make `fetch` or `axios` more concise and synchronous.
