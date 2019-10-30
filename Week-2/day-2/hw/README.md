![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)

| Title | Type | Duration | Author |
| -- | -- | -- | -- |
| Iterating an Array | Lab / HW | 0:45 | Sonyl Nagale (adapted from SEI-Connected Classroom) |


# Iterating Over an Array With Loops

We can use a `for` loop to iterate over all of the items in an array and print them out:

`const kitchenSink = ["dirty spoon", "sponge", "plate with gunk", "soap", "water"];`

We know that, in order to access an item in the array, we have to use the name of the array and square brackets with the index number. To access the first item in the array, `kitchenSink`, we would write:

`kitchenSink[0]`

If we want to print out all of the items, we can make a `for` loop that will increase that index number for us programmatically:

```js
for (let i = 0; i < kitchenSink.length; i ++) {
  console.log("This is in my sink: " + kitchenSink[i]);
}
```

**Output:**

```js
This is in my sink: dirty spoon
This is in my sink: sponge
This is in my sink: plate with gunk
This is in my sink: soap
This is in my sink: water
```

What if I only want to print _every other_ element? There are a few ways to do this, but let's focus on adjusting the incrementation in our control panel.

```js
for (let i = 0; i < kitchenSink.length; i += 2) {
  console.log("This is in my sink: " + kitchenSink[i]);
}
```
> Note: In the third section of our `for` loop control panel, we are reassigning the `i` variable and increasing its value by `2` each time.

>Output:
```
This is in my sink: dirty spoon
This is in my sink: plate with gunk
This is in my sink: water
```

Only the items with the index `0`, `2`, and `4` were printed.

### Let's Practice

With the following array:

```js
const drSeuss = ["Cat in the Hat", "Sam I am", "Grinch","Thing One", "Thing Two", "Cindy Loo Who", "JoJo McDodd"];
```

* `console.log()` all of the elements in the array.
* `console.log()` the odd-numbered index items in the array.
* `console.log()` the index number and the item of every odd-numbered index item (on separate lines).

---

## Using Conditionals to Select Elements in Array

We can use **conditionals** to select elements in an array.

- Let's start with the condition of the index number. We want to print the items in the array, but only if the index number is even:

```js
const foodSelections = ["pizza", "apple", "seaweed", "artichoke", "tea", "ice cream"];

for (let i = 0; i < foodSelections.length; i ++) {
  if (i % 2 === 0) {
    console.log(foodSelections[i]);
  }
};
```

- We used a modulus, `%`, to see that the remainder of an index divided by `2` would return `0` (meaning that it's an even number).

> Output:

```
pizza
seaweed
tea
```

- We can add **multiple conditions** to select array elements.

- Let's say we want to print the items in the array, but only if the index number is even **or `5`**:

```js
const foodSelections = ["pizza", "apple", "seaweed", "artichoke", "tea", "ice cream"];

for (let i = 0; i < foodSelections.length; i ++) {
  if ((i === 5) || (i % 2 === 0)) {
    console.log(foodSelections[i]);
  }
};
```

- We used `||` to set an **or** condition.

> Output:

```
pizza
seaweed
tea
ice cream
```

### Guided Practice

With the following array...

```js
const looneyTunesChars = ["Bugs Bunny", "Daffy Duck", "Tweety", "Sylvester", "Elmer Fudd", "Porky Pig", "Taz"];
```

* `console.log()` the even-numbered items in the array using a conditional statement.
* `console.log()` the even-numbered items in the array and the item with the index of `3` using a conditional statement.
* `console.log()` the odd-numbered index items in the array using a conditional statement.
