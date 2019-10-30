---
title: React Spring Boot
type: Lab
duration: "3:00"
creator:
    name: Casey Harding
---

# Build a Fullstack App with React

In this lab, we'll start with some code-along activities:

- Use `axios` to make API calls
- Use `create-react-app` to proxy a development server
- Create data within React
- View data within React

Then, you'll have some time to independently finish the application.

------

## Start up

We are going to add a React UI to the existing API living in `/spring-boot-monolith`. Let's fire up the starter API:

Open up the project in IntelliJ and click the green `run` button. **Note, if you don't have the code anymore feel free to clone the starter code.**

All of our API's data will be available at [localhost:8080](http://localhost:8080).

-----

## Creating the UI React

Now that our API is running, we'll use the `create-react-app` tool to bootstrap a fresh React UI. `cd` into the root directory and run:

```bash
$ create-react-app courses

$ cd courses

$ code .
```

We are going to use our Courses application to keep track of our...courses. First, we'll need to create our new `components` directory:

```bash
$ mkdir src/components
```

Next, we'll need a `CoursesList` "wrapper" component:

```bash
$ touch src/components/CoursesList.js
```

Let's set up this `CoursesList` wrapper component with an empty list of `courses` on its state. We'll also drop in a basic `render()` method with some placeholder text:

```jsx
import React, {Component} from 'react'

class CoursesList extends Component {
	state = {
		courses: []
	}

	render() {
	    return (
	        <div>
	            <h1>Courses Board</h1>
	        </div>
	    )
	}
}

export default CoursesList
```

... and then we'll mount our `CourseList` in `App.js`:

```jsx
import React, { Component } from 'react'
import CourseList from './components/CourseList'

class App extends Component {
  render() {
    return (
      <div>
        <CourseList />
      </div>
    )
  }
}

export default App
```

### Add the `componentWillMount()` method:

Just like `render()`, `componentWillMount()` will be called by React every time we mount a new component. By default, `componentWillMount()` is an empty method on the `Component` class, but we have the ability to `override` this functionality within each of our components. Let's drop in our own empty `componentWillMount()` and add our own custom functionality. Above the `render()` method, let's add this block:

```jsx
...
componentWillMount() {

}
...
```

Now any code that we write inside of this block will be triggered before the component mounts!

Let's make our first API call to fetch some data and set up the initial state! To manage our API calls, we will use a new tool called `axios`. `Axios` is a great, modern JavaScript library that simplifies the process of making network calls. It supports Promises out of the box, and includes additional support for great new JavaScript features such as `async / await`. Let's import the `axios` NPM package and take a look!

```bash
$ npm i axios
```

Now we'll need to import `axios` into our `CourseList` component:

```jsx
import axios from 'axios'
...
```

Now we'll fill in our `componentWillMount()` function body to make a `GET` request to the `/course/list` endpoint on our API. This endpoint will hand us all of the existing courses, which we will then set up as our initial `state`.

> Typically you will have documentation set up that lists the endpoints available. Since this is such a small program, I simply went to the courses controller in the Spring-boot code and looked for what endpoints were handled.

```jsx
componentWillMount() {

    axios.get('http://localhost:8080/course/list')
        .then((response) => {
            this.setState({courses: response.data})
        })
        .catch((error) => {
            console.log('Error retrieving courses!')
            console.log(error)
        })

}
```

> Note: `axios.get()` here will return a Promise, which we we can manage with `.then()` and `.catch()` blocks.

Let's check our work in the React DevTools. Our `state` should now contain a list of `courses`.

### Oh no!!!

It didn't work. It looks like we weren't able to access our `courses-api` on port `8080`.

This is actually a good thing! Even though both servers are running on the same `localhost`, they have been assigned separate ports. The concept of [Cross-Origin Resource Sharing (CORS)](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) dictates that we should not be able to reach across ports without explicitly enabling this functionality.

Fortunately, the `create-react-app` developers are very familiar with this limitation and how it might affect our development environment. They created a very simple way of navigating this problem that will only run in our development environment. Once our app is pushed to production, all of the safety of CORS protection will come right back.

The very simple solution here is to implement a "proxy" that will trick our React dev server into thinking our API lives on the same origin. All we have to do to enable this proxy is to add one extra line to our `package.json` file:

```json
...
  "proxy": "http://localhost:8080",
...
```

Now if we hard-restart our dev server, we should see everything work!

### Oh no AGAIN!

It's still not working...

Remember that we are now "tricking" our dev server into thinking the `/course/list` route is on `localhost:3000`. This means that we will need to update our `http://localhost:8080/course/list` URL to look like a local, relative URL. Let's give this another try with a simpler `/course/list` URL and see what happens:

```jsx
componentWillMount() {
    axios.get('/course/list')
        .then((response) => {
            console.log(response)
            this.setState({ courses: response.data })
        })
        .catch((error) => {
            console.log('Error retrieving ideas!')
            console.log(error)
        })
}
```

Looks good! Let's check out our React Dev Tools. If everything is wired up, we will now see that our initial state contains an array of `courses`!

-------

## `async / await`

This code works well and we've accomplished our task, but it requires that we use `.then()` and `.catch()` blocks to handle our `axios Promises`. This syntax is reasonably clean, but the `create-react-app` Webpack set-up gives us immediate, safe access to even better syntax.

Let's use the new `async / await` instead. This syntax allows us to mark asynchronous functions as `async`. Once we have declared that a function is `async`, we can "pause" any line of code that triggers asynchronous functionality using the `await` keyword. Let's refactor our `componentWillMount()` function to use this new, cleaner syntax:

```jsx
async componentWillMount() {
    try {
        const response = await axios.get('/course/list')
        this.setState({ courses: response.data })
    } catch (error) {
        console.log('Error retrieving courses!')
        console.log(error)
    }
}
```

-----

## Displaying the Courses

Now that we have our initial state set up, we can begin displaying our `Courses`. Our `CourseList` will want to `map()` through each `course` from our state and create a "presentational" component for each.

Let's start by creating our `Course` presentational component:

```bash
$ touch src/components/Course.js
```

Next, we'll set up our basic structure. The component will display a `name` and `code` for each `Course`:

```jsx
import React, {Component} from 'react'

class Course extends Component {

    render() {
        return (
            <div>
                <div>{this.props.name}</div>
                <div>{this.props.code}</div>
                <hr/>
            </div>
        )
    }

}

export default Course
```

Now our `CourseList` should map through the `courses` on the `state` and mount a `Course` presentational component for each:

```jsx
import React, { Component } from 'react'
import axios from 'axios'

import Course from './Course'

class CourseList extends Component {

    state = {
        courses: []
    }

    async componentWillMount() {
        try {
            const response = await axios.get('/course/list')
            this.setState({ courses: response.data })
        } catch (error) {
            console.log('Error retrieving ideas!')
        }
    }

    render() {
        return (
            <div>
                <h1>Courses</h1>
                {
                    this.state.courses.map((course, index) => {
                        return (
                            <Course
                                {...course}
                                key={index} />
                        )                    })
                }
            </div>
        )
    }
}

export default CourseList
```

> The spread operator will pass all attributes of a `Course` as individual `props`. In other words, each `Course` will receive `name` and `code` as individual `props`, even though we didn't pass them individually.

------

## Creating a New Course

Now we'll add a new `course` form to the top of page. To keep things clean, we'll create the form as a new component.

Let's create `CourseNewForm.js` with some basic structure:

```bash
$ touch src/components/CourseNewForm.js
```

```jsx
import React, { Component } from 'react'

class CourseNewForm extends Component {

    state = {
        newCourse: {}
    }

    handleChange = (event) => {
        const attributeToChange = event.target.name
        const newValue = event.target.value

        const updatedNewCourse = { ...this.state.newCourse }
        updatedNewCourse[attributeToChange] = newValue
        this.setState({ newCourse: updatedNewCourse })
    }

    render() {
        return (
            <div>
                <h2>Create New Course</h2>

                <form>
                    <div>
                        <label htmlFor="title">Name</label>
                        <input
                            name="name"
                            type="text"
                            onChange={this.handleChange} />
                    </div>

                    <div>
                        <label htmlFor="description">Code</label>
                        <input
                            name="code"
                            type="text"
                            onChange={this.handleChange} />
                    </div>

                    <div>
                        <input type="submit" value="Create Course"/>
                    </div>
                </form>

                <hr />
                <hr />
            </div>
        )

    }

}

export default CourseNewForm
```

We'll also need to mount the form in our `CourseList.js`:

```jsx
...
import CourseNewForm from './CourseNewForm'

...
    render() {
        return (
            <div>
                <h1>Courses</h1>
                <CourseNewForm />
                {
                    this.state.courses.map((course, index) => {
                        return (
                            <Course
                                {...course}
                                key={index} />
                        )                    })
                }
            </div>
        )
    }
...
```

The form is set up to manage its own `state`, but we have not told it what to do `onSubmit`. This will be similar to our delete functionality. In order, we'll want our form to:

1. Create the new `Course` in the database
1. Add the `Course` to the parent `CourseList` `state`, once we're sure it's saved in the database

Let's write a `createCourse()` function in `CourseList` to handle this:

```jsx
...
createCourse = async (course, index) => {
    try {
        const newCourseResponse = await axios.post(`/course`, course)

        const updatedCoursesList = [...this.state.courses]
        updatedCoursesList.push(newCourseResponse.data)
        this.setState({courses: updatedCoursesList})

    } catch(error) {
        console.log('Error creating new Course!')
        console.log(error)
    }
}
...
```

... and then we'll pass the function to our `CourseNewForm`:

```jsx
...
<CourseNewForm createCourse={this.createCourse}/>
...
```

Now that the function has been passed down, we can call this function with our new `course` data when the form is submitted:

```jsx
...

handleSubmit = (event) => {
    event.preventDefault()

    this.props.createCourse(this.state.newCourse)
}

...

render() {
    return (
        <div>
            <h2>Create New Course</h2>

            <form onSubmit={this.handleSubmit}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input
                        name="name"
                        type="text"
                        onChange={this.handleChange} />
                </div>

                <div>
                    <label htmlFor="description">Code</label>
                    <input
                        name="code"
                        type="text"
                        onChange={this.handleChange} />
                </div>

                <div>
                    <input type="submit" value="Create Course"/>
                </div>
            </form>

            <hr />
            <hr />
        </div>
    )
}
```

> We'll wrap our `this.props.createCourse()` call in a `handleSubmit()` function so that we can `preventDefault()` functionality on the submit event.

Let's test it out... the new `course` shows up!

## You Do

Now it's time for you to work through the rest. There are two things that you're going to need to update:

1. Update the Spring Boot back-end to handle updating and deleting courses.
1. Update the React front end to connect to the correct routes!

Feel free to work alone or in pairs, but try to do both the front end and back end.
