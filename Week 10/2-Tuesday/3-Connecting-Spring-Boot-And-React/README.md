---
title: Connecting Spring Boot and React
type: lesson
duration: “1:55”
creator: Casey Harding
---

# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) Connecting Spring Boot and React

### LEARNING OBJECTIVES

*After this lesson, you will be able to:*
- Take a bootstrapped Spring Boot application and expose it as an API.
- Use a front end React application to receive and display data from a Spring Boot API.
- Explain how routing to a back end API works.
- Describe CORS and correct configuration.

### LESSON GUIDE

| TIMING  | TYPE  | TOPIC  |
|:-:|---|---|
| 10 min | Opening         | Discuss lesson objectives |
| 5 min  | Introduction    | Intro to routing |
| 15 min | Introduction    | Connecting React to Spring Boot |
| 20 min | Independent Practice | Initial Spring Boot route setup |
| 20 min | Independent Practice | Initial create-react-app scaffolding |
| 20 min | Independent Practice | Add an additional route |
| 15 min | Guided Practice | CORS configuration |
| 10 min | Conclusion      | Review / Recap |

## Opening (10 min)

In this lesson we’ll explore what a back-end API is and how to expose it and consume it.

### First Things First: Reviewing APIs

An API (Application Protocol Interface) is a much-too-fancy way of saying `something that responds to a request with data`.

> Check: Can someone explain the MVC concept?

<details>

<summary>MVC is a design pattern that is...</summary>

...used to separate an application's concerns.

Model - Model represents an object or JAVA POJO carrying data. It can also have logic to update controller if its data changes.

View - View represents the visualization of the data that model contains.

Controller - Controller acts on both model and view. It controls the data flow into model object and updates the view whenever data changes. It keeps view and model separate.

</details>

Let's explore this concept a bit further with an example. Let's say we're creating an app that lists the most sold books on Amazon.

A user clicks a button which links to a route. To simplify things, we will say that no data is being transmitted and the button doesn’t actually do anything… yet. The user clicks a button that sends a GET request to `localhost:3000/api/books`. In your controller, you have a method that is listening to the route `/api/books` and waiting for a GET request. Your application sends a request which is 'caught' by the controller. In the controller, your method then sends the packet to a model. From there, the model performs a query on the database and sends data back to the controller, which then responds to the view, and the entire system then sits and waits for the next button click.

In the end, this is what an API is: an endpoint sitting and waiting for a request to come in.

-------

## Intro to Routing (5 min)

> Sidebar: The same way you route your controller to your model is the way you route your front end React application to your back end Spring Boot application.

The concept of routing is one of the few times that a technical term explains almost precisely what it is doing.

When you sent your request to `localhost:3000/api/spring-react`, your computer, internally, sent a packet (a collection of zeroes and ones) to an address in memory that it associated with `localhost:3000/api/spring-react`, which, when using an MVC framework, is a controller that contains a number of methods. When the packet reached its destination, it is then, based on what method in the controller is handling the route, `routed` to the next destination: the model. From there, the packet triggers a database query (or, in our case, since we were just sending a `health check`, the controller simply responded with a `200` status (or whatever status you or the api developer designed) and, typically, responds with information of its own.

This concept can be as simple as our example above, or can be scaled up to handle the 1 million or so queries a second that Facebook’s API handles.

-----

## Connecting React to Spring Boot (15 min)

But how does this work when you are not linking one file on a computer to another file on the same computer?!

Along with that, what happens when you are hitting an endpoint miles away, or when, in our example, you are using two entirely different programming languages?

The answer: it works the same exact way! (Well, not entirely, but that is a conversation for a different lesson).

When you go to your browser and type in `https://www.google.com`, your computer goes to your local DNS (Domain Name System) which turns those human readable words into machine readable words (something like 8.8.8.8 <— completely made up!). Think of the DNS as a phone book. It contains the name and the associated `number` to connect to.

Your little packet of information goes to the DNS and is `routed` to the correct server, which has a controller set up and listening for requests. When it receives your request, it routes your request to the associated model, which in turn responds with a number of files (HTML, CSS, JavaScript, a few SVG images, what have you). The controller receives those, routes those back to your computer, which is patiently (if only humans were as patient as computers!), waiting for a response. Your computer receives both a 200 response ("everything is ok! I worked!") and the files. From there your, front end displays the Google SVG image of the day, an HTML input search bar, associated JavaScript methods for the event handlers, and some basic CSS to make the whole think look decent.

<details>

<summary>Check: Where does React fit into the MVC paradigm?</summary>

React is the `view`. It is only concerned with displaying information, taking user input and, yes, `routing` it to the appropriate place.

</details>

As we learned in previous lessons, React does a lot of really interesting things under the hood. But, still, React, at heart, only cares about displaying data and sending requests to the website’s back end API.

Knowing this, we can understand that Spring Boot is **both the model as well as the controller**. In the end, you are really doing the exact same thing you were doing when you set up your Spring Boot Spotify backend and when you set up your initial `create-react-app` counter application, only now, instead of routing internally, you’re going to be routing to separate folders. With that knowledge, you will be able to route to separate sites, languages, countries, and worlds!

When NASA wants the Curiosity Rover to pick up a sample of Martian dirt, what do you think they’re doing? Sending a request to the Rover’s `server` which then gets the scooper in action.

------

## Exercise: Initial Spring Boot route setup (20 min)

You can do this all on your own now!

With a partner, bootstrap a Spring Boot backend with one route that listens on `/api/books` and responds with an array of five books.

For a refresher on Spring-Boot check out this [Example](https://git.generalassemb.ly/sureshmelvinsigera/AMEX/tree/master/Week5/Lessons/4-Thursday/4-Spring-Boot-Overview-Lesson#boostrap-the-app).

> Take 15 minutes on the exercise and then we'll debrief for 5 minutes as a class.

-----

## Exercise: Initial `create-react-app` Scaffolding (20 min)

When you are finished with Spring work, `cd` to the root of your folder and run `create-react-app client`. Then switch places with your partner and have the other person build one component that has a button that, when clicked, sends a GET request to `localhost:3000/api/books` and stores the response in an array in state. I recommend using `axios` to send the request. Axios is a modern JavaScript library that simplifies the process of making network calls. Let's import the axios NPM package and take a look!

Easy-peasy, right?

...wait a second, you have everything linked up correctly, your server is running, your react app is running, you're going to `http://localhost:8080/api/books` and then...CORS error?

Let's get this one fixed so that we can start to test our connection!

## CORS (15 minutes)

"CORS, or 'Cross-Origin Resource Sharing', is a mechanism that uses additional HTTP headers to tell a browser to let a web application running at one origin (domain) have permission to access selected resources from a server at a different origin.

A web application executes a cross-origin HTTP request when it requests a resource that has a different origin (domain, protocol, and port) than its own origin. For security reasons, browsers restrict cross-origin HTTP requests initiated from within scripts."

>[Source](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) <-- click here for a plethora of information.

So, what does this all mean? For safety, the web blocks requests from different origins by default. Rather than being 'exposed', they close them off. It would be like if your favorite restaurant had its doors locked all day and you had to get a special key to unlock it and get in.

### CORS configuration

So, the base idea is that our Spring back end receives a request from our React front end and says `React? Who is React?` and blocks the request. So we've got to let the Spring back end know that we know who React is and that they're generally a pretty nice person.

Thanks to the magic of Spring Boot and annotations all we need to do is go to our books controller and add in:

```java
@CrossOrigin(origins = "http://localhost:3000")
```

right below our `@GetMapping("/api/books")` annotation.

------
## Finish off the React front end

Now, back in React, in your render() function, map over the returned array (after there are values to display, of course!) and print out the contents. Styling will be very much still a work in progress - and that's a-okay!

----

## Exercise: Add an additional route (20 min)

Now, add another route of your choosing. It could be `/api/songs`, `/api/shows`, whatever you want, and create a separate controller in your Spring Boot back end, a separate component in your React front end, and connect the two and print out the response.

> Take 15 minutes on the exercise and then we'll debrief for 5 minutes as a class.

------

## Conclusion (10 minutes)

With a partner, come up with an "Explain it like I'm 5" answer for these questions:

- What is an API?
- What is a high level explanation of routing?
- Explain how MVC works in the context of React.
- Describe how routing to a back end API works.
- Describe what CORS errors are and how to avoid them.
