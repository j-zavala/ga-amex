# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) AJAX and APIs Lab

| Title | Type | Duration | Author |
| -- | -- | -- | -- |
| AJAX and APIs | Lab | 1:00 | Sonyl Nagale (adapted from SEI) |

## `GET` From the RandomUser API

Now it's your turn to use the [RandomUser API](https://randomuser.me/) to construct an application to display biographical data on a random "person."

## Requirements:

* Update the **`makeCall()`** function to make an API call using `fetch` for a random user that passed the results to the `getData()` function.
* Update the **`getData()`** function to map the JSON keys to the corresponding variables.
* Update the **`addEventListeners()`** function to display the data that corresponds with that icon.

### Here's the Pseudocode for This Assignment:

```
When the page is refreshed.
  Make an AJAX call (using fetch()) to the RandomUser API for a random user.
  Update the page with the new info.
  Make an AJAX call, indicating the proper URL, type, and data type.
    Indicate what should be done after a successful API call.
    Indicate what should be done after a failed API call.
When the "Another" button is clicked.
  Trigger the same functionality as on page refresh to populate the fields without causing a hard page refresh.
```
