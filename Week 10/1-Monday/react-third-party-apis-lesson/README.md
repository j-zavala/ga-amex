---
title: React and Third-Party APIs
type: lesson
duration: "1:30"
creator:
    name: Alex Wasson
---

# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) React and Third-Party APIs

### Learning Objectives

*After this lesson, students will be able to:*

- Define third-party APIs and explain why an application might interact with one.
- Integrate API calls into regular component methods in React and life-cycle hooks, and decide which is appropriate for specific circumstances.
- Write method calls to bring data from (and post data to) a third-party API.

### Lesson Guide

| TIMING  | TYPE  | TOPIC  |
|:-:|---|---|
| 5 min  | Opening         | Lesson Objectives |
| 20 min | Discussion      | Basic API Access in React |
| 20 min | Guided Practice | Practicing API Data Integration and the React Life Cycle |
| 20 min | Guided Practice | Calling an API to Retrieve Initial Data |
| 20 min | Exercise        | Finishing the Application |
| 5 min  | Conclusion      | Review/Recap |

## Opening (2 min)

In this lesson, we'll learn how to integrate API calls and their responses into React and its life cycle.

----

## Basic API Access in React (20 min)

<!-- Given a starting application frame, students will implement an API call on a user interaction, such as a button press, and update their application with the response -->

We'll ease into using APIs with React by finishing a simple application that retrieves and displays a random picture of a dog when a user clicks a button. The dog picture URLs are hosted by a remote service and available for access through an API, which is documented [here](https://dog.ceo/dog-api/documentation/).

The application is already structured and styled; the key remaining work is writing the `onClick()` method for the button. This method should make a fetch call using the parameters specified in the API documentation and then update the application's state appropriately to display the dog picture once it has been retrieved.

Most APIs designed for access by JavaScript applications will communicate in JSON. When you get a response from an API, you'll typically need to convert the response from JSON to a standard JavaScript object.

### Discussion: Good Docs, Bad Docs

Because most APIs are returning objects (in the form of JSON), it's important to be aware of the structure of the object that you're receiving. Good API documentation will provide information on that structure, but not all APIs are well-documented, and even those that are don't always have documentation that's up to date. To deal with this, a good practice when retrieving data from an API for the first time is to `console.log()` the object and look over its structure yourself.

Let's review some examples. With a partner, check out these two API docs:

- [Good docs](https://developer.nytimes.com/docs/articlesearch-product/1/overview)
- [Bad docs](possible bad example: https://www.perforce.com/manuals/v15.1/p4java-javadoc/index.html)

Discuss the following questions:

- Why is the good example helpful?
- What are some specific best practices that make it good?
- What are the bad docs lacking?
- What might the consequences of this be?

### Let's Get Started

1. Download the code in the `starter-code` folder.
2. Run `npm install`.
3. Update the app component's `retrieveDogPic()` method so that it will make the appropriate fetch call and update the component's state accordingly.

When you're done, take a look around the starter code. Think through the following questions:
- How could you update your component to give the user an indication that a request is in progress?
- What does your application do if it can't connect to the API? What might you make it do to provide a better user experience?
- The dog picture service provides images in a variety of aspect ratios and sizes, which results in the component changing its size every time an image is retrieved. What might you do to change that?

----

## Practicing API Data Integration and the React Life Cycle (20 min)

<!-- Discussion and lecture on which life-cycle hooks are appropriate for API calls and for what reasons, discussing, among other things, how to be sure new API data updates the application and how to avoid unnecessary re-renders. -->

### Our Challenge

Your new "Dog Pics" application is nice, but retrieving API data and updating the state based on user input is a fairly simple use case for API interaction in React. Let's expand our application to demonstrate some more complex use cases.

Because users like choice, rather than displaying a picture of just any dog, let's provide them with a choice between three different breeds. 

A simple implementation could select three breeds to always use and hardcode them, but let's make things more interesting by having the API provide us with three random options. Once the user selects a breed, the application will work much like the previous version: retrieving the URL for a dog picture and updating the application state to use that URL. The only difference is that, rather than making a call for a completely random dog picture, we'll retrieve a random image of the specified breed.

### Demo: Breaking Down the Problem

The initial call to retrieve the three random breeds should be part of the operation of the component, rather than initiated by user interaction. You'll need to structure your component so that it can build and render without the breed data, and you'll need to decide at what point in the component life cycle the API should be called.

To accomplish the first goal, be careful of how you structure any references to the relevant data and how you structure your component's initial state in the class constructor. In the prebuilt section of our application, the breed data (`this.state.initialBreeds`) is expected to be an array and is only referenced in one place: a `map()` method call.

What if we assign `this.state.initialBreeds`, a data type that doesn't support the `map()` method? Our application would crash; we avoid this by initializing `this.state.initialBreeds` as an empty array. A `map()` call on an empty array will return an empty array, and React easily handles empty arrays passed into the JSX structure, so the lack of data won't cause a problem.

> **Knowledge Check**: Which life-cycle hook should we use here?

<details>
	<summary>Answer:</summary>

Because the component cannot accomplish anything until it has the breed data, we should put the API call at the earliest point in the component's life cycle: `componentDidMount`.

</details>

When the component first mounts, `this.state.initialBreeds` is initialized as an empty array. Next, the component will make a call for the breed data it needs, and then, after that promise is resolved and the component state is updated, the component will re-render and display the relevant buttons.

### Finding Your Data

Take a minute to read through the API documentation. **How might we retrieve three random breeds?**

<details>
	<summary>Answer:</summary>

Trick question! There is no documented way to retrieve three random breeds. 

So, what's our backup plan? You should discover that the API has an internal logic that allows you to make assumptions about its capabilities that you can then check.

On [this page](https://dog.ceo/dog-api/documentation/), you'll see that you can find all breeds at https://dog.ceo/api/breeds/list/all. The `/all` seems to indicate that there are other endpoints: [This documentation](https://dog.ceo/dog-api/documentation/random) lets us know that `/random` is an endpoint and that we can add a further segment to the `/random` path to indicate how many random results we want — meaning, for your purpose, something like `/random/3`.

</details>

Because there is no documentation about retrieving random breeds, there's no guarantee it will work, but you can't be sure without checking, so create your theoretical URL, plug it into a browser, and see what happens. Take the URL for retrieving all breeds (https://dog.ceo/api/breeds/list/all), replace the `/all` segment with `/random/3`, and you'll get https://dog.ceo/api/breeds/list/random/3. When you copy and paste it into a browser, you should see JSON with a message property containing an array of three dog breed names.

----

## Calling An API to Retrieve Initial Data (20 min)

Now we'll put all of this together. First, somewhere in our component's class, traditionally right below the `constructor`, we'll define our `componentDidMount()` method:

```js
componentDidMount() {
}
```

Within that method, we'll make a fetch call to the endpoint we found and process the data from JSON into an object:

```js
componentDidMount() {
  fetch('https://dog.ceo/api/breeds/list/random/3')
    .then(res => res.json())
}
```

> **Knowledge Check**: Once your application has the object, where do you think it should put it? If you don't know the structure of the object, how could you figure it out?

Finally, we'll overwrite the `initialBreeds` array in our component's state with the `message` array in our response object. Let's also add simple error handling for our fetch call:

```js
componentDidMount() {
  fetch('https://dog.ceo/api/breeds/list/random/3')
    .then(res => res.json())
    .then(data => this.setState({ initialBreeds: data.message }))
    .catch(err => console.log(err));
}
```

## Finishing the Application (20 min)

We now have a component that retrieves three random breed names as soon as it mounts. We just need to update our existing `onClick()` method to take advantage of our changes.

### You Do: Modifying the Existing Application

You have an existing method for making an API call and updating the component's state when a button is clicked. You will need to modify that method to:
1. Recognize which button was clicked so that the method logic can take the selected breed into account.
2. Update the URL of the method's API call to retrieve a random image of a dog of the breed the user selected.

Make sure your final method still correctly updates the component state so that a dog picture loads.

Take a few minutes to work on that now.

Once you finish, consider the following questions (and implement them if you have time!):

- How would you create a refresh button that allows users to fetch three new breeds?
- Rather than buttons for three breeds, could you make a select box that allows a user to select from any breed?
- The button titles don't look very good. There isn't a great solution for fixing the lack of spacing for dogs with breed names that have two or more words (in a professional application, you could try to work with the API provider for that), but can you at least modify them to be upper case?

> Check out the `solution-code` folder for answers.

## A Note on Providing Data to APIs

In the application we created in this lesson, we provided data to an API with a URL parameter. Your application's interaction with the API was fairly simple, but it did go both ways: Your application retrieved generic information from the API, stored some data from that information, and provided that specific selection back to the API in its follow-up request.

This was, however, a basic introduction to communicating with APIs with React and JavaScript, and most of the complexity that wasn't covered here will come from providing data to an API. Many APIs require applications interacting with them to **POST** an object containing a key before they will send down data. Some APIs, such as an AWS bucket, might exist for the purpose of storing data, so understanding how to send data with be essential for effectively interacting with them.

Most of this complexity will come from the various advanced features of `fetch()`, so [the MDN documentation on using `fetch()`](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) is a great resource. If you feel bold, skim the whole document to get an idea of what features you might need in the future. If you don't feel up to that, at least look at:
- [Supplying Request Options](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch#Supplying_request_options)
- [Uploading JSON Data](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch#Uploading_JSON_data)
- [Headers](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch#Headers)

## Conclusion (5 min)

- What is an API and why might a web application connect to one?
- What are some specific issues you need to consider when accessing an API in React?
- What are some keys for structuring a React application to work before API data has come in?
