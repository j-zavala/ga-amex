| Title | Type | Duration | Author |
| -- | -- | -- | -- |
| React Deployment | Lesson | 1:25 | Casey Harding |

# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) React Deployment

## Learning Objectives

*After this lesson, students will be able to:*

- Explain the difference between server-side and client-side rendering.
- Deploy a React application to Heroku and AWS.

## Lesson Guide

| TIMING  | TYPE  | TOPIC  |
|:-:|---|---|
| 5 min  | Opening  | Lesson Objectives |
| 10 min | Opening  | Server-Side vs. Client-Side Rendering  |
| 15 min | Exercise | Setting Up the React Front-End |
| 20 min | Demo     | Deploying to Heroku |
| 30 min | Demo     | Deploying to AWS |
| 5 min  | Conclusion | Review/Recap   |

## Introduction (5 min)

If you remember when we first started talking about React, one of the beauties of this library is that you don't have to run to the server every time you want to make a change or navigate around your SPA.

<details>
    <summary>Knowledge Check: What is a SPA?</summary>
    
Single-page application: A website that interacts with the user by dynamically rewriting the current page rather than loading entirely new pages from a server.

</details>

Because of this, however, there are a few more steps involved when we want to deploy a React application. Before we dive into the nitty gritty, let's go over the basics of server-side versus client-side rendering.

-----

## Server-Side vs. Client-Side Rendering (10 min)

Let's take a moment for a quick refresher on the differences between server-side and client-side rendering.

### Server-Side Rendering

Server-side rendering is the most common method for displaying information on screen. It works by converting HTML files on the server into usable information for the browser.

Whenever you visit a website, your browser makes a request to the server that contains the contents of the website. The request usually only takes a few milliseconds, but that ultimately depends on a multitude of factors.

### Client-Side Rendering

Client-side rendering, instead, uses JavaScript to dynamically change a bare-bones HTML template. When you load a client-side-rendered webpage, instead of getting all of the contents of the page, you get an HTML template, which is then filled out by JavaScript asynchronously requesting further data from the server. When you visit a different "page" on the website, you aren't actually retrieving a different page from the server; you're simply swapping out one data set for another. Depending on the size of your site, you may see a dramatic increase in loading speeds.

---

## Setting Up the React Front-End (15 min)

You've done this dance before; brush off your `create-react-app` boots and let's get this SPA bootstrapped! 

Because this lesson is only concerned with deploying, we don't need to do anything beyond running the base level `create-react-app` command. If you want to jazz yours up (and have time to do so), feel free to edit the `App.js` file to say your name, or "Hello, World," or "lorem ipsum!"

---

## Deploying to Heroku (20 min)

Now that our React application is all gravy, let's go through how to get it up and live on the web. We'll be using a service called **Heroku**, but the process is very similar whether you're using DigitalOcean, AWS, Azure, Google Cloud, etc.

First things first, go to [Heroku](https://signup.heroku.com/) and sign up for an account. Next, we're going to want to install the [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli) (because if it can be done in the terminal, then we're going to get it done in the terminal!).

Next, go to the terminal and type:

```bash
heroku --version
```

You should see something that resembles `heroku-cli/6.15.28-6b9662e` printed back. Great! We have a Heroku account, we have the Heroku CLI installed and running, and now it's time to log into Heroku locally. In your terminal, type:

```bash
heroku login
```

Enter your email and password.

Perfect. Now that we're logged in, it's time to create a Git repository (the Heroku CLI requires Git to handle versioning for deployment), push the code, and then deploy (it's nearly that easy, I promise!).

- Go to your browser and navigate to your GitHub page. 
- Click the `repositories` tab and click the green `New` button. 
- Type in a name for your project (I suggest `heroku-test-deploy` or something similar); make sure that the `Initialize this repository with a README` box is unchecked and that the `Add .gitignore:` button has `None` at the end. `create-react-app` took care of the README and the `.gitignore` files. 
- Click the `create` button. 
- On the next screen, you have two blocks of code; the first is to create a new repository, the second is to push an existing repository. Because `create-react-app` created the local repository for us, we're going to copy the two lines of code from the `...or push an existing repository from the command line` code block and, back in our terminal (and making sure we're in the root folder of our project), we're going to paste those lines of code and hit `enter`.

If all goes according to plan, you'll now have your local repository synced with your remote repository.

Now we're moving and grooving! So, we have our remote repository live on GitHub; what we need to do next is create a Heroku remote to which we can push our code. In your terminal, type:

```bash
heroku create -b ***insert url of github repo here***
```

> **Note**: The URL after the `-b` above should be the URL of your GitHub repo, which was in the lines of code you pasted into the terminal previously.

- Type in `git remote` and verify that you have both `origin` as well as `heroku` listed as remote repositories. Got it? Great, now let's make a minor change to the code. 
- Open up your editor and navigate to `src` > `app.js`. Let's delete everything in between the two `<header>` tags. Insert an opening `<p>` tag, type whatever you want here (`Hello, World!`, `lorem ipsum`, `Casey is the best instructor ever`, etc.), then add the closing `</p>` tag. 
- Hit "Save," go to the terminal, `git add .`, `git commit -m 'Heroku deployment'` (or whatever commit message you want), `git push origin master`, and — drum roll — `git push heroku master`. A lot of text should spit out, which is hopefully free of errors. (If there are errors, don't panic! Deployment is always a headache, that's why DevOps people are paid the big bucks.)
- Now it's time for the big reveal! In your terminal, type `heroku open`. Ta da — you're Insta-famous!

And that's about it! You now have a fully built React app deployed on Heroku that you can connect to from anywhere (as long as you're connected to the internet).

----

## Deploying to AWS (30 min)

You didn't think it would be that easy, did you? Now it's time to move up from the minors and into the big league.

### Preparing Your React App

**Before you begin, please remove the `proxy` key from your `package.json` if you're using one.**

### Deploying a React Project With S3

- We first want to make sure our site is as lightweight (aka, as fast) as possible. Thankfully, our helpful friends over at `create-react-app` included a handy script to make this process easy!
- Go to the root of our project and, in the terminal, run `npm run build`. This will create a `build` folder with all of our code [minified](https://en.wikipedia.org/wiki/Minification_(programming)). Take a look around and see what your beautiful code has created!
- Log into your AWS account using the credentials you set up previously. Go to your AWS management console and, in the upper left-hand corner, click on `Services` and scroll down to the `Storage` section.
- Navigate to the S3 service and click `Create Bucket`. Make up a clever name for your new bucket; make sure that the `Region` drop down has `US East (N. Virginia)` selected, then click `Create`.
- Click on the newly created bucket. Within the `Properties`, open the `Static Website Hosting` tab and select `Use this bucket to host a website`.
- Fill in `index.html` for both the index and error documents. By setting `index.html` as the error document, we can allow something like `react-router` to handle routes outside of the root.
- Open the `Permissions` tab, then click the `CORS Configuration` button and make sure you have these settings:

```XML
<?xml version="1.0" encoding="UTF-8"?>
<CORSConfiguration xmlns="http://s3.amazonaws.com/doc/2006-03-01/">
<CORSRule>
    <AllowedOrigin>*</AllowedOrigin>
    <AllowedMethod>GET</AllowedMethod>
</CORSRule>
</CORSConfiguration>
```

- Visit this previous [lesson](https://git.generalassemb.ly/GA-Cognizant/react-redux/tree/master/react-spring-boot-lesson#cors-introduction-5-minutes) for a refresher on CORS.

- Add the contents of your `build` directory to this bucket. This can be done by clicking on the bucket and clicking `Upload` or using the AWS CLI!

That’s it! You can find the URL to your application under the `Static Website Hosting` tab (labeled `Endpoint`). If you get a `403 Forbidden` error, go back to your S3 management console, click on the `Permissions` tab, hit the `Edit` button, and make sure that the `Block all public access` checkbox is unchecked.

[Source](https://medium.com/@omgwtfmarc/deploying-create-react-app-to-s3-or-cloudfront-48dae4ce0af)

------

## Conclusion (5 min)

There will always be headaches when it comes to deployment (again, it's why DevOps people are paid the big bucks) but the React team has taken great pains to make the process as smooth as possible.

**A final note**: AWS has a decent free tier for S3 and EC2 buckets, but that's only until you use a certain amount. Make sure that, after you deploy your project and finish playing around, your buckets are set to `private` so that nobody is randomly accessing your site.
