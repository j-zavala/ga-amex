---
title: React Recipes
type: Lab
duration: "1:30"
creator:
    name: Rachel Moskowitz (adapted from NYC-SEI)
---


# React Recipes Lab

![LOVE REACT](./assets/love-react.jpg)

To get started with this lab:

- Run `npm install`.
- Run `npm start`.

In the directory, you'll find:

- A mostly empty React application.
- An `index.html` (in `/public/index.html`) that has a recipe page written in HTML.
- A JSON array of recipes in `/src/data/recipes.json`.

Your task is to:

- Take the `index.html` and separate it out into components.
- Use the data in the recipes to populate those components.

Here are guided steps:

## 1. Move the hard-coded HTML into `App.js`.

Cut and paste the HTML in the `/public/index.html` file into the `App.js` component as JSX. Keep in mind that you'll have to modify the JSX a little bit, because HTML and JSX are not the same!

## 2. Consider your components.

Take a look at the recipe page and think about how you might want to break up one huge component into separate components.

You might have components for `Recipe`, `RecipeHeader`, `RecipeInstructions`, and `Footer`. If you want to add more, that's OK! React encourages modularity and reusability.

## 3. Separate JSX into components.

Separate the single component into the separate components. Keep the hard-coded data about the chicken tikka masala in the JSX for now.

## 4. Pass the data into components Using props.

Instead of hard-coding all of the data, try passing it in as props.

Pass the data from the `recipe` object in the `App.js` component into the child components by setting prop values.
